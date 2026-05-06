export type Category =
  | "all"
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export type SortType = "feature" | "low" | "high" | "name";

export type ApiCategory = Exclude<Category, "all">;

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ApiCategory;
  image: string;
  rating: Rating;
}

export interface ProductStore {
  products: Product[];
  allProducts: Product[];
  trending: Product[];
  product: Product | null;
  sortType: SortType;
  categories: Category[];
  selectedCategories: Category[];

  loading: boolean;

  fetchProducts: () => Promise<void>;
  fetchProductById: (id: number) => Promise<void>;
  fetchCategories: () => Promise<void>;

  toggleCategory: (cat: Category) => void;

  setSortType: (type: SortType) => void;
}
