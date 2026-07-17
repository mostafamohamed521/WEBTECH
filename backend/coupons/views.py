from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import Coupon
from .serializers import CouponSerializer, ValidateCouponSerializer


class CouponViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = CouponSerializer
    
    def get_queryset(self):
        return Coupon.objects.all()
    
    @action(detail=False, methods=['post'])
    def validate(self, request):
        """
        Validate coupon and calculate discount
        """
        serializer = ValidateCouponSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        code = serializer.validated_data['code']
        order_total = serializer.validated_data['order_total']
        
        try:
            coupon = Coupon.objects.get(code=code)
        except Coupon.DoesNotExist:
            return Response(
                {'error': 'Invalid coupon code'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        if not coupon.is_valid():
            return Response(
                {'error': 'Coupon is not valid or expired'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        discount = coupon.calculate_discount(order_total)
        
        return Response({
            'valid': True,
            'discount': discount,
            'discount_type': coupon.discount_type,
            'final_total': order_total - discount
        })
