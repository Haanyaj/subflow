import { memo } from "react";

interface PhoneMockupProps {
  section: {
    id: string;
    title: string;
  };
  index: number;
  hoveredSection: number | null;
  hasHoveredSection: boolean;
}

const PhoneMockup = memo(({
  section,
  index,
  hoveredSection,
  hasHoveredSection
}: PhoneMockupProps) => {
  const isHovered = hoveredSection === index;
  const baseZIndex = hasHoveredSection
    ? (isHovered ? 30 : 20 - index)
    : 30 - index;
  
  let transform = "";
  if (!hasHoveredSection) {
    // Position par défaut
    transform = `translate3d(${index * 10}px, ${5}px, 0) rotate(${index * 8}deg)`;
  } else if (hoveredSection !== null && hoveredSection <= index) {
    transform = `translate3d(${(index - hoveredSection) * 8}px, ${(index - hoveredSection) * 8}px, 0) rotate(${(index - hoveredSection) * 4}deg)`;
  } else {
    transform = "translate3d(-100px, 0, 0)";
  }
  
  // Desktop original
  let desktopTransform = "";
  if (!hasHoveredSection) {
    desktopTransform = `translate3d(${index * 25}px, ${15}px, 0) rotate(${index * 15}deg)`;
  } else if (hoveredSection !== null && hoveredSection <= index) {
    desktopTransform = `translate3d(${(index - hoveredSection) * 10}px, ${(index - hoveredSection) * 15}px, 0) rotate(${(index - hoveredSection) * 5}deg)`;
  } else {
    desktopTransform = "translate3d(-200px, 0, 0)";
  }
  
  transform += isHovered ? " scale(1.05)" : " scale(1)";
  desktopTransform += isHovered ? " scale(1.05)" : " scale(1)";
  
  const opacity = !hasHoveredSection
    ? 1
    : hoveredSection !== null && hoveredSection > index
      ? 0
      : hoveredSection !== null ? 1 - (index - hoveredSection) * 0.3 : 1;
  
  // Styles mobiles/desktop séparés avec préfixes responsifs
  const mobileStyle = {
    left: "50%", 
    marginLeft: `-${80}px`,
    top: "50%",
    marginTop: `-${280}px`,
    zIndex: baseZIndex,
    transform,
    opacity,
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: '1.5rem',
  };
  
  const desktopStyle = {
    '@media (minWidth: 640px)': {
      left: `${index * 50}px`,
      top: '-60px',
      marginLeft: 0,
      marginTop: 0,
      transform: desktopTransform
    }
  };
  
  return (
    <div
      className="absolute rounded-2xl w-[160px] sm:w-[200px] lg:w-[280px] h-[320px] sm:h-[400px] lg:h-[560px] overflow-hidden shadow-lg will-change-transform border-0 phone-mockup"
      data-index={index}
      style={{
        ...mobileStyle,
        ...desktopStyle
      }}
      aria-label={`Écran de la fonctionnalité: ${section.title}`}
    >
      <img
        src={`/assets/images/screen${index + 1}.png`}
        alt={`Capture d'écran illustrant la fonctionnalité: ${section.title}`}
        className="w-full h-full object-cover"
        loading={index === 0 ? "eager" : "lazy"}
        width="280"
        height="560"
      />
    </div>
  );
});

PhoneMockup.displayName = "PhoneMockup";

export default PhoneMockup; 