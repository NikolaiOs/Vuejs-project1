<template>
  <div id="app" :class="[$style.app]">
    <header :class="[$style.header]">
      My personal costs
    </header>
    <main>
      <PaymentForm />
      <PaymentsList />
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList.vue'
import PaymentForm from './components/PaymentForm.vue'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    onDataAdded (data) {
      this.paymentsList.push(data)
    }
  },
  mounted () {
    this.fetchData()
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
