import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../cart.types';

// TODO: Change the cart data to reactive programming
@Injectable({
  providedIn: 'root',
})
export class CartService {
  storage = window.localStorage;
  cart: Cart = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  };
  readonly storageKey = 'APP_CART';

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const storedCart = this.storage.getItem(this.storageKey);
    if (!storedCart) return;
    this.cart = JSON.parse(storedCart);
  }

  addItem(item: CartItem) {
    const foundItem = this.cart.items.find(({ id }) => item.id === id);
    if (!foundItem) {
      this.cart.items.push(item);
    } else {
      foundItem.quantity += item.quantity;
    }
    this.saveChanges(this.cart);
  }

  updateQuantity(itemId: number, quantity: number) {
    const foundItem = this.cart.items.find(({ id }) => itemId === id);

    if (!foundItem) throw new Error('The item does not exist');
    foundItem.quantity += quantity;

    this.saveChanges(this.cart);
  }

  deleteItem(itemId: number) {
    this.cart.items = this.cart.items.filter(item => item.id !== itemId);
    this.saveChanges(this.cart);
  }

  saveChanges(cart: Cart) {
    // update quantity and total price
    this.cart.totalQuantity = this.cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    this.cart.totalPrice = this.cart.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    // Sync to store
    this.storage.setItem(this.storageKey, JSON.stringify(cart));
  }

  reset() {
    this.cart = {
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
    };
    this.saveChanges(this.cart);
  }
}
