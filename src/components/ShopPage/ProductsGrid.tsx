import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";
import ProductCard from "../HomePage/ProductCard";

const ProductsGrid = () => {
  const { products, loading } = useProductStore();
  useEffect(() => {}, []);
  if (loading && products.length === 0) return <div>loading...</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
