# vue-tel-input

International Telephone Input with Vue.

[![](https://img.shields.io/npm/dt/vue-tel-input.svg)](https://www.npmjs.com/package/vue-tel-input) [![](https://img.shields.io/github/stars/iamstevendao/vue-tel-input.svg)](https://github.com/iamstevendao/vue-tel-input)

<p align="center">
<img width="600px" alt="In-action GIF" src="https://thumbs.gfycat.com/EducatedPoliteBluefintuna-size_restricted.gif"/>
</p>

## Documentation and live demo

[Visit the website](https://iamstevendao.github.io/vue-tel-input/)

## Getting started

- Install the plugin:

  ```sh
  npm install vue-tel-input
  ```

- Add the plugin into your app:

  ```javascript
  import Vue from 'vue'
  import VueTelInput from 'vue-tel-input'
  import 'vue-tel-input/dist/vue-tel-input.css'

  Vue.use(VueTelInput)
  ```

  [More info on installation](#installation)

- Use the `vue-tel-input` component:

  ```html
  <template>
    <vue-tel-input v-model="phone"></vue-tel-input>
  <template>
  ```

## Installation

### npm

```bash
  npm install vue-tel-input
```

Install the plugin into Vue:

```javascript
import Vue from 'vue'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

Vue.use(VueTelInput, options) // Define default global options here (optional)
```

> View all available options in [Props](https://iamstevendao.github.io/vue-tel-input/documentation/props.html).

Or use the component directly:

```html
<!-- your-component.vue-->
<template>
  <vue-tel-input v-model="value"></vue-tel-input>
</template>
<script>
import { VueTelInput } from 'vue-tel-input'

export default {
  components: {
    VueTelInput,
  },
};

<style src="vue-tel-input/dist/vue-tel-input.css"></style>
</script>
```

### Browser

```html
<script src="https://unpkg.com/vue-tel-input"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-tel-input/dist/vue-tel-input.css">
```

**If Vue is detected in the Page, the plugin is installed automatically.**

** Otherwise, manually install the plugin into Vue:

```js
Vue.use(window['vue-tel-input']);
```

## Changelog

[Go to Github Releases](https://github.com/iamstevendao/vue-tel-input/releases)

## Development

Clone the project

```bash
  git clone https://github.com/iamstevendao/vue-tel-input.git
```

Go to the project directory & checkout the `next` branch

```bash
  cd vue-tel-input
  git checkout next origin/next
```

Install dependencies

```bash
  npm install
```

Build the project

```bash
  npm run build
```

Start the es build example

```bash
  npm run dev
```

Start the browser build example

```bash
  npx http-server -p 8080
  # 127.0.0.1:8080/examples/browser.html
```

## License

Copyright (c) 2018 Steven Dao.
Released under the [MIT License](https://github.com/iamstevendao/vue-tel-input/blob/master/LICENSE).

made with &#x2764; by [Steven](https://github.com/iamstevendao).
