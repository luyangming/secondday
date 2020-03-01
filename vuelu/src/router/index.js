import Vue from 'vue'
import VueRouter from 'vue-router'
import Music from './../views/Music.vue'
import Movie from './../views/Movie.vue'
import Book from './../views/Book.vue'
import Photo from './../views/Photo.vue'
import MovieDetail from './../views/MovieDetail'
import MusicDetail from './../views/MusicDetail'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    redirect:'/movie'
  },
  {
    path:'/music',
    component:Music,
  },
  {
    path:'/movie',
    component:Movie,
  },
  {
    path:'/book',
    component:Book,
  },
  {
    path:'/photo',
    component:Photo
  },
  {
    path:'/movie-detail',
    component:MovieDetail,
    name:'movie-detail'
  },
  {
    path:'/music-detail',
    component:MusicDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
