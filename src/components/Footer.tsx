import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="px-6 sm:px-8 lg:px-16 py-4 sm:py-6 border-t border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo et description */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-white">
              SubFlow
              <span className="text-blue-400 ml-0.5 animate-blink">.</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <p className="text-sm text-zinc-300 hidden sm:block">
              Maîtrisez vos abonnements, optimisez vos dépenses
            </p>
          </div>

          {/* Liens et informations */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
            <div className="text-white text-xs">
              © {new Date().getFullYear()} SubFlow
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer; 