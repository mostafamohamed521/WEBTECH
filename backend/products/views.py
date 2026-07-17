from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from .models import Product, ProductImage, ProductSpecification
from .serializers import (
    ProductListSerializer, 
    ProductDetailSerializer, 
    ProductCreateUpdateSerializer,
    ProductImageSerializer,
    ProductSpecificationSerializer
)


class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'brand', 'featured', 'status']
    search_fields = ['name', 'description']
    ordering_fields = ['price', 'rating', 'created_at', 'name']
    ordering = ['-created_at']
    
    def get_queryset(self):
        queryset = Product.objects.select_related('category', 'brand').prefetch_related('images', 'specifications')
        return queryset
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        elif self.action in ['create', 'update', 'partial_update']:
            return ProductCreateUpdateSerializer
        return ProductDetailSerializer
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views += 1
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        featured_products = self.get_queryset().filter(featured=True, status='PUBLISHED')
        serializer = ProductListSerializer(featured_products, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.query_params.get('q', '')
        if query:
            products = self.get_queryset().filter(
                Q(name__icontains=query) | 
                Q(description__icontains=query)
            )
            serializer = ProductListSerializer(products, many=True)
            return Response(serializer.data)
        return Response({'error': 'Search query required'}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        category_id = request.query_params.get('category')
        if category_id:
            products = self.get_queryset().filter(category_id=category_id, status='PUBLISHED')
            serializer = ProductListSerializer(products, many=True)
            return Response(serializer.data)
        return Response({'error': 'Category parameter required'}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'])
    def by_brand(self, request):
        brand_id = request.query_params.get('brand')
        if brand_id:
            products = self.get_queryset().filter(brand_id=brand_id, status='PUBLISHED')
            serializer = ProductListSerializer(products, many=True)
            return Response(serializer.data)
        return Response({'error': 'Brand parameter required'}, status=status.HTTP_400_BAD_REQUEST)


class ProductImageViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['product', 'is_main']


class ProductSpecificationViewSet(viewsets.ModelViewSet):
    queryset = ProductSpecification.objects.all()
    serializer_class = ProductSpecificationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['product']
