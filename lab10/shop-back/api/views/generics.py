from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer


class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.select_related('category').all().order_by('id')
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.select_related('category').all().order_by('id')
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        category = generics.get_object_or_404(Category.objects.all(), pk=category_id)
        serializer = ProductSerializer(category.products.all().order_by('id'), many=True)
        return Response(serializer.data)
