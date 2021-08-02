import allCountries from './assets/all-countries';

export function getCountry() {
  return fetch('https://ip2c.org/s')
    .then((response) => response.text())
    .then((response) => {
      const result = (response || '').toString();

      if (!result || result[0] !== '1') {
        throw new Error('unable to fetch the country');
      }

      return result.substr(2, 2);
    });
}

// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
export function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);

    // IE8 and below
  } else if (ctrl.createTextRange) {
    const range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

export const allProps = [
  {
    name: 'allCountries',
    type: Array,
    default: allCountries,
    description: 'All countries that are used in <code>libphonenumber-js</code>, can be overridden by this prop',
    inDemo: false,
  },
  {
    name: 'autoFormat',
    type: Boolean,
    default: true,
    description: 'Auto update the input to the formatted phone number when it\'s valid',
    inDemo: true,
  },
  {
    name: 'customValidate',
    type: [Boolean, RegExp],
    default: false,
    description: 'Custom validation RegExp for input',
    inDemo: false,
  },
  {
    name: 'defaultCountry',
    default: '',
    type: [String, Number],
    description: 'Default country (by iso2 or dialCode), will override the country fetched from IP address of user',
    inDemo: false,
  },
  {
    name: 'disabled',
    default: false,
    type: Boolean,
    description: 'Disable <code>vue-tel-input</code>, including the input & flag dropdown',
    inDemo: false,
  },
  {
    name: 'autoDefaultCountry',
    default: true,
    type: Boolean,
    description: 'To fetch default country based on IP address of user',
    inDemo: false,
  },
  {
    name: 'dropdownOptions',
    type: Object,
    description: 'Options for dropdown, see below',
    inDemo: false,
  },
  {
    name: 'dropdownOptions.disabled',
    default: false,
    type: Boolean,
    description: 'Disable dropdown',
    inDemo: false,
  },
  {
    name: 'dropdownOptions.showDialCodeInList',
    default: true,
    type: Boolean,
    description: 'Show dial code in the dropdown list',
    inDemo: true,
  },
  {
    name: 'dropdownOptions.showDialCodeInSelection',
    default: false,
    type: Boolean,
    description: 'Show dial code in the dropdown selection',
    inDemo: true,
  },
  {
    name: 'dropdownOptions.showFlags',
    default: true,
    type: Boolean,
    description: 'Show flags in the dropdown selection and list',
    inDemo: true,
  },
  {
    name: 'dropdownOptions.tabindex',
    default: 0,
    type: Number,
    description: 'Native dropdown <code>tabindex</code> attribute',
    inDemo: false,
  },
  {
    name: 'ignoredCountries',
    default: [],
    type: Array,
    description: 'List of countries will NOT be shown on the dropdown',
    inDemo: false,
  },
  {
    name: 'inputOptions',
    type: Object,
    description: 'Options for input, see below',
    inDemo: false,
  },
  {
    name: 'inputOptions.autocomplete',
    type: String,
    default: 'on',
    description: 'Native input <code>autocomplete</code> attribute',
    inDemo: false,
  },
  {
    name: 'inputOptions.autofocus',
    type: Boolean,
    default: false,
    description: 'Native input <code>autofocus</code> attribute',
    inDemo: false,
  },
  // {
  //   name: 'inputOptions.dynamicPlaceholder',
  //   default: false,
  //   type: Boolean,
  //   description: 'Placeholder as a sample phone number in the current country',
  //   inDemo: false,
  // },
  {
    name: 'inputOptions.aria-describedby',
    default: '',
    type: String,
    description: 'Native input <code>aria-describedby</code> attribute',
    inDemo: false,
  },
  {
    name: 'inputOptions.id',
    default: '',
    type: String,
    description: 'Native input <code>id</code> attribute',
    inDemo: false,
  },
  {
    name: 'inputOptions.maxlength',
    default: 25,
    type: Number,
    description: 'Native input <code>maxlength</code> attribute',
    inDemo: false,
  },
  {
    name: 'inputOptions.name',
    default: 'telephone',
    type: String,
    description: 'Native input <code>name</code> attribute',
    inDemo: false,
  },
  {
    name: 'inputOptions.placeholder',
    default: 'Enter a phone number',
    type: String,
    description: 'Placeholder for the input',
    inDemo: false,
  },
  {
    name: 'inputOptions.readonly',
    default: false,
    type: Boolean,
    description: 'Native input <code>readonly</code> attribute',
    inDemo: false,
  },
  {
    name: 'inputOptions.required',
    default: false,
    type: Boolean,
    description: 'Native input <code>required</code> attribute',
    inDemo: false,
  },
  {
    name: 'inputOptions.tabindex',
    default: 0,
    type: Number,
    description: 'Native input <code>tabindex</code> attribute',
    inDemo: false,
  },
  {
    name: 'inputOptions.type',
    default: 'tel',
    type: String,
    description: 'Native input <code>type</code> attribute',
    inDemo: false,
  },
  {
    name: 'inputOptions.styleClasses',
    default: '',
    type: [String, Array, Object],
    description: 'Custom classes for the <code>input</code>',
    inDemo: false,
  },
  {
    name: 'invalidMsg',
    default: '',
    type: String,
    description: '',
    inDemo: false,
  },
  {
    name: 'mode',
    default: 'auto',
    type: String,
    description: 'Allowed values: <code>\'auto\'</code> (Default set by phone),  <code>\'international\'</code> (Format number with the dial code i.e. + 61), <code>\'national\'</code> (Format number without dial code i.e. 0321232)',
    inDemo: true,
    options: ['auto', 'national', 'international'],
  },
  {
    name: 'onlyCountries',
    default: [],
    type: Array,
    description: 'List of countries will be shown on the dropdown',
    inDemo: false,
  },
  {
    name: 'preferredCountries',
    default: [],
    type: Array,
    description: 'Preferred countries list, will be on top of the dropdown',
    inDemo: false,
  },
  {
    name: 'styleClasses',
    default: '',
    type: [String, Array, Object],
    description: 'Custom classes for the wrapper',
    inDemo: false,
  },
  {
    name: 'validCharactersOnly',
    default: false,
    type: Boolean,
    description: 'Only allow valid characters in a phone number (will also verify in <code>mounted</code>, so phone number with invalid characters will be shown as an empty string)',
    inDemo: false,
  },
];

export const defaultOptions = [...allProps]
  .reduce((prv, crr) => {
    if (crr.name.includes('.')) {
      const [key, nestedKey] = crr.name.split('.');
      if (prv[key]) {
        Object.assign(prv[key], { [nestedKey]: crr.default });
      } else {
        Object.assign(prv, { [key]: { [nestedKey]: crr.default } });
      }
    } else {
      Object.assign(prv, { [crr.name]: crr.default });
    }
    return prv;
  }, {});

export default {
  options: { ...defaultOptions },
};
