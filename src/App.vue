<template>
  <div id="app">
    <img src="./assets/logo.png">
    <tel-input/>
  </div>
</template>

<script>
import TelInput from './components/tel-input';

export default {
  name: 'app',
  components: {
    TelInput,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
