import { memo, useEffect } from "react";

const AccessibilityEnhancer = memo(() => {
  useEffect(() => {
    // Amélioration de l'accessibilité au clavier
    const handleKeyDown = (event: KeyboardEvent) => {
      // Navigation au clavier améliorée
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Gestion du focus pour l'accessibilité
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
        target.setAttribute('data-focused', 'true');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.removeAttribute('data-focused');
    };

    // Ajout des écouteurs d'événements
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Amélioration des contrastes pour l'accessibilité
    const style = document.createElement('style');
    style.textContent = `
      /* Améliorations d'accessibilité */
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }

      /* Amélioration des contrastes */
      @media (prefers-contrast: high) {
        * {
          border-color: #000 !important;
        }
        .text-zinc-300 {
          color: #000 !important;
        }
        .text-zinc-400 {
          color: #333 !important;
        }
      }

      /* Support du mode sombre pour l'accessibilité */
      @media (prefers-color-scheme: dark) {
        .text-zinc-300 {
          color: #e5e7eb !important;
        }
        .text-zinc-400 {
          color: #d1d5db !important;
        }
      }

      /* Amélioration de la lisibilité pour les utilisateurs malvoyants */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      /* Amélioration de la taille de police pour l'accessibilité */
      @media (prefers-reduced-motion: no-preference) {
        .text-base {
          font-size: 1rem !important;
          line-height: 1.5 !important;
        }
      }

      /* Amélioration des liens pour l'accessibilité */
      a:focus-visible,
      button:focus-visible {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
        border-radius: 4px !important;
      }

      /* Amélioration des boutons pour l'accessibilité */
      button {
        min-height: 44px !important;
        min-width: 44px !important;
      }

      /* Amélioration des zones cliquables pour l'accessibilité */
      [role="button"],
      [tabindex] {
        min-height: 44px !important;
        min-width: 44px !important;
      }
    `;
    document.head.appendChild(style);

    // Nettoyage des écouteurs d'événements
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      document.head.removeChild(style);
    };
  }, []);

  return null;
});

AccessibilityEnhancer.displayName = "AccessibilityEnhancer";

export default AccessibilityEnhancer; 