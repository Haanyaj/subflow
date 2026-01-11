import { motion } from "framer-motion";
import { Variants } from "framer-motion";

interface FooterProps {
  variants: Variants;
}

export const Footer = ({ variants }: FooterProps) => {
  return (
    <motion.footer
      variants={variants}
      className="col-span-12 flex items-center justify-between px-2 border-t border-white/5 text-xs text-gray-400 pt-4"
    >
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">SubFlow</span>
        <span className="text-blue-500">.</span>
      </div>
      <p>© {new Date().getFullYear()} SubFlow</p>
    </motion.footer>
  );
};
