import { Component, Input } from '@angular/core';
import { CartItem } from '../../cart.types';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input({ required: true }) data!: CartItem;
}
