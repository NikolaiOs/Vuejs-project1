<template>
  <div :class="[$style.wrapper]">
    <div @click="onClick(currentPage - 1)">&#8249;</div>

    <div :class="{[$style.active]: currentPage === i}" @click="onClick(i)" v-for="i in amount" :key="i">
      {{ i }}
    </div>

    <div @click="onClick(currentPage + 1)">&#8250;</div>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    n: Number,
    currentPage: Number
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    onClick (page) {
      if (page < 1 || page > this.amount) {
        return
      }
      this.$emit('paginate', page)
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  & > div {
    padding: 10px;
    &.active {
      background: #ccc;
    }
  }
}
</style>
