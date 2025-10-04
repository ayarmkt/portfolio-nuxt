import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', 'shadcn-nuxt'],
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: 'Ui',
    componentDir: './app/components/ui',
  },
});
