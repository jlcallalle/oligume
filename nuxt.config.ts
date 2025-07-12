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
      "/cyber_wow",
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
      title: 'Productores de Aceitunas y Aceite de Oliva | Oligume',
      meta: [
        {
          name: 'description',
          content:
            'Somos productores de aceitunas y aceite de oliva extra virgen desde Acarí, Arequipa. Compra directo del productor en Oligume.pe.'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
         // Open Graph (opcional pero recomendado)
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'Oligume | Aceite de Oliva Extra Virgen y Aceitunas Ecológicas'
        },
        {
          property: 'og:description',
          content: 'Aceite de oliva y aceitunas ecológicas del valle de Acarí. Calidad, tradición y sabor peruano.'
        },
        {
          property: 'og:image',
          content: 'https://oligume.pe/og-image.png'
        },
        {
          property: 'og:url',
          content: 'https://oligume.pe'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Oligume | Aceite de Oliva Extra Virgen y Aceitunas Ecológicas'
        },
        {
          name: 'twitter:description',
          content: 'Desde Acarí, Arequipa. Calidad peruana en cada gota y cada aceituna.'
        },
        {
          name: 'twitter:image',
          content: 'https://oligume.pe/og-image.png'
        }
      ],
      link: [
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
        },
         // Meta Pixel
        {
          hid: 'facebook-pixel',
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1360652448555767');
            fbq('track', 'PageView');
          `,
          type: 'text/javascript'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtm-script': ['innerHTML']
      }
    }
  }
})