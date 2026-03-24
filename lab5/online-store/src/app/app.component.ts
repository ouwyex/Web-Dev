import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly categories: Category[];
  readonly productsByCategory: Record<number, Product[]>;
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    const products = this.productService.getProducts();
    this.categories = this.productService.getCategories();
    this.productsByCategory = this.categories.reduce<Record<number, Product[]>>((accumulator, category) => {
      accumulator[category.id] = products.filter((product) => product.categoryId === category.id);
      return accumulator;
    }, {});
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  get selectedCategory(): Category | undefined {
    return this.categories.find((category) => category.id === this.selectedCategoryId);
  }

  get selectedProducts(): Product[] {
    if (this.selectedCategoryId === null) {
      return [];
    }

    return this.productsByCategory[this.selectedCategoryId] ?? [];
  }
}
