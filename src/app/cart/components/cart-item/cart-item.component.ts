import { Component, inject, Input } from '@angular/core';
import { CartItem } from '../../cart.types';
import { CartService } from '../../providers/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  cartService = inject(CartService);
  @Input({ required: true }) data!: CartItem;

  updateItem(value: string) {
    const numberValue = +value;
    const updateValue = numberValue - this.data.quantity;
    this.cartService.updateQuantity(this.data.id, updateValue);
  }

  deleteItem() {
    if (confirm('Are you sure you want to delete cart item?')) {
      this.cartService.deleteItem(this.data.id);
    }
  }
}
