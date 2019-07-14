<template>
  <div id="app">
    <template v-if="!showPlayground">
      <a href="https://www.npmjs.com/package/vue-tel-input"><img src="https://img.shields.io/npm/dm/vue-tel-input.svg"></a>
      <a href="https://github.com/EducationLink/vue-tel-input"><img src="https://img.shields.io/github/stars/EducationLink/vue-tel-input.svg"></a>
      <h2 style="color: #999">made with &#x2764; by some <a
        style="color: inherit"
        href="https://github.com/EducationLink/vue-tel-input/graphs/contributors">awesome humans</a>.</h2>
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
    </template>
    <!-- built files will be auto injected -->
    <div style="text-align: center; margin-top: 20px;">
      View
      <span style="font-size: 15px;">
        [<a href="https://github.com/EducationLink/vue-tel-input">github</a>,
        <a href="https://github.com/EducationLink/vue-tel-input/releases">changelogs</a>,
        <a href="https://www.npmjs.com/package/vue-tel-input">npm</a>,
        <a
          href=""
          @click.prevent="showPlayground = !showPlayground">
        {{ showPlayground ? 'homepage' : 'playground' }}</a>].
      </span>
    </div>
    <div
      v-if="showPlayground"
      style="margin-top: 20px;">
      <iframe
        src="https://codesandbox.io/embed/0yyyk45q7w?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue"
        title="Vue Template"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
        style="width:100%; height:80vh; border:0; border-radius: 4px; overflow:hidden;"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showPlayground: false,
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
