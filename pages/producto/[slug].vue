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
    return `Nuestro aceite de oliva extra virgen Oligume es elaborado mediante extracción en frío, lo que garantiza la conservación de sus propiedades naturales, aroma fresco y sabor auténtico. Rico en antioxidantes, vitamina E y grasas saludables, ayuda a cuidar tu salud y realzar el sabor de tus comidas. Producido con olivas cuidadosamente seleccionadas del valle de Acarí – Arequipa, es perfecto para ensaladas, panes, pastas, carnes y preparaciones gourmet. 100 % natural, sin aditivos ni conservantes.`
  } else if (nombre.includes('aceituna')) {
    return `Nuestras aceitunas Oligume provienen del valle de Acarí, Arequipa. Cultivadas de forma natural, sin pesticidas, conservan su sabor auténtico y textura firme. Son ideales para tablas de piqueos, ensaladas y como snack saludable en cualquier momento del día.`
  } else {
    return `Producto natural de la región de Arequipa, cultivado y procesado con los más altos estándares de calidad por Oligume.`
  }
})

const textoNutricional = computed(() => {
  if (!producto) return ''

  const nombre = producto.nombre.toLowerCase()

  if (nombre.includes('aceite de oliva')) {
    return `El aceite de oliva extra virgen Oligume aporta grasas monoinsaturadas saludables que ayudan a reducir el colesterol LDL ("malo") y mantener el colesterol HDL ("bueno"). Contiene antioxidantes naturales, polifenoles y vitamina E, compuestos beneficiosos para la salud cardiovascular y la protección de las células frente al estrés oxidativo. Porción referencial (1 cda – 15 ml): Energía 120 kcal; Grasas totales 14 g (saturadas 2 g, monoinsaturadas 10 g, poliinsaturadas 1 g); Sodio 0 mg; Carbohidratos 0 g; Proteínas 0 g. Valores aproximados.`
  } else if (nombre.includes('aceituna')) {
    return `Las aceitunas Oligume son fuente de fibra, hierro, calcio y vitamina E. Su contenido de antioxidantes y ácidos grasos saludables contribuye a la salud cardiovascular y digestiva. Consumidas con moderación, son un excelente complemento dentro de una alimentación equilibrada.`
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
            <!-- <div v-if="producto.entregaGratis" class="badge-delivery mb-4">
              🚚 <strong>¡Delivery GRATIS en Lima Metropolitana!</strong>
            </div> -->
            <div v-if="producto.entregaGratis" class="badge-delivery mb-4">
              🚚 <strong>¡ GRATIS Jarrita dispensaror de Aceite!</strong>
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
            <NuxtLink :to="producto.categoria === 'promocion' ? '/cyber_wow' : '/'" class="btn btn-outline-secondary mt-3 me-2">← Volver</NuxtLink>
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
            <!-- <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <p>{{ textoNutricional }}</p>
            </div> -->
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <!-- Aceite de oliva -->
              <template v-if="producto && producto.nombre.toLowerCase().includes('aceite de oliva')">
                <p>
                  El aceite de oliva extra virgen Oligume aporta grasas monoinsaturadas saludables que ayudan a reducir el colesterol LDL ("malo")
                  y mantener el colesterol HDL ("bueno"). Contiene antioxidantes naturales, polifenoles y vitamina E,
                  compuestos beneficiosos para la salud cardiovascular y la protección de las células frente al estrés oxidativo.
                </p>

                <table class="table table-bordered mt-3" style="max-width: 500px;">
                  <thead class="table-light">
                    <tr>
                      <th>Componente</th>
                      <th>Cantidad por porción (1 cda – 15 ml)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Energía</td><td>120 kcal</td></tr>
                    <tr><td>Grasas totales</td><td>14 g</td></tr>
                    <tr><td>&nbsp;&nbsp;Saturadas</td><td>2 g</td></tr>
                    <tr><td>&nbsp;&nbsp;Monoinsaturadas</td><td>10 g</td></tr>
                    <tr><td>&nbsp;&nbsp;Poliinsaturadas</td><td>1 g</td></tr>
                    <tr><td>Sodio</td><td>0 mg</td></tr>
                    <tr><td>Carbohidratos</td><td>0 g</td></tr>
                    <tr><td>Proteínas</td><td>0 g</td></tr>
                  </tbody>
                </table>
                <p class="text-muted"><em>Valores aproximados.</em></p>
              </template>

              <!-- Aceitunas -->
              <template v-else-if="producto && producto.nombre.toLowerCase().includes('aceituna')">
                <p>{{ textoNutricional }}</p>

                <table class="table table-bordered mt-3" style="max-width: 500px;">
                  <thead class="table-light">
                    <tr>
                      <th>Componente</th>
                      <th>Cantidad por 100 g</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Energía</td><td>115 kcal</td></tr>
                    <tr><td>Grasas totales</td><td>11 g</td></tr>
                    <tr><td>&nbsp;&nbsp;Saturadas</td><td>1.5 g</td></tr>
                    <tr><td>&nbsp;&nbsp;Monoinsaturadas</td><td>7.5 g</td></tr>
                    <tr><td>&nbsp;&nbsp;Poliinsaturadas</td><td>1 g</td></tr>
                    <tr><td>Carbohidratos</td><td>0.5 g</td></tr>
                    <tr><td>Azúcares</td><td>0 g</td></tr>
                    <tr><td>Fibra</td><td>3 g</td></tr>
                    <tr><td>Proteínas</td><td>0.8 g</td></tr>
                    <tr><td>Sodio</td><td>735 mg</td></tr>
                  </tbody>
                </table>
                <p class="text-muted"><em>Valores aproximados.</em></p>
              </template>

              <!-- Otros productos -->
              <template v-else>
                <p>{{ textoNutricional }}</p>
              </template>
            </div>

            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            
             <!--  <p>
                Realizamos envíos a todos los distritos de Lima Metropolitana y Callao. Para envíos a provincias, trabajamos con agencias de transporte confiables como Shalom, Olva Courier u otra de preferencia del cliente. El costo de envío será calculado al momento de la cotización, según destino y proveedor seleccionado.
              </p> -->

              <p>
                  Realizamos envíos a todos los distritos de <strong>Lima Metropolitana y Callao</strong>.<br>
                  Para envíos a <strong>provincias</strong>, trabajamos con agencias de transporte confiables como
                  <strong>Shalom</strong>, <strong>Olva Courier</strong> u otra de preferencia del cliente.<br>
                  El <strong>costo de envío</strong> se calcula según el destino y el peso del pedido y se confirma al momento de cerrar la compra.<br>
                  También puedes <strong>coordinar el recojo</strong> en nuestras tiendas de <strong>Comas (Lima)</strong> o
                  <strong>Acarí (Arequipa)</strong> previa coordinación por WhatsApp.
                </p>

              
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
