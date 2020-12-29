// enhanceApp.js

import VueTelInput from '../../src/components/vue-tel-input.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

export default ({ Vue, options }) => {
  Vue.component('vue-tel-input', VueTelInput);
  Vue.use(Vuetify);
  Object.assign(options, { vuetify: new Vuetify() })
  Vue.config.productionTip = false;
}
