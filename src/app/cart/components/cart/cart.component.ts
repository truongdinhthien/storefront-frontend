import { CartService } from './../../providers/cart.service';
import { Component, inject } from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CheckoutFormComponent } from '../../../checkout/components/checkout-form/checkout-form.component';
import { CheckoutInformation } from '../../../checkout/checkout.types';
import { CheckoutService } from '../../../checkout/providers/checkout.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartListComponent, CheckoutFormComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartService = inject(CartService);
  checkoutService = inject(CheckoutService);
  router = inject(Router);
  cart = this.cartService.cart;

  onCheckoutSubmit(checkoutInformation: CheckoutInformation) {
    this.checkoutService
      .completeCheckout({
        cart: this.cart,
        information: checkoutInformation,
      })
      .subscribe(() => {
        this.cartService.reset();
        this.router.navigate(['/checkout/success']);
      });
  }
}
