import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/variants";

const NewsletterSection = () => {
  return (
    <section className="app-container flex justify-center">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 border border-text/20 rounded-sm bg-tertiary"
      >
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-4xl tracking-[-0.8px]">JOIN THE INNER CIRCLE</h1>
          <p className="text-text max-w-3/4">
            Get exclusive access to pre-market drops, technical deep- dives, and
            elite member pricing.
          </p>
          <form className="flex relative items-center">
            <input
              type="email"
              placeholder="ENTER_EMAIL_ADDRESS"
              className="w-fit md:w-[97%] border-b border-b-primary/20 py-2"
            />
            <motion.button
              whileTap={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              type="button"
              className="absolute right-0 text-primary"
            >
              <FaArrowRight />
            </motion.button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-headline">
          <div className="flex flex-col p-6 gap-2 bg-[#2A2A2A] rounded-sm">
            <p className="text-primary text-2xl">0.1ms</p>
            <p>LATENCY THRESHOLD</p>
          </div>
          <div className="flex flex-col p-6 gap-2 bg-[#2A2A2A] rounded-sm">
            <p className="text-primary text-2xl">120W</p>
            <p>PEAK PERFORMANCE</p>
          </div>
          <div className="flex flex-col p-6 gap-2 bg-[#2A2A2A] rounded-sm">
            <p className="text-primary text-2xl">100%</p>
            <p>RECYCLED ALLOYS</p>
          </div>
          <div className="flex flex-col p-6 gap-2 bg-[#2A2A2A] rounded-sm">
            <p className="text-primary text-2xl">24/7</p>
            <p>ELITE SUPPORT</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
