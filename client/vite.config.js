import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,  // Use Render's assigned port or fallback to 5173
    strictPort: true,                // Ensure only the specified port is used
    host: '0.0.0.0',                 // Expose server to external network
  },
  preview: {
    port: process.env.PORT || 5173,  // Same for the preview server
    strictPort: true,
    host: '0.0.0.0',                 // Expose preview server to external network
  },
})
