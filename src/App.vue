<template lang="pug">
#app
  b-card(title="Telephone Input Vue"
        sub-title="made with &#x2764; by Steven.")
    tel-input
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

.card-subtitle {
  margin: 5px;
  padding-bottom: 30px;
}
</style>
