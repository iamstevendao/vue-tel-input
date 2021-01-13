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
    description: '',
    inDemo: false,
  },
  {
    name: 'autocomplete',
    type: String,
    default: 'on',
    description: '',
    inDemo: false,
  },
  {
    name: 'autofocus',
    type: Boolean,
    default: false,
    description: '',
    inDemo: false,
  },
  {
    name: 'autoFormat',
    type: Boolean,
    default: true,
    description: '',
    inDemo: true,
  },
  {
    name: 'customValidate',
    type: [Boolean, RegExp],
    default: false,
    description: '',
    inDemo: false,
  },
  {
    name: 'defaultCountry', default: '', type: String, description: '', inDemo: false,
  },
  {
    name: 'disabled', default: false, type: Boolean, description: '', inDemo: false,
  },
  {
    name: 'disabledFetchingCountry', default: false, type: Boolean, description: '', inDemo: true,
  },
  {
    name: 'dropdownOptions', default: {}, type: Object, description: '', inDemo: false,
  },
  {
    name: 'dynamicPlaceholder', default: false, type: Boolean, description: '', inDemo: true,
  },
  {
    name: 'enabledCountryCode', default: false, type: Boolean, description: '', inDemo: true,
  },
  {
    name: 'enabledFlags', default: true, type: Boolean, description: '', inDemo: true,
  },
  {
    name: 'ignoredCountries', default: [], type: Array, description: '', inDemo: false,
  },
  {
    name: 'inputClasses', default: '', type: [String, Array, Object], description: '', inDemo: false,
  },
  {
    name: 'inputId', default: '', type: String, description: '', inDemo: false,
  },
  {
    name: 'inputOptions', default: {}, type: Object, description: '', inDemo: false,
  },
  {
    name: 'invalidMsg', default: '', type: String, description: '', inDemo: false,
  },
  {
    name: 'maxLen', default: 25, type: Number, description: '', inDemo: false,
  },
  {
    name: 'mode', default: 'auto', type: String, description: '', inDemo: true, options: ['auto', 'national', 'international'],
  },
  {
    name: 'name', default: 'telephone', type: String, description: '', inDemo: false,
  },
  {
    name: 'onlyCountries', default: [], type: Array, description: '', inDemo: false,
  },
  {
    name: 'placeholder', default: 'Enter a phone number', type: String, description: '', inDemo: true,
  },
  {
    name: 'preferredCountries', default: [], type: Array, description: '', inDemo: false,
  },
  {
    name: 'readonly', default: false, type: Boolean, description: '', inDemo: false,
  },
  {
    name: 'required', default: false, type: Boolean, description: '', inDemo: false,
  },
  {
    name: 'type', default: 'tel', type: String, description: '', inDemo: false,
  },
  {
    name: 'validCharactersOnly', default: false, type: Boolean, description: '', inDemo: true,
  },
  {
    name: 'wrapperClasses', default: '', type: [String, Array, Object], description: '', inDemo: false,
  },
];

export const defaultOptions = allProps
  .reduce((prv, crr) => ({ ...prv, [crr.name]: crr.default }), {});

export default {
  options: { ...defaultOptions },
};
