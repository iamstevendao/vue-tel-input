import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.regexp.to-string';
import 'core-js/modules/es.array.map';
import 'core-js/modules/es.array.index-of';
import 'core-js/modules/es.function.name';
import 'core-js/modules/es.array.concat';
import 'core-js/modules/es.array.filter';
import 'core-js/modules/es.array.find';
import 'core-js/modules/es.array.find-index';
import 'core-js/modules/es.array.includes';
import 'core-js/modules/es.array.slice';
import 'core-js/modules/es.array.some';
import 'core-js/modules/es.number.constructor';
import 'core-js/modules/es.regexp.constructor';
import 'core-js/modules/es.regexp.exec';
import 'core-js/modules/es.string.includes';
import 'core-js/modules/es.string.starts-with';
import 'core-js/modules/es.string.trim';
import 'core-js/modules/web.url.to-json';
import 'regenerator-runtime/runtime';
import _asyncToGenerator from '@babel/runtime/helpers/esm/asyncToGenerator';
import _toConsumableArray from '@babel/runtime/helpers/esm/toConsumableArray';
import PhoneNumber from 'awesome-phonenumber';

// Array of country objects for the flag dropdown.
// Here is the criteria for the plugin to support a given country/territory
// - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
// - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
// - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
// Each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Order (if >1 country with same dial code),
//    Area codes
// ]
var allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1684'], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1264'], ['Antigua and Barbuda', 'ag', '1268'], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Australia', 'au', '61', 0], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1242'], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1246'], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1441'], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1284'], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1', 1, ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599', 1], ['Cayman Islands', 'ky', '1345'], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86'], ['Christmas Island', 'cx', '61', 2], ['Cocos (Keeling) Islands', 'cc', '61', 1], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599', 0], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1767'], ['Dominican Republic (República Dominicana)', 'do', '1', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358', 0], ['France', 'fr', '33'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1473'], ['Guadeloupe', 'gp', '590', 0], ['Guam', 'gu', '1671'], ['Guatemala', 'gt', '502'], ['Guernsey', 'gg', '44', 1], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354'], ['India (भारत)', 'in', '91'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353'], ['Isle of Man', 'im', '44', 2], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39', 0], ['Jamaica', 'jm', '1876'], ['Japan (日本)', 'jp', '81'], ['Jersey', 'je', '44', 3], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7', 1], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kosovo', 'xk', '383'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Macedonia (FYROM) (Македонија)', 'mk', '389'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mayotte', 'yt', '262', 1], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1664'], ['Morocco (‫المغرب‬‎)', 'ma', '212', 0], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['Northern Mariana Islands', 'mp', '1670'], ['Norway (Norge)', 'no', '47', 0], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63'], ['Poland (Polska)', 'pl', '48'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262', 0], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7', 0], ['Rwanda', 'rw', '250'], ['Saint Barthélemy', 'bl', '590', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869'], ['Saint Lucia', 'lc', '1758'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784'], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65'], ['Sint Maarten', 'sx', '1721'], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Svalbard and Jan Mayen', 'sj', '47', 1], ['Swaziland', 'sz', '268'], ['Sweden (Sverige)', 'se', '46'], ['Switzerland (Schweiz)', 'ch', '41'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1868'], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1649'], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1340'], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44', 0], ['United States', 'us', '1', 0], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39', 1], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'], ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212', 1], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263'], ['Åland Islands', 'ax', '358', 1]];
var allCountries$1 = allCountries.map(function (country) {
  return {
    name: country[0],
    iso2: country[1].toUpperCase(),
    dialCode: country[2],
    priority: country[3] || 0,
    areaCodes: country[4] || null
  };
});

function getCountry() {
  return fetch('https://ip2c.org/s').then(function (response) {
    return response.text();
  }).then(function (response) {
    var result = (response || '').toString();

    if (!result || result[0] !== '1') {
      throw new Error('unable to fetch the country');
    }

    return result.substr(2, 2);
  });
} // Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/

function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos); // IE8 and below
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}
var defaultOptions = {
  allCountries: allCountries$1,
  autocomplete: 'on',
  autofocus: false,
  customValidate: false,
  defaultCountry: '',
  disabled: false,
  disabledFetchingCountry: false,
  dropdownOptions: {},
  dynamicPlaceholder: false,
  enabledCountryCode: false,
  enabledFlags: true,
  ignoredCountries: [],
  inputClasses: '',
  inputId: '',
  inputOptions: {},
  invalidMsg: '',
  maxLen: 25,
  mode: '',
  name: 'telephone',
  onlyCountries: [],
  placeholder: 'Enter a phone number',
  preferredCountries: [],
  readonly: false,
  required: false,
  validCharactersOnly: false,
  wrapperClasses: ''
};
var utils = {
  options: _objectSpread({}, defaultOptions)
};

// Polyfill for Event.path in IE 11: https://stackoverflow.com/a/46093727
function getParents(node, memo) {
  var parsedMemo = memo || [];
  var parentNode = node.parentNode;

  if (!parentNode) {
    return parsedMemo;
  }

  return getParents(parentNode, parsedMemo.concat(parentNode));
} // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside


var clickOutside = {
  bind: function bind(el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      var compName = vNode.context.name;
      var warn = "[Vue-click-outside:] provided expression ".concat(binding.expression, " is not a function, but has to be");

      if (compName) {
        warn += "Found in component ".concat(compName);
      }

      console.warn(warn);
    } // Define Handler and cache it on the element


    var bubble = binding.modifiers.bubble;

    var handler = function handler(e) {
      // Fall back to composedPath if e.path is undefined
      var path = e.path || (e.composedPath ? e.composedPath() : false) || getParents(e.target);

      if (bubble || path.length && !el.contains(path[0]) && el !== path[0]) {
        binding.value(e);
      }
    };

    el.__vueClickOutside__ = handler; // add Event Listeners

    document.addEventListener('click', handler);
  },
  unbind: function unbind(el) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  }
};

function getDefault(key) {
  var value = utils.options[key];

  if (typeof value === 'undefined') {
    return utils.options[key];
  }

  return value;
}

var script = {
  name: 'VueTelInput',
  directives: {
    clickOutside: clickOutside
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    allCountries: {
      type: Array,
      default: function _default() {
        return getDefault('allCountries');
      }
    },
    autocomplete: {
      type: String,
      default: function _default() {
        return getDefault('autocomplete');
      }
    },
    autofocus: {
      type: Boolean,
      default: function _default() {
        return getDefault('autofocus');
      }
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: function _default() {
        return getDefault('customValidate');
      }
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: String,
      default: function _default() {
        return getDefault('defaultCountry');
      }
    },
    disabled: {
      type: Boolean,
      default: function _default() {
        return getDefault('disabled');
      }
    },
    disabledFetchingCountry: {
      type: Boolean,
      default: function _default() {
        return getDefault('disabledFetchingCountry');
      }
    },
    dropdownOptions: {
      type: Object,
      default: function _default() {
        return getDefault('dropdownOptions');
      }
    },
    dynamicPlaceholder: {
      type: Boolean,
      default: function _default() {
        return getDefault('dynamicPlaceholder');
      }
    },
    enabledCountryCode: {
      type: Boolean,
      default: function _default() {
        return getDefault('enabledCountryCode');
      }
    },
    enabledFlags: {
      type: Boolean,
      default: function _default() {
        return getDefault('enabledFlags');
      }
    },
    ignoredCountries: {
      type: Array,
      default: function _default() {
        return getDefault('ignoredCountries');
      }
    },
    inputClasses: {
      type: [String, Array, Object],
      default: function _default() {
        return getDefault('inputClasses');
      }
    },
    inputId: {
      type: String,
      default: function _default() {
        return getDefault('inputId');
      }
    },
    inputOptions: {
      type: Object,
      default: function _default() {
        return getDefault('inputOptions');
      }
    },
    invalidMsg: {
      type: String,
      default: function _default() {
        return getDefault('invalidMsg');
      }
    },
    maxLen: {
      type: Number,
      default: function _default() {
        return getDefault('maxLen');
      }
    },
    name: {
      type: String,
      default: function _default() {
        return getDefault('name');
      }
    },
    mode: {
      type: String,
      default: function _default() {
        return getDefault('mode');
      }
    },
    onlyCountries: {
      type: Array,
      default: function _default() {
        return getDefault('onlyCountries');
      }
    },
    placeholder: {
      type: String,
      default: function _default() {
        return getDefault('placeholder');
      }
    },
    preferredCountries: {
      type: Array,
      default: function _default() {
        return getDefault('preferredCountries');
      }
    },
    readonly: {
      type: Boolean,
      default: function _default() {
        return getDefault('readonly');
      }
    },
    required: {
      type: Boolean,
      default: function _default() {
        return getDefault('required');
      }
    },
    validCharactersOnly: {
      type: Boolean,
      default: function _default() {
        return getDefault('validCharactersOnly');
      }
    },
    wrapperClasses: {
      type: [String, Array, Object],
      default: function _default() {
        return getDefault('wrapperClasses');
      }
    }
  },
  data: function data() {
    return {
      phone: '',
      activeCountry: {
        iso2: ''
      },
      open: false,
      finishMounted: false,
      selectedIndex: null,
      typeToFindInput: '',
      typeToFindTimer: null,
      cursorPosition: 0,
      dropdownOpenDirection: 'below'
    };
  },
  computed: {
    parsedPlaceholder: function parsedPlaceholder() {
      if (!this.finishMounted) {
        return '';
      }

      if (this.dynamicPlaceholder) {
        var mode = this.mode || 'international';
        return PhoneNumber.getExample(this.activeCountry.iso2, 'mobile').getNumber(mode);
      }

      return this.placeholder;
    },
    parsedMode: function parsedMode() {
      if (this.customValidate) {
        return 'input';
      }

      if (this.mode) {
        if (!['international', 'national'].includes(this.mode)) {
          console.error('Invalid value of prop "mode"');
        } else {
          return this.mode;
        }
      }

      if (!this.phone || this.phone[0] !== '+') {
        return 'national';
      }

      return 'international';
    },
    filteredCountries: function filteredCountries() {
      var _this = this;

      // List countries after filtered
      if (this.onlyCountries.length) {
        return this.allCountries.filter(function (_ref) {
          var iso2 = _ref.iso2;
          return _this.onlyCountries.some(function (c) {
            return c.toUpperCase() === iso2;
          });
        });
      }

      if (this.ignoredCountries.length) {
        return this.allCountries.filter(function (_ref2) {
          var iso2 = _ref2.iso2;
          return !_this.ignoredCountries.includes(iso2.toUpperCase()) && !_this.ignoredCountries.includes(iso2.toLowerCase());
        });
      }

      return this.allCountries;
    },
    sortedCountries: function sortedCountries() {
      // Sort the list countries: from preferred countries to all countries
      var preferredCountries = this.getCountries(this.preferredCountries).map(function (country) {
        return _objectSpread(_objectSpread({}, country), {}, {
          preferred: true
        });
      });
      return [].concat(_toConsumableArray(preferredCountries), _toConsumableArray(this.filteredCountries));
    },
    phoneObject: function phoneObject() {
      var result = PhoneNumber(this.phone, this.activeCountry.iso2).toJSON();
      Object.assign(result, {
        isValid: result.valid,
        country: this.activeCountry
      });
      return result;
    },
    phoneText: function phoneText() {
      var key = 'input';

      if (this.phoneObject.valid) {
        key = this.parsedMode;
      }

      return this.phoneObject.number[key] || '';
    }
  },
  watch: {
    // eslint-disable-next-line func-names
    'phoneObject.valid': function phoneObjectValid(value) {
      if (value) {
        this.phone = this.phoneText;
      }

      this.$emit('validate', this.phoneObject);
      this.$emit('onValidate', this.phoneObject); // Deprecated
    },
    value: function value() {
      this.phone = this.value;
    },
    open: function open(isDropdownOpened) {
      // Emit open and close events
      if (isDropdownOpened) {
        this.setDropdownPosition();
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
    phone: function phone(newValue, oldValue) {
      var _this2 = this;

      var isValidCharactersOnly = this.validCharactersOnly && !this.testCharacters();
      var isCustomValidate = this.customValidate && !this.testCustomValidate();

      if (isValidCharactersOnly || isCustomValidate) {
        this.$nextTick(function () {
          _this2.phone = oldValue;
        });
      } else if (newValue) {
        if (newValue[0] === '+') {
          var code = PhoneNumber(newValue).getRegionCode();

          if (code) {
            this.activeCountry = this.findCountry(code) || this.activeCountry;
          }
        }
      } // Reset the cursor to current position if it's not the last character.


      if (this.cursorPosition < oldValue.length) {
        this.$nextTick(function () {
          setCaretPosition(_this2.$refs.input, _this2.cursorPosition);
        });
      }
    },
    activeCountry: function activeCountry(value) {
      if (value && value.iso2) {
        this.$emit('country-changed', value);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.initializeCountry().then(function () {
      if (!_this3.phone && _this3.inputOptions && _this3.inputOptions.showDialCode && _this3.activeCountry.dialCode) {
        _this3.phone = "+".concat(_this3.activeCountry.dialCode);
      }

      _this3.$emit('validate', _this3.phoneObject);

      _this3.$emit('onValidate', _this3.phoneObject); // Deprecated

    }).catch(console.error).finally(function () {
      _this3.finishMounted = true;
    });
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this4.value) {
                _this4.phone = _this4.value.trim();
              } // import sprite.css only if enabledFlags prop is set to true.
              // In almost all cases this prop won't be changed once component is created.
              // Hence it is safe keeping it under created. This saves almost 114 KB of file.


              if (!_this4.enabledFlags) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return import('./sprite-bcde6ca3.js');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    initializeCountry: function initializeCountry() {
      var _this5 = this;

      return new Promise(function (resolve) {
        /**
         * 1. If the phone included prefix (+12), try to get the country and set it
         */
        if (_this5.phone && _this5.phone[0] === '+') {
          var activeCountry = PhoneNumber(_this5.phone).getRegionCode();

          if (activeCountry) {
            _this5.choose(activeCountry);

            resolve();
            return;
          }
        }
        /**
         * 2. Use default country if passed from parent
         */


        if (_this5.defaultCountry) {
          var defaultCountry = _this5.findCountry(_this5.defaultCountry);

          if (defaultCountry) {
            _this5.choose(defaultCountry);

            resolve();
            return;
          }
        }

        var fallbackCountry = _this5.findCountry(_this5.preferredCountries[0]) || _this5.filteredCountries[0];
        /**
         * 3. Check if fetching country based on user's IP is allowed, set it as the default country
         */


        if (!_this5.disabledFetchingCountry) {
          getCountry().then(function (res) {
            _this5.activeCountry = _this5.findCountry(res) || _this5.activeCountry;
          }).catch(function (error) {
            console.warn(error);
            /**
             * 4. Use the first country from preferred list (if available) or all countries list
             */

            _this5.choose(fallbackCountry);
          }).finally(function () {
            resolve();
          });
        } else {
          /**
           * 4. Use the first country from preferred list (if available) or all countries list
           */
          _this5.choose(fallbackCountry);

          resolve();
        }
      });
    },

    /**
     * Get the list of countries from the list of iso2 code
     */
    getCountries: function getCountries() {
      var _this6 = this;

      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return list.map(function (countryCode) {
        return _this6.findCountry(countryCode);
      }).filter(Boolean);
    },
    findCountry: function findCountry() {
      var iso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.filteredCountries.find(function (country) {
        return country.iso2 === iso.toUpperCase();
      });
    },
    getItemClass: function getItemClass(index, iso2) {
      var highlighted = this.selectedIndex === index;
      var lastPreferred = index === this.preferredCountries.length - 1;
      var preferred = this.preferredCountries.some(function (c) {
        return c.toUpperCase() === iso2;
      });
      return {
        highlighted: highlighted,
        'last-preferred': lastPreferred,
        preferred: preferred
      };
    },
    choose: function choose(country) {
      var toEmitInputEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var parsedCountry = country;

      if (typeof parsedCountry === 'string') {
        parsedCountry = this.findCountry(parsedCountry);
      }

      if (!parsedCountry) {
        return;
      }

      this.activeCountry = parsedCountry || this.activeCountry || {};

      if (this.phone && this.phone[0] === '+' && this.activeCountry.iso2 && this.phoneObject.number.national) {
        // Attach the current phone number with the newly selected country
        this.phone = PhoneNumber(this.phoneObject.number.national, this.activeCountry.iso2).getNumber('international');
      } else if (this.inputOptions && this.inputOptions.showDialCode && parsedCountry) {
        // Reset phone if the showDialCode is set
        this.phone = "+".concat(parsedCountry.dialCode);
      }

      if (toEmitInputEvent) {
        this.$emit('input', this.phoneText, this.phoneObject);
        this.$emit('onInput', this.phoneObject); // Deprecated
      }
    },
    testCharacters: function testCharacters() {
      var re = /^[()\-+0-9\s]*$/;
      return re.test(this.phone);
    },
    testCustomValidate: function testCustomValidate() {
      return this.customValidate instanceof RegExp ? this.customValidate.test(this.phone) : false;
    },
    onInput: function onInput(e) {
      if (this.validCharactersOnly && !this.testCharacters()) {
        return;
      }

      if (this.customValidate && !this.testCustomValidate()) {
        return;
      }

      this.$refs.input.setCustomValidity(this.phoneObject.valid ? '' : this.invalidMsg); // Returns response.number to assign it to v-model (if being used)
      // Returns full response for cases @input is used
      // and parent wants to return the whole response.

      this.$emit('input', this.phoneText, this.phoneObject);
      this.$emit('onInput', this.phoneObject); // Deprecated
      // Keep the current cursor position just in case the input reformatted
      // and it gets moved to the last character.

      if (e && e.target) {
        this.cursorPosition = e.target.selectionStart;
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
      this.$emit('onBlur'); // Deprecated
    },
    onFocus: function onFocus() {
      this.$emit('focus');
    },
    onEnter: function onEnter() {
      this.$emit('enter');
      this.$emit('onEnter'); // Deprecated
    },
    onSpace: function onSpace() {
      this.$emit('space');
      this.$emit('onSpace'); // Deprecated
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    toggleDropdown: function toggleDropdown() {
      if (this.disabled) {
        return;
      }

      this.open = !this.open;
    },
    clickedOutside: function clickedOutside() {
      this.open = false;
    },
    keyboardNav: function keyboardNav(e) {
      var _this7 = this;

      if (e.keyCode === 40) {
        // down arrow
        e.preventDefault();
        this.open = true;

        if (this.selectedIndex === null) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
        }

        var selEle = this.$refs.list.children[this.selectedIndex];

        if (selEle.offsetTop + selEle.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) {
          this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight + selEle.clientHeight;
        }
      } else if (e.keyCode === 38) {
        // up arrow
        e.preventDefault();
        this.open = true;

        if (this.selectedIndex === null) {
          this.selectedIndex = this.sortedCountries.length - 1;
        } else {
          this.selectedIndex = Math.max(0, this.selectedIndex - 1);
        }

        var _selEle = this.$refs.list.children[this.selectedIndex];

        if (_selEle.offsetTop < this.$refs.list.scrollTop) {
          this.$refs.list.scrollTop = _selEle.offsetTop;
        }
      } else if (e.keyCode === 13) {
        // enter key
        if (this.selectedIndex !== null) {
          this.choose(this.sortedCountries[this.selectedIndex], true);
        }

        this.open = !this.open;
      } else {
        // typing a country's name
        this.typeToFindInput += e.key;
        clearTimeout(this.typeToFindTimer);
        this.typeToFindTimer = setTimeout(function () {
          _this7.typeToFindInput = '';
        }, 700); // don't include preferred countries so we jump to the right place in the alphabet

        var typedCountryI = this.sortedCountries.slice(this.preferredCountries.length).findIndex(function (c) {
          return c.name.toLowerCase().startsWith(_this7.typeToFindInput);
        });

        if (typedCountryI >= 0) {
          this.selectedIndex = this.preferredCountries.length + typedCountryI;
          var _selEle2 = this.$refs.list.children[this.selectedIndex];
          var needToScrollTop = _selEle2.offsetTop < this.$refs.list.scrollTop;
          var needToScrollBottom = _selEle2.offsetTop + _selEle2.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight;

          if (needToScrollTop || needToScrollBottom) {
            this.$refs.list.scrollTop = _selEle2.offsetTop - this.$refs.list.clientHeight / 2;
          }
        }
      }
    },
    reset: function reset() {
      this.selectedIndex = this.sortedCountries.map(function (c) {
        return c.iso2;
      }).indexOf(this.activeCountry.iso2);
      this.open = false;
    },
    setDropdownPosition: function setDropdownPosition() {
      var spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      var hasEnoughSpaceBelow = spaceBelow > 200;

      if (hasEnoughSpaceBelow) {
        this.dropdownOpenDirection = 'below';
      } else {
        this.dropdownOpenDirection = 'above';
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: ['vue-tel-input', _vm.wrapperClasses, {
      disabled: _vm.disabled
    }]
  }, [_c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.clickedOutside,
      expression: "clickedOutside"
    }],
    class: ['vti__dropdown', {
      open: _vm.open
    }],
    attrs: {
      "tabindex": _vm.dropdownOptions && _vm.dropdownOptions.tabindex ? _vm.dropdownOptions.tabindex : 0
    },
    on: {
      "keydown": [_vm.keyboardNav, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        return _vm.reset($event);
      }],
      "click": _vm.toggleDropdown
    }
  }, [_c('span', {
    staticClass: "vti__selection"
  }, [_vm.enabledFlags ? _c('div', {
    class: ['vti__flag', _vm.activeCountry.iso2.toLowerCase()]
  }) : _vm._e(), _vm._v(" "), _vm.enabledCountryCode ? _c('span', {
    staticClass: "vti__country-code"
  }, [_vm._v("\n        +" + _vm._s(_vm.activeCountry.dialCode) + "\n      ")]) : _vm._e(), _vm._v(" "), _vm._t("arrow-icon", [_c('span', {
    staticClass: "vti__dropdown-arrow"
  }, [_vm._v(_vm._s(_vm.open ? "▲" : "▼"))])], {
    "open": _vm.open
  })], 2), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.open,
      expression: "open"
    }],
    ref: "list",
    staticClass: "vti__dropdown-list",
    class: _vm.dropdownOpenDirection
  }, _vm._l(_vm.sortedCountries, function (pb, index) {
    return _c('li', {
      key: pb.iso2 + (pb.preferred ? '-preferred' : ''),
      class: ['vti__dropdown-item', _vm.getItemClass(index, pb.iso2)],
      on: {
        "click": function click($event) {
          return _vm.choose(pb, true);
        },
        "mousemove": function mousemove($event) {
          _vm.selectedIndex = index;
        }
      }
    }, [_vm.enabledFlags ? _c('div', {
      class: ['vti__flag', pb.iso2.toLowerCase()]
    }) : _vm._e(), _vm._v(" "), _c('strong', [_vm._v(_vm._s(pb.name))]), _vm._v(" "), _vm.dropdownOptions && !_vm.dropdownOptions.disabledDialCode ? _c('span', [_vm._v("\n          +" + _vm._s(pb.dialCode) + "\n        ")]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.phone,
      expression: "phone"
    }],
    ref: "input",
    class: ['vti__input', _vm.inputClasses],
    attrs: {
      "type": "tel",
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "id": _vm.inputId,
      "maxlength": _vm.maxLen,
      "name": _vm.name,
      "placeholder": _vm.parsedPlaceholder,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "tabindex": _vm.inputOptions && _vm.inputOptions.tabindex ? _vm.inputOptions.tabindex : 0
    },
    domProps: {
      "value": _vm.phone
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.phone = $event.target.value;
      }, _vm.onInput],
      "keyup": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.onEnter($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
          return null;
        }

        return _vm.onSpace($event);
      }]
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-35df715e_0", {
    source: ".vue-tel-input{border-radius:3px;display:flex;border:1px solid #bbb;text-align:left}.vue-tel-input.disabled .dropdown,.vue-tel-input.disabled .selection,.vue-tel-input.disabled input{cursor:no-drop}.vue-tel-input:focus-within{box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);border-color:#66afe9}.vti__dropdown{display:flex;flex-direction:column;align-content:center;justify-content:center;position:relative;padding:7px;cursor:pointer}.vti__dropdown.show{max-height:300px;overflow:scroll}.vti__dropdown.open{background-color:#f3f3f3}.vti__dropdown:hover{background-color:#f3f3f3}.vti__selection{font-size:.8em;display:flex;align-items:center}.vti__selection .vti__country-code{color:#666}.vti__flag{margin-right:5px;margin-left:5px}.vti__dropdown-list{z-index:1;padding:0;margin:0;text-align:left;list-style:none;max-height:200px;overflow-y:scroll;position:absolute;left:-1px;background-color:#fff;border:1px solid #ccc;width:390px}.vti__dropdown-list.below{top:33px}.vti__dropdown-list.above{top:auto;bottom:100%}.vti__dropdown-arrow{transform:scaleY(.5);display:inline-block;color:#666}.vti__dropdown-item{cursor:pointer;padding:4px 15px}.vti__dropdown-item.highlighted{background-color:#f3f3f3}.vti__dropdown-item.last-preferred{border-bottom:1px solid #cacaca}.vti__dropdown-item .vti__flag{display:inline-block;margin-right:5px}.vti__input{border:none;border-radius:0 2px 2px 0;width:100%;outline:0;padding-left:7px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

function install(Vue) {
  var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;
  install.installed = true;
  utils.options = _objectSpread(_objectSpread({}, defaultOptions), customOptions);
  Vue.component('vue-tel-input', __vue_component__);
}
var plugin = {
  install: install
}; // Auto-install

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
export { __vue_component__ as VueTelInput, install };
