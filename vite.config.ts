import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  define: {
    'process.env.REACT_APP_API_BASE_URL': process.env.REACT_APP_API_BASE_URL,
    'process.env.REACT_APP_SERVER_PORT': process.env.REACT_APP_SERVER_PORT,
  },
});
