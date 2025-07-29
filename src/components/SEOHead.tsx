import { memo } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = memo(({
  title = "SubFlow - Gestion d'Abonnements | Suivi & Économies | Application Gratuite",
  description = "SubFlow : l'application gratuite pour gérer vos abonnements. Suivez vos dépenses mensuelles, visualisez vos économies et optimisez votre budget. Téléchargez maintenant sur iOS et Android.",
  keywords = "gestion abonnements, suivi abonnements, contrôle dépenses, économies mensuelles, application abonnements, SubFlow, tracker abonnements, budget mensuel, dépenses récurrentes, optimisation budget",
  image = "https://subflowsite.netlify.app/assets/images/subflow-og-image.png",
  url = "https://subflowsite.netlify.app",
  type = "website"
}: SEOHeadProps) => {
  const fullUrl = url.startsWith('http') ? url : `https://subflowsite.netlify.app${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://subflowsite.netlify.app${image}`;

  return (
    <>
      {/* Métadonnées de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SubFlow" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Hreflang */}
      <link rel="alternate" href={fullUrl} hrefLang="fr-fr" />
      <link rel="alternate" href={fullUrl} hrefLang="fr" />
      <link rel="alternate" href={fullUrl} hrefLang="x-default" />
    </>
  );
});

SEOHead.displayName = "SEOHead";

export default SEOHead; 