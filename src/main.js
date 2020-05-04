/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import App from './App.vue';
import VueTelInput from './components/vue-tel-input.vue';
import VueTelSelect from './components/vue-tel-select.vue';

Vue.config.productionTip = false;

Vue.component('vue-tel-input', VueTelInput);
Vue.component('vue-tel-select', VueTelSelect);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
