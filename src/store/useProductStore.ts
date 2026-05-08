import { create } from "zustand";
import axios from "axios";
import type {
  Category,
  Product,
  ProductStore,
  SortType,
} from "../components/types/product.type";

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  allProducts: [],
  trending: [],
  product: null,
  related: [],

  categories: [],
  selectedCategories: [],
  sortType: "feature",

  loading: false,

  fetchProducts: async () => {
    set({ loading: true });

    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
    const products = res.data;

    set({
      products,
      allProducts: products,
      trending: [...products]
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 8),
      loading: false,
    });
  },

  fetchProductById: async (id) => {
    try {
      set({ loading: true });
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products/${id}`,
      );
      set({ loading: false, product: res.data });
    } catch (error) {
      console.error(error);
    }
  },

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

  toggleCategory: (cat: Category): void => {
    const { selectedCategories, allProducts } = get();

    const exists = selectedCategories.includes(cat);

    const updated: Category[] = exists
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];

    set({ selectedCategories: updated });

    if (updated.length === 0 || updated.includes("all")) {
      set({
        products: allProducts,
        selectedCategories: [],
      });
      return;
    }

    const filtered: Product[] = allProducts.filter((p) =>
      updated.includes(p.category),
    );

    set({ products: filtered });
  },

  setSortType: (type: SortType) => {
    const { allProducts, selectedCategories } = get();

    let result =
      selectedCategories.length === 0 || selectedCategories.includes("all")
        ? allProducts
        : allProducts.filter((p) => selectedCategories.includes(p.category));

    switch (type) {
      case "low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;

      case "high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;

      case "name":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        break;
    }

    set({
      sortType: type,
      products: result,
    });
  },
  getProduct: async (id: string) => {
    try {
      set({ loading: true });
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products/${id}`,
      );
      set({ loading: false, product: res.data });
    } catch (error) {
      console.error(error);
    }
  },
  getRelated: async (currentId, category) => {
    try {
      set({ loading: true });
      const res = await axios.get<Product[]>(
        `${import.meta.env.VITE_BASE_URL}/products/category/${category}`,
      );

      const filtered = res.data.filter((item) => item.id !== Number(currentId));
      set({ related: filtered, loading: false });
    } catch (error) {
      console.error(error);
    }
  },
}));
