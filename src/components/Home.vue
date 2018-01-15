<template>
  <div>
      <h1>Test component</h1>
      <div class="container box"></div>
      <button @click="addClass" class="container__button button" :class="{disabled: button.isActive}">Button</button>
    <br>
      <input type="text" class="container__input input">
    <br>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        button: {
          isLoading: false,
          isActive: false
        }
      }
    },
    methods: {
      addClass () {
        this.button.isActive = !this.button.isActive
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/common';
  .container {
    width: 30%;
    height: 300px;
    background-color: white;
    margin: auto;
    &__button {
      width: 120px;
      margin: auto;
      padding: get-vw(25);
      background-color: $success;
    }
    &__input {
      margin-top: get-vw(50);
      width: 650px;
    }
  }
</style>
