import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import type { CartItem } from "../../types/cart.type";
import { useCartStore } from "../../store/useCartStore";

type Props = {
  item: CartItem;
};
const CartDetails = ({ item }: Props) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();

  return (
    <div className="relative flex flex-col md:flex-row gap-6 px-4 py-8 bg-[#191919] border border-text/20 overflow-hidden md:items-center md:justify-between h-fit">
      <div className="flex gap-6">
        <img
          className="h-full w-48 object-contain"
          src={item.product.image}
          alt={item.product.title}
        />
        <div className="flex justify-between items-baseline gap-5">
          <div>
            <h3 className="font-headline font-bold text-lg leading-7">
              {item.product.title}
            </h3>
            <p className="font-headline text-[10px] leading-4 text-text/50">
              SKU: {item.product.id}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end md:items-center">
        <div className="flex items-center text-lg gap-4 bg-[#2C2C2C] border border-text/20 p-3 md:max-w-fit ">
          <button
            className="w-6 h-6 flex items-center justify-center"
            onClick={() => decreaseQuantity(item.product.id)}
          >
            <FaMinus />
          </button>
          <p className="font-headline text-base w-8 text-center">
            {item.quantity}
          </p>
          <button
            className="w-6 h-6 flex items-center justify-center"
            onClick={() => increaseQuantity(item.product.id)}
          >
            <FaPlus />
          </button>
        </div>
        <p className="text-3xl font-medium font-headline leading-10">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => removeFromCart(item.product.id)}
        className="absolute md:top-3 md:right-3"
      >
        <RxCross2 className="text-lg" />
      </button>
    </div>
  );
};

export default CartDetails;
