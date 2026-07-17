from django.db import models
from categories.models import Category
from brands.models import Brand


class Product(models.Model):
    """
    Product Model with Category and Brand relationships
    """
    STATUS_CHOICES = (
        ('DRAFT', 'Draft'),
        ('PUBLISHED', 'Published'),
        ('OUT_OF_STOCK', 'Out of Stock'),
    )
    
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='products')
    stock = models.IntegerField(default=0)
    sku = models.CharField(max_length=50, unique=True, blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    reviews_count = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    featured = models.BooleanField(default=False)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PUBLISHED')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['name']),
            models.Index(fields=['category']),
            models.Index(fields=['brand']),
            models.Index(fields=['status']),
        ]
    
    def __str__(self):
        return self.name
    
    @property
    def final_price(self):
        return self.discount_price if self.discount_price else self.price
    
    @property
    def discount_percentage(self):
        if self.discount_price:
            return int(((self.price - self.discount_price) / self.price) * 100)
        return 0


class ProductImage(models.Model):
    """
    Product Images Model
    """
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='products/')
    alt_text = models.CharField(max_length=200, blank=True)
    is_main = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-is_main', 'created_at']
    
    def __str__(self):
        return f"{self.product.name} - Image"


class ProductSpecification(models.Model):
    """
    Product Specifications Model (e.g., RAM, CPU, Storage)
    """
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='specifications')
    key = models.CharField(max_length=100)  # e.g., RAM, CPU, Storage
    value = models.CharField(max_length=200)  # e.g., 16GB, Intel i7, 512GB SSD
    
    class Meta:
        unique_together = ['product', 'key']
    
    def __str__(self):
        return f"{self.product.name} - {self.key}: {self.value}"
