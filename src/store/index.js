import Vue from 'vue'
import Vuex from 'vuex'
import { moduleGroceries } from './moduleGroceries.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    groceries: moduleGroceries
  }
})
