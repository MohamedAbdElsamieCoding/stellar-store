import { create } from "zustand";
import type { CartStore } from "../types/cart.type";

export const useCartStore = create<CartStore>()((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find(
        (item) => item.product.id === product.id,
      );
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        };
      }
      return {
        cart: [
          ...state.cart,
          {
            product,
            quantity: 1,
          },
        ],
      };
    }),

  removeFromCart: (id: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== id),
    })),

  increaseQuantity: (id: number) => {
    set((state: CartStore) => ({
      cart: state.cart.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    }));
  },

  decreaseQuantity: (id: number) => {
    set((state: CartStore) => ({
      cart: state.cart
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    }));
  },
}));
