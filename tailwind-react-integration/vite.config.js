// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'   // ✅ use SWC version
import tailwindcss from '@tailwindcss/vite'   // ✅ add Tailwind

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Tailwind plugin
  ],
})
