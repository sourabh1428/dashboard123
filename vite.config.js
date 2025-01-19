import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory
  },
  resolve: {
    alias: {
      '@': '/src', // This maps @ to the src directory
    },
  },
});
