import { memo } from "react";

interface FeatureSectionProps {
  id: string;
  title: string;
  description: string;
  index: number;
  hoveredSection: number | null;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onTouchStart: () => void;
}

const FeatureSection = memo(({
  id,
  title,
  description,
  index,
  hoveredSection,
  onMouseEnter,
  onMouseLeave,
  onTouchStart
}: FeatureSectionProps) => {
  return (
    <article
      id={id}
      className={`bg-zinc-900/80 p-2 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer transition-transform duration-200 border border-zinc-800/80 hover:bg-zinc-800/90 hover:border-zinc-700/90 hover:shadow-lg hover:shadow-blue-900/10 transform-gpu ${
        hoveredSection === index ? "translate-x-2" : ""
      }`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      role="button"
      tabIndex={0}
      aria-label={title}
    >
      <h3 className="text-xs sm:text-sm lg:text-lg font-semibold mb-0.5 sm:mb-2 text-white">
        {title}
      </h3>
      <p className="text-zinc-300 text-[10px] sm:text-xs lg:text-base leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
        {description}
      </p>
    </article>
  );
});

FeatureSection.displayName = "FeatureSection";

export default FeatureSection; 