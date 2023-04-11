<p align="center">
<img width="100" alt="vue-tel-input-logo" src="https://vue-tel-input.iamstevendao.com/hero.png"/>
</p>

# vue-tel-input

International Telephone Input with Vue.

[![npm](https://img.shields.io/npm/dt/vue-tel-input.svg)](https://www.npmjs.com/package/vue-tel-input) [![stars](https://img.shields.io/github/stars/iamstevendao/vue-tel-input.svg)](https://github.com/iamstevendao/vue-tel-input)

<p align="center">
<img width="600" alt="In-action GIF" src="https://thumbs.gfycat.com/EducatedPoliteBluefintuna-size_restricted.gif"/>
</p>

## Documentation and Demo

[Visit the website](https://vue-tel-input.iamstevendao.com/)

## Vue 2 Support

`vue-tel-input@legacy`: [Guide](https://vue-tel-input.iamstevendao.com/guide/legacy.html)

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
  import 'vue-tel-input/vue-tel-input.css';

  const app = createApp(App);
  app.use(VueTelInput);
  app.mount('#app');
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
import { createApp } from 'vue';
import App from './App.vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

const globalOptions = {
  mode: 'auto',
};

const app = createApp(App);
app.use(VueTelInput, globalOptions); // Define default global options here (optional)
app.mount('#app');
```

> View all available options in [Props](https://vue-tel-input.iamstevendao.com/usage/props.html).

Or use the component directly:

```html
<template>
  <vue-tel-input v-model="phone" mode="international"></vue-tel-input>
</template>

<script>
  import { ref } from 'vue';
  import { VueTelInput } from 'vue-tel-input';
  import 'vue-tel-input/vue-tel-input.css';

  export default {
    components: {
      VueTelInput,
    },

    setup() {
      const phone = ref(null);

      return {
        value,
      };
    },
  };
</script>
```

### Browser

```html
<script src="https://unpkg.com/vue-tel-input"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-tel-input/dist/vue-tel-input.css" />
```

**If Vue is detected in the Page, the plugin is installed automatically.**

\*\* Otherwise, manually install the plugin into Vue:

```js
app.use(window['vue-tel-input']);
```

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
      import(/* webpackChunkName: "chunk-vue-tel-input" */ 'vue-tel-input/vue-tel-input.css'),
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
```

Start the server

```bash
  npm run dev
```

## License

Copyright (c) 2018 Steven Dao.
Released under the [MIT License](https://github.com/iamstevendao/vue-tel-input/blob/master/LICENSE).

made with &#x2764; by [Steven](https://github.com/iamstevendao).
