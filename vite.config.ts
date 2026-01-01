import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base =
  process.env.VITE_BASE ??
  (process.env.DEPLOY_TARGET === 'github-pages' && repoName ? `/${repoName}/` : '/');

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: true,
  },
});