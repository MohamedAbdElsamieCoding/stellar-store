import { fadeInUp, slideInLeft, slideInRight } from "../../animations/variants";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const TrendingSection = () => {
  return (
    <section className="app-container flex flex-col gap-16">
      <div className="flex justify-between items-end">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h1 className="relative pl-13 before:absolute before:left-0 before:top-1/2 before:w-10 before:h-0.5 before:bg-primary before:-translate-y-1/2">
            TRENDING NOW
          </h1>
          <p className="text-text ">
            Precision engineered essentials for the modern professional.
          </p>
        </motion.div>
        <motion.button
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="underline text-[16px] font-medium text-primary font-headline"
        >
          VIEW ALL SERIES
        </motion.button>
      </div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </motion.div>
    </section>
  );
};

export default TrendingSection;
