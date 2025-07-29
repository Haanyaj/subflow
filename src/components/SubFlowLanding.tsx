import { useState, useEffect, memo, useCallback } from "react";
import Header from "./Header";
import AppStoreButtons from "./AppStoreButtons";
import FeatureSection from "./FeatureSection";
import PhoneMockup from "./PhoneMockup";
import Footer from "./Footer";
import StructuredData from "./StructuredData";
import ParticleNetwork from "./ParticleNetwork";

const SubFlowLanding = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  useEffect(() => {
    // Déclenchement différé de l'animation d'entrée pour améliorer le chargement initial
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionHover = useCallback((index: number | null) => {
    setHoveredSection(index);
  }, []);

  const sections = [
    {
      id: "visualize",
      title: "Visualisez vos dépenses",
      description:
        "Accédez à une vue d'ensemble claire de vos abonnements. SubFlow regroupe toutes vos dépenses mensuelles au même endroit.",
    },
    {
      id: "analyze",
      title: "Analysez vos habitudes",
      description:
        "Profitez de graphiques intuitifs pour comprendre vos dépenses. Identifiez les tendances et les opportunités d'optimisation.",
    },
    {
      id: "track",
      title: "Suivez votre budget",
      description:
        "Gardez un œil sur l'évolution de vos dépenses mois après mois. SubFlow vous aide à maintenir vos objectifs financiers.",
    },
  ];

  // Pre-calcule des éléments qui ne changent pas entre les rendus
  const hasHoveredSection = hoveredSection !== null;

  return (
    <>
      <div className="h-screen w-full bg-transparent flex items-center justify-center overflow-hidden relative">
        {/* Animation de particules connectées en arrière-plan */}
        <ParticleNetwork />
 
        <div className="w-full h-full bg-transparent backdrop-blur-[0.5px] sm:backdrop-blur-[1px] relative overflow-hidden flex flex-col z-10 transform-gpu">
          {/* Logo */}
          <Header isVisible={isVisible} />

          {/* Main Content - Layout vertical sur mobile, grille sur desktop */}
          <main className="flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-12 px-6 sm:px-8 lg:px-16 pb-4 sm:py-4 lg:py-6 flex-1 overflow-hidden -mt-4 sm:-mt-6 lg:-mt-8">
            {/* Left Column - Toujours en premier sur mobile */}
            <section className="flex flex-col justify-center mt-0 h-full order-1 lg:order-1">
              <h2 className="sr-only">Fonctionnalités de SubFlow</h2>
              <p
                className={`text-base sm:text-lg lg:text-xl text-zinc-300 mb-3 sm:mb-4 transition-all duration-300 transform-gpu ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Gardez le contrôle de vos <span className="text-blue-400 font-semibold">abonnements</span>.
                <br />
                SubFlow vous aide à suivre et optimiser vos <span className="text-blue-400 font-semibold">dépenses mensuelles</span>.
              </p>

              {/* App Store Section */}
              <div className="mb-4 sm:mb-0">
                <AppStoreButtons />
              </div>

              {/* Sections List */}
              <div className="space-y-2 sm:space-y-3 flex-1 min-h-0 overflow-hidden pr-1">
                {sections.map((section, index) => (
                  <FeatureSection
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    description={section.description}
                    index={index}
                    hoveredSection={hoveredSection}
                    onMouseEnter={handleSectionHover}
                    onMouseLeave={() => handleSectionHover(null)}
                    onTouchStart={() => handleSectionHover(index === hoveredSection ? null : index)}
                  />
                ))}
              </div>
            </section>

            {/* Right Column - Phone Mockups - En second sur mobile */}
            <section className="flex items-center justify-center h-full mt-0 sm:mt-0 order-2 lg:order-2">
              <h2 className="sr-only">Aperçu de l'application SubFlow</h2>
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[400px] h-full flex items-center justify-center overflow-visible phone-mockup-container">
                {sections.map((section, index) => (
                  <PhoneMockup
                    key={index}
                    section={section}
                    index={index}
                    hoveredSection={hoveredSection}
                    hasHoveredSection={hasHoveredSection}
                  />
                ))}
              </div>
            </section>
          </main>

          <Footer />
        </div>
        
        {/* Données structurées pour les moteurs de recherche */}
        <StructuredData />
      </div>
    </>
  );
});

SubFlowLanding.displayName = "SubFlowLanding";

export default SubFlowLanding; 