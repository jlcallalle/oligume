<script setup>
import logo from '@/assets/oligume.png'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <NuxtLink class="navbar-brand" to="/">
        <img class="logo-grand" :src="logo" alt="Oligume Logo" />
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/nosotros">Nosotros</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/reconocimientos">Reconocimientos</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contacto">Contacto</NuxtLink>
          </li>
        </ul>
        <!-- <form class="d-flex">
          <button class="btn btn-outline-dark" type="submit">
            <i class="bi-cart-fill me-1"></i>
            Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </button>
        </form> -->
      </div>
    </div>
  </nav>
</template>
