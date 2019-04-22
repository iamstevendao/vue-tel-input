import Vue from 'vue';
import VueTelInput from '../dist/vue-tel-input';

import '../dist/vue-tel-input.css';

import App from './App.vue';

Vue.component('vue-tel-input', VueTelInput);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({ ...App }).$mount('#app');
