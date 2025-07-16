<script setup>
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'

useHead({
  title: 'Cyber Wow | Ofertas en Aceitunas y Aceite de Oliva',
  meta: [
    {
      name: 'description',
      content: 'Aprovecha nuestras ofertas Cyber Wow en productos naturales desde Acarí. ¡Aceitunas y aceite de oliva extra virgen a precios irresistibles!'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://oligume.pe/cyber_wow'
    }
  ],
  bodyAttrs: {
    class: 'cyber-wow'
  }
})
</script>
<template>
  <div class="wrap-detalle-producto">
      <div class="producto-header">
        <div class="container">
          <h1>Cyber Wow - Desde el 14 al 17 Julio</h1>
        </div>
      </div>
      <div class="producto-detalle">
        <h2 class="bold text-center mb-4">Promociones CyberWow!</h2>
        <div class="container">
          <div class="row ">
            <div class="col-xl-4 col-sm-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div class="product-img position-relative">
                            <!-- <div class="avatar-sm product-ribbon">
                                <span class="avatar-title rounded-circle  bg-primary">
                                    - 15 %
                                </span>
                            </div> -->
                            <img src="@/assets/cyber/oferta1.png" alt="" class="img-fluid mx-auto d-block">
                        </div>
                        <div class="mt-4 text-center">
                            <h5 class="mb-3 text-truncate">1 Litro Aceite de Oliva Extra Virgen </h5>
                            <h5 class="my-0"><span class="text-muted me-2"><del>S/60</del></span> <b>S/49.90</b></h5>
                            <NuxtLink
                                :to="`producto/aceite-oliva-1lt`"
                                class="btn-cyber btn btn-success mt-3"
                            >
                                Ver Detalle
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div class="product-img position-relative">
                            <!-- <div class="avatar-sm product-ribbon">
                                <span class="avatar-title rounded-circle  bg-primary">
                                    - 12 %
                                </span>
                            </div> -->
                            <img src="@/assets/cyber/oferta2.png" alt="" class="img-fluid mx-auto d-block">
                        </div>
                        <div class="mt-4 text-center">
                            <h5 class="mb-3 text-truncate">3 Litro Aceite de Oliva Extra Virgen </h5>
                            <h5 class="my-0"><span class="text-muted me-2"><del>S/160</del></span> <b>S/140</b></h5>
                            <NuxtLink
                                :to="`/producto/aceite-oliva-3lt`"
                                class="btn-cyber btn btn-success mt-3"
                            >
                                Ver Detalle
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div class="product-img position-relative">
                            <img src="@/assets/cyber/oferta3.png" alt="" class="img-fluid mx-auto d-block">
                        </div>
                        <div class="mt-4 text-center">
                            <h5 class="mb-3 text-truncate">1 Litro Aceite de Oliva + 1kg de Aceitunas</h5>
                            <h5 class="my-0"><span class="text-muted me-2"><del>S/90</del></span> <b>S/75</b></h5>
                            <NuxtLink
                                :to="`producto/promo-pack-aceitera`"
                                class="btn-cyber btn btn-success mt-3"
                            >
                                Ver Detalle
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div class="product-img position-relative">
                            <img src="@/assets/cyber/oferta4.png" alt="" class="img-fluid mx-auto d-block">
                        </div>
                        <div class="mt-4 text-center">
                            <h5 class="mb-3 text-truncate">1 Litro Aceite de Oliva + 1/2 kg de Aceitunas negras o verdes</h5>
                            <h5 class="my-0"><span class="text-muted me-2"><del>S/75</del></span> <b>S/64</b></h5>
                            <NuxtLink
                                :to="`producto/promo-pack-aceituna`"
                                class="btn-cyber btn btn-success mt-3"
                            >
                                Ver Detalle
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div class="product-img position-relative">
                            <img src="@/assets/cyber/oferta5.png" alt="" class="img-fluid mx-auto d-block">
                        </div>
                        <div class="mt-4 text-center">
                            <h5 class="mb-3 text-truncate">2 Litro Aceite de Oliva Extra Virgen</h5>
                            <h5 class="my-0"><span class="text-muted me-2"><del>S/120</del></span> <b>S/98</b></h5>
                            <NuxtLink
                                :to="`producto/promo-pack-aceite-2litros`"
                                class="btn-cyber btn btn-success mt-3"
                            >
                                Ver Detalle
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
</template>
