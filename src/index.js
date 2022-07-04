import utils, { defaultOptions } from './utils';
import VueTelInput from './components/vue-tel-input.vue';

export { VueTelInput };

export default {
  install(app, customOptions = {}) {
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
  },
}
