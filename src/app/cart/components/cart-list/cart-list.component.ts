import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../providers/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Cart } from '../../cart.types';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss',
})
export class CartListComponent {
  cartService = inject(CartService);

  @Input({ required: true }) cart!: Cart;
}
