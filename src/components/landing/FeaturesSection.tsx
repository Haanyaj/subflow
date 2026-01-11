import { motion, useReducedMotion } from "framer-motion";
import { Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesSectionProps {
  variants: Variants;
  features: Feature[];
}

export const FeaturesSection = ({ variants, features }: FeaturesSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={variants}
      className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4 content-start"
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            variants={variants}
            className="group p-4 glass-card-light rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            whileHover={shouldReduceMotion ? {} : {
              y: -4,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-transparent rounded-xl transition-all duration-300 pointer-events-none" />
            
            <div className="flex items-start gap-3 mb-2 relative z-10">
              <motion.div
                className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300"
                whileHover={shouldReduceMotion ? {} : {
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Icon size={20} className="text-blue-500" />
              </motion.div>
              <h3 className="text-sm font-semibold leading-tight group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed relative z-10">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
