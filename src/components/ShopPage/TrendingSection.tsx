import ProductCard from "./ProductCard";

const TrendingSection = () => {
  return (
    <section className="app-container flex flex-col gap-16">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-4">
          <h1 className="relative pl-13 before:absolute before:left-0 before:top-1/2 before:w-10 before:h-0.5 before:bg-primary before:-translate-y-1/2">
            TRENDING NOW
          </h1>
          <p className="text-text ">
            Precision engineered essentials for the modern professional.
          </p>
        </div>
        <button className="underline text-[16px] font-medium text-primary font-headline">
          VIEW ALL SERIES
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default TrendingSection;
