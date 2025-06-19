// src/components/SlideSpringWrapper.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};


const TransitionWraper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        stiffness: 60,   // speed of bounce (lower = smoother)
        damping: 14,     // how much bounce settles (higher = less bouncy)
      }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionWraper;
