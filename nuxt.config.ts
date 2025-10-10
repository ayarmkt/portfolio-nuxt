import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  modules: ['@vueuse/nuxt', 'shadcn-nuxt', '@nuxtjs/color-mode'],

  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui',
  },

  colorMode: {
    classSuffix: '',
  },

  devtools: { enabled: true },

  compatibilityDate: '2025-07-15',
});
