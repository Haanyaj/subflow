import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { trackPerformance, preloadCriticalResources, enhanceAccessibility } from './utils/seoUtils'

// Optimisations de performance et SEO
trackPerformance();
preloadCriticalResources();
enhanceAccessibility();

// Amélioration de l'accessibilité globale
document.documentElement.lang = 'fr';
document.documentElement.setAttribute('data-theme', 'light');

// Optimisation du rendu
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
