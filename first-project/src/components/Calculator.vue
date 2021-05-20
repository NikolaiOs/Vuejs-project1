<template>
  <div class="calc">
    <h1>{{ msg }}</h1>
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div>
      <button @click="calculate" v-for="op in operations" v-bind:key="op" class="operation">{{ op }}</button>
    </div>
    <div class="error" v-show="error">
      {{ error }}
    </div>
    <br>
    <div v-if="result < 0">
      Получилось отрицательное число.
    </div>
    <div v-else-if="result <= 1000">
      Результат лежит в пределах 0...1000
    </div>
    <div v-else>
      Результат слишком большой!
    </div>
    <br>
    <div class="checkbox">
      <input type="checkbox" id="check1" v-model="keyboardCheck1" class="checkbox-keyboard"><p>Электронная клавиатура</p>
    </div>

    <label for="check1">
      <div class="keyboard" v-show="keyboardCheck1">
        <button v-for="num in keyboard" v-bind:key="num" @click="inputKeyboard(num)" class="keyboard-key">{{ num }}</button>
        <button v-for="del in keyboardDelete" v-bind:key="del" @click="keyDelete" class="keyboard-key">{{ del }}</button>
        <br><br>
        <label><input type="radio" value="1" v-model="oper">Операнд 1</label>
        <label><input type="radio" value="2" v-model="oper">Операнд 2</label>
      </div>
    </label>

    <!-- Пример ключа
    <div v-for="item in collection" v-bind:key="item"> {{ item }} </div> -->
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    error: '',
    operations: ['+', '-', '*', '/', '^', '//'],
    keyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    keyboardDelete: ['Delete'],
    keyboardCheck1: false,
    oper: ''
  }),
  props: {
    msg: String
  },
  methods: {
    inputKeyboard (i) {
      const { oper } = this
      const input = oper === '1' ? 'operand1' : 'operand2'
      this[input] = +(this[input] += String(i))
    },
    keyDelete () {
      const { oper } = this
      const input = oper === '1' ? 'operand1' : 'operand2'
      this[input] = Math.trunc(this[input] / 10)
    },
    // op - операция (+,-,*....)
    calculate () {
      const { operand1, operand2 } = this
      const op = event.target.innerHTML
      if (op === '/' && operand2 === 0) {
        this.error = 'Division by zero!'
        return
      }
      switch (op) {
        case '+':
          this.result = operand1 + operand2
          break
        case '-':
          this.result = operand1 - operand2
          break
        case '*':
          this.result = operand1 * operand2
          break
        case '/':
          this.result = operand1 / operand2
          break
        case '^':
          this.result = Math.pow(operand1, operand2)
          break
        case '//':
          this.result = Math.trunc(operand1 / operand2)
          break
      }
      // if (op.target.innerHTML === '+') {
      //   this.result = this.operand1 + this.operand2
      // } else if (op.target.innerHTML === '-') {
      //   this.result = this.operand1 - this.operand2
      // } else if (op.target.innerHTML === '*') {
      //   this.result = this.operand1 * this.operand2
      // } else if (op.target.innerHTML === '/') {
      //   this.result = this.operand1 / this.operand2
      // } else if (op.target.innerHTML === '^') {
      //   this.result = Math.pow(this.operand1, this.operand2)
      // } else if (op.target.innerHTML === '//') {
      //   this.result = Math.trunc(this.operand1 / this.operand2)
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  input {
    width: 50px;
    margin-left: 5px;
  }
  .operation {
    margin-top: 10px;
    margin-left: 5px;
    height: 30px;
    width: 30px;
    font-size: 20px;
    text-align: center;
  }
  .error {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid red;
  }
  .checkbox-keyboard {
    margin: 0 5px 0;
    width: 13px;
  }
  .keyboard-key {
    margin: 5px 5px 0;
    height: 30px;
  }
  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    margin: 0;
  }
</style>
