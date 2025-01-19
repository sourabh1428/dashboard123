import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for assets
  build: {
    outDir: 'dist', // Default output directory
    assetsDir: 'assets', // Directory for static assets
  },
  server: {
    open: true, // Opens the browser on local development
    host: true, // Ensures server is accessible over the network
  },
  resolve: {
    alias: {
      '@': '/src', // Example alias for easier imports
    },
  },
});
