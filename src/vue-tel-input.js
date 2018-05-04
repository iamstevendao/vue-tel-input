import BootstrapVue from 'bootstrap-vue';

import VueTelInput from './vue-tel-input.vue';

export default {
  ...VueTelInput,
  install: (Vue) => {
    Vue.component(VueTelInput.name, VueTelInput);
    Vue.use(BootstrapVue);
    return Vue;
  },
};
