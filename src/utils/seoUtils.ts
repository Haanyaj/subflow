// Utilitaires pour le SEO et la performance

// Déclaration de type pour Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: string;
}

// Configuration SEO par défaut
export const defaultSEO: SEOData = {
  title: "SubFlow - Gestion d'Abonnements | Suivi & Économies | Application Gratuite",
  description: "SubFlow : l'application gratuite pour gérer vos abonnements. Suivez vos dépenses mensuelles, visualisez vos économies et optimisez votre budget. Téléchargez maintenant sur iOS et Android.",
  keywords: "gestion abonnements, suivi abonnements, contrôle dépenses, économies mensuelles, application abonnements, SubFlow, tracker abonnements, budget mensuel, dépenses récurrentes, optimisation budget",
  image: "https://subflowsite.netlify.app/assets/images/subflow-og-image.png",
  url: "https://subflowsite.netlify.app",
  type: "website"
};

// Fonction pour mettre à jour les métadonnées dynamiquement
export const updateSEO = (data: Partial<SEOData>) => {
  const seoData = { ...defaultSEO, ...data };
  
  // Mise à jour du titre
  if (document.title !== seoData.title) {
    document.title = seoData.title;
  }

  // Mise à jour de la description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', seoData.description);

  // Mise à jour des mots-clés
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', seoData.keywords);

  // Mise à jour des balises Open Graph
  updateOpenGraph(seoData);
  
  // Mise à jour de l'URL canonique
  updateCanonical(seoData.url);
};

// Fonction pour mettre à jour les balises Open Graph
const updateOpenGraph = (data: SEOData) => {
  const ogTags = {
    'og:title': data.title,
    'og:description': data.description,
    'og:image': data.image,
    'og:url': data.url,
    'og:type': data.type,
    'og:site_name': 'SubFlow',
    'og:locale': 'fr_FR'
  };

  Object.entries(ogTags).forEach(([property, content]) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  });
};

// Fonction pour mettre à jour l'URL canonique
const updateCanonical = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
};

// Fonction pour tracker les événements de performance
export const trackPerformance = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const metrics = {
        // Temps de chargement total
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        // Temps de réponse du serveur
        serverResponseTime: navigation.responseEnd - navigation.requestStart,
        // Temps de rendu du premier contenu
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        // Temps de rendu du premier contenu significatif
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      };

      // Envoi des métriques à Google Analytics ou autre service
      if (window.gtag) {
        window.gtag('event', 'performance_metrics', metrics);
      }

      console.log('Métriques de performance:', metrics);
    });
  }
};

// Fonction pour optimiser les images
export const optimizeImage = (src: string, width?: number, height?: number) => {
  const baseUrl = src.startsWith('http') ? src : `https://subflowsite.netlify.app${src}`;
  
  if (src.endsWith('.svg')) {
    return baseUrl;
  }

  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  params.append('q', '85'); // Qualité optimisée
  params.append('fm', 'webp'); // Format WebP pour de meilleures performances

  return `${baseUrl}?${params.toString()}`;
};

// Fonction pour précharger les ressources critiques
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/assets/images/icon.png',
    '/assets/images/subflow-og-image.png',
    '/src/main.tsx'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.png') ? 'image' : 'script';
    document.head.appendChild(link);
  });
};

// Fonction pour gérer les erreurs 404
export const handle404 = () => {
  // Redirection vers la page d'accueil en cas d'erreur 404
  if (window.location.pathname !== '/' && !document.querySelector('#root')) {
    window.location.href = '/';
  }
};

// Fonction pour améliorer l'accessibilité
export const enhanceAccessibility = () => {
  // Ajout d'attributs ARIA manquants
  const buttons = document.querySelectorAll('button:not([aria-label])');
  buttons.forEach(button => {
    if (!button.textContent?.trim()) {
      button.setAttribute('aria-label', 'Bouton');
    }
  });

  // Amélioration de la navigation au clavier
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
}; 