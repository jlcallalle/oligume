   <script setup>
  import { useHead } from '@unhead/vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import bannerAceite from '@/assets/slider-campo.png' 
  import bannerAceituna from '@/assets/banner-aceituna.png'
  import bannerMovil1 from '@/assets/banner-movil-1.png'
  import bannerMovil2 from '@/assets/banner-movil-2.png'

  import productos from '@/data/productos.json'

  useHead({
    title: 'Oligume, Aceitunas y Aceite de Oliva',
    meta: [
      {
        name: 'description',
        content: 'Productos naturales y ecológicos desde Acarí: aceitunas y aceite de oliva extra virgen.'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://oligume.pe/'
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
     <!--  <Swiper :modules="[Navigation, Pagination, Autoplay]" :space-between="30" :slides-per-view="1" :loop="true"
        :autoplay="{ delay: 5000 }" navigation pagination class="swiper-oligume">
        <SwiperSlide>
          <img :src="bannerAceite" alt="Aceite de oliva extra virgen Oligume" class="w-100" loading="lazy" />
          <a
            href="https://wa.me/51941498032"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Comprar a través de WhatsApp"
            class="btn btn-success btn-lg boton-whatsapp"
            @click="gtagEvent"
          >
            Compra Aquí
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="bannerAceituna" alt="Aceitunas negras naturales Oligume" class="w-100" loading="lazy" />
        </SwiperSlide>
      </Swiper>
 -->
      <!-- Slider para escritorio (solo visible en md en adelante) -->
      <div class="d-none d-md-block">
        <Swiper :modules="[Navigation, Pagination, Autoplay]" :space-between="30" :slides-per-view="1" :loop="true"
          :autoplay="{ delay: 5000 }" navigation pagination class="swiper-oligume">
          <SwiperSlide>
            <img :src="bannerAceite" alt="Aceite de oliva extra virgen Oligume" class="w-100" loading="lazy" />
            <a
              href="https://wa.me/51941498032"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-success btn-lg boton-whatsapp"
              @click="gtagEvent"
            >
              Compra Aquí
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img :src="bannerAceituna" alt="Aceitunas negras naturales Oligume" class="w-100" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
      
        <!-- Slider para móvil (visible solo en xs a sm) -->
      <div class="d-block d-md-none">
        <Swiper :modules="[Autoplay]" :space-between="10" :slides-per-view="1" :loop="true"
          :autoplay="{ delay: 4000 }" pagination class="swiper-oligume">
          <SwiperSlide>
            <img :src="bannerMovil1" alt="Banner móvil 1" class="w-100" loading="lazy" />
            <a
              href="https://wa.me/51941498032"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-success btn-sm boton-whatsapp"
              @click="gtagEvent"
            >
              Comprar
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img :src="bannerMovil2" alt="Banner móvil 2" class="w-100" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>

    </section>

    <section class="productos-destacados container py-5">
      <h2 class="text-center mb-4">Productos Destacados</h2>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3 mb-4" v-for="producto in productos" :key="producto.id">
          <div class="card h-100 text-center">
            <NuxtImg
              :src="producto.imagen"
              :alt="producto.nombre"
              class="card-img-top p-2"
              format="webp"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <p class="text-warning mb-1">★★★★★</p>
              <p class="card-text fw-semibold">S/. {{ producto.precio }}</p>
              <NuxtLink
                :to="`/producto/${producto.slug}`"
                class="btn btn-outline-success btn-sm"
              >
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

@media (max-width: 768px) {
  .swiper-oligume img {
    height: 450px;
    object-fit: cover;
    object-position: center center; 
  }
}


/* @media (max-width: 768px) {
  .swiper-oligume img {
    height: 250px;
    object-fit: cover;
    object-position: center center;
  }
  .boton-whatsapp {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
} */

</style>
