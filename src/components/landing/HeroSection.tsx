import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { StoreButtons } from "./StoreButtons";
import { AppScreenshot } from "./AppScreenshot";

interface HeroSectionProps {
  variants: Variants;
}

export const HeroSection = ({ variants }: HeroSectionProps) => {
  return (
    <>
      <motion.div
        variants={variants}
        className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Maîtrisez vos{" "}
          <span className="text-blue-500">abonnements</span>
        </h1>
        
        <p className="text-lg text-gray-400 leading-relaxed">
          Suivez, analysez et optimisez toutes vos dépenses mensuelles avec un tableau de bord intuitif.
        </p>

        <div className="pt-2">
          <StoreButtons size="md" variant="horizontal" />
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        className="col-span-12 lg:col-span-7 flex items-center justify-center lg:justify-end"
      >
        <AppScreenshot
          src="/assets/images/screenshots/dashboard.png"
          alt="SubFlow App"
          className="w-full max-w-md"
        />
      </motion.div>
    </>
  );
};
