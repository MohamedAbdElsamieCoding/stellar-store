export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;

  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductStore {
  products: Product[];
  trending: Product[];
  product: Product | null;
  loading: boolean;

  fetchProducts: () => Promise<void>;
  fetchProductById: (id: number) => Promise<void>;
}
export interface CategoryStore {
  categories: string[];
  loading: boolean;

  fetchCategories: () => Promise<void>;
}
