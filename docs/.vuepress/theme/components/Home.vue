<template>
  <main class="home" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
    <header class="hero">
      <h1>International Telephone Input with Vue</h1>
      <div>
        <a href="https://www.npmjs.com/package/vue-tel-input"
          ><img src="https://img.shields.io/npm/dt/vue-tel-input.svg" /></a
        >&nbsp;
        <a href="https://github.com/EducationLink/vue-tel-input"
          ><img src="https://img.shields.io/github/stars/EducationLink/vue-tel-input.svg"
        /></a>
      </div>
      <span style="color: #999999; font-size: 1.5rem">
        made with &#x2764; by some
        <a
          style="color: inherit"
          href="https://github.com/EducationLink/vue-tel-input/graphs/contributors"
          >awesome humans</a
        >.
      </span>

      <div style="width: 500px; margin: 20px auto">
        <vue-tel-input v-model="phoneModel" v-bind="options" @input="onInput" />
      </div>
      <div v-if="phoneObject.formatted" style="color: #e83e8c">
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
          <strong>{{ phoneObject.country && phoneObject.country.name }}</strong>
        </span>
      </div>
    </header>

    <div style="text-align: center; margin-top: 20px">
      <a
        style="color: #999999"
        href="https://github.com/EducationLink/vue-tel-input/graphs/contributors"
        @click.prevent="showOptions = !showOptions"
      >
        <span>{{ showOptions ? "Hide" : "Show" }} options</span>
      </a>
    </div>

    <div v-if="showOptions" class="options">
      <div class="form">
        <div v-for="field in otherFields" :key="field.model" :class="field.containerClasses">
          <form-input
            v-bind="field.bind"
            :model="options"
            :modelName="field.model"
            :label="field.label"
            :type="field.type"
          />
        </div>
        <div v-for="field in inputFields" :key="field.model" :class="field.containerClasses">
          <form-input
            v-bind="field.bind"
            :model="options.inputOptions"
            :modelName="field.model"
            :label="field.label"
            :type="field.type"
          />
        </div>
        <div v-for="field in dropdownFields" :key="field.model" :class="field.containerClasses">
          <form-input
            v-bind="field.bind"
            :model="options.dropdownOptions"
            :modelName="field.model"
            :label="field.label"
            :type="field.type"
          />
        </div>
      </div>
      <div class="results">
        <pre>{{ JSON.stringify(this.phoneObject, null, 2) }}</pre>
      </div>
    </div>
  </main>
</template>

<script>
import FormInput from './FormInput.vue';
import { allProps, defaultOptions } from '../../../../src/utils';

function getFormConfig(field) {
  if (field.type.name === 'Boolean') {
    return { type: 'checkbox' };
  }
  if (field.type.name === 'String') {
    if (field.options?.length) {
      return { type: 'select', bind: { items: field.options } };
    }
    return { type: 'input' };
  }
}

export default {
  name: 'Home',
  components: { FormInput },
  data() {
    return {
      phoneModel: '+61423765987',
      showOptions: false,
      phoneObject: {
        formatted: '',
        valid: false,
        country: undefined,
      },
      options: {
        ...defaultOptions,
        validCharactersOnly: true,
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
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    inputFields() {
      return this.fields
        .filter(({ model }) => model.includes('inputOptions'))
        .map((field) => ({
          ...field,
          model: field.model.split('.')[1],
        }));
    },
    dropdownFields() {
      return this.fields
        .filter(({ model }) => model.includes('dropdownOptions'))
        .map((field) => ({
          ...field,
          model: field.model.split('.')[1],
        }));
    },
    otherFields() {
      return this.fields
        .filter(({ model }) => !model.includes('dropdownOptions') && !model.includes('inputOptions'));
    },
  },
  methods: {
    onInput(formattedNumber, phoneObject) {
      this.phoneObject = phoneObject;
    },
  },
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

.home {
  padding: $navbarHeight 2rem 0;
  max-width: $homePageWidth;
  margin: 0px auto;
  display: block;
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .options {
    display: flex;

    .form {
      flex: 3;
    }

    .results {
      flex: 1;
      background-color: whitesmoke;
      padding: 20px;
    }
  }

  .hero {
    text-align: center;

    a {
      text-decoration: underline;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
  }
}
</style>
