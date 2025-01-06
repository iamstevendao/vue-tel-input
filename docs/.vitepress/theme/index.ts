import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue';
//import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    //app.use(VueTelInput);
  },
} satisfies Theme
