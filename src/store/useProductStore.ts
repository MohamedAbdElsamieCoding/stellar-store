import { create } from "zustand";
import axios from "axios";
import type { ProductStore } from "../components/types/product.type";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  product: null,
  loading: false,
  trending: [],

  fetchProducts: async () => {
    set({ loading: true });
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
    const products = res.data;
    const trending = [...products]
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 8);
    set({ products, loading: false, trending });
  },

  fetchProductById: async (id) => {
    set({ loading: true });
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/products/${id}`,
    );
    set({ loading: false, product: res.data });
  },
}));
