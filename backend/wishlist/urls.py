from django.urls import path
from .views import wishlist_view, remove_from_wishlist_view

urlpatterns = [
    path('', wishlist_view, name='wishlist'),
    path('remove/<int:item_id>/', remove_from_wishlist_view, name='remove-from-wishlist'),
]
