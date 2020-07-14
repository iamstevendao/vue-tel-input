import utils, { defaultOptions } from './utils';
import VueTelInput from './components/vue-tel-input.vue';

export function install(Vue, customOptions = {}) {
  if (install.installed) return;
  install.installed = true;

  utils.options = {
    ...defaultOptions,
    ...customOptions,
  };

  Vue.component('vue-tel-input', VueTelInput);
}

export { VueTelInput };

const plugin = {
  install,
};

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
