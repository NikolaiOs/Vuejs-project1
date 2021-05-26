<template>
  <div>
    <ul :class="[$style.list]" v-show="list">
      <li :class="[$style.list__item]">
        <input placeholder="Date" v-model="date" />
      </li>
      <li :class="[$style.list__item]">
        <input placeholder="Category" v-model="category" />
      </li>
      <li :class="[$style.list__item]">
        <input placeholder="Price" v-model.number="price" />
      </li>
      <li>
        <button @click="save">Save</button>
      </li>
    </ul>
    <div>
      <button class="btnAddNewCost" @click="onAddNewCost">
        ADD NEW COST +
      </button>
    </div>
    <!-- <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model.number="price" />
    <button @click="save">Save</button> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      list: false
    }
  },
  methods: {
    onAddNewCost () {
      const btn = document.querySelector('.btnAddNewCost')
      const { list } = this
      switch (list) {
        case false:
          this.list = true
          btn.innerHTML = 'Roll up'
          break
        case true:
          this.list = false
          btn.innerHTML = 'ADD NEW COST +'
          break
      }
    },
    save () {
      const { date, category, price } = this
      this.$emit('addMyEventFromPaymentForm', { date, category, price })
    }
  }
}
</script>

<style lang="scss" module>
.list {
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
}
.list__item {
  margin: 0 0 5px;
}
</style>
