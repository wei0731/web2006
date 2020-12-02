import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './router/permission.js'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/animate.css'
import jwt from "jwt-decode"
import './utils/eventbus'
import './plugins/Mycomponents'
import i18n from './plugins/vueI18n.js'

if(localStorage.getItem("ego")){
  store.commit("loginModules/setUser",{
    username:jwt(localStorage.getItem("ego")).username,
    token:localStorage.getItem("ego")
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
