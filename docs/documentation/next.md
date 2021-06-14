# Vue 3 Support

### vue-tel-input@next

### Getting started

- Install the plugin:

  ```sh
  npm install vue-tel-input@next
  ```

- Add the plugin into your app:

  ```javascript
  import { createApp } from 'vue';
  import App from './App.vue';
  import VueTelInput from 'vue-tel-input';
  import 'vue-tel-input/dist/vue-tel-input.css';

  const app = createApp(App);
  app.use(VueTelInput);
  app.mount('#app');
  ```

[More info on installation](#installation)

- Use the `vue-tel-input` component:

```html
<template>
  <vue-tel-input v-model="phone"></vue-tel-input>
  <template></template
></template>
```

### Installation

#### npm

```bash
  npm install vue-tel-input@next
```

Install the plugin into Vue:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

const globalOptions = {
  mode: 'auto',
};

const app = createApp(App);
app.use(VueTelInput, globalOptions); // Define default global options here (optional)
app.mount('#app');
```

> View all available options in [Props](https://iamstevendao.github.io/vue-tel-input/documentation/props.html).

Or use the component directly:

```html
<!-- your-component.vue-->
<template>
  <vue-tel-input v-model="phone" mode="international"></vue-tel-input>
</template>
<script>
  import { ref } from 'vue';
  import { VueTelInput } from 'vue-tel-input';
  import 'vue-tel-input/dist/vue-tel-input.css';

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

#### Browser

```html
<script src="https://unpkg.com/vue-tel-input@6.0.0-beta.0"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-tel-input/dist/vue-tel-input.css" />
```

** If Vue is detected in the Page, the plugin is installed automatically.**

\*\* Otherwise, manually install the plugin into Vue:

```js
Vue.use(window['vue-tel-input']);
```
