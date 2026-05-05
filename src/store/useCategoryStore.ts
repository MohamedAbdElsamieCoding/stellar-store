import { create } from "zustand";
import axios from "axios";
import type { CategoryStore } from "../components/types/product.type";

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  loading: false,

  fetchCategories: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products/categories`,
      );
      set({ categories: res.data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
