import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from './../views/Detail.vue'
import Top from './../views/Top.vue'
import Test from './../views/Test.vue'
import A from './../views/A.vue'
import Error from './../views/Error'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

      {
        path:'/top',
        component:Top,
        children:[
          {
            path:'a',
            component:A
          }
       ]
      },
      {
        path:'/detail',
        name:'detail',
        component:Detail,
         
      },
      {
        path:'/test',
        component:Test,
        alias:'/abc'
      },
      {
        path:'/',
        redirect:'/top'
      },
      {
        path:'*',
        component:Error
      }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
