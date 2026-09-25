import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './fonts.css'
import './index.css'
import { trackPerformance, enhanceAccessibility } from './utils/seoUtils'

trackPerformance();
enhanceAccessibility();

document.documentElement.setAttribute('data-theme', 'light');

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// In production the page is prerendered (scripts/prerender.mjs), so hydrate it;
// in dev the root is empty and we render from scratch.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
