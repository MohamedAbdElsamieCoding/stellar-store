import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import { useCartStore } from "../../store/useCartStore";

const OrderSummary = () => {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const platformFee = subtotal * 0.03; // 3%
  const tax = subtotal * 0.08; // 8%
  const shipping = subtotal > 100 ? 0 : 10;

  const total = subtotal + platformFee + tax + shipping;

  return (
    <div className="col-span-1 flex flex-col gap-6 p-6 bg-[#191919] border border-text/20">
      <h2 className="leading-10 font-medium text-center">ORDER_SUMMARY</h2>
      <hr className="h-1 text-text/20" />
      <div className="flex flex-col gap-4 font-headline leading-6">
        <div className="flex justify-between">
          <p className="text-text text-base">SUBTOTAL</p>
          <p className="text-base">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-text text-base">PLATFORM_FEE</p>
          <p className="text-base">${platformFee.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-text text-base">EXPRESS_SHIPPING</p>
          <p className="text-base">
            {shipping === 0 ? "FREE" : `$${shipping}`}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-text text-base">ESTIMATED_TAX</p>
          <p className="text-base">${tax.toFixed(2)}</p>
        </div>
      </div>
      <hr className="h-1 text-text/20" />
      <div className="flex justify-between">
        <p className="text-text font-headline text-base uppercase leading-6">
          TOTAL_PAYLOAD
        </p>
        <h2 className="text-primary tracking-[-0.8px] leading-12 font-headline">
          ${total.toFixed(2)}
        </h2>
      </div>
      <Button
        onClick={() => {}}
        text="PROCEED TO CHECKOUT"
        className="py-4 text-center font-bold font-headline text-lg leading-7 tracking-[1px]"
      />
      <button
        onClick={() => navigate("/shop")}
        className="py-4 text-center font-headline leading-7 tracking-[1px] border border-secondary text-secondary"
      >
        CONTINUE BROWSING
      </button>
    </div>
  );
};

export default OrderSummary;
