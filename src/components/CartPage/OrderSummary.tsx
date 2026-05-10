import Button from "../../shared/Button";

const OrderSummary = () => {
  return (
    <div className="col-span-1 flex flex-col gap-6 p-6 bg-[#191919] border border-text/20">
      <h2 className="leading-10 font-medium text-center">ORDER_SUMMARY</h2>
      <hr className="h-1 text-text/20" />
      <div className="flex flex-col gap-4 font-headline leading-6">
        <div className="flex justify-between">
          <p className="text-text text-base">SUBTOTAL</p>
          <p className="text-base">$4,147.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-text text-base">PLATFORM_FEE</p>
          <p className="text-base">$12.50</p>
        </div>
        <div className="flex justify-between">
          <p className="text-text text-base">EXPRESS_SHIPPING</p>
          <p className="text-base">FREE</p>
        </div>
        <div className="flex justify-between">
          <p className="text-text text-base">ESTIMATED_TAX</p>
          <p className="text-base">$331.76</p>
        </div>
      </div>
      <hr className="h-1 text-text/20" />
      <div className="flex justify-between">
        <p className="text-text font-headline text-base uppercase leading-6">
          TOTAL_PAYLOAD
        </p>
        <h2 className="text-primary tracking-[-0.8px] leading-12 font-headline">
          $4,491.26
        </h2>
      </div>
      <Button
        onClick={() => {}}
        text="PROCEED TO CHECKOUT"
        className="py-4 text-center font-bold font-headline text-lg leading-7 tracking-[1px]"
      />
      <button className="py-4 text-center font-headline leading-7 tracking-[1px] border border-secondary text-secondary">
        CONTINUE BROWSING
      </button>
    </div>
  );
};

export default OrderSummary;
