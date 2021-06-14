import utils, { defaultOptions } from './utils';
import VueTelInput from './components/vue-tel-input.vue';

export function install(app, customOptions = {}) {
  if (install.installed) return;
  install.installed = true;

  const {
    dropdownOptions: customDropdownOptions,
    inputOptions: customInputOptions,
    ...otherCustomOptions
  } = customOptions;
  const {
    dropdownOptions: defaultDropdownOptions,
    inputOptions: defaultInputOptions,
    ...otherDefaultOptions
  } = defaultOptions;

  utils.options = {
    inputOptions: {
      ...defaultInputOptions,
      ...customInputOptions,
    },
    dropdownOptions: {
      ...defaultDropdownOptions,
      ...customDropdownOptions,
    },
    ...otherDefaultOptions,
    ...otherCustomOptions,
  };

  app.component('vue-tel-input', VueTelInput);
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
