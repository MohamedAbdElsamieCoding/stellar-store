import ProductCard from "../HomePage/ProductCard";
import HeroShopSection from "./HeroShopSection";
import SidebarShop from "./SidebarShop";

const ShopPage = () => {
  return (
    <div className="app-container flex flex-col gap-12 py-12">
      <HeroShopSection />
      <div className="flex justify-between gap-12">
        <SidebarShop />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
