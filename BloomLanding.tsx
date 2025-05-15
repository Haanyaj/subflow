import { useState, useEffect, memo, useCallback } from "react";

const BloomLanding = memo(() => {
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
      <div className="min-h-screen w-full bg-transparent flex items-center justify-center py-1 px-1 sm:p-6 lg:p-8 overflow-auto relative">
        {/* Effet d'étoiles avec 3 couches pour la profondeur */}
        <div className="starry-sky" aria-hidden="true">
          <div className="stars-small"></div>
          <div className="stars-medium"></div>
          <div className="stars-large"></div>
        </div>
        
        <div className="w-full max-w-xxl min-h-[90vh] sm:min-h-[90vh] max-h-[98vh] sm:max-h-[90vh] bg-zinc-900/60 backdrop-blur-[2px] rounded-xl sm:rounded-2xl shadow-2xl relative overflow-hidden border border-zinc-800/80 flex flex-col z-10 transform-gpu">
          {/* Logo */}
          <header className="absolute top-2 left-2 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-10">
            <div
              className={`flex items-center transition-all duration-300 transform-gpu ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                SubFlow
                <span className="text-blue-500 ml-0.5">.</span>
              </h1>
            </div>
          </header>

          {/* Main Content */}
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-8 lg:gap-12 px-3 sm:px-8 lg:px-16 pt-12 pb-4 sm:py-12 lg:py-14 flex-1 overflow-hidden items-center">
            {/* Left Column */}
            <section className="flex flex-col justify-center mt-6 sm:mt-0">
              <h2 className="sr-only">Fonctionnalités de SubFlow</h2>
              <p
                className={`text-base sm:text-lg lg:text-xl text-zinc-300 mb-3 sm:mb-8 transition-all duration-300 transform-gpu ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Gardez le contrôle de vos abonnements.
                <br />
                SubFlow vous aide à suivre et optimiser vos dépenses mensuelles.
              </p>

              {/* App Store Section */}
              <div className="w-full flex flex-col gap-2 pb-3">
                <a
                  href="https://apps.apple.com/fr/app/subflow/id6741497228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-zinc-700 rounded-lg p-2 
                    bg-zinc-800/90 
                    flex items-center gap-2
                    transition-transform duration-200 
                    hover:bg-zinc-700 hover:border-zinc-600 
                    hover:shadow-md hover:shadow-blue-900/20
                    hover:scale-[1.01] transform-gpu"
                  aria-label="Télécharger SubFlow sur l'App Store"
                >
                  <div className="bg-white rounded-lg p-2 sm:p-3">
                    <img
                      src="/assets/images/Logo_App_Store_d'Apple.png"
                      alt="Logo App Store"
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      loading="eager"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-zinc-300 text-xs sm:text-sm">Disponible sur</p>
                    <p className="text-white font-semibold text-sm sm:text-base">App Store</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M5 18l6-6-6-6" />
                  </svg>
                </a>
                
                <a
                  href="https://play.google.com/store/apps/details?id=com.jessal.subflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-zinc-700 rounded-lg p-2 
                    bg-zinc-800/90 
                    flex items-center gap-2
                    transition-transform duration-200 
                    hover:bg-zinc-700 hover:border-zinc-600 
                    hover:shadow-md hover:shadow-blue-900/20
                    hover:scale-[1.01] transform-gpu"
                  aria-label="Télécharger SubFlow sur Google Play"
                >
                  <div className="bg-white rounded-lg p-2 sm:p-3">
                    <img
                      src="/assets/images/playstore.svg"
                      alt="Logo Google Play Store"
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      loading="eager"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-zinc-300 text-xs sm:text-sm">Disponible sur</p>
                    <p className="text-white font-semibold text-sm sm:text-base">Android</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M5 18l6-6-6-6" />
                  </svg>
                </a>
              </div>

              {/* Sections List */}
              <div className="space-y-2 sm:space-y-4 flex-1 max-h-[32vh] sm:max-h-[55vh] overflow-y-auto pr-1">
                {sections.map((section, index) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className={`bg-zinc-900/80 p-2.5 sm:p-5 rounded-lg sm:rounded-xl cursor-pointer transition-transform duration-200 border border-zinc-800/80 hover:bg-zinc-800/90 hover:border-zinc-700/90 hover:shadow-lg hover:shadow-blue-900/10 transform-gpu ${
                      hoveredSection === index ? "translate-x-2" : ""
                    }`}
                    onMouseEnter={() => handleSectionHover(index)}
                    onMouseLeave={() => handleSectionHover(null)}
                    onTouchStart={() => handleSectionHover(index)}
                    onTouchEnd={() => handleSectionHover(null)}
                    role="button"
                    tabIndex={0}
                    aria-label={section.title}
                  >
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2 text-white">
                      {section.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {section.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Right Column - Phone Mockups */}
            <section className="relative flex items-center justify-center h-[30vh] sm:h-[45vh] lg:h-full mt-3 mb-2 sm:mt-0 sm:mb-0">
              <h2 className="sr-only">Aperçu de l'application SubFlow</h2>
              <div className="relative w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] h-full flex items-center justify-center overflow-visible">
                {sections.map((section, index) => {
                  const isHovered = hoveredSection === index;
                  const baseZIndex = hasHoveredSection
                    ? (isHovered ? 30 : 20 - index)
                    : 30 - index;
                  
                  let transform = "";
                  if (!hasHoveredSection) {
                    transform = `translate3d(${index * 12}px, ${8}px, 0) rotate(${index * 12}deg)`;
                  } else if (hoveredSection <= index) {
                    transform = `translate3d(${(index - hoveredSection) * 6}px, ${(index - hoveredSection) * 10}px, 0) rotate(${(index - hoveredSection) * 4}deg)`;
                  } else {
                    transform = "translate3d(-150px, 0, 0)";
                  }
                  
                  transform += isHovered ? " scale(1.05)" : " scale(1)";
                  
                  const opacity = !hasHoveredSection
                    ? 1
                    : hoveredSection > index
                      ? 0
                      : 1 - (index - hoveredSection) * 0.3;
                  
                  return (
                    <div
                      key={index}
                      className="absolute rounded-2xl w-[140px] sm:w-[220px] lg:w-[280px] h-[280px] sm:h-[440px] lg:h-[560px] overflow-hidden shadow-lg will-change-transform"
                      style={{
                        left: `${index * 25}px`,
                        top: 0,
                        zIndex: baseZIndex,
                        transform,
                        opacity,
                        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow: 'none',
                        borderRadius: '1.5rem',
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
                })}
              </div>
            </section>
          </main>

          <footer className="p-2 sm:p-4 text-center text-zinc-500 text-xs">
            <p>© {new Date().getFullYear()} SubFlow - Application de suivi des abonnements et dépenses</p>
          </footer>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>
        
        {/* Données structurées pour les moteurs de recherche */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "SubFlow",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "iOS, Android",
            "description": "Application de suivi des abonnements et dépenses mensuelles pour garder le contrôle de votre budget.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "screenshot": [
              "/assets/images/subflow-start.png",
              "/assets/images/subflow-mainscreen.png",
              "/assets/images/subflow-stat.png"
            ]
          })
        }} />
      </div>
    </>
  );
});

BloomLanding.displayName = "SubFlow";

export default BloomLanding;
