import { memo } from "react";

const StructuredData = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SubFlow",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "iOS, Android",
    "description": "Application de suivi des abonnements et dépenses mensuelles pour garder le contrôle de votre budget.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "screenshot": [
      "/assets/images/subflow-start.png",
      "/assets/images/subflow-mainscreen.png",
      "/assets/images/subflow-stat.png"
    ]
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }} 
    />
  );
});

StructuredData.displayName = "StructuredData";

export default StructuredData; 