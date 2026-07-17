from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from accounts.models import User
from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer, AddToCartSerializer, UpdateCartItemSerializer
from products.models import Product


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def cart_view(request):
    """
    Get or create user's cart
    """
    cart, created = Cart.objects.get_or_create(user=request.user)
    
    if request.method == 'GET':
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = AddToCartSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        product_id = serializer.validated_data['product_id']
        quantity = serializer.validated_data.get('quantity', 1)
        
        product = get_object_or_404(Product, id=product_id)
        
        if product.stock < quantity:
            return Response(
                {'error': 'Not enough stock available'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={'quantity': quantity}
        )
        
        if not created:
            cart_item.quantity += quantity
            cart_item.save()
        
        cart_serializer = CartSerializer(cart)
        return Response(cart_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def cart_item_view(request, item_id):
    """
    Update or delete cart item
    """
    cart = get_object_or_404(Cart, user=request.user)
    cart_item = get_object_or_404(CartItem, id=item_id, cart=cart)
    
    if request.method == 'PUT':
        serializer = UpdateCartItemSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        quantity = serializer.validated_data['quantity']
        
        if cart_item.product.stock < quantity:
            return Response(
                {'error': 'Not enough stock available'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        cart_item.quantity = quantity
        cart_item.save()
        
        cart_serializer = CartSerializer(cart)
        return Response(cart_serializer.data)
    
    elif request.method == 'DELETE':
        cart_item.delete()
        cart_serializer = CartSerializer(cart)
        return Response(cart_serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def clear_cart_view(request):
    """
    Clear all items from cart
    """
    cart = get_object_or_404(Cart, user=request.user)
    cart.items.all().delete()
    return Response({'message': 'Cart cleared successfully'})
