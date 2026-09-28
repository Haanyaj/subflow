import { useState, useEffect, memo, useCallback, type MouseEvent, type CSSProperties } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  TrendingUp,
  ShieldCheck,
  PiggyBank,
  Plus,
  ArrowUp,
  Star,
  BellRing,
  Pause,
  Play,
} from "lucide-react";
import { useTranslation, type Language } from "../i18n/LanguageContext";

const APP_STORE_URL = "https://apps.apple.com/fr/app/subflow/id6741497228";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.jessal.subflow";

const BENEFIT_ICONS = [Layers, TrendingUp, ShieldCheck, PiggyBank];
const BENEFIT_LAYOUT = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
const BENEFIT_GLOWS = [
  "from-blue-500/30",
  "from-violet-500/25",
  "from-cyan-400/25",
  "from-rose-500/20",
];

// Stagger position for a .reveal-item (see index.css)
const order = (i: number) => ({ "--i": i }) as CSSProperties;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

// Reveals [data-reveal] sections once they scroll into view.
function useScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    document.documentElement.classList.add("js-reveal");
    return () => observer.disconnect();
  }, []);
}

function formatEuro(value: number, language: Language) {
  return new Intl.NumberFormat(language === "fr" ? "fr-FR" : "en-IE", {
    style: "currency",
    currency: "EUR",
    signDisplay: "always",
  }).format(value);
}

function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

const Wordmark = ({ className = "" }: { className?: string }) => (
  <span className={`font-display font-extrabold tracking-[-0.04em] text-white ${className}`}>
    SubFlow<span className="text-[#2f7bff]">.</span>
  </span>
);

const StoreButtons = ({ label }: { label: string }) => (
  <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
    {[
      { href: APP_STORE_URL, icon: "/assets/images/logos/app-store.webp", name: "App Store" },
      { href: PLAY_STORE_URL, icon: "/assets/images/logos/google-play.svg", name: "Google Play" },
    ].map((store) => (
      <a
        key={store.name}
        href={store.href}
        target="_blank"
        rel="noopener noreferrer"
        className="glass glass-button flex items-center gap-2.5 rounded-2xl py-3 pl-3 pr-3 sm:gap-3 sm:pl-4 sm:pr-6"
      >
        <img src={store.icon} alt="" aria-hidden="true" width={28} height={28} className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7" />
        <span className="text-left leading-tight">
          <span className="block whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-mute)] sm:text-[10px] sm:tracking-[0.14em]">
            {label}
          </span>
          <span className="block whitespace-nowrap text-sm font-semibold text-white sm:text-[15px]">{store.name}</span>
        </span>
      </a>
    ))}
  </div>
);

const Eyebrow = ({ children }: { children: string }) => (
  <span className="glass-subtle inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#2f7bff]" />
    {children}
  </span>
);

const BloomLanding = memo(() => {
  // `animate` stays false for the first slide so the LCP image isn't delayed by an entrance animation
  const [slide, setSlide] = useState({ index: 0, animate: false });
  const [isHovered, setIsHovered] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useTranslation();
  const shouldReduceMotion = usePrefersReducedMotion();
  useScrollReveal();

  const slides = t.slides;
  const ui = t.ui;
  const currentSlide = slide.index;

  const goToSlide = useCallback((next: (index: number) => number) => {
    setSlide((prev) => ({ index: next(prev.index), animate: true }));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isHovered || !autoplay) return;
    const interval = setInterval(() => {
      goToSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length, shouldReduceMotion, isHovered, autoplay, goToSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length, goToSlide]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-[var(--ink)]">
      {/* Ambient light field — gives the glass something to refract */}
      <div className="ambient" aria-hidden="true">
        <div className="orb orb-blue" />
        <div className="orb orb-violet" />
        <div className="orb orb-cyan" />
        <div className="orb orb-rose" />
        <div className="ambient-vignette" />
        <div className="ambient-grain" />
      </div>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#05070d]"
      >
        {t.aria.skipToContent}
      </a>

      {/* Floating glass navigation */}
      <header className="hero-rise fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          aria-label={t.aria.mainNav}
          className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-5 pr-2 transition-shadow duration-500 ${
            scrolled ? "shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]" : ""
          }`}
        >
          <a href="#top" aria-label="SubFlow" className="text-2xl">
            <Wordmark />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {([
              ["#features", ui.nav.features],
              ["#guide", ui.nav.guide],
              ["#faq", ui.nav.faq],
            ] as const).map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label={t.aria.languageSelector}
              className="glass-subtle relative flex items-center rounded-full p-1"
            >
              <span
                className={`absolute left-1 top-1 h-8 w-11 rounded-full bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  language === "en" ? "translate-x-11" : ""
                }`}
                aria-hidden="true"
              />
              {(["fr", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  lang={lang}
                  onClick={() => setLanguage(lang)}
                  className={`relative z-10 !min-h-0 !min-w-0 h-8 w-11 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 ${
                    language === lang ? "text-white" : "text-[var(--ink-mute)] hover:text-white"
                  }`}
                  aria-pressed={language === lang}
                  aria-label={`${lang.toUpperCase()} – ${lang === "fr" ? t.aria.switchToFr : t.aria.switchToEn}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="#download"
              className="btn-primary hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex"
            >
              {ui.nav.download}
            </a>
          </div>
        </nav>
      </header>

      <div id="top" className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <main id="main" tabIndex={-1} className="outline-none">
        {/* Hero — revealed with CSS so it paints before JavaScript loads */}
        <section
          aria-labelledby="hero-title"
          className="grid items-center gap-14 pb-16 pt-32 sm:pt-36 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-28"
        >
          <div className="flex flex-col">
            <div className="hero-rise" style={{ animationDelay: "60ms" }}>
              <span className="glass-subtle inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                <span className="pulse-dot h-2 w-2 rounded-full bg-[#2f7bff] text-[#2f7bff]" aria-hidden="true" />
                {t.hero.badge}
              </span>
            </div>

            <h1
              id="hero-title"
              className="font-display mt-7 text-[clamp(2.5rem,6vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white"
            >
              {t.hero.title}{" "}
              <span className="font-serif-accent text-gradient pr-2 text-[1.12em] leading-[0.9]">
                {t.hero.titleAccent}
              </span>
            </h1>

            <p className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl" style={{ animationDelay: "120ms" }}>
              {t.hero.description}
            </p>

            <div className="hero-rise mt-9" style={{ animationDelay: "180ms" }}>
              <StoreButtons label={ui.downloadOn} />
            </div>

            <dl className="hero-rise glass mt-9 grid max-w-xl grid-cols-3 rounded-3xl" style={{ animationDelay: "240ms" }}>
              {t.socialProof.map((item, i) => (
                <div key={item.label} className={`flex flex-col-reverse px-4 py-5 sm:px-6 ${i > 0 ? "border-l border-white/10" : ""}`}>
                  <dt className="mt-1 text-xs text-[var(--ink-mute)] sm:text-sm">{item.label}</dt>
                  <dd className="font-display flex items-center gap-1.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {item.value}
                    {i === 0 && <Star size={16} className="fill-amber-300 text-amber-300" aria-hidden="true" />}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="hero-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ animationDelay: "300ms" }}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                {ui.featuredIn}
              </span>
              <a
                href="https://www.numerama.com/tech/1910173-cest-quoi-subflow-cette-appli-pour-suivre-ses-abonnements-qui-est-dans-les-plus-telechargees-de-lapp-store.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-base font-bold tracking-tight text-[var(--ink-soft)] transition-colors hover:text-white"
              >
                Numerama
              </a>
              <a
                href="https://www.justgeek.fr/subflow-application-gestion-abonnements-136534/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-base font-bold tracking-tight text-[var(--ink-soft)] transition-colors hover:text-white"
              >
                JustGeek
              </a>
            </div>
          </div>

          {/* Showcase — the phone floats directly on the page, no frame */}
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={t.aria.carousel}
            className="hero-rise relative mx-auto w-full max-w-[400px]"
            style={{ animationDelay: "160ms" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setIsHovered(false);
            }}
          >
            {/* Light pooling behind and beneath the phone */}
            <div
              className="pointer-events-none absolute left-1/2 top-[42%] h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,123,255,0.5),rgba(122,92,255,0.22)_45%,transparent_70%)] blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-[21%] left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-[100%] bg-black/60 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative aspect-[504/824] w-full">
              <img
                key={currentSlide}
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                width={504}
                height={824}
                decoding="async"
                {...{ fetchpriority: currentSlide === 0 ? "high" : "auto" }}
                className={`absolute inset-0 h-full w-full object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.55)] ${
                  slide.animate ? "slide-enter" : ""
                }`}
              />
            </div>

            {/* Floating glass chips (decorative) */}
            <div data-nosnippet className="glass float-slow absolute -left-3 top-[14%] hidden items-center gap-3 rounded-2xl py-3 pl-3 pr-4 sm:-left-12 sm:flex" aria-hidden="true">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/20 text-rose-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <BellRing size={17} />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] text-[var(--ink-mute)]">{ui.floating.nextCharge}</span>
                <span className="block text-sm font-semibold text-white">{ui.floating.nextChargeValue}</span>
              </span>
              <span className="ml-1 text-sm font-semibold text-rose-300">{formatEuro(-15.99, language)}</span>
            </div>

            <div data-nosnippet className="glass float-slower absolute -right-3 bottom-[30%] hidden items-center gap-3 rounded-2xl py-3 pl-3 pr-4 sm:-right-10 sm:flex" aria-hidden="true">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <PiggyBank size={17} />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] text-[var(--ink-mute)]">{ui.floating.saved}</span>
                <span className="font-display block text-base font-bold text-emerald-300">{formatEuro(186, language)}</span>
              </span>
            </div>

            <div data-nosnippet className="glass-subtle float-slow absolute -right-2 top-[6%] hidden items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)] sm:-right-6 sm:flex" aria-hidden="true">
              <ShieldCheck size={14} className="text-[#6aa6ff]" />
              {ui.floating.local}
            </div>

            {/* Slide caption + controls */}
            <div className="mt-6 min-h-[84px] text-center" aria-live={autoplay ? "off" : "polite"}>
              <div key={currentSlide} className={slide.animate ? "caption-enter" : ""}>
                <p className="font-display text-lg font-semibold text-white">{slides[currentSlide].title}</p>
                <p className="mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-[var(--ink-soft)]">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            <div className="glass mx-auto mt-4 flex w-fit items-center gap-1 rounded-full p-1.5">
              <button
                type="button"
                onClick={() => setAutoplay((on) => !on)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--ink-soft)] transition-colors hover:bg-white/10 hover:text-white"
                aria-label={autoplay ? t.aria.pause : t.aria.play}
              >
                {autoplay ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                type="button"
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--ink-soft)] transition-colors hover:bg-white/10 hover:text-white"
                aria-label={t.aria.previous}
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center">
                {slides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => goToSlide(() => index)}
                    className="group flex !min-h-0 !min-w-0 h-10 w-6 items-center justify-center"
                    aria-label={`${t.aria.goToSlide} ${index + 1} : ${slide.title}`}
                    aria-current={index === currentSlide ? "true" : undefined}
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-500 ${
                        index === currentSlide
                          ? "w-5 bg-gradient-to-r from-[#6aa6ff] to-[#2f7bff] shadow-[0_0_12px_rgba(47,123,255,0.8)]"
                          : "w-1.5 bg-white/40 group-hover:bg-white/70"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--ink-soft)] transition-colors hover:bg-white/10 hover:text-white"
                aria-label={t.aria.next}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Benefits — glass bento */}
        <section id="features" data-reveal className="py-16 sm:py-24">
          <div className="reveal-item max-w-2xl" style={order(0)}>
            <Eyebrow>{ui.benefitsEyebrow}</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
              {ui.benefitsTitle}
            </h2>
            <p className="mt-4 text-lg text-[var(--ink-soft)]">{ui.benefitsLead}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-12">
            {t.benefits.map((benefit, index) => {
              const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
              return (
                <article
                  key={benefit.title}
                  style={order(index + 1)}
                  onMouseMove={trackSpotlight}
                  className={`reveal-item glass glass-spotlight group relative overflow-hidden rounded-[32px] p-7 sm:p-9 ${BENEFIT_LAYOUT[index % BENEFIT_LAYOUT.length]}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${BENEFIT_GLOWS[index % BENEFIT_GLOWS.length]} to-transparent blur-2xl transition-transform duration-700 group-hover:scale-125`}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="glass-strong flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="font-serif-accent text-5xl leading-none text-white/15 transition-colors duration-500 group-hover:text-white/30" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display relative mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="relative mt-3 max-w-md leading-relaxed text-[var(--ink-soft)]">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Guide — answer-first content that search and AI engines can quote */}
        <section id="guide" data-reveal className="py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="reveal-item" style={order(0)}>
              <Eyebrow>{t.guide.eyebrow}</Eyebrow>
              <h2 className="font-display mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                {t.guide.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">{t.guide.definition}</p>
            </div>

            <aside className="reveal-item glass rounded-[32px] p-7 sm:p-8 lg:self-end" style={order(1)}>
              <h3 className="font-display text-lg font-semibold text-white">{t.guide.factsTitle}</h3>
              <dl className="mt-5 divide-y divide-white/10">
                {t.guide.facts.map((fact) => (
                  <div key={fact.label} className="flex items-baseline justify-between gap-6 py-3 text-sm">
                    <dt className="shrink-0 text-[var(--ink-mute)]">{fact.label}</dt>
                    <dd className="text-right font-medium text-white">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <h3 className="reveal-item font-display mt-16 text-2xl font-semibold tracking-tight text-white sm:text-3xl" style={order(2)}>
            {t.guide.stepsTitle}
          </h3>
          <ol className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-3">
            {t.guide.steps.map((step, index) => (
              <li
                key={step.title}
                style={order(index + 3)}
                onMouseMove={trackSpotlight}
                className="reveal-item glass glass-spotlight rounded-[28px] p-7"
              >
                <span className="font-serif-accent text-4xl leading-none text-[#6aa6ff]" aria-hidden="true">
                  {index + 1}.
                </span>
                <h4 className="font-display mt-6 text-lg font-semibold text-white">{step.title}</h4>
                <p className="mt-2 leading-relaxed text-[var(--ink-soft)]">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          data-reveal
          className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <div className="reveal-item lg:sticky lg:top-32 lg:self-start" style={order(0)}>
            <Eyebrow>{ui.faqEyebrow}</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
              {ui.faqTitle}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {t.faqs.map((faq, index) => (
              <details
                key={faq.question}
                style={order(index + 1)}
                open={index === 0}
                className="reveal-item faq-item glass group rounded-3xl open:bg-white/[0.07]"
              >
                <summary className="flex items-center gap-4 p-5 sm:p-6">
                  <span className="font-serif-accent w-8 shrink-0 text-2xl text-[#6aa6ff]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 text-base font-semibold leading-snug text-white sm:text-lg">{faq.question}</h3>
                  <span className="faq-icon glass-subtle flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white" aria-hidden="true">
                    <Plus size={16} />
                  </span>
                </summary>
                <p className="px-5 pb-6 leading-relaxed text-[var(--ink-soft)] sm:pl-[4.5rem] sm:pr-16">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" data-reveal className="py-16 sm:py-24">
          <div className="reveal-item glass-strong relative overflow-hidden rounded-[44px] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(47,123,255,0.55),rgba(122,92,255,0.2)_45%,transparent_70%)] blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" aria-hidden="true" />
            <img
              src="/assets/images/icons/app-icon-160.webp"
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              loading="lazy"
              decoding="async"
              className="relative mx-auto h-20 w-20 rounded-[22px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.15)]"
            />
            <h2 className="font-display relative mx-auto mt-8 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
              {ui.cta.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-lg text-[var(--ink-soft)]">{ui.cta.description}</p>
            <div className="relative mt-9 flex justify-center">
              <StoreButtons label={ui.downloadOn} />
            </div>
          </div>
        </section>

        </main>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-[var(--ink-mute)] sm:flex-row">
          <Wordmark className="text-xl" />
          <p>© {new Date().getFullYear()} SubFlow. {ui.rights}</p>
          <a
            href="#top"
            className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-2 text-[var(--ink-soft)] transition-colors hover:text-white"
          >
            <ArrowUp size={14} />
            {ui.backToTop}
          </a>
        </footer>
      </div>
    </div>
  );
});

BloomLanding.displayName = "SubFlow";

export default BloomLanding;
