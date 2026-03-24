import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();
  visibleProducts: Product[] = [];

  constructor() {
    effect(() => {
      this.visibleProducts = [...this.products()];
    });
  }

  removeProduct(productId: number): void {
    const sourceProducts = this.products();
    const sourceIndex = sourceProducts.findIndex((product) => product.id === productId);

    if (sourceIndex !== -1) {
      sourceProducts.splice(sourceIndex, 1);
    }

    this.visibleProducts = this.visibleProducts.filter((product) => product.id !== productId);
  }
}
