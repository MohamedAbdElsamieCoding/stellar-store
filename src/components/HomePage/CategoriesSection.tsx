import {
  fadeInUp,
  slideInLeft,
  staggerContainer,
} from "../../animations/variants";
import Overlay from "../../shared/Overlay";
import { motion } from "framer-motion";
const CategoriesSection = () => {
  return (
    <section className="flex flex-col gap-12 app-container">
      <motion.h1
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative pl-13 before:absolute before:left-0 before:top-1/2 before:w-10 before:h-0.5 before:bg-primary before:-translate-y-1/2"
      >
        CATEGORIES
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-col-4 gap-6 auto-rows-[250px]"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 md:col-span-3 relative border border-text/30 rounded-sm"
        >
          <img
            src="/hardware.png"
            alt="cat.png"
            className="h-full object-cover"
          />
          <Overlay />
          <div className="absolute bottom-0 left-0 pb-6 pl-4">
            <p className="text-primary font-headline">01</p>
            <h2 className="font-headline">Computing</h2>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 md:col-span-1 relative border border-text/30 rounded-sm"
        >
          <img
            src="/hardware.png"
            alt="cat.png"
            className="h-full object-cover"
          />
          <Overlay />
          <div className="absolute bottom-0 left-0 pb-6 pl-4">
            <p className="text-primary font-headline">02</p>
            <h2 className="font-headline">Audio</h2>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 md:col-span-4 relative border border-text/30 rounded-sm"
        >
          <img
            src="/hardware.png"
            alt="cat.png"
            className="h-full object-cover"
          />
          <Overlay />

          <div className="absolute bottom-0 left-0 pb-6 pl-4">
            <p className="text-primary font-headline">03</p>
            <h2 className="font-headline">Gaming Ecosystem</h2>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CategoriesSection;
