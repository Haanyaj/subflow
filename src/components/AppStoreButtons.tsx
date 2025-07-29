import { memo } from "react";

const AppStoreButtons = memo(() => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 pb-4">
      <a
        href="https://apps.apple.com/fr/app/subflow/id6741497228"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full sm:w-auto max-w-[200px] 
          bg-white/10 border border-white/20 rounded-xl p-3
          flex items-center gap-3
          transition-all duration-300 ease-out
          hover:bg-white/15 hover:border-white/30 hover:scale-105
          hover:shadow-lg hover:shadow-white/10
          backdrop-blur-sm
          animate-fade-in-up"
        aria-label="Télécharger SubFlow sur l'App Store"
        style={{
          animationDelay: '0.1s',
          animationFillMode: 'both'
        }}
      >
        <img
          src="/assets/images/Logo_App_Store_d'Apple.png"
          alt="Logo App Store"
          className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="eager"
          width="32"
          height="32"
        />
        <div className="flex-grow min-w-0">
          <p className="text-white/70 text-xs transition-colors duration-300 group-hover:text-white/80">Télécharger sur</p>
          <p className="text-white font-medium text-sm transition-colors duration-300 group-hover:text-white">App Store</p>
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
          className="text-white/50 transition-all duration-300 group-hover:text-white/80 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
      
      <a
        href="https://play.google.com/store/apps/details?id=com.jessal.subflow"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full sm:w-auto max-w-[200px] 
          bg-white/10 border border-white/20 rounded-xl p-3
          flex items-center gap-3
          transition-all duration-300 ease-out
          hover:bg-white/15 hover:border-white/30 hover:scale-105
          hover:shadow-lg hover:shadow-white/10
          backdrop-blur-sm
          animate-fade-in-up"
        aria-label="Télécharger SubFlow sur Google Play"
        style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}
      >
        <img
          src="/assets/images/playstore.svg"
          alt="Logo Google Play Store"
          className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="eager"
          width="32"
          height="32"
        />
        <div className="flex-grow min-w-0">
          <p className="text-white/70 text-xs transition-colors duration-300 group-hover:text-white/80">Télécharger sur</p>
          <p className="text-white font-medium text-sm transition-colors duration-300 group-hover:text-white">Google Play</p>
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
          className="text-white/50 transition-all duration-300 group-hover:text-white/80 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  );
});

AppStoreButtons.displayName = "AppStoreButtons";

export default AppStoreButtons; 