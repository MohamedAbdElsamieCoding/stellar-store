import { useCartStore } from "../../store/useCartStore";
import CartDetails from "./CartDetails";
import OrderSummary from "./OrderSummary";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="app-container flex flex-col gap-8 py-12">
      <div className="flex flex-col gap-1">
        <h1 className="font-headline tracking-[-2px] font-bold leading-12">
          INVENTORY_VAULT
        </h1>
        <p className="text-base font-headline leading-6 text-text/50">
          STATUS: {cart.length} ITEMS LOADED // READY_FOR_CHECKOUT
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2 flex flex-col gap-3">
          {cart.length === 0 ? (
            <p className="text-text/50 font-headline uppercase">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <CartDetails key={item.product.id} item={item} />
            ))
          )}
        </div>
        <div className="h-fit">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
