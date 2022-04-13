<p align="center">
<img width="100" alt="vue-tel-input-logo" src="https://iamstevendao.github.io/vue-tel-input/hero.png"/>
</p>

# vue-tel-input

International Telephone Input with Vue.

[![npm](https://img.shields.io/npm/dt/vue-tel-input.svg)](https://www.npmjs.com/package/vue-tel-input) [![stars](https://img.shields.io/github/stars/iamstevendao/vue-tel-input.svg)](https://github.com/iamstevendao/vue-tel-input)

<p align="center">
<img width="600" alt="In-action GIF" src="https://thumbs.gfycat.com/EducatedPoliteBluefintuna-size_restricted.gif"/>
</p>

## Documentation and Demo

[Visit the website](https://iamstevendao.github.io/vue-tel-input/)

## Vue 3 Support

`vue-tel-input@next`: [Guide](https://iamstevendao.github.io/vue-tel-input/documentation/next.html)

## Changelog

[Go to Github Releases](https://github.com/iamstevendao/vue-tel-input/releases)

## Getting started

- Install the plugin:

  ```sh
  npm install vue-tel-input
  ```

- Add the plugin into your app:

  ```javascript
  import Vue from 'vue';
  import VueTelInput from 'vue-tel-input';
  import 'vue-tel-input/dist/vue-tel-input.css';

  Vue.use(VueTelInput);
  ```

  [More info on installation](#installation)

- Use the `vue-tel-input` component:

  ```html
  <template>
    <vue-tel-input v-model="phone"></vue-tel-input>
  </template>
  ```

## Installation

### npm

```bash
  npm install vue-tel-input
```

Install the plugin into Vue:

```javascript
import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput, options); // Define default global options here (optional)
```

> View all available options in [Props](https://iamstevendao.github.io/vue-tel-input/documentation/props.html).

Or use the component directly:

```html
<!-- your-component.vue-->
<template>
  <vue-tel-input v-model="value"></vue-tel-input>
</template>
<script>
  import { VueTelInput } from 'vue-tel-input';

  export default {
    components: {
      VueTelInput,
    },
  };
</script>

<style src="vue-tel-input/dist/vue-tel-input.css"></style>
```

### Browser

```html
<script src="https://unpkg.com/vue-tel-input"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-tel-input/dist/vue-tel-input.css" />
```

**If Vue is detected in the Page, the plugin is installed automatically.**

\*\* Otherwise, manually install the plugin into Vue:

```js
Vue.use(window['vue-tel-input']);
```

### Use as a custom field of [vue-form-generator](https://github.com/vue-generators/vue-form-generator)

- Add a component using `vue-form-generator`'s `abstractField` mixin

  ```html
  <!-- tel-input.vue -->
  <template>
    <vue-tel-input v-model="value"></vue-tel-input>
  </template>

  <script>
    import { abstractField } from 'vue-form-generator';

    export default {
      name: 'TelephoneInput',
      mixins: [abstractField],
    };
  </script>
  ```

- Register the new field as a global component

  ```js
  import Vue from 'vue';
  import TelInput from '<path>/tel-input.vue';

  Vue.component('field-tel-input', TelInput);
  ```

- Now it can be used as `tel-input` in schema of `vue-form-generator`

  ```js
  var schema: {
    fields: [
      {
        type: 'tel-input',
        label: 'Awesome (tel input)',
        model: 'telephone',
      },
    ],
  };
  ```

  Read more on `vue-form-generator`'s [instruction page](https://icebob.gitbooks.io/vueformgenerator/content/fields/custom_fields.html)

### Component lazy loading

Since the library is about 200kb of JavaScript and 100kb of CSS in order to improve initial page loading time you might consider importing it asynchronously only when user navigates to the page where the library is actually needed. The technique is called [Lazy Load](https://webpack.js.org/guides/lazy-loading/) and you can use it in some modern bundlers like Webpack and Rollup.

```html
<!-- your-component.vue-->
<template>
  <vue-tel-input v-model="value"></vue-tel-input>
</template>
<script>
  const VueTelInput = () =>
    Promise.all([
      import(/* webpackChunkName: "chunk-vue-tel-input" */ 'vue-tel-input'),
      import(/* webpackChunkName: "chunk-vue-tel-input" */ 'vue-tel-input/dist/vue-tel-input.css'),
    ]).then(([{ VueTelInput }]) => VueTelInput);

  export default {
    components: {
      VueTelInput,
    },
  };
</script>
```

As you see, we don't use Vue SFC `<style></style>` tag here to import component's css as it would result in CSS going to the main/vendors bundle instead of being downloaded on demand.

## Development

Clone the project

```bash
  git clone https://github.com/iamstevendao/vue-tel-input.git
```

Go to the project directory

```bash
  cd vue-tel-input
```

Install dependencies

```bash
  npm install
  cd docs && npm ci
```

Start the server

```bash
  npm run serve
```

## License

Copyright (c) 2018 Steven Dao.
Released under the [MIT License](https://github.com/iamstevendao/vue-tel-input/blob/master/LICENSE).

made with &#x2764; by [Steven](https://github.com/iamstevendao).
