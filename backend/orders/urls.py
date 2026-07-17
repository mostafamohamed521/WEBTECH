from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrderViewSet, create_order_view

router = DefaultRouter()
router.register(r'orders', OrderViewSet, basename='orders')

urlpatterns = [
    path('', include(router.urls)),
    path('create/', create_order_view, name='create-order'),
]
