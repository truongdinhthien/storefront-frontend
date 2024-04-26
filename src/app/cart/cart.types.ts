import { Product } from '../product/product.types';

export type Cart = {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
};

export type CartItem = {
  id: number; // The `id` is same with product to identify
  price: number;
  productInfo: Product;
  quantity: number;
};
