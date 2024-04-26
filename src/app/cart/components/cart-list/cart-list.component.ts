import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../providers/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss',
})
export class CartListComponent implements OnInit {
  cartService = inject(CartService);

  cart = this.cartService.getCart();

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}
