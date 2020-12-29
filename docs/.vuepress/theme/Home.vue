<template>
  <v-app>
    <h1>International Telephone Input with Vue</h1>

    <a href="https://www.npmjs.com/package/vue-tel-input"
      ><img src="https://img.shields.io/npm/dt/vue-tel-input.svg" /></a
    >&nbsp;
    <a href="https://github.com/EducationLink/vue-tel-input"
      ><img src="https://img.shields.io/github/stars/EducationLink/vue-tel-input.svg"
    /></a>
    <h2 style="color: #999">
      made with &#x2764; by some
      <a
        style="color: inherit"
        href="https://github.com/EducationLink/vue-tel-input/graphs/contributors"
        >awesome humans</a
      >.
    </h2>
    <div style="width: 500px; margin: 20px auto">
      <vue-tel-input v-model="phoneModel" v-bind="options" @input="onInput" />
    </div>
    <div v-if="phone.number" style="color: #e83e8c">
      <span>
        Number:
        <strong>{{ phone.number }}</strong
        >,&nbsp;
      </span>
      <span>
        Is valid:
        <strong>{{ phone.valid }}</strong
        >,&nbsp;
      </span>
      <span>
        Country:
        <strong>{{ phone.country }}</strong>
      </span>
    </div>
    <v-form class="vfg">
      <v-container>
        <v-layout wrap="wrap">
          <v-flex v-for="field in fields" :key="field.model" :class="field.containerClasses">
            <component
              v-bind="field.bind"
              v-model="options[field.model]"
              :is="field.type"
              :label="field.label"
            >
            </component>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import { allProps, defaultOptions } from '../../../src/utils';

function getFormConfig(field) {
  if (field.type.name === 'Boolean') {
    return { type: 'v-switch' };
  }
  if (field.type.name === 'String') {
    if (field.options?.length) {
      return { type: 'v-select', bind: { items: field.options } };
    }
    return { type: 'v-text-field' };
  }
}

export default {
  name: 'App',
  data() {
    return {
      phoneModel: '+61432421546',
      phone: {
        number: '',
        valid: false,
        country: undefined,
      },
      options: {
        ...defaultOptions,
      },
      fields: allProps
        .filter(({ inDemo }) => inDemo)
        .map((prop) => ({
          model: prop.name,
          label: prop.name,
          ...getFormConfig(prop),
        })),
    };
  },
  methods: {
    onInput(formattedNumber, { formatted, valid, country }) {
      this.phone.number = formatted;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap");

body {
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
