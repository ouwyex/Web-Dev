from .generics import CategoryDetailAPIView, CategoryListAPIView, CategoryProductsAPIView
from .generics import ProductDetailAPIView as ActiveProductDetailAPIView
from .generics import ProductListAPIView as ActiveProductListAPIView

# Switch implementations here for the products API:
# from .fbv import product_detail as product_detail_view, products_list as products_list_view
# from .cbv import ProductDetailAPIView as ActiveProductDetailAPIView
# from .cbv import ProductListAPIView as ActiveProductListAPIView
# from .mixins import ProductDetailAPIView as ActiveProductDetailAPIView
# from .mixins import ProductListAPIView as ActiveProductListAPIView
# from .generics import ProductDetailAPIView as ActiveProductDetailAPIView
# from .generics import ProductListAPIView as ActiveProductListAPIView

products_list_view = ActiveProductListAPIView.as_view()
product_detail_view = ActiveProductDetailAPIView.as_view()
categories_list_view = CategoryListAPIView.as_view()
category_detail_view = CategoryDetailAPIView.as_view()
category_products_view = CategoryProductsAPIView.as_view()
