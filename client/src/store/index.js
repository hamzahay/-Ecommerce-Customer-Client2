import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../bin/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    username: '',
    products: [],
    carts: []
  },
  mutations: {
    updateLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    updateProducts (state, payload) {
      state.products = payload
    },
    updateCarts (state, payload) {
      state.carts = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
    auth (state, payload) {
      if (localStorage.access_token) {
        state.loginStatus = true
      } else {
        state.loginStatus = false
      }
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: 'login',
        data: payload
      })
    },
    register (context, payload) {
      return axios({
        method: 'POST',
        url: 'register',
        data: payload
      })
    },
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'products'
      })
        .then(({ data }) => {
          context.commit('updateProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts (context, payload) {
      axios({
        method: 'GET',
        url: 'carts',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('updateCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      axios({
        method: 'POST',
        url: `carts/${payload.id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCartQuantity (context, payload) {
      axios({
        method: 'PATCH',
        url: `carts/${payload.id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
