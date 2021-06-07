<template>
  <div>
    <PaymentForm />
    <PaymentsList />
  </div>
</template>

<script>
import PaymentForm from '../components/PaymentForm.vue'
import PaymentsList from '../components/PaymentsList.vue'

export default {
  components: {
    PaymentForm,
    PaymentsList
  }
}
</script>

<style>

</style>
