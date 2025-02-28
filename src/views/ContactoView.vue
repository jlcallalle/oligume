<template>
  <MainLayout>
    <div class="contacto container mt-5">
      <h2 class="text-center">CONTACTO</h2>

      <section class="mt-4">
        <p class="text-center">
          Ponte en contacto con nosotros para realizar pedidos o resolver tus
          dudas.
        </p>

        <div class="row justify-content-center">
          <div class="col-md-6">
            <form @submit.prevent="enviarFormulario">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  v-model="form.nombre"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea
                  class="form-control"
                  id="mensaje"
                  rows="4"
                  v-model="form.mensaje"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-success w-100">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div class="mt-4 text-center">
          <p>Síguenos en nuestras redes sociales:</p>
          <a href="#"><i class="bi bi-facebook me-2"></i></a>
          <a href="#"><i class="bi bi-instagram me-2"></i></a>
          <a href="#"><i class="bi bi-whatsapp"></i></a>
        </div>
      </section>
    </div>
  </MainLayout>
</template>
  
  <script setup>
import MainLayout from "../layouts/MainLayout.vue";
import { reactive } from "vue";

const form = reactive({
  nombre: "",
  email: "",
  mensaje: "",
});

function enviarFormulario() {
  alert(`Gracias ${form.nombre}, tu mensaje fue enviado correctamente.`);
  // Aquí podrías enviar a un backend si lo necesitas
}
</script>
  
  <style scoped>
h2 {
  background-color: #f5f0da;
  padding: 10px;
}
form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
  