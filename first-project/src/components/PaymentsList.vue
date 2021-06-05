<template>
  <div>
    <ul :class="[$style.list]">
      <li>#</li>
      <li>Date</li>
      <li>Category</li>
      <li>Price</li>
    </ul>
    <div v-for="(item, index) in currentElements" :key="index">
      {{ index }} {{ item }}
    </div>
    <Pagination @paginate="onPaginate" :length="6" :n="n" :currentPage="page" />
  </div>
</template>

<script>
import Pagination from './Pagination.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      page: 1,
      n: 3
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    doSomething () {
      console.log(this.items)
    },
    onPaginate (page) {
      this.page = page
      this.fetchData(page)
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    currentElements () {
      const { n, page } = this
      return this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  },
  mounted () {
    this.fetchData(this.page)
  }
}
</script>

<style lang="scss" module>
.list {
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
</style>
