# Installation

### npm

```bash
npm install vue-tel-input
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

> View all available options in [Props](/usage/props).

Or use the component directly:

```html
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

::: tip
Instead of importing the extracted css file, you can also import separate css files:

```javascript
// import 'vue-tel-input/dist/vue-tel-input.css'
import 'vue-tel-input/dist/css/sprite.css'; // Flags styles
import 'vue-tel-input/dist/css/component.css'; // Component styles
```
