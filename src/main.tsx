import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { trackPerformance, preloadCriticalResources, enhanceAccessibility } from './utils/seoUtils'

trackPerformance();
preloadCriticalResources();
enhanceAccessibility();

document.documentElement.lang = 'fr';
document.documentElement.setAttribute('data-theme', 'light');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
