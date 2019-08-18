import allCountries from './assets/all-countries';

export function getCountry() {
  return fetch('https://ip2c.org/s')
    .then(response => response.text())
    .then((response) => {
      const result = (response || '').toString();

      if (!result || result[0] !== '1') {
        throw new Error('unable to fetch the country');
      }

      return result.substr(2, 2);
    });
}

export const defaultOptions = {
  placeholder: 'Enter a phone number',
  disabledFetchingCountry: false,
  disabled: false,
  disabledFormatting: false,
  mode: '',
  invalidMsg: '',
  required: false,
  allCountries,
  defaultCountry: '',
  enabledCountryCode: false,
  enabledFlags: true,
  preferredCountries: [],
  onlyCountries: [],
  ignoredCountries: [],
  autocomplete: 'on',
  name: 'telephone',
  wrapperClasses: '',
  inputClasses: '',
  inputId: '',
  dropdownOptions: {},
  inputOptions: {},
  maxLen: 25,
  validCharactersOnly: false,
  dynamicPlaceholder: false,
};

export default {
  options: { ...defaultOptions },
};
