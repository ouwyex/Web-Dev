from django.urls import path

from .views import (
    categories_list_view,
    category_detail_view,
    category_products_view,
    product_detail_view,
    products_list_view,
)

urlpatterns = [
    path('products/', products_list_view, name='products-list'),
    path('products/<int:product_id>/', product_detail_view, name='product-detail'),
    path('categories/', categories_list_view, name='categories-list'),
    path('categories/<int:category_id>/', category_detail_view, name='category-detail'),
    path('categories/<int:category_id>/products/', category_products_view, name='category-products'),
]
