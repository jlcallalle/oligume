export default defineNuxtPlugin(() => {
  useHead({
    script: [
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
        `
      }
    ]
  });
});
