from django.db import models


class Coupon(models.Model):
    """
    Discount Coupon Model
    """
    DISCOUNT_TYPE_CHOICES = [
        ('PERCENTAGE', 'Percentage'),
        ('FIXED', 'Fixed Amount'),
    ]
    
    code = models.CharField(max_length=50, unique=True)
    discount_type = models.CharField(max_length=20, choices=DISCOUNT_TYPE_CHOICES, default='PERCENTAGE')
    value = models.DecimalField(max_digits=10, decimal_places=2)
    min_order_value = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    max_discount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    usage_limit = models.PositiveIntegerField(null=True, blank=True)
    used_count = models.PositiveIntegerField(default=0)
    valid_from = models.DateTimeField()
    valid_until = models.DateTimeField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.code
    
    def is_valid(self):
        from django.utils import timezone
        now = timezone.now()
        
        if not self.is_active:
            return False
        
        if now < self.valid_from or now > self.valid_until:
            return False
        
        if self.usage_limit and self.used_count >= self.usage_limit:
            return False
        
        return True
    
    def calculate_discount(self, order_total):
        if not self.is_valid():
            return 0
        
        if order_total < self.min_order_value:
            return 0
        
        if self.discount_type == 'PERCENTAGE':
            discount = order_total * (self.value / 100)
        else:
            discount = self.value
        
        if self.max_discount and discount > self.max_discount:
            discount = self.max_discount
        
        return min(discount, order_total)
