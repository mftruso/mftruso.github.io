
export default defineNuxtConfig({
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',  

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module', not ready yet
    // https://go.nuxtjs.dev/vuetify
    // '@nuxtjs/vuetify', not ready yet

    // import vuetify from 'vite-plugin-vuetify'
    // https://next.vuetifyjs.com/en/features/treeshaking/
    '@nuxtjs/google-fonts',
    
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  //
  transpile: ['vuetify'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  
  googleFonts: {
    families: {
      Nunito: true,
      Roboto: true
    },
    // download: true,
    // prefetch: true
  }
  

})
