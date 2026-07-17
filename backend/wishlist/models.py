from django.db import models
from accounts.models import User
from products.models import Product


class Wishlist(models.Model):
    """
    User Wishlist Model
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='wishlist')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.user.email}'s Wishlist"
    
    @property
    def items_count(self):
        return self.items.count()


class WishlistItem(models.Model):
    """
    Wishlist Item Model
    """
    wishlist = models.ForeignKey(Wishlist, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['wishlist', 'product']
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.product.name} in {self.wishlist.user.email}'s wishlist"
