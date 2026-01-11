import { motion } from "framer-motion";
import { Variants } from "framer-motion";

interface NavigationProps {
  variants: Variants;
  isVisible: boolean;
}

export const Navigation = ({ variants, isVisible }: NavigationProps) => {
  return (
    <motion.header
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="absolute top-2 left-2 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20"
    >
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
          SubFlow
          <span className="text-blue-500 ml-0.5">.</span>
        </h1>
      </motion.div>
    </motion.header>
  );
};
