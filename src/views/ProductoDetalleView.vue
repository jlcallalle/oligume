<template>
    <MainLayout>
      <div class="container mt-5">
        <div v-if="producto">
          <h2>{{ producto.nombre }}</h2>
          <img :src="producto.imagen" alt="" class="img-fluid mb-3" style="max-height: 400px;">
          <p><strong>Precio:</strong> S/. {{ producto.precio }}</p>
          <p>{{ producto.descripcion }}</p>
          <router-link to="/" class="btn btn-outline-secondary">Volver a Productos</router-link>
        </div>
        <div v-else>
          <p>Producto no encontrado.</p>
          <router-link to="/" class="btn btn-outline-secondary">Volver a Productos</router-link>
        </div>
      </div>
    </MainLayout>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import MainLayout from '../layouts/MainLayout.vue'
  
  const route = useRoute()
  
  const productos = [
    { id: 1, nombre: 'Aceite de Oliva 1/2 Lt', precio: 30, imagen: '../aceite-500ml.png', descripcion: 'Aceite de oliva extra virgen de alta calidad.' },
    { id: 2, nombre: 'Aceite de Oliva 1 Lt', precio: 60, imagen: '../aceite-500ml.png', descripcion: 'Botella de 1 litro de aceite extra virgen.' },
    { id: 3, nombre: 'Aceitunas Negras 1/2kg', precio: 15, imagen: '../aceite-500ml.png', descripcion: 'Aceitunas negras seleccionadas.' },
    { id: 4, nombre: 'Aceitunas Negras 1kg', precio: 30, imagen: '../aceite-500ml.png', descripcion: 'Bolsa de aceitunas negras grandes.' },
    { id: 5, nombre: 'Aceitunas Verdes 1/2kg', precio: 15, imagen: '../aceite-500ml.png', descripcion: 'Aceitunas verdes seleccionadas.' },
    { id: 6, nombre: 'Aceitunas Verdes 1kg', precio: 30, imagen: '../aceite-500ml.png', descripcion: 'Bolsa de aceitunas verdes frescas.' }
  ]
  
  const producto = computed(() => {
    const id = Number(route.params.id)
    return productos.find(p => p.id === id) || null
  })
  </script>
  