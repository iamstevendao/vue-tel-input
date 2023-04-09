# Vue 2 Support

> vue-tel-input@legacy

## Getting started

- Install the plugin:

  ```sh
  npm install vue-tel-input@legacy
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
  npm install vue-tel-input@legacy
```

Install the plugin into Vue:

```javascript
import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput, options); // Define default global options here (optional)
```

> View all available options in [Props](https://vue-tel-input.iamstevendao.com/usage/props.html).

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
<script src="https://unpkg.com/vue-tel-input@5"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-tel-input/dist/vue-tel-input.css" />
```

**If Vue is detected in the Page, the plugin is installed automatically.**

\*\* Otherwise, manually install the plugin into Vue:

```js
Vue.use(window['vue-tel-input']);
```
