<template>
    <div>
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
  