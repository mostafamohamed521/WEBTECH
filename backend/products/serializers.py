from rest_framework import serializers
from .models import Product, ProductImage, ProductSpecification
from categories.serializers import CategorySerializer
from brands.serializers import BrandSerializer


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'alt_text', 'is_main', 'created_at']
        read_only_fields = ['id', 'created_at']


class ProductSpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpecification
        fields = ['id', 'key', 'value']
        read_only_fields = ['id']


class ProductListSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    final_price = serializers.ReadOnlyField()
    discount_percentage = serializers.ReadOnlyField()
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'price', 'discount_price', 'final_price', 
                  'discount_percentage', 'category', 'brand', 'stock', 'rating', 
                  'reviews_count', 'featured', 'status']
        read_only_fields = ['id']


class ProductDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    specifications = ProductSpecificationSerializer(many=True, read_only=True)
    final_price = serializers.ReadOnlyField()
    discount_percentage = serializers.ReadOnlyField()
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'description', 'price', 'discount_price', 
                  'final_price', 'discount_percentage', 'category', 'brand', 'stock', 
                  'sku', 'rating', 'reviews_count', 'views', 'featured', 'status', 
                  'images', 'specifications', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'slug', 'description', 'price', 'discount_price', 
                  'category', 'brand', 'stock', 'sku', 'featured', 'status']
