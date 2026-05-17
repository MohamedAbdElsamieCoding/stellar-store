import type { Product } from "./product.type";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartStore {
  cart: CartItem[];

  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}
