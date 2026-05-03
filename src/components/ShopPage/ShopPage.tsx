import { pageTransition, pageVariants } from "../../animations/variants";
import CategoriesSection from "./CategoriesSection";
import HeroSection from "./HeroSection";
import NewsletterSection from "./NewsletterSection";
import TrendingSection from "./TrendingSection";
import { motion } from "framer-motion";
const ShopPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={pageTransition}
      className="flex flex-col gap-24 container pb-24"
    >
      {/* Hero Section */}
      <HeroSection />
      {/* Categories Section */}
      <CategoriesSection />
      {/* Trending Section */}
      <TrendingSection />
      {/* NewsLetter Section */}
      <NewsletterSection />
    </motion.div>
  );
};

export default ShopPage;
