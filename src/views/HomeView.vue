<template>
    <MainLayout>
        <div class="home">
            <section id="slider" class="mt-3 container position-relative">
                <div id="oliveCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#oliveCarousel" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#oliveCarousel" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#oliveCarousel" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/banner_aceite.png" class="d-block w-100 carousel-image"
                                alt="Aceitunas Premium" />

                                <div class="btn-cotiza position-absolute top-50 start-0 translate-middle-y ms-5">
                                    <a
                                    class="btn btn-success btn-lg"
                                    href="https://wa.me/51934835047?text=Hola,%20quiero%20cotizar%20los%20productos%20de%20la%20página%20web"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    COTIZA Y COMPRA AQUÍ
                                    </a>
                                </div>
                        </div>
                        <div class="carousel-item ">
                            <img src="@/assets/banner-aceituna.png" class="d-block w-100 carousel-image"
                                alt="Aceite de Oliva Extra Virgen" />
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/banner-aceituna2.png" class="d-block w-100 carousel-image"
                                alt="Calidad y Tradición" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#oliveCarousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#oliveCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </section>
            <pre class="d-none">productos {{ productos }}</pre>
            <section class="productos-destacados container">
                <h2 class="text-center my-4">Productos Destacados</h2>
                <div class="row">
                    <div class="col-md-3 mb-4" v-for="producto in productos" :key="producto.id">
                        <div class="card">
                            <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre">
                            <div class="card-body text-center">
                                <h5 class="card-title">{{ producto.nombre }}</h5>
                                <p class="card-text text-warning">★★★★★</p>
                                <p class="card-text">S/. {{ producto.precio }}</p>
                                <router-link :to="`/producto/${producto.id}`" class="btn btn-outline-success">Ver
                                    Detalle</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container pb-5">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="d-flex align-items-center p-4 w-100">
                                <svg class="svg-icon text-success">
                                    <use xlink:href="#delivery-time-1"> </use>
                                </svg>
                                <div class="ms-3">
                                    <h6 class="mb-1 text-uppercase">Delivery Gratis </h6>
                                    <p class="small text-muted mb-0">Para distritos seleccionados.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="d-flex align-items-center p-4 w-100">
                                <svg class="svg-icon text-success">
                                    <use xlink:href="#pay-1"> </use>
                                </svg>
                                <div class="ms-3">
                                    <h6 class="mb-1 text-uppercase">Garantía </h6>
                                    <p class="small text-muted mb-0">Contamos con certificados BPA y Fundo Verde</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="d-flex align-items-center p-4 w-100">
                                <svg class="svg-icon text-success">
                                    <use xlink:href="#credit-card-1"> </use>
                                </svg>
                                <div class="ms-3">
                                    <h6 class="mb-1 text-uppercase">Pago Seguro</h6>
                                    <p class="small text-muted mb-0">Pago 100% seguro</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="d-flex align-items-center p-4 w-100">
                                <svg class="svg-icon text-success">
                                    <use xlink:href="#helpline-24h-1"> </use>
                                </svg>
                                <div class="ms-3">
                                    <h6 class="mb-1 text-uppercase">SOPORTE 24/7</h6>
                                    <p class="small text-muted mb-0">Atenció al cliente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "../layouts/MainLayout.vue";
// import aceite500 from '@/assets/aceite-500ml.png'

const productos = [
  { id: 1, nombre: 'Aceite de Oliva 1/2 Lt', precio: 32, imagen: '/img/aceite-500ml.png', descripcion: 'Aceite de oliva extra virgen de alta calidad.' },
  { id: 2, nombre: 'Aceite de Oliva 1 Lt', precio: 60, imagen: '/img/aceite-litro.png', descripcion: 'Botella de 1 litro de aceite extra virgen.' },
  { id: 3, nombre: 'Aceite de Oliva 3 Lt', precio: 180, imagen: '/img/aceite-bidon.png', descripcion: 'Bidón 3Lt de aceite extra virgen.' },
  { id: 4, nombre: 'Aceitunas Negras 1/2kg', precio: 15, imagen: '/img/aceituna-negra-medio.jpg', descripcion: 'Aceitunas negras seleccionadas.' },
  { id: 5, nombre: 'Aceitunas Negras 1kg', precio: 30, imagen: '/img/aceituna-negro-kg.jpg', descripcion: 'Bolsa de aceitunas negras grandes.' },
  { id: 6, nombre: 'Aceitunas Verdes 1/2kg', precio: 15, imagen: '/img/aceituna-verde-medio.jpg', descripcion: 'Aceitunas verdes seleccionadas.' },
  { id: 7, nombre: 'Aceitunas Verdes 1kg', precio: 30, imagen: '/img/aceituna-verde-kg.jpg', descripcion: 'Bolsa de aceitunas verdes frescas.' }
]
</script>
