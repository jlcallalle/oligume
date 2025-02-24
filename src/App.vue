<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="index.html">
             Oligume
          </a>
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
  </nav> -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Oliva & Aceite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- Slider: Carousel -->
  <section id="slider" class="mt-3">
    <div id="oliveCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#oliveCarousel" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#oliveCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#oliveCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/banner1.jpg" class="d-block w-100" 
                alt="Aceite de Oliva Extra Virgen">
        </div>
        <div class="carousel-item">
          <img src="/banner2.png" class="d-block w-100" 
                alt="Aceitunas Premium">
        </div>
        <div class="carousel-item">
          <img src="/banner1.jpg" class="d-block w-100" 
                alt="Calidad y Tradición">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#oliveCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#oliveCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </section>
  <!-- Contenido: Productos Destacados -->
  <section id="productos" class="container my-5">
    <h2 class="text-center mb-4">Nuestros Productos</h2>
  </section>
  <!-- Footer -->
  <footer class="bg-light text-center py-4">
    <div class="container">
      <p class="mb-0">© 2025 Oliva & Aceite. Todos los derechos reservados.</p>
    </div>
  </footer>
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
