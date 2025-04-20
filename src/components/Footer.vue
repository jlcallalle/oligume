<script setup>
import logo from '@/assets/oligume.png'
</script>

<template>
    <footer class="bg-dark">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-4 col-sm-12 mb-3 mb-md-0">
                    <router-link class="navbar-brand" to="/">
                        <img class="img-fluid mb-3" :src="logo" alt="Oligume Logo" width="110" />
                    </router-link>

                   <!--  <ul class="lista-tarjeta list-inline">
                        <li class="list-inline-item"><i class="fab fa-cc-visa text-gray"></i></li>
                        <li class="list-inline-item"><i class="fab fa-cc-mastercard text-gray"></i></li>
                        <li class="list-inline-item"><i class="fab fa-cc-discover text-gray"></i></li>
                        <li class="list-inline-item"><i class="fab fa-cc-paypal text-gray"></i></li>
                        <li class="list-inline-item"><i class="fab fa-cc-amex text-gray"></i></li>
                    </ul> -->
                </div>
                <div class="col-md-2 col-sm-12 mb-3 mb-md-0">
                    <h6 class="text-white">Menu</h6>
                    <ul class="lista-menu list-unstyled mb-0">
                        <li class="mb-2"> <a class="reset-anchor" href="index.html">Inicio</a></li>
                        <li class="mb-2"><a class="reset-anchor" href="nosotros.html">Nosotros</a></li>
                        <li class="mb-2"><a class="reset-anchor" href="reconocimiento.html">Reconocimientos</a></li>
                        <li class="mb-2"><a class="reset-anchor" href="contacto.html">Contacto</a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-12 mb-3 mb-md-0">
                    <h6 class="text-white">Checkout</h6>
                    <ul class="lista-menu list-unstyled mb-0">
                        <li class="mb-2"> <a class="reset-anchor" href="#">Mi cuenta</a></li>
                        <li class="mb-2"> <a class="reset-anchor" href="#">Checkout</a></li>
                        <li class="mb-2"> <a class="reset-anchor" href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 mb-3 mb-md-0">
                    <p class="lead mb-1 text-white">
                        <a class="reset-anchor text-white" href="https://wa.me/51934835047" target="_blank"
                            rel="noopener noreferrer">
                            <i class="fab fa-whatsapp me-2"></i> 934 835 047
                        </a>
                    </p>
                    <p class="text-muted">Lima, Perú</p>
                    <ul class="lista-social list-inline mb-0">
                        <li class="list-inline-item">
                            <a class="social-icon" href="https://www.facebook.com/oligume" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-facebook-f fa-2x" ></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-icon" href="https://www.instagram.com/oligume" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-instagram fa-2x"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-icon" href="https://www.tiktok.com/@oligume" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-tiktok fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="border-top py-4" style="border-color: #1d1d1d !important">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="small text-muted mb-0 text-center">© 2024 All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>
nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
}

nav a {
    text-decoration: none;
    color: #333;
}

nav a.router-link-exact-active {
    font-weight: bold;
    color: green;
}

.lista-social li a {
    color: gray;
    margin-right: 15px;
}
</style>
