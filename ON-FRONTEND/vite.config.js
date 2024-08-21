import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
<<<<<<< Updated upstream
  server: {
    port: 443,
  },
  plugins: [react(), vercel()],
=======
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(
        'C:/Users/user/Documents/GitHub/ON-web/ON-FRONTEND',
        './src',
      ),
    },
  },
>>>>>>> Stashed changes
});
