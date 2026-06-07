import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: '/Citizenship-2026/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'terser',
  },
});
