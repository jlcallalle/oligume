<template>
  <form @submit.prevent="enviarFormulario" class="formulario-contacto">
    <div class="mb-3">
      <label>Nombre</label>
      <input v-model="form.nombre" type="text" required placeholder="Ingresa tu nombre" class="form-control" />
    </div>

    <div class="mb-3">
      <label>Correo Electrónico</label>
      <input v-model="form.email" type="email" required placeholder="nombre@ejemplo.com" class="form-control" />
    </div>

    <div class="mb-3">
      <label>Mensaje</label>
      <textarea v-model="form.mensaje" required placeholder="Escribe tu mensaje aquí..." class="form-control" />
    </div>

    <button type="submit" class="btn btn-success" :disabled="cargando">
      {{ cargando ? 'Enviando...' : 'Enviar' }}
    </button>

    <p v-if="enviado" class="mt-3 text-success">✅ Tu mensaje ha sido enviado con éxito.</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const form = ref({
  nombre: '',
  email: '',
  mensaje: ''
})
const enviado = ref(false)
const cargando = ref(false)

const enviarFormulario = async () => {
  cargando.value = true
  try {
    await emailjs.send(
      'service_wyh6vjo',
      'template_jj1j5sm',
      {
        name: form.value.nombre,
        email: form.value.email,
        message: form.value.mensaje,
        title: 'Formulario de contacto web'
      },
      'Vy0tdDJgMWwpMhTl2'
    )
    enviado.value = true
    form.value = { nombre: '', email: '', mensaje: '' }
  } catch (err) {
    console.error('Error al enviar:', err)
  } finally {
    cargando.value = false
  }
}
</script>
