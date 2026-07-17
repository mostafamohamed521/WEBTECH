from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from accounts.models import User
from .models import Wishlist, WishlistItem
from .serializers import WishlistSerializer, AddToWishlistSerializer
from products.models import Product


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def wishlist_view(request):
    """
    Get or create user's wishlist
    """
    wishlist, created = Wishlist.objects.get_or_create(user=request.user)
    
    if request.method == 'GET':
        serializer = WishlistSerializer(wishlist)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = AddToWishlistSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        product_id = serializer.validated_data['product_id']
        product = get_object_or_404(Product, id=product_id)
        
        wishlist_item, created = WishlistItem.objects.get_or_create(
            wishlist=wishlist,
            product=product
        )
        
        if not created:
            return Response(
                {'error': 'Product already in wishlist'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        wishlist_serializer = WishlistSerializer(wishlist)
        return Response(wishlist_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_from_wishlist_view(request, item_id):
    """
    Remove item from wishlist
    """
    wishlist = get_object_or_404(Wishlist, user=request.user)
    wishlist_item = get_object_or_404(WishlistItem, id=item_id, wishlist=wishlist)
    wishlist_item.delete()
    
    wishlist_serializer = WishlistSerializer(wishlist)
    return Response(wishlist_serializer.data)
