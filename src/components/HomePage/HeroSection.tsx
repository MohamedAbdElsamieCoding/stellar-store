import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/variants";
import Button from "../../shared/Button";
import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";

const MotionButton = motion(Button);
const HeroSection = () => {
  const { fetchProductById, product, loading } = useProductStore();
  useEffect(() => {
    fetchProductById(1);
  }, [fetchProductById]);
  if (loading && !product) return <div>loading....</div>;
  return (
    <section className="relative h-dvw w-fit flex justify-center md:h-screen md:w-dvw">
      <img
        src={product?.image}
        alt={product?.title}
        className="h-full object-contain"
      />
      <div className="absolute inset-0 bg-linear-to-r from-bg/80 to-transparent"></div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 pl-8 flex flex-col gap-6 md:top-1/2 md:left-0 md:text-left"
      >
        <div className="flex flex-col gap-2 w-2/3">
          <motion.p
            variants={fadeInUp}
            className="font-headline tracking-[3.2px] text-primary"
          >
            {product?.category}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-bold text-4xl md:text-7xl tracking-[-2.88px] text-white line-clamp-2"
          >
            {product?.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-full md:max-w-2/3 text-text line-clamp-2"
          >
            {product?.description}
          </motion.p>
        </div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row gap-6 w-fit"
        >
          <MotionButton
            text="BUY NOW"
            className="px-10 py-2 md:py-4 font-headline"
            whileTap={{ y: 2, scale: 0.98 }}
            onClick={() => {}}
          />
          <motion.button
            whileTap={{ y: 2, scale: 0.98 }}
            className="px-10 py-2 md:px-10 md:py-4 tracking-tight border border-text text-text hover:text-white font-headline"
          >
            SPECIFICATIONS
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
