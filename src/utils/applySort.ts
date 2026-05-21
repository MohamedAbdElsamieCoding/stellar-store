import type { Product, SortType } from "../types/product.type";

export const applySort = (products: Product[], type: SortType) => {
  const sorted = [...products];

  switch (type) {
    case "low":
      return sorted.sort((a, b) => a.price - b.price);

    case "high":
      return sorted.sort((a, b) => b.price - a.price);

    case "name":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    default:
      return sorted;
  }
};
