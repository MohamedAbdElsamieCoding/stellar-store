import { MdSecurity } from "react-icons/md";
import { useCartStore } from "../../store/useCartStore";
import { useShippingStore } from "../../store/useShippingStore";
import { usePaymentStore } from "../../store/usePaymentStore";

const Review = () => {
  const { cart } = useCartStore();
  const { shippingData } = useShippingStore();
  const { paymentData } = usePaymentStore();

  return (
    <div className="col-span-2 flex flex-col gap-8 p-8 border border-text/50 bg-tertiary">
      <h1>Review Your Order</h1>
      <div className="px-4 py-3 flex gap-3 items-center bg-primary/10  border border-primary/50">
        <MdSecurity className="text-primary text-xl" />
        <p className="text-xs font-semibold font-headline text-primary">
          SECURE ENCRYPTED CONNECTION ACTIVE • 256-BIT SSL PROTECTED
        </p>
      </div>
      {cart.map((item) => (
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
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="tracking-[1.2px] text-xs font-semibold text-text/50">
              SHIPPING TO
            </p>
            <button className="text-[10px] text-primary leading-3.5 font-headline">
              CHANGE
            </button>
          </div>
          <div className="p-4 flex flex-col gap-1 bg-neutral/50">
            <h2 className="text-base font-medium uppercase">
              {paymentData.cardHolder || shippingData.fullName}
            </h2>
            <p className="w-1/2 uppercase text-sm text-text/50">
              {shippingData.address}
            </p>
            <p className="w-1/2 text-sm text-text/50">{shippingData.email}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="tracking-[1.2px] text-xs font-semibold text-text/50">
              SHIPPING TO
            </p>
            <button className="text-[10px] text-primary leading-3.5 font-headline">
              CHANGE
            </button>
          </div>
          <div className="p-4 flex flex-col gap-1 bg-neutral/50">
            <div className="flex items-center gap-4">
              <MdSecurity className="text-gray-500" />
              <h2 className="text-base font-medium uppercase">VISA TERMINAL</h2>
            </div>
            <p className="w-1/2 uppercase text-sm text-text/50">
              ENDING IN {paymentData.cardNumber.slice(-4)}
            </p>
            <p className="w-1/2 uppercase text-sm text-text/50">
              EXP: {paymentData.expiryDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
