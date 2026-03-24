from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_GET

from .models import Category, Product


@require_GET
def products_list(request):
    products = Product.objects.select_related('category').all()
    data = [product.to_dict() for product in products]
    return JsonResponse(data, safe=False)


@require_GET
def product_detail(request, id):
    product = get_object_or_404(Product.objects.select_related('category'), pk=id)
    return JsonResponse(product.to_dict())


@require_GET
def categories_list(request):
    categories = Category.objects.all()
    data = [category.to_dict() for category in categories]
    return JsonResponse(data, safe=False)


@require_GET
def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    return JsonResponse(category.to_dict())


@require_GET
def category_products(request, id):
    category = get_object_or_404(Category, pk=id)
    products = category.products.all()
    data = [product.to_dict() for product in products]
    return JsonResponse(data, safe=False)
