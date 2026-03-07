import { useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Language = "fr" | "en";

const BloomLanding = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "fr";
    return window.localStorage.getItem("subflow-language") === "en" ? "en" : "fr";
  });
  const shouldReduceMotion = useReducedMotion();

  const content = {
    fr: {
      badge: "Suivi abonnements simplifié",
      title: "Le suivi de vos abonnements, en toute",
      titleAccent: "simplicité.",
      description:
        "SubFlow centralise et analyse toutes vos dépenses récurrentes. Suivi abonnements, visualisation du budget et économies identifiées en un coup d'œil.",
      benefitsTitle: "Pourquoi SubFlow pour le suivi de vos abonnements ?",
      faqTitle: "Questions fréquentes",
      downloadOn: "Télécharger sur",
      featuredIn: "Reconnu par",
      rights: "Tous droits réservés.",
      socialProof: [
        { value: "4,9/5", label: "note App Store" },
        { value: "640", label: "notes App Store" },
        { value: "20K+", label: "téléchargements" }
      ],
      benefits: [
        {
          title: "Suivi abonnements centralisé",
          description:
            "Rassemblez tous vos abonnements au même endroit pour savoir précisément ce que vous payez chaque mois."
        },
        {
          title: "Budget et dépenses sous contrôle",
          description:
            "Repérez les hausses de prix, visualisez vos dépenses mensuelles et anticipez chaque prélèvement grâce au suivi automatique."
        },
        {
          title: "Vos données restent privées",
          description:
            "Vos informations restent stockées localement sur votre appareil. Aucune donnée n'est partagée avec des tiers."
        },
        {
          title: "Économies identifiées rapidement",
          description:
            "Détectez les abonnements inutilisés, les doublons et les opportunités d'optimisation pour réduire vos dépenses récurrentes."
        }
      ],
      faqs: [
        {
          question: "Quelle est la meilleure application de suivi abonnements ?",
          answer:
            "SubFlow est l'application de suivi abonnements la mieux notée (4,9/5 sur l'App Store). Elle centralise vos abonnements, analyse vos dépenses et vous alerte avant chaque prélèvement."
        },
        {
          question: "Comment faire le suivi de ses abonnements mensuels ?",
          answer:
            "Avec SubFlow, ajoutez vos abonnements en quelques secondes. L'application assure le suivi automatique de chaque échéance, avec une vue claire de vos dépenses récurrentes mois par mois."
        },
        {
          question: "Le suivi abonnements avec SubFlow est-il gratuit ?",
          answer:
            "Oui, le suivi de vos abonnements est entièrement gratuit avec SubFlow. Des fonctionnalités avancées sont disponibles via SubFlow+ pour une analyse encore plus poussée."
        },
        {
          question: "Sur quels appareils puis-je faire mon suivi abonnements ?",
          answer:
            "SubFlow est disponible sur iPhone, iPad et Android. Votre suivi abonnements est accessible partout, avec une interface conçue pour une utilisation simple au quotidien."
        },
        {
          question: "Comment SubFlow m'aide à économiser sur mes abonnements ?",
          answer:
            "Le suivi abonnements de SubFlow détecte les services inutilisés, les doublons et les augmentations de prix pour vous permettre d'économiser en moyenne 30 % sur vos dépenses récurrentes."
        }
      ],
      slides: [
        {
          id: 1,
          title: "Suivi abonnements en un coup d'œil",
          description:
            "Visualisez tous vos abonnements dans une interface claire. SubFlow centralise vos dépenses récurrentes au même endroit.",
          image: "/assets/images/screenshots/subscription-overview.png"
        },
        {
          id: 2,
          title: "Analysez vos dépenses",
          description:
            "Des graphiques intuitifs pour comprendre où va votre argent. Identifiez les tendances et optimisez vos abonnements.",
          image: "/assets/images/screenshots/spending-analytics.png"
        },
        {
          id: 3,
          title: "Budget mensuel maîtrisé",
          description:
            "Suivez l'évolution de vos dépenses mois après mois. SubFlow vous aide à atteindre vos objectifs financiers.",
          image: "/assets/images/screenshots/monthly-budget-tracking.png"
        },
        {
          id: 4,
          title: "Gérez vos catégories",
          description: "Organisez vos abonnements par catégorie pour une meilleure visibilité de vos dépenses.",
          image: "/assets/images/screenshots/subscription-categories.png"
        },
        {
          id: 5,
          title: "Détails précis",
          description: "Consultez le détail de chaque abonnement avec toutes les informations importantes.",
          image: "/assets/images/screenshots/subscription-details.png"
        },
        {
          id: 6,
          title: "Interface intuitive",
          description: "Une application conçue pour être simple et agréable à utiliser au quotidien.",
          image: "/assets/images/screenshots/intuitive-interface.png"
        }
      ]
    },
    en: {
      badge: "Take back control",
      title: "Master your subscriptions with",
      titleAccent: "simplicity.",
      description:
        "SubFlow brings all your monthly spending together in one place. Track subscriptions, spot savings opportunities, and stay fully in control.",
      benefitsTitle: "Why choose SubFlow?",
      faqTitle: "Frequently asked questions",
      downloadOn: "Download on",
      featuredIn: "Featured in",
      rights: "All rights reserved.",
      socialProof: [
        { value: "4.9/5", label: "App Store rating" },
        { value: "640", label: "App Store reviews" },
        { value: "20K+", label: "downloads" }
      ],
      benefits: [
        {
          title: "Clear subscription tracking",
          description:
            "Bring all recurring subscriptions together so you always know exactly what you pay every month."
        },
        {
          title: "Better budget visibility",
          description:
            "Spot price increases, monitor recurring expenses, and stay ahead of upcoming charges."
        },
        {
          title: "Your data stays local",
          description:
            "Your information stays stored locally on your device so you keep control over your privacy."
        },
        {
          title: "Savings you can actually find",
          description:
            "Quickly identify unused subscriptions, duplicates, and concrete ways to optimize your spending."
        }
      ],
      faqs: [
        {
          question: "How can I manage my monthly subscriptions efficiently?",
          answer:
            "SubFlow brings your subscriptions into one interface so you can track recurring expenses, view due dates, and keep a clear picture of your budget."
        },
        {
          question: "How do I track subscription spending over time?",
          answer:
            "The app helps you visualize monthly spending trends, analyze categories, and understand how recurring costs affect your budget."
        },
        {
          question: "Is SubFlow a free app?",
          answer:
            "Yes, SubFlow offers a free experience, with advanced features available through SubFlow+ for deeper analysis and optimization."
        },
        {
          question: "Which devices support SubFlow?",
          answer:
            "SubFlow is available on iPhone, iPad, and Android, with an experience designed for simple everyday subscription management."
        }
      ],
      slides: [
        {
          id: 1,
          title: "See your spending clearly",
          description:
            "Get a clear overview of your subscriptions. SubFlow brings all your monthly expenses together in one place.",
          image: "/assets/images/screenshots/subscription-overview.png"
        },
        {
          id: 2,
          title: "Analyze your habits",
          description:
            "Use intuitive charts to understand your spending. Spot trends and identify optimization opportunities.",
          image: "/assets/images/screenshots/spending-analytics.png"
        },
        {
          id: 3,
          title: "Track your budget",
          description:
            "Keep an eye on how your spending evolves month after month. SubFlow helps you stay aligned with your financial goals.",
          image: "/assets/images/screenshots/monthly-budget-tracking.png"
        },
        {
          id: 4,
          title: "Manage your categories",
          description: "Organize subscriptions by category for a clearer view of where your money goes.",
          image: "/assets/images/screenshots/subscription-categories.png"
        },
        {
          id: 5,
          title: "Detailed insights",
          description: "See every subscription in detail with all the important information at a glance.",
          image: "/assets/images/screenshots/subscription-details.png"
        },
        {
          id: 6,
          title: "Intuitive interface",
          description: "An app designed to feel simple, clear, and pleasant to use every day.",
          image: "/assets/images/screenshots/intuitive-interface.png"
        }
      ]
    }
  } as const;

  const t = content[language];
  const slides = t.slides;
  const socialProof = t.socialProof;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("subflow-language", language);
    document.documentElement.lang = language;
  }, [language]);

  // Auto-slide
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length, shouldReduceMotion]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <div className="min-h-screen w-full bg-[#09090b] text-zinc-100 overflow-x-hidden relative selection:bg-blue-500/30 font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#09090b]" />
        <div className="animated-ambient-grid" />
        <div className="animated-ambient-aurora" />
        <div className="animated-ambient-beam" />
        <div className="animated-ambient-noise" />
        
        {/* Glow 1 */}
        <motion.div 
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.18, 1],
            x: [0, 60, 0],
            y: [0, 40, 0],
            opacity: [0.12, 0.2, 0.12]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[8%] -left-[14%] w-[260px] h-[260px] sm:w-[460px] sm:h-[460px] lg:w-[760px] lg:h-[760px] rounded-full bg-blue-500/18 blur-[90px] sm:blur-[120px]" 
        />
        
        {/* Glow 2 */}
        <motion.div 
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.24, 1],
            x: [0, -36, 0],
            y: [0, -50, 0],
            opacity: [0.08, 0.16, 0.08]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[36%] -right-[10%] w-[220px] h-[220px] sm:w-[360px] sm:h-[360px] lg:w-[560px] lg:h-[560px] rounded-full bg-indigo-500/18 blur-[75px] sm:blur-[115px]" 
        />

        {/* Glow 3 */}
        <motion.div 
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.14, 1],
            x: [0, 35, 0],
            y: [0, 24, 0],
            opacity: [0.08, 0.14, 0.08]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-[12%] left-[18%] w-[240px] h-[240px] sm:w-[420px] sm:h-[420px] lg:w-[540px] lg:h-[540px] rounded-full bg-cyan-700/14 blur-[75px] sm:blur-[110px]" 
        />
        <div className="animated-ambient-vignette" />
      </div>

      <div className="min-h-screen w-full flex flex-col relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <header 
          className={`px-6 sm:px-12 py-8 transition-all duration-1000 ease-out flex items-center justify-between ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
              SubFlow<span className="text-blue-500">.</span>
            </div>
          </div>
          <div
            role="group"
            aria-label={language === "fr" ? "Sélecteur de langue" : "Language selector"}
            className="relative flex items-center rounded-full border border-zinc-800/80 bg-zinc-900/80 p-1 shadow-[0_4px_24px_rgba(0,0,0,0.22)] backdrop-blur-md"
          >
            {/* sliding pill */}
            <motion.span
              layout
              layoutId="lang-pill"
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className={`absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-blue-500 shadow-[0_4px_16px_rgba(59,130,246,0.45)] ${
                language === "fr" ? "left-1" : "left-[calc(50%+3px)]"
              }`}
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`relative z-10 w-10 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 ${
                language === "fr" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
              aria-pressed={language === "fr"}
              aria-label="Passer le site en français"
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`relative z-10 w-10 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 ${
                language === "en" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
              aria-pressed={language === "en"}
              aria-label="Switch website language to English"
            >
              EN
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 pb-12 pt-8 gap-12 lg:gap-24">
          
          {/* Left Column - Text */}
          <div 
            className={`flex-1 flex flex-col justify-center transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 w-fit mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">{t.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15] text-white">
              {t.title} <span className="text-blue-500">{t.titleAccent}</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl">
              {t.description}
            </p>

            <div className="grid grid-cols-1 min-[460px]:grid-cols-3 gap-3 mb-10 max-w-2xl">
              {socialProof.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-900/70 px-4 py-4 backdrop-blur-sm"
                >
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-zinc-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://apps.apple.com/fr/app/subflow/id6741497228"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all duration-300"
              >
                <img src="/assets/images/logos/app-store.png" alt="App Store" className="w-6 h-6 object-contain" />
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 tracking-wide uppercase font-semibold">{t.downloadOn}</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </a>
              
              <a
                href="https://play.google.com/store/apps/details?id=com.jessal.subflow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all duration-300"
              >
                <img src="/assets/images/logos/google-play.svg" alt="Google Play" className="w-6 h-6 object-contain" />
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 tracking-wide uppercase font-semibold">{t.downloadOn}</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </a>
            </div>

            {/* Press */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-zinc-800/80 pt-6">
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{t.featuredIn}</span>
              <div className="flex items-center gap-6">
                <a href="https://www.numerama.com/tech/1910173-cest-quoi-subflow-cette-appli-pour-suivre-ses-abonnements-qui-est-dans-les-plus-telechargees-de-lapp-store.html" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  Numerama
                </a>
                <a href="https://www.justgeek.fr/subflow-application-gestion-abonnements-136534/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  JustGeek
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Images Showcase */}
          <div 
            className={`flex-1 w-full max-w-md lg:max-w-none flex flex-col justify-center transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative w-full aspect-[4/5] max-w-[380px] sm:max-w-[420px] lg:max-w-[480px] mx-auto flex flex-col">
              
              {/* Image Presentation */}
              <div className="relative w-full flex-1 mb-8">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
              </div>

              {/* Text Content */}
              <div className="text-center min-h-[80px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-xl font-medium text-white mb-2">{slides[currentSlide].title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">{slides[currentSlide].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Custom Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label={language === "fr" ? "Précédent" : "Previous"}
              >
                <ChevronLeft size={18} />
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="py-2 px-1 group"
                    aria-label={language === "fr" ? `Aller au slide ${index + 1}` : `Go to slide ${index + 1}`}
                  >
                    <div className={`h-[3px] transition-all duration-300 rounded-full ${
                      index === currentSlide 
                        ? "w-8 bg-blue-500" 
                        : "w-4 bg-zinc-700 group-hover:bg-zinc-500"
                    }`} />
                  </button>
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label={language === "fr" ? "Suivant" : "Next"}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </main>

        <section className="px-6 sm:px-12 py-8 sm:py-12">
          <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/70 bg-zinc-900/45 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="mb-8 max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                SubFlow
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {t.benefitsTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
              {t.benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className="group rounded-[24px] border border-zinc-800/80 bg-gradient-to-b from-zinc-950/80 to-zinc-950/40 p-5 sm:p-6 transition-colors hover:border-blue-500/30"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-sm font-semibold text-zinc-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-12 pb-10 sm:pb-14">
          <div className="max-w-5xl">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                FAQ
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {t.faqTitle}
              </h2>
            </div>
            <div className="grid gap-4">
              {t.faqs.map((faq, index) => (
                <article
                  key={faq.question}
                  className="relative overflow-hidden rounded-[24px] border border-zinc-800/70 bg-zinc-900/40 p-5 sm:p-6 md:p-7"
                >
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500/60 via-blue-500/10 to-transparent" />
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex min-w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-semibold text-zinc-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="pl-0 sm:pl-[3.25rem] text-sm sm:text-base leading-relaxed text-zinc-400">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer
          className={`px-6 sm:px-12 py-6 border-t border-zinc-800/70 transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-zinc-500">
            <div className="flex items-center gap-1 font-semibold text-zinc-200">
              <span>SubFlow</span>
              <span className="text-blue-500">.</span>
            </div>
            <p>© {new Date().getFullYear()} SubFlow. {t.rights}</p>
          </div>
        </footer>
      </div>
    </div>
  );
});

BloomLanding.displayName = "SubFlow";

export default BloomLanding;