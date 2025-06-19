// src/components/SlideRightWrapper.jsx
import { motion } from "framer-motion";

const slideLeftVariants = {
  initial: { x: "+100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

const TransitionWraper = ({ children }) => {
  return (
    <motion.div
      variants={slideLeftVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionWraper ;
