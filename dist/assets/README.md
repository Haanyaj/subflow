# Structure des Assets

Cette structure organise tous les assets du projet SubFlow de manière logique et maintenable.

## 📁 Structure des dossiers

```
public/assets/
├── images/
│   ├── screenshots/     # Captures d'écran de l'application
│   ├── logos/          # Logos (App Store, Google Play)
│   ├── icons/          # Icônes de l'application
│   └── og/             # Images pour Open Graph (réseaux sociaux)
```

## 📸 Screenshots (`images/screenshots/`)

- `dashboard.png` - Écran du tableau de bord principal
- `statistics.png` - Écran des statistiques
- `budgets.png` - Écran de gestion des budgets
- `statistics-list.png` - Liste des statistiques
- `main-screen.png` - Écran principal
- `start-screen.png` - Écran de démarrage
- `subscription-overview.png` - Vue d'ensemble des abonnements
- `spending-analytics.png` - Analyse des dépenses
- `monthly-budget-tracking.png` - Suivi du budget mensuel
- `subscription-categories.png` - Catégories d'abonnements
- `subscription-details.png` - Détails d'un abonnement
- `intuitive-interface.png` - Interface de l'application

## 🎨 Logos (`images/logos/`)

- `app-store.png` - Logo App Store Apple
- `google-play.svg` - Logo Google Play Store

## 🎯 Icônes (`images/icons/`)

- `app-icon.png` - Icône principale de l'application

## 🌐 Open Graph (`images/og/`)

- `og-image.png` - Image pour Open Graph (Facebook, LinkedIn, etc.)
- `twitter-image.png` - Image pour Twitter Card

## 📝 Convention de nommage

- **Screenshots** : `kebab-case` avec description claire (ex: `dashboard.png`, `statistics.png`)
- **Logos** : `kebab-case` avec nom du service (ex: `app-store.png`, `google-play.svg`)
- **Icônes** : `kebab-case` avec type (ex: `app-icon.png`)
- **OG Images** : `kebab-case` avec type (ex: `og-image.png`, `twitter-image.png`)

## 🔗 Utilisation dans le code

Tous les chemins commencent par `/assets/images/` suivi du sous-dossier et du nom du fichier :

```tsx
// Exemples
<img src="/assets/images/screenshots/dashboard.png" />
<img src="/assets/images/logos/app-store.png" />
<img src="/assets/images/icons/app-icon.png" />
```
