import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue';
import VueTelInput from '../../../src/index.js';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(VueTelInput);
  },
}
