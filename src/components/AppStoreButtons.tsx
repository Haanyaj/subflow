import { memo } from "react";

const AppStoreButtons = memo(() => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 pb-4">
      <a
        href="https://apps.apple.com/fr/app/subflow/id6741497228"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full sm:w-auto max-w-[280px] sm:max-w-[240px] 
          bg-gradient-to-r from-zinc-800/90 to-zinc-700/90 
          border border-zinc-600/50 rounded-2xl p-4
          flex items-center gap-3
          transition-all duration-300 
          hover:bg-gradient-to-r hover:from-zinc-700/90 hover:to-zinc-600/90 
          hover:border-zinc-500/70 hover:shadow-xl hover:shadow-blue-900/30
          hover:scale-[1.02] transform-gpu
          backdrop-blur-sm"
        aria-label="Télécharger SubFlow sur l'App Store"
      >
        <div className="bg-white rounded-xl p-2.5 sm:p-3 shadow-sm">
          <img
            src="/assets/images/Logo_App_Store_d'Apple.png"
            alt="Logo App Store"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            loading="eager"
            width="40"
            height="40"
          />
        </div>
        <div className="flex-grow min-w-0">
          <p className="text-zinc-400 text-xs sm:text-sm font-medium">Télécharger sur</p>
          <p className="text-white font-bold text-sm sm:text-base truncate">App Store</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-400 group-hover:text-blue-400 transition-colors flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M5 18l6-6-6-6" />
        </svg>
      </a>
      
      <a
        href="https://play.google.com/store/apps/details?id=com.jessal.subflow"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full sm:w-auto max-w-[280px] sm:max-w-[240px] 
          bg-gradient-to-r from-zinc-800/90 to-zinc-700/90 
          border border-zinc-600/50 rounded-2xl p-4
          flex items-center gap-3
          transition-all duration-300 
          hover:bg-gradient-to-r hover:from-zinc-700/90 hover:to-zinc-600/90 
          hover:border-zinc-500/70 hover:shadow-xl hover:shadow-green-900/30
          hover:scale-[1.02] transform-gpu
          backdrop-blur-sm"
        aria-label="Télécharger SubFlow sur Google Play"
      >
        <div className="bg-white rounded-xl p-2.5 sm:p-3 shadow-sm">
          <img
            src="/assets/images/playstore.svg"
            alt="Logo Google Play Store"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            loading="eager"
            width="40"
            height="40"
          />
        </div>
        <div className="flex-grow min-w-0">
          <p className="text-zinc-400 text-xs sm:text-sm font-medium">Télécharger sur</p>
          <p className="text-white font-bold text-sm sm:text-base truncate">Google Play</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-400 group-hover:text-green-400 transition-colors flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M5 18l6-6-6-6" />
        </svg>
      </a>
    </div>
  );
});

AppStoreButtons.displayName = "AppStoreButtons";

export default AppStoreButtons; 