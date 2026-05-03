const ProductCard = () => {
  return (
    <div className="flex flex-col gap-6 border border-text/20 rounded-sm bg-[#2A2A2A] overflow-hidden">
      <div className="p-5 flex justify-center items-center">
        <img
          src="/hardware.png"
          alt="product"
          className="relative object-contain h-60"
        />
      </div>

      <div className="flex flex-col gap-1 font-headline px-2 pb-1">
        <div className="flex justify-between items-center">
          <p className="text-[18px] text-white">NEURAL MOUSE</p>
          <p className="text-[16px] text-primary">$129.00</p>
        </div>
        <p className="text-[10px] text-[#71717A]">SKU: NM-420-PT</p>
      </div>
    </div>
  );
};

export default ProductCard;
