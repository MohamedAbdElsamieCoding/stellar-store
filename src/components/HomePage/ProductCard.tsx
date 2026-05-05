import type { Product } from "../types/product.type";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const formatTitle = (title: string) => {
    return title.split(" ").slice(0, 2).join(" ");
  };
  return (
    <div className="flex flex-col gap-6 border border-text/20 rounded-sm bg-[#2A2A2A] overflow-hidden">
      <div className="p-5 flex justify-center items-center">
        <img
        loading="lazy"
          src={product.image}
          alt={product.title}
          className="relative object-contain h-60"
        />
      </div>

      <div className="flex flex-col gap-1 font-headline px-2 pb-1">
        <div className="flex justify-between items-center">
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
