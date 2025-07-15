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
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://oligume.pe/producto/${slug}`
    }
  ]
})

const categoriaSEO = computed(() => {
  if (!producto) return ''

  const nombre = producto.nombre.toLowerCase()

  if (nombre.includes('aceite de oliva')) {
    return 'Aceite de Oliva Extra Virgen'
  } else if (nombre.includes('aceitunas')) {
    return 'Aceitunas Ecológicas'
  } else {
    return 'Producto Oligume'
  }
})

const textoDescripcion = computed(() => {
  if (!producto) return ''

  const nombre = producto.nombre.toLowerCase()
  if (nombre.includes('aceite de oliva')) {
    return `Nuestro aceite de oliva extra virgen es obtenido por extracción en frío, lo que garantiza la conservación de sus propiedades naturales. Rico en antioxidantes, vitamina E y grasas saludables, es ideal para ensaladas, panes y preparaciones gourmet.`
  } else if (nombre.includes('aceituna')) {
    return `Nuestras aceitunas ecológicas provienen del Valle de Acarí, Arequipa. Cultivadas de forma natural, sin pesticidas, con un sabor auténtico y textura firme. Perfectas para acompañar tus comidas o como snack saludable.`
  } else {
    return `Producto natural de la región de Arequipa, cultivado y procesado con los más altos estándares de calidad por Oligume.`
  }
})

const textoNutricional = computed(() => {
  if (!producto) return ''

  const nombre = producto.nombre.toLowerCase()
  if (nombre.includes('aceite de oliva')) {
    return `El aceite de oliva extra virgen aporta grasas monoinsaturadas saludables que ayudan a reducir el colesterol malo. Contiene antioxidantes naturales, polifenoles y vitamina E, beneficiosos para la salud cardiovascular.`
  } else if (nombre.includes('aceituna')) {
    return `Las aceitunas son fuente de fibra, hierro, calcio y vitamina E. Su contenido en antioxidantes y ácidos grasos saludables contribuye a la salud digestiva y cardiovascular.`
  } else {
    return `Consulta los valores nutricionales específicos del producto según presentación y origen.`
  }
})
</script>

<template>
  <!-- <pre>producto {{ producto }}</pre> -->
   <p class="d-none">slug {{ slug }}</p>
  <div class="wrap-detalle-producto">
    <div class="producto-header">
      <div class="container">
       <!--  <h1>Aceite de oliva extra virgen</h1> -->
        <h1>{{ categoriaSEO }}</h1>
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
            <div class="fs-5 mb-3">PRECIO:
              <span class="text-decoration-line-through me-1">S/.{{ producto.precioOld }} </span>
              <span class="precio-real"> S/.{{ producto.precio }}</span>
            </div>
            <div v-if="producto.entregaGratis" class="badge-delivery mb-4">
              🚚 <strong>¡Delivery GRATIS en Lima Metropolitana!</strong>
            </div>
            <ul class="data-producto">
              <li>Marca: <span>Oligume</span></li>
              <li>Región: <span>AREQUIPA</span></li>
              <li>
                Presentación: <span> {{ producto.descripcion }}</span>
              </li>
              <li>Peso <span>{{ producto.peso_en }}</span></li>
              <li>Pedido Min: <span> 1</span></li>
              <li>Disponibilidad: <span> Todo el año</span></li>
              <li>Descripción: {{ producto.descripcion }}</li>
            </ul>
            <NuxtLink to="/" class="btn btn-outline-secondary mt-3 me-2">← Volver</NuxtLink>
              <a
                :href="`https://wa.me/51941498032?text=Hola,%20deseo%20información%20sobre%20el%20producto%20${encodeURIComponent(producto?.nombre || '')}`"
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
              <p>{{ textoDescripcion }}</p>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <p>{{ textoNutricional }}</p>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            
              <p>
                Realizamos envíos a todos los distritos de Lima Metropolitana y Callao. Para envíos a provincias, trabajamos con agencias de transporte confiables como Shalom, Olva Courier u otra de preferencia del cliente. El costo de envío será calculado al momento de la cotización, según destino y proveedor seleccionado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
