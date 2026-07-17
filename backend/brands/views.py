from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Brand
from .serializers import BrandSerializer


class BrandListCreateView(generics.ListCreateAPIView):
    queryset = Brand.objects.filter(is_active=True)
    serializer_class = BrandSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class BrandDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
