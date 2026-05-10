import CartDetails from "./CartDetails";
import OrderSummary from "./OrderSummary";

const CartPage = () => {
  return (
    <div className="app-container flex flex-col gap-8 py-12">
      <div className="flex flex-col gap-1">
        <h1 className="font-headline tracking-[-2px] font-bold leading-12">
          INVENTORY_VAULT
        </h1>
        <p className="text-base font-headline leading-6 text-text/50">
          STATUS: 03 ITEMS LOADED // READY_FOR_CHECKOUT
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2 flex flex-col gap-3">
          <CartDetails />
          <CartDetails />
          <CartDetails />
          <CartDetails />
          <CartDetails />
        </div>
        <div className="h-fit">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
