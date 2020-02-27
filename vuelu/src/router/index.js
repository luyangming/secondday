import Vue from 'vue'
import VueRouter from 'vue-router'
import Music from './../views/Music.vue'
import Movie from './../views/Movie.vue'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path:'/music',
    component:Music,
  },
  {
    path:'/movie',
    component:Movie,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
