import {
  fadeInUp,
  slideInLeft,
  staggerContainer,
} from "../../animations/variants";
import { motion } from "framer-motion";
import { useEffect } from "react";
import clsx from "clsx";
import OverlayCat from "../../shared/OverlayCat";
import { useProductStore } from "../../store/useProductStore";

const CategoriesSection = () => {
  const { categories, fetchCategories, loading } = useProductStore();
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const categoryImages: Record<string, string> = {
    electronics: "/electronics.jpg",
    Jewelry: "/jewelry.jpg",
    "men's clothing": "/men.jpg",
    "women's clothing": "/women.jpg",
  };

  if (loading && categories.length === 0) return <div>loading...</div>;

  return (
    <section className="flex flex-col gap-12 app-container">
      <motion.h1
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl md:text-3xl relative pl-13 before:absolute before:left-0 before:top-1/2 before:w-10 before:h-0.5 before:bg-primary before:-translate-y-1/2"
      >
        CATEGORIES
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[250px]"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={cat}
            variants={fadeInUp}
            className={clsx(
              "relative border border-text/30 rounded-sm overflow-hidden",
            )}
          >
            <img
              src={categoryImages[cat]}
              alt={cat}
              className="h-full w-full object-cover"
            />

            <OverlayCat />

            <div className="absolute bottom-0 left-0 pb-6 pl-4">
              <p className="text-primary font-headline">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-headline capitalize">{cat}</h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CategoriesSection;
