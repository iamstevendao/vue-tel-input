import Vue from 'vue';
import VueTelInput from '../src/vue-tel-input.vue';

import App from './App.vue';

Vue.component('vue-tel-input', VueTelInput);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({ ...App }).$mount('#app');
