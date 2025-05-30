<template>
    <div>
      <!-- Google Tag Manager (noscript) -->
      <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PNG4ZRVR"
              height="0" width="0"
              style="display:none;visibility:hidden"></iframe>
      </noscript>
      <!-- End Google Tag Manager (noscript) -->
      <Header />
  
      <main class="container-fluid">
        <slot /> <!-- Aquí se renderiza la página activa (como index.vue) -->
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  