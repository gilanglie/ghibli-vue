import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      detail: {}
    },
    mutations: {
      setDetail (state, data) {
        state.detail = data
      }
    }
  })
}

export default createStore
