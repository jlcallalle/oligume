<template>
  <div>
    <Header />
    <main class="container mt-4">
      <slot />
    </main>
  </div>
</template>
  
  <script setup>
import Header from "../components/Header.vue";
</script>
  