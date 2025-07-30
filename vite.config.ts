import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    // Optimisations pour la production
    target: 'es2015',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Optimisation du chunking
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Optimisation des noms de fichiers
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1] || 'unknown'
          if (/\.(css)$/.test(assetInfo.name || '')) {
            return `assets/css/[name]-[hash].${ext}`
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
      },
    },
    // Optimisation de la taille
    chunkSizeWarningLimit: 1000,
  },
  // Optimisations pour le développement
  server: {
    port: 3000,
    open: true,
  },
  // Optimisations pour le préchargement
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Configuration pour le PWA
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
})
