<template>
  <div id="app" :class="[$style.app]">
    <header :class="[$style.header]">
      My personal costs
    </header>
    <main>
      <PaymentForm @addMyEventFromPaymentForm="onDataAdded" />
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentForm from './components/PaymentForm.vue'
import PaymentsList from './components/PaymentsList.vue'

export default {
  name: 'App',
  components: {
    PaymentForm,
    PaymentsList
  },
  data () {
    return {
      paymentsList: [
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
      ]
    }
  },
  methods: {
    onDataAdded (data) {
      this.paymentsList.push(data)
    }
  }
}
</script>

<style lang="scss" module>
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header {

}
</style>
