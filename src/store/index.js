import Vue from 'vue'
import Vuex from 'vuex'
import { moduleGroceries } from './moduleGroceries.js'
import { moduleItems } from './moduleItems.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    axiosError(thisStore, error) {
      console.error(error.response || error.message || error)
    }
  },
  modules: {
    groceries: moduleGroceries,
    items: moduleItems
  }
})
