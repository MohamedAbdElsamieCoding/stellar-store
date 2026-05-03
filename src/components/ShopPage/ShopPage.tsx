import CategoriesSection from "./CategoriesSection";
import HeroSection from "./HeroSection";
import NewsletterSection from "./NewsletterSection";
import TrendingSection from "./TrendingSection";

const ShopPage = () => {
  return (
    <div className="flex flex-col gap-24 container pb-24">
      {/* Hero Section */}
      <HeroSection />
      {/* Categories Section */}
      <CategoriesSection />
      {/* Trending Section */}
      <TrendingSection />
      {/* NewsLetter Section */}
      <NewsletterSection />
    </div>
  );
};

export default ShopPage;
