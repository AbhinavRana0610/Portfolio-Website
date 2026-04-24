import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const sceneVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    filter: "blur(20px)",
    y: 50
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: { 
    opacity: 0, 
    scale: 1.1,
    filter: "blur(20px)",
    y: -50,
    transition: { 
      duration: 0.8, 
      ease: [0.7, 0, 0.84, 0]
    }
  }
};
