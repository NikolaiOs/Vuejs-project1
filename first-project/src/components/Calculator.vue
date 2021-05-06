<template>
  <div class="Calc">
    <h1>{{ msg }}</h1>
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div>
      <button @click="calculate">+</button>
      <button @click="calculate">-</button>
      <button @click="calculate">*</button>
      <button @click="calculate">/</button>
      <button @click="calculate">^</button>
      <button @click="calculate">//</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0
  }),
  props: {
    msg: String
  },
  methods: {
    // op - операция (+,-,*....)
    calculate (op) {
      if (op.target.innerHTML === '+') {
        this.result = this.operand1 + this.operand2
      } else if (op.target.innerHTML === '-') {
        this.result = this.operand1 - this.operand2
      } else if (op.target.innerHTML === '*') {
        this.result = this.operand1 * this.operand2
      } else if (op.target.innerHTML === '/') {
        this.result = this.operand1 / this.operand2
      } else if (op.target.innerHTML === '^') {
        this.result = Math.pow(this.operand1, this.operand2)
      } else if (op.target.innerHTML === '//') {
        this.result = Math.trunc(this.operand1 / this.operand2)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  input {
    width: 50px;
    font-size: 20px;
    margin-left: 5px;
  }
  button {
    margin-top: 10px;
    margin-left: 5px;
    height: 30px;
    width: 30px;
    font-size: 20px;
    text-align: center;
  }
</style>
