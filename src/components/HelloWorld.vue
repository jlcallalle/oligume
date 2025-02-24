<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="Imagen de ejemplo">
    <div class="card-body">
      <h5 class="card-title">Título de la Card</h5>
      <p class="card-text">
        Este es un ejemplo de card utilizando Bootstrap y Vue 3. Puedes usar este componente para mostrar información de forma atractiva.
      </p>
      <a href="#" class="btn btn-primary">Ver más</a>
    </div>
  </div>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
