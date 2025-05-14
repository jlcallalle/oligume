   <script setup>
  import { useHead } from '@unhead/vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import bannerAceite from '@/assets/slider-campo.png' 
  import bannerAceituna from '@/assets/banner-aceituna.png'
/*   import bannerAceituna from '@/assets/banner-aceituna.png' */
  import productos from '@/data/productos.json'

  useHead({
  title: 'Oligume, Aceitunas y Aceite de Oliva',
  meta: [
    {
      name: 'description',
      content: 'Productos naturales y ecológicos desde Acarí: aceitunas y aceite de oliva extra virgen.'
    }
  ]
})

const gtagEvent = () => {
  window.gtag?.('event', 'click_comprar', {
    event_category: 'boton',
    event_label: 'Compra ahora'
  });
};

</script>
   
   <template>
    <section id="slider" class="mt-3 container">
      <Swiper :modules="[Navigation, Pagination, Autoplay]" :space-between="30" :slides-per-view="1" :loop="true"
        :autoplay="{ delay: 5000 }" navigation pagination class="swiper-oligume">
        <SwiperSlide>
          <img :src="bannerAceite" alt="Banner Aceite Oligume" class="w-100" />
          <a
            href="https://wa.me/51987654321"
            target="_blank"
            class="btn btn-success btn-lg boton-whatsapp"
            @click="gtagEvent"
          > 
            Compra Aquí
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="bannerAceituna" alt="Banner Aceituna" class="w-100" />
        </SwiperSlide>
      </Swiper>
    </section>

    <section class="productos-destacados container py-5">
      <h2 class="text-center mb-4">Productos Destacados</h2>
      <div class="row">
        <div class="col-md-3 mb-4" v-for="producto in productos" :key="producto.id">
          <div class="card h-100 text-center">
            <img :src="producto.imagen" class="card-img-top p-3" :alt="producto.nombre" />
            <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <p class="text-warning mb-1">★★★★★</p>
              <p class="card-text">S/. {{ producto.precio }}</p>
              <NuxtLink :to="`/producto/${producto.slug}`" class="btn btn-outline-success btn-sm">
                Ver Detalle
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

  </template>

<style scoped>
.swiper-oligume {
  border-radius: 0.5rem;
  overflow: hidden;
}
</style>
