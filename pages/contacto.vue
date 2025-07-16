<script setup>
import FormContacto from '@/components/FormContacto.vue'
</script>
<template>
  <div class="producto-header">
    <div class="container">
      <h1>Contacto</h1>
    </div>
  </div>

  <div class="producto-detalle">
      <div class="container">
        <div class="row align-items-center g-5 py-4">
           <div class="col-12 col-sm-8 col-lg-6">
            <H4 class="text-center mb-3">Escríbenos:</H4>
            <div
              class="mx-auto bg-light p-4 rounded shadow-sm"
            >
              <FormContacto />
            </div>

          </div>
          <div class="col-lg-6 detalle-texto">
           
              <H4 class="text-center mb-3">Visita nuestra tienda en COMAS:</H4>
              <div class="ratio ratio-16x9">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.8577859470213!2d-77.06381160049641!3d-11.924871687631896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1899a158561%3A0xd431ba522846c3fc!2sOligume%2C%20La%20Casa%20del%20Olivo!5e0!3m2!1ses-419!2sus!4v1752629816362!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>
            
          </div>
        </div>
      </div>
    </div>


</template>
