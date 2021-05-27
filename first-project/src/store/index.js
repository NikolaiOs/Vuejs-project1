import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [

    ]
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList
        .reduce((res, cur) => res + cur.price, 0)
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
              date: '13.05.2021',
              category: 'Education',
              price: 123
            },
            {
              date: '14.05.2021',
              category: 'Education',
              price: 345
            },
            {
              date: '19.05.2021',
              category: 'Education',
              price: 888
            }
          ])
        }, 2000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
  }
})
