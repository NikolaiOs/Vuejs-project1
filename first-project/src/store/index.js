import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localStorage = {
  page1: [
    { id: 1, date: '20.03.2020', category: 'Food', price: 169 },
    { id: 2, date: '21.03.2020', category: 'Navigation', price: 50 },
    { id: 3, date: '22.03.2020', category: 'Sport', price: 450 }
  ],
  page2: [
    { id: 4, date: '23.03.2020', category: 'Entertaiment', price: 969 },
    { id: 5, date: '24.03.2020', category: 'Education', price: 1500 },
    { id: 6, date: '25.03.2020', category: 'Food', price: 200 }
  ]
}

export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListIDS: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addPaymentsListData (state, payload) {
      const newUniqObjs = payload.filter(obj => {
        return state.paymentsListIDS.indexOf(obj.id) < 0
      })

      const uniqIDS = newUniqObjs.map(obj => obj.id)
      state.paymentsListIDS.push(...uniqIDS)
      state.paymentsList.push(...newUniqObjs)
    },
    addFormPaymentsListData (state, payload) {
      const formData = payload
      state.paymentsList.push(formData)
      return state.paymentsList
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
    fetchData ({ commit }, page) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = localStorage[`page${page}`]
          resolve(items)
        }, 2000)
      })
        .then(res => {
          commit('addPaymentsListData', res)
        })
    }
  }
})
