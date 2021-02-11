# Getting Started

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

  [More info on installation](/vue-tel-input/documentation/installation)

- Use the `vue-tel-input` component:

  ```html
  <template>
    <vue-tel-input v-model="phone"></vue-tel-input>
  <template>
  ```
