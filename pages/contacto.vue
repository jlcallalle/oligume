<template>
  <div class="producto-header">
    <div class="container">
      <h1>Contacto</h1>
    </div>
  </div>

  <section class="container my-4">
    <p class="text-center">
      Ponte en contacto con nosotros para realizar pedidos o resolver tus dudas.
    </p>

    <div
      class="mx-auto bg-light p-4 rounded shadow-sm"
      style="max-width: 500px"
    >
      <form>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            placeholder="Ingresa tu nombre"
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="nombre@ejemplo.com"
          />
        </div>

        <div class="mb-3">
          <label for="mensaje" class="form-label">Mensaje</label>
          <textarea
            class="form-control"
            id="mensaje"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <button type="submit" class="btn btn-success w-100">Enviar</button>
      </form>
    </div>

    <p class="text-center mt-4">Síguenos en nuestras redes sociales:</p>
  </section>
</template>
