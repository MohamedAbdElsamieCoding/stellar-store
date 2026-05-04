const HeroShopSection = () => {
  const selectOpts = [
    { title: "Feature", id: "feature" },
    { title: "Price Low → High", id: "low" },
    { title: "Price High → Low", id: "high" },
    { title: "Name A → Z", id: "name" },
  ];
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-end">
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
        <select className="px-2 py-2 text-xs md:text-sm rounded-sm text-center bg-linear-to-r from-neutral/30 to-transparent text-white border border-neutral/30 focus:border-primary outline-none cursor-pointer bg-neutral/90">
          {selectOpts.map((item) => (
            <option className="text-white bg-neutral/90">{item.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HeroShopSection;
