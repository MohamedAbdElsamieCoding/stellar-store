import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/product.type";
import { useCartStore } from "../../store/useCartStore";
import { useState } from "react";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCartStore();

  const formatTitle = (title: string) => {
    return title.split(" ").slice(0, 2).join(" ");
  };

  const handleCartAdded = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };
  
  const navigate = useNavigate();

  return (
    <div className="group relative flex flex-col gap-6 border border-text/20 rounded-sm bg-[#2A2A2A] overflow-hidden">
      <div
        className="
        absolute inset-0 z-10
        bg-black/50
        opacity-0
        transition-all duration-300
        group-hover:opacity-100
        flex flex-col items-center justify-center gap-4
      "
      >
        <button
          onClick={handleCartAdded}
          className="bg-primary text-black px-6 py-2 rounded-xs font-semibold font-headline uppercase"
        >
          {added ? "Added ✓" : "Add To Cart"}
        </button>
        <button
          onClick={() => navigate(`/products/${product.id}`)}
          className="bg-primary text-black px-6 py-2 rounded-xs font-semibold font-headline uppercase"
        >
          Show Details
        </button>
      </div>
      <div className="p-5 flex justify-center items-center">
        <img
          loading="lazy"
          src={product.image}
          alt={product.title}
          className="relative object-contain h-60 cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-1 font-headline px-2 pb-1">
        <div className="flex justify-between items-center gap-2">
          <p className="text-[18px] text-white line-clamp-1">
            {formatTitle(product.title)}
          </p>
          <p className="text-[16px] text-primary">{product.price}$</p>
        </div>
        <p className="text-2 text-[#71717A] line-clamp-1">
          {product.rating.count}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
