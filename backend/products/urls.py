from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, ProductImageViewSet, ProductSpecificationViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'product-images', ProductImageViewSet)
router.register(r'product-specifications', ProductSpecificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
