import { Component } from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {}
