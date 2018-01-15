<template>
  <div id="app">
    <transition name="route-fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.route-fade-enter-active, .route-fade-leave-active {
  transition-property: opacity;
  transition-duration: .15s;
}

.route-fade-enter-active {
  transition-delay: .15s;
}

.route-fade-enter, .route-fade-leave-active {
  opacity: 0
}

</style>
