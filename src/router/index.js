import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import ReconocimientosView from '../views/ReconocimientosView.vue'
import ContactoView from '../views/ContactoView.vue'
import ProductoDetalleView from '../views/ProductoDetalleView.vue'


// Aquí defines las rutas
const routes = [
  { path: '/', component: HomeView },
  { path: '/nosotros', component: NosotrosView },
  { path: '/reconocimientos', component: ReconocimientosView },
  { path: '/contacto', component: ContactoView },
  { path: '/producto/:id', component: ProductoDetalleView },
]

// Creas el router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
