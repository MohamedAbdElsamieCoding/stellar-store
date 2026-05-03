
const HeroShopSection = () => {
  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-2">
        <h1 className="inline-block font-headline bg-linear-to-r from-neutral-50 to-primary bg-clip-text text-transparent text-5xl">
          HARDWARE MATRIX
        </h1>
        <p className="text-text max-w-3/4">
          Precision engineered components for high-frequency computing and elite
          gaming performance.
        </p>
      </div>
      <div className="bg-text">
        <select className=" pl-6 pr-12 py-3 w-full rounded-xl bg-linear-to-r from-neutral-900 to-neutral-800 text-white border border-neutral-700 focus:border-primary outline-none cursor-pointer">
          <option className="text-white bg-neutral/90" value="">
            Sort: Feature
          </option>
          <option className="text-white bg-neutral/90" value="">
            Sort: Price Low → High
          </option>
          <option className="text-white bg-neutral/90" value="">
            Sort: Price High → Low
          </option>
          <option className="text-white bg-neutral/90" value="">
            Sort: Name A → Z
          </option>
        </select>
      </div>
    </div>
  );
};

export default HeroShopSection;
