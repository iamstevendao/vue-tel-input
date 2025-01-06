<template>
  <main class="home">
    <header class="hero vp-doc">
      <img :src="withBase('hero.png')" alt="vue-tel-input" />
      <h1>International Telephone Input with Vue</h1>
    </header>

    <section class="description vp-doc">
      <div>
        <a href="https://www.npmjs.com/package/vue-tel-input">
          <img src="https://img.shields.io/npm/dt/vue-tel-input.svg" />
        </a>&nbsp;
        <a href="https://github.com/iamstevendao/vue-tel-input">
          <img src="https://img.shields.io/github/stars/iamstevendao/vue-tel-input.svg" />
        </a>
      </div>
      <h3>
        made with &#x2764; by some
        <a href="https://github.com/iamstevendao/vue-tel-input/graphs/contributors">awesome humans</a>.
      </h3>
    </section>

    <section class="content">
      <div style="width: 500px; margin: 0 auto;">
        <VueTelInput v-model="phoneModel" v-bind="options" @onInput="onInput" />
      </div>
      <code v-if="phoneObject.formatted">
        <span>Formatted: <b>{{ phoneObject.formatted }}</b>,&nbsp;</span>
        <span>Is valid: <b>{{ phoneObject.valid || 'false' }}</b>,&nbsp;</span>
        <span>Country: <b>{{ phoneObject.country }}</b></span>
      </code>
    </section>

    <section class="options vp-doc">
      <a
        href="https://github.com/iamstevendao/vue-tel-input/graphs/contributors"
        @click.prevent="showOptions = !showOptions"
      >
        <span>{{ showOptions ? "Hide" : "Show" }} options</span>
      </a>
      <div v-if="showOptions" class="formResults">
        <div class="form">
          <div
            v-for="field in otherFields"
            :key="field.model"
          >
            <form-input
              v-bind="field.bind"
              :model="options"
              :modelName="field.model"
              :description="field.description"
              :label="field.label"
              :type="field.type"
            />
          </div>
          <div
            v-for="field in inputFields"
            :key="field.model"
          >
            <form-input
              v-bind="field.bind"
              :model="options.inputOptions"
              :description="field.description"
              :modelName="field.model"
              :label="field.label"
              :type="field.type"
            />
          </div>
          <div
            v-for="field in dropdownFields"
            :key="field.model"
          >
            <form-input
              v-bind="field.bind"
              :model="options.dropdownOptions"
              :description="field.description"
              :modelName="field.model"
              :label="field.label"
              :type="field.type"
            />
          </div>
          <div style="margin-top: 15px">
            <a
              style="color: #999999"
              href="https://iamstevendao.github.io/vue-tel-input/usage/props.html"
            >
              <span>...more</span>
            </a>
          </div>
        </div>
        <div class="results">
          <pre>{{ JSON.stringify(phoneObject, null, 2) }}</pre>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress';
import FormInput from './FormInput.vue';
import { allProps, defaultOptions } from '../../../../src/utils';
import { reactive, computed, ref } from 'vue';
import type { PhoneMeta, } from 'vue-tel-input';
import { VueTelInput } from 'vue-tel-input';

const phoneModel = ref('');
const showOptions = ref(false);

const phoneObject = reactive<Pick<PhoneMeta, 'formatted' | 'valid' | 'country'>>({
  formatted: '',
  valid: false,
  country: undefined
});

const options = reactive({
  ...defaultOptions,
  inputOptions: {
    ...defaultOptions.inputOptions,
    showDialCode: true,
  },
  mode: 'international',
  validCharactersOnly: true,
  dropdownOptions: {
    ...defaultOptions.dropdownOptions,
  },
});

const fields = computed<{
  model: string;
  label: string;
  description: string;
  type?: 'input' | 'checkbox' | 'radio';
  bind?: Record<string, any>;
}[]>(() =>
  allProps
    .filter(({ inDemo }) => inDemo)
    .map((prop) => ({
      model: prop.name,
      label: prop.name,
      description: prop.description,
      ...getFormConfig(prop),
    }))
);

const dropdownFields = computed(() =>
  fields.value
    .filter(({ model }) => model.includes('dropdownOptions'))
    .map((field) => ({
      ...field,
      model: field.model.split('.')[1],
    }))
);

const inputFields = computed(() =>
  fields.value
    .filter(({ model }) => model.includes('inputOptions'))
    .map((field) => ({
      ...field,
      model: field.model.split('.')[1],
    }))
);

const otherFields = computed(() =>
  fields.value.filter(
    ({ model }) =>
      !model.includes('dropdownOptions') && !model.includes('inputOptions')
  )
);

function onInput(formattedNumber: string, phoneObj: any) {
  console.log('onInput', formattedNumber, phoneObj);
  phoneObject.formatted = formattedNumber;
  phoneObject.valid = phoneObj.valid;
  phoneObject.country = phoneObj.country;
}

function getFormConfig(field: any): {
  type: 'input' | 'checkbox' | 'radio';
  bind?: Record<string, any>;
} | undefined {
  if (field.type.name === 'Boolean') {
    return { type: 'checkbox' };
  }
  if (field.type.name === 'String') {
    if (field.options?.length) {
      return { type: 'radio', bind: { items: field.options } };
    }
    return { type: 'input' };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

.home {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

.home .hero>img {
  max-width: 100%;
  max-height: 100px;
  display: block;
  margin: 1.5rem auto;
}

.home .description a img {
  display: inline;
}

.home .description a:not(:hover) {
  color: inherit;
  text-decoration: underline;
}

.home .content code {
  display: block;
  margin-top: 1rem;
}

.home .vti__dropdown-list {
  background-color: var(--vp-c-bg);
}

.home .vti__dropdown-list .vti__dropdown-item.highlighted {
  background-color: var(--vp-c-bg-elv-up);
}

.home .vti__dropdown:hover,
.home .vti__dropdown.open {
  background-color: var(--vp-c-bg-elv-up);
}

.home .formResults {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 700px;
  margin: 1rem auto;
  text-align: left;
}

.home .formResults .form .row {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.home .results {
  border-radius: 10px;
  border: 2px dashed var(--vp-c-bg-elv-up);
  padding: 10px;
}
</style>
