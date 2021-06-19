import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/contents/Home.vue'
import Groceries from '../components/contents/Groceries.vue'
import Items from '../components/contents/Items.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/groceries',
    name: 'Groceries',
    component: Groceries
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
