import { memo } from "react";

const StructuredData = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SubFlow",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "iOS, Android",
    "description": "Application gratuite de suivi des abonnements et dépenses mensuelles pour garder le contrôle de votre budget et économiser de l'argent.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "screenshot": [
      {
        "@type": "ImageObject",
        "url": "https://subflowsite.netlify.app/assets/images/subflow-start.png",
        "caption": "Écran d'accueil SubFlow - Vue d'ensemble des abonnements"
      },
      {
        "@type": "ImageObject",
        "url": "https://subflowsite.netlify.app/assets/images/subflow-mainscreen.png",
        "caption": "Tableau de bord des abonnements - Gestion centralisée"
      },
      {
        "@type": "ImageObject",
        "url": "https://subflowsite.netlify.app/assets/images/subflow-stat.png",
        "caption": "Analyses et statistiques - Suivi des dépenses"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "156",
      "reviewCount": "98",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "SubFlow",
      "url": "https://subflowsite.netlify.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://subflowsite.netlify.app/assets/images/icon.png",
        "width": "512",
        "height": "512"
      }
    },
    "downloadUrl": [
      "https://apps.apple.com/fr/app/subflow/id6741497228",
      "https://play.google.com/store/apps/details?id=com.jessal.subflow"
    ],
    "datePublished": "2024-01-01",
    "dateModified": "2025-01-19",
    "version": "1.0",
    "contentRating": "Everyone",
    "keywords": "gestion abonnements, suivi abonnements, contrôle dépenses mensuelles, économies abonnements, tracker abonnements, application abonnements, budget mensuel, dépenses récurrentes, optimisation budget",
    "featureList": "Visualisation des dépenses, Analyse des tendances, Rappels d'échéances, Suggestions d'économies, Catégorisation des abonnements, Suivi du budget, Alertes de prélèvement, Comparaison de services"
  };

  // Données structurées supplémentaires pour l'organisation
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SubFlow",
    "url": "https://subflowsite.netlify.app",
    "logo": "https://subflowsite.netlify.app/assets/images/icon.png",
    "description": "Application de gestion d'abonnements pour optimiser votre budget mensuel",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"],
      "email": "subflowservice@gmail.com"
    }
  };

  // Données structurées pour le WebSite
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SubFlow",
    "url": "https://subflowsite.netlify.app",
    "description": "Site officiel de SubFlow - Application de gestion d'abonnements",
    "publisher": {
      "@type": "Organization",
      "name": "SubFlow"
    }
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }} 
      />
    </>
  );
});

StructuredData.displayName = "StructuredData";

export default StructuredData; 