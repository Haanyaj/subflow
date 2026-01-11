import { motion, useReducedMotion } from "framer-motion";
import { Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface StatsSectionProps {
  variants: Variants;
  stats: Stat[];
}

export const StatsSection = ({ variants, stats }: StatsSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={variants}
      className="col-span-12 lg:col-span-3 flex items-center justify-center lg:justify-start"
    >
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 w-full lg:w-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              variants={variants}
              className="text-center lg:text-left group"
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="inline-flex p-2 bg-white/5 rounded-lg mb-2 group-hover:bg-blue-500/20 transition-colors duration-300"
                animate={shouldReduceMotion ? {} : {
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 10px rgba(59, 130, 246, 0.3)",
                    "0 0 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                <Icon size={20} className="text-blue-500" />
              </motion.div>
              <div className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
