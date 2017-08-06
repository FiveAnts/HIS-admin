// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import vueResource from 'vue-resource'
import stores from '@/store/Project/item.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/*lxy 2017/8/5*/
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(vueResource)
Vue.use(Vuex)

const store = new Vuex.Store(stores);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
