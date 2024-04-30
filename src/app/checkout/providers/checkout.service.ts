import { Injectable } from '@angular/core';
import { Checkout, CompleteCheckoutPayload } from '../checkout.types';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  completedCheckout: Checkout | null = null;

  completeCheckout(payload: CompleteCheckoutPayload) {
    return of(
      (() => {
        this.completedCheckout = {
          cart: payload.cart,
          information: payload.information,
          total: payload.cart.totalPrice,
        };
      })()
    );
  }

  reset() {
    this.completedCheckout = null;
  }
}
