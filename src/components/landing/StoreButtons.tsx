import { motion, useReducedMotion } from "framer-motion";

interface StoreButtonsProps {
  size?: "sm" | "md" | "lg";
  variant?: "horizontal" | "vertical";
}

export const StoreButtons = ({ size = "md", variant = "horizontal" }: StoreButtonsProps) => {
  const shouldReduceMotion = useReducedMotion();

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  const buttonSizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm"
  };

  const containerClass = variant === "horizontal" 
    ? "flex flex-col sm:flex-row gap-3" 
    : "flex flex-col gap-2";

  return (
    <div className={containerClass}>
      <motion.a
        href="https://apps.apple.com/fr/app/subflow/id6741497228"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${buttonSizes[size]} bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300`}
        whileHover={shouldReduceMotion ? {} : {
          scale: 1.02,
          y: -2,
        }}
        whileTap={shouldReduceMotion ? {} : {
          scale: 0.98
        }}
      >
        <img
          src="/assets/images/logos/app-store.png"
          alt="App Store"
          className={iconSizes[size]}
        />
        <div className="text-left">
          <p className="text-xs text-blue-100">Disponible sur</p>
          <p className={`${textSizes[size]} font-semibold`}>App Store</p>
        </div>
      </motion.a>
      
      <motion.a
        href="https://play.google.com/store/apps/details?id=com.jessal.subflow"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${buttonSizes[size]} bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300`}
        whileHover={shouldReduceMotion ? {} : {
          scale: 1.02,
          y: -2,
        }}
        whileTap={shouldReduceMotion ? {} : {
          scale: 0.98
        }}
      >
        <img
          src="/assets/images/logos/google-play.svg"
          alt="Google Play"
          className={iconSizes[size]}
        />
        <div className="text-left">
          <p className="text-xs text-blue-100">Disponible sur</p>
          <p className={`${textSizes[size]} font-semibold`}>Android</p>
        </div>
      </motion.a>
    </div>
  );
};
