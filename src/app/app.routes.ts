import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.routes').then(m => m.routes),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.routes').then(m => m.routes),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.routes').then(m => m.routes),
  },
];
