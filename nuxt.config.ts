// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  compatibilityDate: '2025-05-14',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/sitemap'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    'swiper/css',
    '@/assets/main.css'
  ],
  sitemap: {
    siteUrl: "https://oligume.pe",
    defaults: {
      changefreq: "weekly",
      priority: 1,
    },
    routes: [
      "/",
      "/contacto",
      "/nosotros",
      "/reconocimientos",
      "/producto/aceite-oliva-500ml",
      "/producto/aceite-oliva-1lt",
      "/producto/aceite-oliva-3lt",
      "/producto/aceitunas-negras-500gr",
      "/producto/aceitunas-negras-1kg",
      "/producto/aceitunas-verdes-500gr",
      "/producto/aceitunas-verdes-1kg",
    ],
  },
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
      title: 'Oligume | Aceite de Oliva Extra Virgen y Aceitunas Ecológicas',
      meta: [
        {
          name: 'description',
          content:
            'Oligume | Productores de aceite de oliva extra virgen y aceitunas ecológicas con pasión y tradición familiar. Desde Acarí, Arequipa, llevamos a tu mesa productos naturales de alta calidad, directo del campo peruano.'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://oligume.pe/'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ],
      script: [
        {
          src: '/bootstrap.bundle.min.js',
          defer: true
        },
        // Google Analytics 4
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-X4CCHQKRYL',
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X4CCHQKRYL');
          `,
          type: 'text/javascript'
        },
        // Google Tag Manager
        {
          hid: 'gtm-script',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PNG4ZRVR');`,
          type: 'text/javascript'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtm-script': ['innerHTML']
      }
    }
  }
})