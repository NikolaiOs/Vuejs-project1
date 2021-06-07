<template>
  <div id="app" :class="[$style.app]">
    <header :class="[$style.header]">
      My personal costs
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/404">404</router-link>
    </header>
    <main>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
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
