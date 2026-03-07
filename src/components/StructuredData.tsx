import { memo } from "react";
import { useTranslation } from "../i18n/LanguageContext";

const StructuredData = memo(() => {
  const { t } = useTranslation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SubFlow",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "iOS, Android",
    "description": t.structuredData.appDescription,
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
        "caption": t.structuredData.screenshotCaptions[0]
      },
      {
        "@type": "ImageObject",
        "url": "https://subflowsite.netlify.app/assets/images/subflow-mainscreen.png",
        "caption": t.structuredData.screenshotCaptions[1]
      },
      {
        "@type": "ImageObject",
        "url": "https://subflowsite.netlify.app/assets/images/subflow-stat.png",
        "caption": t.structuredData.screenshotCaptions[2]
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
    "keywords": t.structuredData.keywords,
    "featureList": t.structuredData.featureList
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SubFlow",
    "url": "https://subflowsite.netlify.app",
    "logo": "https://subflowsite.netlify.app/assets/images/icon.png",
    "description": t.structuredData.orgDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"],
      "email": "subflowservice@gmail.com"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SubFlow",
    "url": "https://subflowsite.netlify.app",
    "description": t.structuredData.websiteDescription,
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
