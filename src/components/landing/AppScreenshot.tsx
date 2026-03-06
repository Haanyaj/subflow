import { motion, useReducedMotion } from "framer-motion";

interface AppScreenshotProps {
  src: string;
  alt: string;
  className?: string;
}

export const AppScreenshot = ({ src, alt, className = "" }: AppScreenshotProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-blue-500/30 rounded-2xl blur-3xl"
        animate={shouldReduceMotion ? {} : {
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Secondary glow */}
      <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-2xl" />
      
      {/* Image container avec animation subtile */}
      <motion.div
        className="relative z-10"
        whileHover={shouldReduceMotion ? {} : {
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <img
          src={src}
          alt={alt}
          className="relative w-full rounded-2xl shadow-2xl border border-white/10"
          loading="eager"
        />
        
        {/* Overlay gradient subtil */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};
