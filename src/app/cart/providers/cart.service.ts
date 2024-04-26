import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../cart.types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  storage = window.localStorage;
  readonly storageKey = 'APP_CART';

  getCart(): Cart {
    const storedCart = this.storage.getItem(this.storageKey);
    if (!storedCart) {
      const cart: Cart = {
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
      this.saveChanges(cart);
      return cart;
    }

    return JSON.parse(storedCart);
  }

  addItem(item: CartItem) {
    const cart = this.getCart();
    const foundItem = cart.items.find(({ id }) => item.id === id);

    if (!foundItem) {
      cart.items.push(item);

      cart.totalQuantity += item.quantity;
      cart.totalPrice += item.price * item.quantity;
    } else {
      foundItem.quantity += item.quantity;

      cart.totalQuantity += item.quantity;
      cart.totalPrice += item.price * item.quantity;
    }

    this.saveChanges(cart);
    return cart;
  }

  updateQuantity(itemId: number, quantity: number) {
    const cart = this.getCart();
    const foundItem = cart.items.find(({ id }) => itemId === id);

    if (!foundItem) throw new Error('The item does not exist');
    foundItem.quantity += quantity;

    cart.totalQuantity += foundItem.quantity;
    cart.totalPrice += foundItem.price * foundItem.quantity;

    this.saveChanges(cart);
    return cart;
  }

  saveChanges(cart: Cart) {
    this.storage.setItem(this.storageKey, JSON.stringify(cart));
  }
}
