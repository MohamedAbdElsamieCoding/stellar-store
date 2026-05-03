import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/variants";
import Button from "../../shared/Button";

const MotionButton = motion(Button);
const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen mb-32 md:mb-0">
      <img src="/hardware.png" alt="hero" className="h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-bg/80 to-transparent"></div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="absolute left-0 top-1/2 pl-8 flex flex-col gap-4 max-w-1/2"
      >
        <motion.p
          variants={fadeInUp}
          className="font-headline tracking-[3.2px] text-primary"
        >
          NEXT-GEN HARDWARE
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="font-bold text-7xl tracking-[-2.88px] text-white"
        >
          CORE_X PRO ULTRA.
        </motion.h1>
        <motion.p variants={fadeInUp} className="max-w-2/3 text-text">
          Experience uncompromised speed with the latest 16-core architecture
          and liquid-cooled thermal management.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex gap-6">
          <MotionButton
            text="BUY NOW"
            className="px-10 py-4 font-headline"
            whileTap={{ y: 2, scale: 0.98 }}
            onClick={() => {}}
          />
          <motion.button
            whileTap={{ y: 2, scale: 0.98 }}
            className="px-10 py-4 tracking-tight border border-text text-text hover:text-white font-headline"
          >
            SPECIFICATIONS
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
