import { motion } from "framer-motion";

function FadeLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      I fade in from the right to left!
    </motion.div>
  );
}

export default FadeLeft;