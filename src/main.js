import Vue from 'vue'
import App from '@/layouts/App.vue'


Vue.config.productionTip = false

import './assets/css/base.css';   //src

import '@/assets/js/font.js';
import router from '@/plugins/router'
// import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../../vueobj/src/layouts/App.vue' router.start(App,'#app')

// Vue.use(VueRouter)


new Vue({
		router,
  render: h => h(App)
	
}).$mount('#app')
