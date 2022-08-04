import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test from '../views/TestView.vue'
import todo from '../views/TodoList.vue'
import contact from '../views/contact.vue'
import contactConfirm from '../views/contactConfirm.vue'
import adressSearch from '../views/adressSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/todo',
    name: 'todo',
    component: todo
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/contactConfirm',
    name: 'contactConfirm',
    component: contactConfirm
  },
  {
    path: '/adressSearch',
    name: 'adressSearch',
    component: adressSearch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
