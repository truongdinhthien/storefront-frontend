import { Cart } from '../cart/cart.types';

export type CheckoutInformation = {
  fullName: string;
  address: string;
  creditCard: string;
};

export type Checkout = {
  information: CheckoutInformation;
  cart: Cart;
  total: number;
};

export type CompleteCheckoutPayload = {
  information: CheckoutInformation;
  cart: Cart;
};
