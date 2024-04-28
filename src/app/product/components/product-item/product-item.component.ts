import { Component, inject, Input } from '@angular/core';
import { Product } from '../../product.types';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../cart/providers/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  cartService = inject(CartService);
  quantity: number = 1;
  @Input({ required: true }) product!: Product;

  onAddToCart() {
    this.cartService.addItem({
      id: this.product.id,
      price: this.product.price,
      productInfo: this.product,
      quantity: +this.quantity,
    });

    window.alert('Your product has been added to the cart!');
  }
}
