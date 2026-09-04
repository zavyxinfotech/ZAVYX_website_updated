import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
        'services/ai-automation': resolve(__dirname, 'services/ai-automation.html'),
        'services/branding-creative': resolve(__dirname, 'services/branding-creative.html'),
        'services/cloud-infrastructure': resolve(__dirname, 'services/cloud-infrastructure.html'),
        'services/crm-erp-systems': resolve(__dirname, 'services/crm-erp-systems.html'),
        'services/digital-marketing-seo': resolve(__dirname, 'services/digital-marketing-seo.html'),
        'services/ecommerce-stores': resolve(__dirname, 'services/ecommerce-stores.html'),
        'services/mobile-apps': resolve(__dirname, 'services/mobile-apps.html'),
        'services/websites-web-apps': resolve(__dirname, 'services/websites-web-apps.html'),
        'services/whatsapp-api-bots': resolve(__dirname, 'services/whatsapp-api-bots.html')
      }
    }
  }
})

