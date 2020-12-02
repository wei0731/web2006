import Vue from 'vue'
import Vuex from 'vuex'
import loginModules from './modules/loginModules'
import editorModules from './modules/editorModules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginModules,
    editorModules

  }
})
