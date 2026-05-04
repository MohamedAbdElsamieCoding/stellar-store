import { easeIn, easeInOut, easeOut, type Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0.5,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};
export const slideInRight: Variants = {
  hidden: {
    opacity: 0.5,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const pageTransition = {
  duration: 0.4,
  ease: easeInOut,
};

export const navbarVariants: Variants = {
  hidden: {
    y: -70,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const navbarTransition = {
  transition: {
    duration: 0.2,
    ease: easeIn,
  },
};
