import { memo } from "react";

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

const ImageOptimizer = memo(({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  priority = false
}: ImageOptimizerProps) => {
  // Génération des différentes tailles d'images pour le responsive
  const generateSrcSet = (imageSrc: string) => {
    const baseUrl = imageSrc.startsWith('http') ? imageSrc : `https://subflowsite.netlify.app${imageSrc}`;
    
    // Si c'est une image SVG, pas besoin de srcset
    if (imageSrc.endsWith('.svg')) {
      return baseUrl;
    }

    // Génération des tailles pour les images responsives
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    const srcSet = sizes
      .map(size => `${baseUrl}?w=${size} ${size}w`)
      .join(', ');

    return srcSet;
  };

  // Génération des tailles pour l'attribut sizes
  const generateSizes = () => {
    if (width && height) {
      return `(max-width: 768px) 100vw, ${width}px`;
    }
    return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : loading}
      srcSet={generateSrcSet(src)}
      sizes={generateSizes()}
      decoding="async"
      onLoad={(e) => {
        // Amélioration de l'accessibilité après chargement
        const img = e.target as HTMLImageElement;
        img.setAttribute('data-loaded', 'true');
      }}
      onError={(e) => {
        // Gestion des erreurs de chargement
        const img = e.target as HTMLImageElement;
        img.setAttribute('data-error', 'true');
        console.warn(`Erreur de chargement de l'image: ${src}`);
      }}
      style={{
        // Optimisations de performance
        willChange: priority ? 'auto' : 'transform',
        transform: 'translateZ(0)', // Force l'accélération matérielle
      }}
    />
  );
});

ImageOptimizer.displayName = "ImageOptimizer";

export default ImageOptimizer; 