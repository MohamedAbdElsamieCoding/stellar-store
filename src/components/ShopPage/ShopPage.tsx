import HeroShopSection from "./HeroShopSection";
import SidebarShop from "./SidebarShop";
import ProductsGrid from "./ProductsGrid";
import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";

const ShopPage = () => {
  const { fetchProducts, fetchCategories } = useProductStore();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);
  return (
    <div className="app-container flex flex-col gap-12 py-12">
      <HeroShopSection />
      <div className="flex justify-between gap-12">
        <div className="hidden md:block">
          <SidebarShop />
        </div>
        <div className="flex-1 ml-0">
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
