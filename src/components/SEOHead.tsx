import { memo } from "react";
import { useTranslation } from "../i18n/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = memo(({
  title,
  description,
  keywords,
  image = "https://subflowsite.netlify.app/assets/images/subflow-og-image.png",
  url = "https://subflowsite.netlify.app",
  type = "website"
}: SEOHeadProps) => {
  const { t } = useTranslation();

  const resolvedTitle = title ?? t.seo.title;
  const resolvedDescription = description ?? t.seo.description;
  const resolvedKeywords = keywords ?? t.seo.keywords;

  const fullUrl = url.startsWith('http') ? url : `https://subflowsite.netlify.app${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://subflowsite.netlify.app${image}`;

  return (
    <>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="keywords" content={resolvedKeywords} />
      
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SubFlow" />
      <meta property="og:locale" content={t.seo.ogLocale} />
      
      <link rel="canonical" href={fullUrl} />
      
      <link rel="alternate" href={fullUrl} hrefLang="fr-fr" />
      <link rel="alternate" href={fullUrl} hrefLang="en" />
      <link rel="alternate" href={fullUrl} hrefLang="x-default" />
    </>
  );
});

SEOHead.displayName = "SEOHead";

export default SEOHead;
