<template>
  <MainLayout>
    <div class="producto-detalle">
      <div class="container mt-5">
        <router-link to="/" class="btn btn-outline-secondary">Volver a Productos</router-link>
        <div class="row gx-4 gx-lg-5 align-items-center">
          <div class="col-md-6">
            <img :src="producto.imagen" alt="" class="img-fluid mb-3" style="max-height: 400px" />
          </div>
          <div class="col-md-6">
            <!-- <div class="small mb-1">SKU: BST-498</div> -->
            <h1 class="title-producto">{{ producto.nombre }}</h1>
            <div class="fs-5 mb-4">PRECIO:
              <!-- <span class="text-decoration-line-through">S/.50.00</span> -->
              <span class="precio-real">S/.{{ producto.precio }}</span>
            </div>
            <ul class="data-producto">
              <li>Marca: <span>Oligume</span></li>
              <li>Región: <span>AREQUIPA</span></li>
              <li>
                Presentación: <span> Botella de vidrio verde oscuro</span>
              </li>
              <li>Peso <span>1 Litro</span></li>
              <li>Pedido Min: <span> 1</span></li>
              <li>Disponibilidad: <span> Todo el año</span></li>
              <li>Descripción: {{ producto.descripcion }}</li>
            </ul>
            <a href="" class="btn mb-4 btn-contactar">Contactar Productor</a>
            <div class="d-flex">
              <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1"
                style="max-width: 3rem" />
              <button class="btn btn-outline-dark flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
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
                Procede de cultivos de aceitunas con control biológicos, son de calibre grande de primera, procesadas de
                forma natural con agua y sal, libre de insecticidas y pesticidas. Proporciona beneficios para la salud,
                vitaminas C y tianimas, minerales calcio e hierro y antioxidantes, como propiedades antiflamatorias y
                para disminuir el colesterol.</p>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae necessitatibus ullam dolorem
                tempora et, ipsam commodi minus eius velit maxime molestiae cumque harum esse aliquid rerum distinctio
                quae doloribus officiis cum, officia, consectetur aut doloremque veniam. Incidunt dolor, voluptate fuga
                sapiente magni natus ad nam cumque ratione maiores doloremque.</p>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <p>Envío gratuito en España peninsular en pedidos a partir de 60€. Recibe tu pedido entre 3 y 5 días
                hábiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";

const route = useRoute();

const productos = [
  { id: 1, nombre: 'Aceite de Oliva 1/2 Lt', precio: 35, imagen: '/img/aceite-500ml.png', descripcion: 'Aceite de oliva extra virgen de alta calidad.' },
  { id: 2, nombre: 'Aceite de Oliva 1 Lt', precio: 68, imagen: '/img/aceite-litro.png', descripcion: 'Botella de 1 litro de aceite extra virgen.' },
  { id: 2, nombre: 'Aceite de Oliva 3 Lt', precio: 190, imagen: '/img/aceite-bidon.png', descripcion: 'Bidón 3Lt de aceite extra virgen.' },
  { id: 3, nombre: 'Aceitunas Negras 1/2kg', precio: 15, imagen: '/img/aceituna-negra-medio.jpg', descripcion: 'Aceitunas negras seleccionadas.' },
  { id: 4, nombre: 'Aceitunas Negras 1kg', precio: 30, imagen: '/img/aceituna-negro-kg.jpg', descripcion: 'Bolsa de aceitunas negras grandes.' },
  { id: 5, nombre: 'Aceitunas Verdes 1/2kg', precio: 15, imagen: '/img/aceituna-verde-medio.jpg', descripcion: 'Aceitunas verdes seleccionadas.' },
  { id: 6, nombre: 'Aceitunas Verdes 1kg', precio: 30, imagen: '/img/aceituna-verde-kg.jpg', descripcion: 'Bolsa de aceitunas verdes frescas.' }
]

const producto = computed(() => {
  const id = Number(route.params.id);
  return productos.find((p) => p.id === id) || null;
});
</script>
