# Getting Started

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

  [More info on installation](/guide/installation)

- Use the `vue-tel-input` component:

  ```html
  <template>
    <vue-tel-input v-model="phone"></vue-tel-input>
  </template>
  ```
