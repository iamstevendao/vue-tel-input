// enhanceApp.js

import VueTelInput from '../../src/components/vue-tel-input.vue';

export default ({ Vue, options }) => {
  Vue.component('vue-tel-input', VueTelInput);
  Vue.config.productionTip = false;
}
