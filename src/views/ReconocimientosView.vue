<template>
  <MainLayout>
    <div class="reconocimientos container mt-5">
      <h2 class="text-center">RECONOCIMIENTOS</h2>

      <section class="mt-4">
        <p>
          En Oligume SAC estamos orgullosos de haber sido reconocidos por
          nuestras buenas prácticas agrícolas y por nuestro compromiso con la
          calidad. Estos son algunos de nuestros logros:
        </p>
        <ul>
          <li>Certificación “Fundo Verde” por Senasa</li>
          <li>Licenciatarios de la Marca Arequipa</li>
          <li>Participación destacada en ferias agroindustriales</li>
          <li>Premios regionales por calidad en aceitunas y aceite de oliva</li>
        </ul>

        <div class="text-center mt-4">
          <!-- <img src="@/assets/reconocimiento.jpg" alt="Reconocimientos" class="img-fluid" /> -->
        </div>
      </section>
    </div>
  </MainLayout>
</template>
  
  <script setup>
import MainLayout from "../layouts/MainLayout.vue";
</script>
  
  <style scoped>
h2 {
  background-color: #f5f0da;
  padding: 10px;
}
ul {
  list-style-type: square;
}
</style>
  