import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { Tabs } from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

