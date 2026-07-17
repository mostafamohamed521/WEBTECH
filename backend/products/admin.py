from django.contrib import admin
from .models import Product, ProductImage, ProductSpecification


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    fields = ['image', 'alt_text', 'is_main']


class ProductSpecificationInline(admin.TabularInline):
    model = ProductSpecification
    extra = 1
    fields = ['key', 'value']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'brand', 'price', 'discount_price', 'stock', 'rating', 'featured', 'status', 'created_at']
    list_filter = ['category', 'brand', 'featured', 'status', 'created_at']
    search_fields = ['name', 'description', 'sku']
    list_editable = ['price', 'discount_price', 'stock', 'featured', 'status']
    prepopulated_fields = {'slug': ('name',)}
    inlines = [ProductImageInline, ProductSpecificationInline]
    readonly_fields = ['views', 'reviews_count']


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['product', 'alt_text', 'is_main', 'created_at']
    list_filter = ['is_main', 'created_at']
    search_fields = ['product__name', 'alt_text']


@admin.register(ProductSpecification)
class ProductSpecificationAdmin(admin.ModelAdmin):
    list_display = ['product', 'key', 'value']
    list_filter = ['key']
    search_fields = ['product__name', 'key', 'value']
