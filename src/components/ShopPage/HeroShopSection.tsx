import { motion } from "framer-motion";
import { fadeInUp, slideInRight } from "../../animations/variants";

const HeroShopSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-end">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-2"
      >
        <h1 className="inline-block font-headline bg-linear-to-r from-neutral-50 to-primary bg-clip-text text-transparent text-5xl">
          HARDWARE MATRIX
        </h1>
        <p className="text-text max-w-3/4">
          Precision engineered components for high-frequency computing and elite
          gaming performance.
        </p>
      </motion.div>
      <motion.div
        variants={slideInRight}
        initial="hidden"
        animate="visible"
        className="bg-text"
      ></motion.div>
    </div>
  );
};

export default HeroShopSection;
