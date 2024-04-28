import { CartService } from './../../providers/cart.service';
import { Component, inject } from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CheckoutFormComponent } from '../../../checkout/components/checkout-form/checkout-form.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartListComponent, CheckoutFormComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartService = inject(CartService);
  cart = this.cartService.cart;
}
