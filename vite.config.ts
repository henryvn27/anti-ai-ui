import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [mdx(), react()],
  root: '.',
  build: {
    outDir: 'site-dist',
    sourcemap: true
  },
  server: {
    port: 5173
  }
});
