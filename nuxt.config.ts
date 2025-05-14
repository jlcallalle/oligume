// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-14',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    'swiper/css',
    '@/assets/main.css'
  ],

  fonts: {
    google: {
      families: {
        Lato: {
          wght: [400, 700]
        },
        Rubik: {
          ital: [0, 1],
          wght: [300, 400, 500, 600, 700, 800, 900]
        }
      },
      display: 'swap'
    }
  },

  app: {
    head: {
      script: [
        {
          src: '/bootstrap.bundle.min.js',
          defer: true
        }
      ]
    }
  }
})