import { useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BloomLanding = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const slides = [
    {
      id: 1,
      title: "Visualisez vos dépenses",
      description: "Accédez à une vue d'ensemble claire de vos abonnements. SubFlow regroupe toutes vos dépenses mensuelles au même endroit.",
      image: "/assets/images/screenshots/feature-1.png"
    },
    {
      id: 2,
      title: "Analysez vos habitudes",
      description: "Profitez de graphiques intuitifs pour comprendre vos dépenses. Identifiez les tendances et les opportunités d'optimisation.",
      image: "/assets/images/screenshots/feature-2.png"
    },
    {
      id: 3,
      title: "Suivez votre budget",
      description: "Gardez un œil sur l'évolution de vos dépenses mois après mois. SubFlow vous aide à maintenir vos objectifs financiers.",
      image: "/assets/images/screenshots/feature-3.png"
    },
    {
      id: 4,
      title: "Gérez vos catégories",
      description: "Organisez vos abonnements par catégorie pour une meilleure visibilité de vos dépenses.",
      image: "/assets/images/screenshots/feature-4.png"
    },
    {
      id: 5,
      title: "Détails précis",
      description: "Consultez le détail de chaque abonnement avec toutes les informations importantes.",
      image: "/assets/images/screenshots/feature-5.png"
    },
    {
      id: 6,
      title: "Interface intuitive",
      description: "Une application conçue pour être simple et agréable à utiliser au quotidien.",
      image: "/assets/images/screenshots/feature-6.png"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, shouldReduceMotion]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden relative">
      {/* Effet d'étoiles */}
      <div className="starry-sky" aria-hidden="true">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </div>

      {/* Conteneur principal */}
      <div className="h-full w-full flex flex-col relative z-10">
        
        {/* Header */}
        <header 
          className={`p-6 sm:p-8 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
            SubFlow<span className="text-blue-500">.</span>
          </h1>
        </header>

        {/* Contenu principal */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 sm:px-8 lg:px-16 pb-6 overflow-hidden">
          
          {/* Colonne gauche - Texte */}
          <div 
            className={`flex flex-col justify-center transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-lg sm:text-xl text-zinc-300 mb-6 leading-relaxed">
              Gardez le contrôle de vos abonnements.<br />
              SubFlow vous aide à suivre et optimiser vos dépenses mensuelles.
            </p>

            {/* Slide info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation slides */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700 transition-colors border border-zinc-700"
                aria-label="Slide précédent"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-blue-500 w-6" 
                        : "bg-zinc-600 hover:bg-zinc-500"
                    }`}
                    aria-label={`Aller au slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700 transition-colors border border-zinc-700"
                aria-label="Slide suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Boutons stores */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/fr/app/subflow/id6741497228"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-lg border border-zinc-700 transition-all hover:scale-105"
              >
                <img 
                  src="/assets/images/logos/app-store.png" 
                  alt="App Store" 
                  className="w-6 h-6 object-contain"
                />
                <div className="text-left">
                  <div className="text-[10px] text-zinc-400">Télécharger sur</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-lg border border-zinc-700 transition-all hover:scale-105 opacity-50 cursor-not-allowed"
              >
                <img 
                  src="/assets/images/logos/google-play.svg" 
                  alt="Google Play" 
                  className="w-6 h-6 object-contain"
                />
                <div className="text-left">
                  <div className="text-[10px] text-zinc-400">Bientôt sur</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div 
            className={`flex items-center justify-center transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative w-full max-w-xs">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-blue-500/30 rounded-3xl blur-3xl"
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
              
              {/* Image avec animation */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="relative z-10 w-full rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.4 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer 
          className={`p-6 sm:p-8 flex items-center justify-between text-sm text-zinc-500 border-t border-zinc-800/50 transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-1">
            <span className="font-bold text-white">SubFlow</span>
            <span className="text-blue-500">.</span>
          </div>
          <p>© {new Date().getFullYear()} SubFlow. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  );
});

BloomLanding.displayName = "SubFlow";

export default BloomLanding;
