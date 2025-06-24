// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Use SWC for faster builds with TypeScript
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths'; // Import the plugin

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths() // Add this plugin to enable reading paths from tsconfig.json
  ],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // 'process.env' is often handled by vite-plugin-env-compatible or similar
  // However, for basic cases, setting it like this can still work for libraries expecting it.
  define: {
    'process.env': {},
  },
  // The 'resolve' alias for '@' is no longer needed here because tsconfigPaths handles it.
  // If you had other, non-tsconfig related aliases, they would go here.
});
