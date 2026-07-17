from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductListSerializer


class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductListSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)
    total_price = serializers.ReadOnlyField()
    
    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product', 'product_id', 'quantity', 'price', 'total_price']
        read_only_fields = ['id', 'order']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    user = serializers.StringRelatedField(read_only=True)
    
    class Meta:
        model = Order
        fields = ['id', 'user', 'order_number', 'status', 'payment_status', 
                  'subtotal', 'shipping_cost', 'discount', 'total_amount',
                  'shipping_address', 'city', 'phone', 'notes', 'items', 
                  'created_at', 'updated_at']
        read_only_fields = ['id', 'user', 'order_number', 'created_at', 'updated_at']


class CreateOrderSerializer(serializers.Serializer):
    shipping_address = serializers.CharField()
    city = serializers.CharField(max_length=100)
    phone = serializers.CharField(max_length=20)
    notes = serializers.CharField(required=False, allow_blank=True)
