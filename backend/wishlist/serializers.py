from rest_framework import serializers
from .models import Wishlist, WishlistItem
from products.serializers import ProductListSerializer


class WishlistItemSerializer(serializers.ModelSerializer):
    product = ProductListSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = WishlistItem
        fields = ['id', 'wishlist', 'product', 'product_id', 'created_at']
        read_only_fields = ['id', 'wishlist', 'created_at']


class WishlistSerializer(serializers.ModelSerializer):
    items = WishlistItemSerializer(many=True, read_only=True)
    items_count = serializers.ReadOnlyField()
    
    class Meta:
        model = Wishlist
        fields = ['id', 'user', 'items', 'items_count', 'created_at', 'updated_at']
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']


class AddToWishlistSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()
