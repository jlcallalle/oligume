<script setup>
import logo from '@/assets/oligume.png'
import dayjs from 'dayjs'
const today = dayjs()
const mostrarCyberWow = today.isAfter(dayjs('2025-07-14')) && today.isBefore(dayjs('2025-07-18'))
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container px-4 px-lg-5">
      <NuxtLink class="navbar-brand" to="/">
        <img class="logo-grand" :src="logo" alt="Oligume" width="90" />
      </NuxtLink>
      <div class="nav-mobil-box d-block d-md-none">
        <a
          href="https://wa.me/51941498032"
          target="_blank"
          class="d-flex align-items-center text-decoration-none text-dark"
        >
          <div class="icon-whatsapp">
            <svg height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 58 58" xml:space="preserve">
            <g>
              <path style="fill:#2CB742;" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5
                S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
              <path style="fill:#FFFFFF;" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42
                c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242
                c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169
                c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097
                c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
            </g>
            </svg>
          </div>
          <div class="small">
            Escríbenos<br />
            <strong>+51 941 498 032</strong>
          </div>
        </a>
      </div>
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
        <ul class="menu-oligume navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/nosotros">Nosotros</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/reconocimientos">Reconocimientos</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contacto">Contacto</NuxtLink>
          </li>
         <!--  <li v-if="mostrarCyberWow" class="nav-item nav-cyber">
            <NuxtLink class="nav-link" to="/cyber_wow">Cyber Wow</NuxtLink>
          </li> -->
        </ul>

        <div class="d-flex align-items-center redes-header d-none d-md-flex me-3">
          <a href="https://facebook.com/oligume" target="_blank" class="text-dark me-3" aria-label="Facebook">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://instagram.com/oligume" target="_blank" class="text-dark me-3" aria-label="Instagram">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.tiktok.com/@oligume" target="_blank" class="text-dark" aria-label="TikTok">
            <i class="fab fa-tiktok fa-lg"></i>
          </a>
        </div>


        <div class="d-flex align-items-center whatsapp-header d-none d-md-block">
          <a
            href="https://wa.me/51941498032"
            target="_blank"
            class="d-flex align-items-center text-decoration-none text-dark"
          >
            <div class="icon-whatsapp">
              <svg height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 58 58" xml:space="preserve">
              <g>
                <path style="fill:#2CB742;" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5
                  S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
                <path style="fill:#FFFFFF;" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42
                  c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242
                  c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169
                  c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097
                  c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
              </g>
              </svg>
            </div>
            <div class="small">
              Escríbenos<br />
              <strong>+51 941 498 032</strong>
            </div>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<style>

/* Header */
.icon-whatsapp {
  margin-right: 1rem;
}

</style>