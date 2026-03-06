import { motion, useReducedMotion } from "framer-motion";
import { Variants } from "framer-motion";
import { Download } from "lucide-react";
import { StoreButtons } from "./StoreButtons";

interface DownloadCTAProps {
  variants: Variants;
}

export const DownloadCTA = ({ variants }: DownloadCTAProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={variants}
      className="col-span-12 lg:col-span-3 flex items-center justify-center"
    >
      <motion.div
        className="text-center space-y-4 p-6 glass-card-light rounded-xl border border-white/10 hover:border-blue-500/40 w-full transition-all duration-300 relative overflow-hidden"
        whileHover={shouldReduceMotion ? {} : {
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 hover:from-blue-500/10 hover:to-cyan-500/5 rounded-xl transition-all duration-300 pointer-events-none" />
        
        <motion.div
          className="inline-flex p-3 bg-blue-500/20 rounded-lg relative z-10"
          animate={shouldReduceMotion ? {} : {
            boxShadow: [
              "0 0 0px rgba(59, 130, 246, 0)",
              "0 0 15px rgba(59, 130, 246, 0.4)",
              "0 0 0px rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Download size={24} className="text-blue-500" />
        </motion.div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-1">Prêt à commencer ?</h3>
          <p className="text-xs text-gray-400">Téléchargez maintenant</p>
        </div>
        <div className="relative z-10">
          <StoreButtons size="sm" variant="vertical" />
        </div>
      </motion.div>
    </motion.div>
  );
};
