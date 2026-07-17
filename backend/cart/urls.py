from django.urls import path
from .views import cart_view, cart_item_view, clear_cart_view

urlpatterns = [
    path('', cart_view, name='cart'),
    path('items/<int:item_id>/', cart_item_view, name='cart-item'),
    path('clear/', clear_cart_view, name='clear-cart'),
]
