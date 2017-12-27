import Vue from 'vue';
import VueFormGenerator from 'vue-form-generator';
import BootstrapVue from 'bootstrap-vue';
import vueTelInput from 'vue-tel-input';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App';

console.log(vueTelInput);
// register component for vue-form-generator
Vue.component('fieldTelephone', vueTelInput);

Vue.use(BootstrapVue);
Vue.use(VueFormGenerator);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
