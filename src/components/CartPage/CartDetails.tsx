import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const CartDetails = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 p-4 bg-[#191919] border border-text/20 overflow-hidden md:items-center md:justify-between h-fit">
      <div className="flex gap-6">
        <img
          className="h-full w-48 object-contain"
          src="/women.jpg"
          alt="product"
        />
        <div className="flex justify-between items-baseline gap-5">
          <div>
            <h3 className="font-headline font-bold text-lg leading-7">
              X-1 NEURAL CORE WORKSTATION
            </h3>
            <p className="font-headline text-[10px] leading-4 text-text/50">
              SKU: CORE-8892-XT
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end md:items-center">
        <div className="flex justify-between text-lg gap-4 bg-[#2C2C2C] border border-text/20 p-3 md:w-full">
          <button>
            <FaMinus />
          </button>
          <p className="font-headline text-base">01</p>
          <button>
            <FaPlus />
          </button>
        </div>
        <p className="text-3xl font-medium font-headline leading-10">
          $2,499.00
        </p>
      </div>
      <button className="absolute md:top-3 md:right-3">
        <RxCross2 className="text-lg" />
      </button>
    </div>
  );
};

export default CartDetails;
