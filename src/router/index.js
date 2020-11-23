import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    beforeEnter:() => { window.location = "https://raw.githubusercontent.com/akmadian/resume/main/resume.pdf"}
  },
  {
    path: '/tealog',
    name: 'Tea Log',
    beforeEnter: () => { window.location = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS02eDhzImMzVQ_jO3E2rJn-nBI30ZkyKyBTn42EwNxaU-CTHrGik0LJQ9e9gMhP5qX0UmXhaJ-7eXo/pubhtml?gid=0&single=true"}
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes      
})

export default router
