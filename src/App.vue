<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
           <a class="navbar-brand" href="#!">Oligume</a>
          <a class="navbar-brand" href="index.html">
            <!-- <img class="logo-grand" src="/vite.svg" alt="oligume" /> -->
          </a>
          <!-- <i class="bi bi-facebook"></i> -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                  </li>
                  <li class="nav-item"><a class="nav-link" href="nosotros.html">Nosotros</a></li>
                  <li class="nav-item"><a class="nav-link" href="reconocimiento.html">Reconocimientos</a></li>
                  <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
              </ul>
          </div>
      </div>
  </nav>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
