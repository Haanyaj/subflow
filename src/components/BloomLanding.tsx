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
        
        <div className="w-full max-w-xxl min-h-[95vh] sm:min-h-[900px] max-h-[98vh] sm:max-h-[90vh] bg-zinc-900/40 sm:bg-zinc-900/60 backdrop-blur-[1px] sm:backdrop-blur-[2px] rounded-xl sm:rounded-2xl shadow-2xl relative overflow-hidden border border-zinc-800/80 flex flex-col z-10 transform-gpu">
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
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-12 px-3 sm:px-6 lg:px-16 pt-12 pb-4 sm:py-10 lg:py-14 flex-1 overflow-hidden items-center">
            {/* Left Column */}
            <section className="flex flex-col justify-center mt-6 sm:mt-0">
              <h2 className="sr-only">Fonctionnalités de SubFlow</h2>
              <p
                className={`text-base sm:text-lg lg:text-xl text-zinc-300 mb-2 sm:mb-6 transition-all duration-300 transform-gpu ${
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
              <div className="w-full flex flex-row justify-center sm:flex-col gap-2 pb-2 sm:gap-3 sm:pb-5">
                <a
                  href="https://apps.apple.com/fr/app/subflow/id6741497228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-zinc-700 rounded-lg p-1.5 sm:p-2 
                    bg-zinc-800/90 
                    flex items-center gap-1 sm:gap-2
                    transition-transform duration-200 
                    hover:bg-zinc-700 hover:border-zinc-600 
                    hover:shadow-md hover:shadow-blue-900/20
                    hover:scale-[1.01] transform-gpu
                    w-[48%] sm:w-auto max-w-[180px] sm:max-w-none"
                  aria-label="Télécharger SubFlow sur l'App Store"
                >
                  <div className="bg-white rounded-lg p-1.5 sm:p-3">
                    <img
                      src="/assets/images/Logo_App_Store_d'Apple.png"
                      alt="Logo App Store"
                      className="w-6 h-6 sm:w-10 sm:h-10 object-contain"
                      loading="eager"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-zinc-300 text-[10px] sm:text-sm">Disponible sur</p>
                    <p className="text-white font-semibold text-xs sm:text-base">App Store</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-400 hover:text-white transition-colors hidden sm:block"
                    aria-hidden="true"
                  >
                    <path d="M5 18l6-6-6-6" />
                  </svg>
                </a>
                
                <a
                  href="https://play.google.com/store/apps/details?id=com.jessal.subflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-zinc-700 rounded-lg p-1.5 sm:p-2 
                    bg-zinc-800/90 
                    flex items-center gap-1 sm:gap-2
                    transition-transform duration-200 
                    hover:bg-zinc-700 hover:border-zinc-600 
                    hover:shadow-md hover:shadow-blue-900/20
                    hover:scale-[1.01] transform-gpu
                    w-[48%] sm:w-auto max-w-[180px] sm:max-w-none"
                  aria-label="Télécharger SubFlow sur Google Play"
                >
                  <div className="bg-white rounded-lg p-1.5 sm:p-3">
                    <img
                      src="/assets/images/playstore.svg"
                      alt="Logo Google Play Store"
                      className="w-6 h-6 sm:w-10 sm:h-10 object-contain"
                      loading="eager"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-zinc-300 text-[10px] sm:text-sm">Disponible sur</p>
                    <p className="text-white font-semibold text-xs sm:text-base">Android</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-400 hover:text-white transition-colors hidden sm:block"
                    aria-hidden="true"
                  >
                    <path d="M5 18l6-6-6-6" />
                  </svg>
                </a>
              </div>

              {/* Sections List */}
              <div className="space-y-1 sm:space-y-3 flex-1 max-h-[22vh] sm:max-h-[55vh] overflow-y-auto pr-1 mb-2 sm:mb-0">
                {sections.map((section, index) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className={`bg-zinc-900/80 p-2 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer transition-transform duration-200 border border-zinc-800/80 hover:bg-zinc-800/90 hover:border-zinc-700/90 hover:shadow-lg hover:shadow-blue-900/10 transform-gpu ${
                      hoveredSection === index ? "translate-x-2" : ""
                    }`}
                    onMouseEnter={() => handleSectionHover(index)}
                    onMouseLeave={() => handleSectionHover(null)}
                    onTouchStart={() => handleSectionHover(index === hoveredSection ? null : index)}
                    role="button"
                    tabIndex={0}
                    aria-label={section.title}
                  >
                    <h3 className="text-xs sm:text-sm lg:text-lg font-semibold mb-0.5 sm:mb-2 text-white">
                      {section.title}
                    </h3>
                    <p className="text-zinc-300 text-[10px] sm:text-xs lg:text-base leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {section.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Right Column - Phone Mockups */}
            <section className="flex items-center justify-center h-[45vh] sm:h-[45vh] lg:h-full mt-0 sm:mt-0">
              <h2 className="sr-only">Aperçu de l'application SubFlow</h2>
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[400px] h-full flex items-center justify-center overflow-visible">
                {sections.map((section, index) => {
                  const isHovered = hoveredSection === index;
                  const baseZIndex = hasHoveredSection
                    ? (isHovered ? 30 : 20 - index)
                    : 30 - index;
                  
                  let transform = "";
                  if (!hasHoveredSection) {
                    // Position par défaut
                    transform = `translate3d(${index * 10}px, ${5}px, 0) rotate(${index * 8}deg)`;
                  } else if (hoveredSection <= index) {
                    transform = `translate3d(${(index - hoveredSection) * 8}px, ${(index - hoveredSection) * 8}px, 0) rotate(${(index - hoveredSection) * 4}deg)`;
                  } else {
                    transform = "translate3d(-100px, 0, 0)";
                  }
                  
                  // Desktop original
                  let desktopTransform = "";
                  if (!hasHoveredSection) {
                    desktopTransform = `translate3d(${index * 25}px, ${15}px, 0) rotate(${index * 15}deg)`;
                  } else if (hoveredSection <= index) {
                    desktopTransform = `translate3d(${(index - hoveredSection) * 10}px, ${(index - hoveredSection) * 15}px, 0) rotate(${(index - hoveredSection) * 5}deg)`;
                  } else {
                    desktopTransform = "translate3d(-200px, 0, 0)";
                  }
                  
                  transform += isHovered ? " scale(1.05)" : " scale(1)";
                  desktopTransform += isHovered ? " scale(1.05)" : " scale(1)";
                  
                  const opacity = !hasHoveredSection
                    ? 1
                    : hoveredSection > index
                      ? 0
                      : 1 - (index - hoveredSection) * 0.3;
                  
                  // Styles mobiles/desktop séparés avec préfixes responsifs
                  const mobileStyle = {
                    left: "50%", 
                    marginLeft: `-${80}px`,
                    top: "50%",
                    marginTop: `-${160}px`,
                    zIndex: baseZIndex,
                    transform,
                    opacity,
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none',
                    borderRadius: '1.5rem',
                  };
                  
                  const desktopStyle = {
                    '@media (min-width: 640px)': {
                      left: `${index * 50}px`,
                      top: 0,
                      marginLeft: 0,
                      marginTop: 0,
                      transform: desktopTransform
                    }
                  };
                  
                  return (
                    <div
                      key={index}
                      className="absolute rounded-2xl w-[160px] sm:w-[200px] lg:w-[280px] h-[320px] sm:h-[400px] lg:h-[560px] overflow-hidden shadow-lg will-change-transform border-0"
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
