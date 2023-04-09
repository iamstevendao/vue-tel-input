<template>
  <main class="vp-doc">
    <template v-for="prop in allProps">
      <h2>{{ prop.name }}</h2>
      <ul>
        <li>Type: <span v-html="getType(prop.type)"></span></li>
        <li>
          Default:
          <span v-if="prop.name === 'allCountries'"
            >An array of all countries, see
            <a
              target="_blank"
              href="https://github.com/iamstevendao/vue-tel-input/blob/master/src/assets/all-countries.js"
            >
              <code>allCountries.js</code>
            </a>
          </span>
          <code v-else-if="typeof prop.default !== 'undefined'">{{ getDefault(prop) }}</code>
        </li>
      </ul>
      <p v-html="prop.description"></p>
    </template>
  </main>
</template>

<script>
import { allProps } from '../../../../src/utils';

export default {
  name: 'PageProps',
  props: ['sidebarItems'],
  data() {
    return {
      allProps,
    };
  },
  methods: {
    getType(type) {
      if (type.length === 1) {
        return `<code>${type.name}</code>`;
      }
      return type.map((t) => `<code>${t.name}</code>`).join(', ');
    },
    getDefault(prop) {
      switch (typeof prop.default) {
        case 'number':
          return prop.default;
        case 'boolean':
          return prop.default.toString();
        case 'string':
          return `'${prop.default}'`;
        case 'object':
          return JSON.stringify(prop.default);
        default:
          return prop.default;
      }

    }
  }
};
</script>
