from rest_framework import serializers
from .models import Coupon


class CouponSerializer(serializers.ModelSerializer):
    is_valid = serializers.BooleanField(read_only=True)
    
    class Meta:
        model = Coupon
        fields = ['id', 'code', 'discount_type', 'value', 'min_order_value', 
                  'max_discount', 'usage_limit', 'used_count', 'valid_from', 
                  'valid_until', 'is_active', 'is_valid', 'created_at']
        read_only_fields = ['id', 'used_count', 'created_at']


class ValidateCouponSerializer(serializers.Serializer):
    code = serializers.CharField()
    order_total = serializers.DecimalField(max_digits=10, decimal_places=2)
