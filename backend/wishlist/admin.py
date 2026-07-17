from django.contrib import admin
from .models import Wishlist, WishlistItem


class WishlistItemInline(admin.TabularInline):
    model = WishlistItem
    extra = 0
    readonly_fields = ['created_at']


@admin.register(Wishlist)
class WishlistAdmin(admin.ModelAdmin):
    list_display = ['user', 'items_count', 'created_at', 'updated_at']
    list_filter = ['created_at']
    search_fields = ['user__email', 'user__username']
    inlines = [WishlistItemInline]
    readonly_fields = ['created_at', 'updated_at']


@admin.register(WishlistItem)
class WishlistItemAdmin(admin.ModelAdmin):
    list_display = ['wishlist', 'product', 'created_at']
    list_filter = ['created_at']
    search_fields = ['wishlist__user__email', 'product__name']
    readonly_fields = ['created_at']
