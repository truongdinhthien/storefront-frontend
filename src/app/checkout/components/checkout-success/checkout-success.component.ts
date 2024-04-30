import { Component, inject, OnDestroy } from '@angular/core';
import { CheckoutService } from '../../providers/checkout.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './checkout-success.component.html',
  styleUrl: './checkout-success.component.scss',
})
export class CheckoutSuccessComponent implements OnDestroy {
  checkoutService = inject(CheckoutService);

  completedCheckout = this.checkoutService.completedCheckout;

  ngOnDestroy(): void {
    this.checkoutService.reset();
  }
}
