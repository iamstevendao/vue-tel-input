# vue-tel-input
International Telephone Input with Vue.

[![](https://img.shields.io/npm/dt/vue-tel-input.svg)](https://www.npmjs.com/package/vue-tel-input) [![](https://img.shields.io/github/stars/educationlink/vue-tel-input.svg)](https://github.com/EducationLink/vue-tel-input)

<p align="center">
<img width="600px" alt="In-action GIF" src="https://thumbs.gfycat.com/EducatedPoliteBluefintuna-size_restricted.gif"/>
</p>

## Documentation and live demo

[Visit the website](https://educationlink.github.io/vue-tel-input/)

## Getting started
- Install the plugin:

  ```
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
> View all available options in [Props](https://educationlink.github.io/vue-tel-input/documentation/component-reference.html).

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

** If Vue is detected in the Page, the plugin is installed automatically.**

** Otherwise, manually install the plugin into Vue:

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
    fields: [{
        type: "tel-input",
        label: "Awesome (tel input)",
        model: "telephone"
    }]
  };
  ```
Read more on `vue-form-generator`'s [instruction page](https://icebob.gitbooks.io/vueformgenerator/content/fields/custom_fields.html)


## Changelog
[Go to Github Releases](https://github.com/EducationLink/vue-tel-input/releases)

## License

Copyright (c) 2018 EducationLink.
Released under the [MIT License](https://github.com/EducationLink/vue-tel-input/blob/master/LICENSE).

made with &#x2764; by [Steven](https://github.com/iamstevendao).
