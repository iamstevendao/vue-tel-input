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
      <span style="color: #999999">
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
          <strong>{{ phoneObject.country.name }}</strong>
        </span>
      </div>
    </header>

    <div class="text-center pt-10">
      <div raised small plain elevation="0" @click="showOptions = !showOptions">
        <span>{{ showOptions ? "Hide" : "Show" }} options</span>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';
import { allProps, defaultOptions } from '../../../../src/utils';

export default {
  name: 'Home',

  components: { NavLink },
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
        })),
    };
  },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {

    onInput(formattedNumber, phoneObject) {
      console.log('----- phoneObject:', phoneObject);

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
