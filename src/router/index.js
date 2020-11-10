import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import Search from '@/views/search/Search'
import HotMore from '@/views/hotMore/HotMore'
import NewMore from '@/views/newMore/NewMore'
import Err from '@/views/404/404'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/hotMore',
    name: 'HotMore',
    component: HotMore
  },
  {
    path: '/newMore',
    name: 'NewMore',
    component: NewMore
  },
  // 404
  {
    path: '*',
    name: 'Err',
    component: Err
  }
]

const router = new VueRouter({
  routes
})

export default router
