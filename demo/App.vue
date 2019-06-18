<template>
  <div id="app">
    <h1>Telephone Input Vue</h1>
    <h2 style="color: #999">made with &#x2764; by Steven.</h2>
    <div style="width: 500px; margin: 20px auto;">
      <vue-tel-input :value="phone_num" @input="onInput" :preferredCountries="['us', 'gb', 'ua']"></vue-tel-input>
    </div>
    <div v-if="phone.number" style="color: #e83e8c">
      <span>
        Number:
        <strong>{{ phone.number }}</strong>,&nbsp;
      </span>
      <span>
        Is valid:
        <strong>{{ phone.isValid }}</strong>,&nbsp;
      </span>
      <span>
        Country:
        <strong>{{ phone.country }}</strong>
      </span>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'app',
  data() {
    return {
      phone_num: '',
      phone: {
        number: '',
        isValid: false,
        country: undefined,
      },
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.phone_num = '380730421488'
    // }, 3000)
  },
  methods: {
    onInput(formattedNumber, { number, isValid, country }) {      
      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country && country.name;
    },
  },
};
</script>
