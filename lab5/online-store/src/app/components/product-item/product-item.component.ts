import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  product = input.required<Product>();
  deleteProduct = output<number>();
  selectedImage = '';

  ngOnInit(): void {
    this.selectedImage = this.product().image;
  }

  changeImage(image: string): void {
    this.selectedImage = image;
  }

  nextImage(): void {
    const product = this.product();
    const currentIndex = product.images.indexOf(this.selectedImage);
    const nextIndex = (currentIndex + 1) % product.images.length;
    this.selectedImage = product.images[nextIndex];
  }

  previousImage(): void {
    const product = this.product();
    const currentIndex = product.images.indexOf(this.selectedImage);
    const previousIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    this.selectedImage = product.images[previousIndex];
  }

  likeProduct(): void {
    this.product().likes += 1;
  }

  removeProduct(): void {
    this.deleteProduct.emit(this.product().id);
  }

  shareWhatsApp(): void {
    const product = this.product();
    const text = `Check this product on Kaspi.kz: ${product.name} - ${product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareTelegram(): void {
    const product = this.product();
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
