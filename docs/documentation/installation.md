# Installation
## npm
```bash
  npm install vue-tel-input
```

Install the plugin into Vue:

```javascript
import Vue from 'vue'
import VueTelInput from 'vue-tel-input'

Vue.use(VueTelInput, [globalOptions = {}]) // Define default global options here (optional)
```
> View all available options in [Props](#props).

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
</script>
```

## Browser

Include [vue-tel-input](/dist/vue-tel-input.min.js) in the page.

```html
<script src="https://unpkg.com/vue-tel-input"></script>
```

**If Vue is detected in the Page, the plugin is installed automatically.**

Manually install the plugin into Vue:

```javascript
Vue.use(VueTelInput)
```

Or use the component directly:

```javascript
Vue.component('vue-tel-input', VueTelInput.VueTelInput)
```

### Use as a custom field of [vue-form-generator](https://github.com/vue-generators/vue-form-generator)

Check out the setup in [CodeSandbox](https://codesandbox.io/s/vue-tel-input-with-vue-form-generator-q56jg).

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
