import { create } from "zustand";
import type { OrderStore } from "../types/order.type";

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],

  addOrder: (order) =>
    set((state) => ({
      orders: [...state.orders, order],
    })),

  removeOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== id),
    })),

  clearOrders: () => set({ orders: [] }),
}));
