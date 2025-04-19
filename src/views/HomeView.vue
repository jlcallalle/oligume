<template>
    <MainLayout>
        <div class="home">
            <section id="slider" class="mt-3 container">
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
                            <img src="@/assets/banner4.jpg" class="d-block w-100 carousel-image" alt="Aceitunas Premium" />
                        </div>
                        <div class="carousel-item ">
                            <img src="@/assets/banner1.jpg" class="d-block w-100 carousel-image" alt="Aceite de Oliva Extra Virgen" />
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets//banner3.jpg" class="d-block w-100 carousel-image" alt="Calidad y Tradición" />
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
                        <router-link :to="`/producto/${producto.id}`" class="btn btn-outline-success">Ver Detalle</router-link>
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
    { id: 1, nombre: 'Aceite de Oliva 1/2 Lt', precio: 35, imagen: '/img/aceite-500ml.png', descripcion: 'Aceite de oliva extra virgen de alta calidad.' },
    { id: 2, nombre: 'Aceite de Oliva 1 Lt', precio: 68, imagen: '/img/aceite-litro.png', descripcion: 'Botella de 1 litro de aceite extra virgen.' },
    { id: 2, nombre: 'Aceite de Oliva 3 Lt', precio: 190, imagen: '/img/aceite-bidon.png', descripcion: 'Bidón 3Lt de aceite extra virgen.' },
    { id: 3, nombre: 'Aceitunas Negras 1/2kg', precio: 15, imagen: '/img/aceituna-negra-medio.jpg', descripcion: 'Aceitunas negras seleccionadas.' },
    { id: 4, nombre: 'Aceitunas Negras 1kg', precio: 30, imagen: '/img/aceituna-negro-kg.jpg', descripcion: 'Bolsa de aceitunas negras grandes.' },
    { id: 5, nombre: 'Aceitunas Verdes 1/2kg', precio: 15, imagen: '/img/aceituna-verde-medio.jpg', descripcion: 'Aceitunas verdes seleccionadas.' },
    { id: 6, nombre: 'Aceitunas Verdes 1kg', precio: 30, imagen: '/img/aceituna-verde-kg.jpg', descripcion: 'Bolsa de aceitunas verdes frescas.' }
  ]
</script>