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
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },

  devtools: { enabled: true },

  compatibilityDate: '2025-07-15',
});
