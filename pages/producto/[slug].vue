<script setup lang="ts">
import { useRoute } from 'vue-router'
import productos from '@/data/productos.json'

const route = useRoute()
const slug = route.params.slug
const producto = productos.find(p => p.slug === slug)

// Título y descripción dinámicos para SEO
useHead({
  title: producto?.nombre || 'Producto Oligume',
  meta: [
    {
      name: 'description',
      content: producto?.descripcion || 'Descubre los productos naturales de Oligume.'
    }
  ]
})
</script>

<template>
  <!-- <pre>producto {{ producto }}</pre> -->
  <div class="wrap-detalle-producto">
    <div class="producto-header">
      <div class="container">
        <h1>Aceite de oliva extra virgen</h1>
      </div>
    </div>
    <div class="producto-detalle">
      <div class="container py-5" v-if="producto">
        <!-- <NuxtLink to="/" class="btn btn-outline-secondary mt-3">← Volver</NuxtLink> -->
        <div class="row">
          <div class="col-md-6">
            <img :src="producto.imagen" :alt="producto.nombre" class="img-fluid rounded" />
          </div>
          <div class="col-md-6">
            <h1 class="mb-3">{{ producto.nombre }}</h1>
            <div class="fs-5 mb-4">PRECIO:
              <!-- <span class="text-decoration-line-through">S/.50.00</span> -->
              <span class="precio-real">S/.{{ producto.precio }}</span>
            </div>
            <!-- <p>{{ producto.descripcion }}</p> -->
            <ul class="data-producto">
              <li>Marca: <span>Oligume</span></li>
              <li>Región: <span>AREQUIPA</span></li>
              <li>
                Presentación: <span> {{ producto.descripcion }}</span>
              </li>
              <li>Peso <span>1 Litro</span></li>
              <li>Pedido Min: <span> 1</span></li>
              <li>Disponibilidad: <span> Todo el año</span></li>
              <li>Descripción: {{ producto.descripcion }}</li>
            </ul>
            <!-- <NuxtLink to="/" class="btn btn-outline-secondary mt-3">← Volver</NuxtLink> -->
            <NuxtLink to="/" class="btn btn-outline-secondary mt-3 me-2">← Volver</NuxtLink>
              <a
                :href="`https://wa.me/51934835047?text=Hola,%20deseo%20información%20sobre%20el%20producto%20${encodeURIComponent(producto?.nombre || '')}`"
                target="_blank"
                class="btn btn-success mt-3">
                <i class="fab fa-whatsapp me-1"></i> Comprar por WhatsApp
              </a>

          </div>
        </div>
      </div>
      <div v-else class="container text-center py-5">
        <h2>Producto no encontrado 😢</h2>
        <NuxtLink to="/" class="btn btn-outline-secondary mt-3">← Volver al inicio</NuxtLink>
      </div>
      <div class="section-descripcion">
        <div class="container">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                role="tab" aria-controls="home" aria-selected="true">Descripción</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                role="tab" aria-controls="profile" aria-selected="false">Información Nutricional</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                role="tab" aria-controls="contact" aria-selected="false">Información de Envio</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <p>
                Procede de cultivos de aceitunas con control biológicos, son de calibre grande de primera, procesadas
                de
                forma natural con agua y sal, libre de insecticidas y pesticidas. Proporciona beneficios para la
                salud,
                vitaminas C y vitaminas, minerales calcio e hierro y antioxidantes, como propiedades antiflamatorias y
                para disminuir el colesterol.</p>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae necessitatibus ullam dolorem
                tempora et, ipsam commodi minus eius velit maxime molestiae cumque harum esse aliquid rerum distinctio
                quae doloribus officiis cum, officia, consectetur aut doloremque veniam. Incidunt dolor, voluptate
                fuga
                sapiente magni natus ad nam cumque ratione maiores doloremque.</p>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <p>Envío a distritos de Lima Metropolitana y Callao. Para envíos a otras
                regiones, el costo de envío será calculado al momento de realizar el pedido. El tiempo estimado de
                entrega es de 3 a 5 días hábiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
