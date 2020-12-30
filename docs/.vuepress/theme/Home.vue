<template>
  <v-app>
    <v-main>
      <v-container class="text-center pt-10">
        <h1>International Telephone Input with Vue</h1>
        <div class="mt-1">
          <a href="https://www.npmjs.com/package/vue-tel-input"
            ><img src="https://img.shields.io/npm/dt/vue-tel-input.svg" /></a
          >&nbsp;
          <a href="https://github.com/EducationLink/vue-tel-input"
            ><img src="https://img.shields.io/github/stars/EducationLink/vue-tel-input.svg"
          /></a>
        </div>
        <h2 class="mt-1 grey--text">
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
        <div v-if="phoneObject.formatted" style="color: #e83e8c" class="mb-5">
          <span>
            Formatted:
            <strong>{{ phoneObject.formatted }}</strong
            >,&nbsp;
          </span>
          <span>
            Is valid:
            <strong>{{ phoneObject.valid }}</strong
            >,&nbsp;
          </span>
          <span>
            Country:
            <strong>{{ phoneObject.country.name }}</strong>
          </span>
        </div>
        <v-btn raised small plain elevation="0" @click="showOptions = !showOptions">
          <span>{{ showOptions ? "Hide" : "Show" }} options</span>
        </v-btn>
      </v-container>
      <v-row v-if="showOptions">
        <v-col class="col-sm-8">
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
        </v-col>
        <v-col class="col-sm-4">
          <pre>{{ JSON.stringify(this.phoneObject, null, 2) }}</pre>
        </v-col>
      </v-row>
    </v-main>
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
      showOptions: false,
      phoneObject: {
        formatted: '',
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
    onInput(formattedNumber, phoneObject) {
      console.log('----- phoneObject:', phoneObject);

      this.phoneObject = phoneObject;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap");

.v-application {
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.v-application ol,
.v-application ul {
  padding-left: unset;
}
</style>
