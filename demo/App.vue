<template>
  <div id="app">
    <div style="width: 500px; margin: 20px auto;">
      <vue-tel-input
        :preferred-countries="['us', 'gb', 'ua']"
        :valid-characters-only="true"
        @input="onInput"/>
    </div>
    <div
      v-if="phone.number"
      style="color: #e83e8c">
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
export default {
  name: 'App',
  data() {
    return {
      phone: {
        number: '',
        isValid: false,
        country: undefined,
      },
    };
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
