# Composants Landing Page

Cette structure organise les composants de la landing page SubFlow de manière modulaire et maintenable.

## 📁 Structure

```
src/components/landing/
├── Navigation.tsx        # Barre de navigation
├── HeroSection.tsx       # Section hero avec titre et image
├── FeaturesSection.tsx    # Grille des fonctionnalités
├── StatsSection.tsx      # Statistiques de l'app
├── DownloadCTA.tsx       # Call-to-action de téléchargement
├── Footer.tsx            # Pied de page
├── StoreButtons.tsx      # Boutons App Store / Google Play (réutilisable)
├── StructuredData.tsx    # Données structurées SEO
└── index.ts              # Exports centralisés
```

## 🧩 Composants

### Navigation
Barre de navigation fixe en haut de la page.

**Props:**
- `variants`: Variants d'animation Framer Motion
- `isVisible`: État de visibilité pour les animations

### HeroSection
Section principale avec le titre, la description et l'image de l'app.

**Props:**
- `variants`: Variants d'animation Framer Motion

### FeaturesSection
Grille 2x2 affichant les fonctionnalités principales.

**Props:**
- `variants`: Variants d'animation Framer Motion
- `features`: Tableau d'objets avec `title`, `description`, `icon`

### StatsSection
Affichage des statistiques de l'application.

**Props:**
- `variants`: Variants d'animation Framer Motion
- `stats`: Tableau d'objets avec `label`, `value`, `icon`

### DownloadCTA
Section de call-to-action pour le téléchargement.

**Props:**
- `variants`: Variants d'animation Framer Motion

### Footer
Pied de page avec copyright.

**Props:**
- `variants`: Variants d'animation Framer Motion

### StoreButtons
Composant réutilisable pour les boutons de téléchargement.

**Props:**
- `size?`: `"sm" | "md" | "lg"` (défaut: `"md"`)
- `variant?`: `"horizontal" | "vertical"` (défaut: `"horizontal"`)

### StructuredData
Données structurées JSON-LD pour le SEO.

## 📝 Utilisation

```tsx
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  StatsSection,
  DownloadCTA,
  Footer,
  StructuredData
} from "./landing";
```

## 🎯 Avantages

- **Modularité**: Chaque composant a une responsabilité unique
- **Réutilisabilité**: Composants réutilisables (ex: `StoreButtons`)
- **Maintenabilité**: Code plus facile à maintenir et tester
- **Performance**: Meilleure optimisation avec React.memo possible
- **Lisibilité**: Code plus clair et organisé
