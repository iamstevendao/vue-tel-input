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
import 'vue-tel-input/vue-tel-input.css';

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
