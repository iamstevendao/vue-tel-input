(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['vue-tel-input'] = factory();
  else root['vue-tel-input'] = factory();
}((typeof self !== 'undefined' ? self : this), () =>
/** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */ 		}
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {},
        /** *** */ 		};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
      /** *** */ 		if (!__webpack_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /** *** */ 		}
      /** *** */ 	};
    /** *** */
    /** *** */ 	// define __esModule on exports
    /** *** */ 	__webpack_require__.r = function (exports) {
      /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 		}
      /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 	};
    /** *** */
    /** *** */ 	// create a fake namespace object
    /** *** */ 	// mode & 1: value is a module id, require it
    /** *** */ 	// mode & 2: merge all properties of value into the ns
    /** *** */ 	// mode & 4: return value when already ns object
    /** *** */ 	// mode & 8|1: behave like require
    /** *** */ 	__webpack_require__.t = function (value, mode) {
      /** *** */ 		if (mode & 1) value = __webpack_require__(value);
      /** *** */ 		if (mode & 8) return value;
      /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /** *** */ 		const ns = Object.create(null);
      /** *** */ 		__webpack_require__.r(ns);
      /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
      /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
      /** *** */ 		return ns;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__webpack_require__.n = function (module) {
      /** *** */ 		const getter = module && module.__esModule
      /** *** */ 			? function getDefault() { return module.default; }
      /** *** */ 			: function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '';
    /** *** */
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 'fb15');
    /** *** */ }({

    /***/ '025e':
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'c', () => /* binding */ getCountry);
      __webpack_require__.d(__webpack_exports__, 'd', () => /* binding */ setCaretPosition);
      __webpack_require__.d(__webpack_exports__, 'b', () => /* binding */ defaultOptions);

      // UNUSED EXPORTS: allProps

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
      const objectSpread2 = __webpack_require__('5530');

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
      const defineProperty = __webpack_require__('ade3');

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
      function _iterableToArrayLimit(arr, i) {
        let _i = arr && (typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']);

        if (_i == null) return;
        const _arr = [];
        let _n = true;
        let _d = false;

        let _s; let
          _e;

        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i.return != null) _i.return();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }
      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
      const unsupportedIterableToArray = __webpack_require__('06c5');

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
      function _nonIterableRest() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray['a' /* default */])(arr, i) || _nonIterableRest();
      }
      // CONCATENATED MODULE: ./src/assets/all-countries.js

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
      //    International dial code
      // ]
      const allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1684'], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1264'], ['Antigua and Barbuda', 'ag', '1268'], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Australia', 'au', '61'], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1242'], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1246'], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1441'], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1284'], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1'], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599'], ['Cayman Islands', 'ky', '1345'], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86'], ['Christmas Island', 'cx', '61'], ['Cocos (Keeling) Islands', 'cc', '61'], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599'], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1767'], ['Dominican Republic (República Dominicana)', 'do', '1'], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358'], ['France', 'fr', '33'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1473'], ['Guadeloupe', 'gp', '590'], ['Guam', 'gu', '1671'], ['Guatemala', 'gt', '502'], ['Guernsey', 'gg', '44', 1], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354'], ['India (भारत)', 'in', '91'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353'], ['Isle of Man', 'im', '44'], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39'], ['Jamaica', 'jm', '1876'], ['Japan (日本)', 'jp', '81'], ['Jersey', 'je', '44'], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7'], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kosovo', 'xk', '383'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Macedonia (FYROM) (Македонија)', 'mk', '389'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mayotte', 'yt', '262'], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1664'], ['Morocco (‫المغرب‬‎)', 'ma', '212'], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['Northern Mariana Islands', 'mp', '1670'], ['Norway (Norge)', 'no', '47'], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63'], ['Poland (Polska)', 'pl', '48'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1'], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262'], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7'], ['Rwanda', 'rw', '250'], ['Saint Barthélemy', 'bl', '590'], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869'], ['Saint Lucia', 'lc', '1758'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590'], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784'], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65'], ['Sint Maarten', 'sx', '1721'], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Svalbard and Jan Mayen', 'sj', '47'], ['Swaziland', 'sz', '268'], ['Sweden (Sverige)', 'se', '46'], ['Switzerland (Schweiz)', 'ch', '41'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1868'], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1649'], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1340'], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44'], ['United States', 'us', '1'], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39'], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'], ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212'], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263'], ['Åland Islands', 'ax', '358']];
      /* harmony default export */ const all_countries = (allCountries.map((_ref) => {
        const _ref2 = _slicedToArray(_ref, 3);
        const name = _ref2[0];
        const iso2 = _ref2[1];
        const dialCode = _ref2[2];

        return {
          name,
          iso2: iso2.toUpperCase(),
          dialCode,
        };
      }));
      // CONCATENATED MODULE: ./src/utils.js

      function getCountry() {
        return fetch('https://ip2c.org/s').then((response) => response.text()).then((response) => {
          const result = (response || '').toString();

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
          const range = ctrl.createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      }
      const allProps = [{
        name: 'allCountries',
        type: Array,
        default: all_countries,
        description: 'All countries that are used in <code>libphonenumber-js</code>, can be overridden by this prop',
        inDemo: false,
      }, {
        name: 'autoFormat',
        type: Boolean,
        default: true,
        description: 'Auto update the input to the formatted phone number when it\'s valid',
        inDemo: true,
      }, {
        name: 'customValidate',
        type: [Boolean, RegExp],
        default: false,
        description: 'Custom validation RegExp for input',
        inDemo: false,
      }, {
        name: 'defaultCountry',
        default: '',
        type: [String, Number],
        description: 'Default country (by iso2 or dialCode), will override the country fetched from IP address of user',
        inDemo: false,
      }, {
        name: 'disabled',
        default: false,
        type: Boolean,
        description: 'Disable <code>vue-tel-input</code>, including the input & flag dropdown',
        inDemo: false,
      }, {
        name: 'autoDefaultCountry',
        default: true,
        type: Boolean,
        description: 'To fetch default country based on IP address of user',
        inDemo: false,
      }, {
        name: 'dropdownOptions',
        type: Object,
        description: 'Options for dropdown, see below',
        inDemo: false,
      }, {
        name: 'dropdownOptions.showDialCodeInList',
        default: true,
        type: Boolean,
        description: 'Show dial code in the dropdown list',
        inDemo: true,
      }, {
        name: 'dropdownOptions.showDialCodeInSelection',
        default: false,
        type: Boolean,
        description: 'Show dial code in the dropdown selection',
        inDemo: true,
      }, {
        name: 'dropdownOptions.showFlags',
        default: true,
        type: Boolean,
        description: 'Show flags in the dropdown selection and list',
        inDemo: true,
      }, {
        name: 'dropdownOptions.tabindex',
        default: 0,
        type: Number,
        description: 'Native dropdown <code>tabindex</code> attribute',
        inDemo: false,
      }, {
        name: 'ignoredCountries',
        default: [],
        type: Array,
        description: 'List of countries will NOT be shown on the dropdown',
        inDemo: false,
      }, {
        name: 'inputOptions',
        type: Object,
        description: 'Options for input, see below',
        inDemo: false,
      }, {
        name: 'inputOptions.autocomplete',
        type: String,
        default: 'on',
        description: 'Native input <code>autocomplete</code> attribute',
        inDemo: false,
      }, {
        name: 'inputOptions.autofocus',
        type: Boolean,
        default: false,
        description: 'Native input <code>autofocus</code> attribute',
        inDemo: false,
      }, // {
      //   name: 'inputOptions.dynamicPlaceholder',
      //   default: false,
      //   type: Boolean,
      //   description: 'Placeholder as a sample phone number in the current country',
      //   inDemo: false,
      // },
      {
        name: 'inputOptions.id',
        default: '',
        type: String,
        description: 'Native input <code>id</code> attribute',
        inDemo: false,
      }, {
        name: 'inputOptions.maxlength',
        default: 25,
        type: Number,
        description: 'Native input <code>maxlength</code> attribute',
        inDemo: false,
      }, {
        name: 'inputOptions.name',
        default: 'telephone',
        type: String,
        description: 'Native input <code>name</code> attribute',
        inDemo: false,
      }, {
        name: 'inputOptions.placeholder',
        default: 'Enter a phone number',
        type: String,
        description: 'Placeholder for the input',
        inDemo: false,
      }, {
        name: 'inputOptions.readonly',
        default: false,
        type: Boolean,
        description: 'Native input <code>readonly</code> attribute',
        inDemo: false,
      }, {
        name: 'inputOptions.required',
        default: false,
        type: Boolean,
        description: 'Native input <code>required</code> attribute',
        inDemo: false,
      }, {
        name: 'inputOptions.tabindex',
        default: 0,
        type: Number,
        description: 'Native input <code>tabindex</code> attribute',
        inDemo: false,
      }, {
        name: 'inputOptions.type',
        default: 'tel',
        type: String,
        description: 'Native input <code>type</code> attribute',
        inDemo: false,
      }, {
        name: 'inputOptions.styleClasses',
        default: '',
        type: [String, Array, Object],
        description: 'Custom classes for the <code>input</code>',
        inDemo: false,
      }, {
        name: 'invalidMsg',
        default: '',
        type: String,
        description: '',
        inDemo: false,
      }, {
        name: 'mode',
        default: 'auto',
        type: String,
        description: 'Allowed values: <code>\'auto\'</code> (Default set by phone),  <code>\'international\'</code> (Format number with the dial code i.e. + 61), <code>\'national\'</code> (Format number without dial code i.e. 0321232)',
        inDemo: true,
        options: ['auto', 'national', 'international'],
      }, {
        name: 'onlyCountries',
        default: [],
        type: Array,
        description: 'List of countries will be shown on the dropdown',
        inDemo: false,
      }, {
        name: 'preferredCountries',
        default: [],
        type: Array,
        description: 'Preferred countries list, will be on top of the dropdown',
        inDemo: false,
      }, {
        name: 'styleClasses',
        default: '',
        type: [String, Array, Object],
        description: 'Custom classes for the wrapper',
        inDemo: false,
      }, {
        name: 'validCharactersOnly',
        default: false,
        type: Boolean,
        description: 'Only allow valid characters in a phone number (will also verify in <code>mounted</code>, so phone number with invalid characters will be shown as an empty string)',
        inDemo: false,
      }];
      var defaultOptions = [].concat(allProps).reduce((prv, crr) => {
        if (crr.name.includes('.')) {
          const _crr$name$split = crr.name.split('.');
          const _crr$name$split2 = _slicedToArray(_crr$name$split, 2);
          const key = _crr$name$split2[0];
          const nestedKey = _crr$name$split2[1];

          if (prv[key]) {
            Object.assign(prv[key], Object(defineProperty['a' /* default */])({}, nestedKey, crr.default));
          } else {
            Object.assign(prv, Object(defineProperty['a' /* default */])({}, key, Object(defineProperty['a' /* default */])({}, nestedKey, crr.default)));
          }
        } else {
          Object.assign(prv, Object(defineProperty['a' /* default */])({}, crr.name, crr.default));
        }

        return prv;
      }, {});
      /* harmony default export */ const utils = __webpack_exports__.a = ({
        options: Object(objectSpread2['a' /* default */])({}, defaultOptions),
      });
      /***/ }),

    /***/ '06c5':
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', () => _unsupportedIterableToArray);
      /* harmony import */ const _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('6b75');

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === 'string') return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'])(o, minLen);
        let n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === 'Object' && o.constructor) n = o.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(o);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'])(o, minLen);
      }
      /***/ }),

    /***/ '0be3':
    /***/ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/ }),

    /***/ '15fd':
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'a', () => /* binding */ _objectWithoutProperties);

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        const target = {};
        const sourceKeys = Object.keys(source);
        let key; let
          i;

        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }

        return target;
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        const target = _objectWithoutPropertiesLoose(source, excluded);
        let key; let
          i;

        if (Object.getOwnPropertySymbols) {
          const sourceSymbolKeys = Object.getOwnPropertySymbols(source);

          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
          }
        }

        return target;
      }
      /***/ }),

    /***/ '3c6f':
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_sprite_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('fee6');
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_sprite_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_sprite_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
      /* unused harmony reexport * */
      /***/ }),

    /***/ 5530:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', () => _objectSpread2);
      /* harmony import */ const _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('ade3');

      function ownKeys(object, enumerableOnly) {
        const keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          let symbols = Object.getOwnPropertySymbols(object);

          if (enumerableOnly) {
            symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable);
          }

          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread2(target) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach((key) => {
              Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'])(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach((key) => {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }
      /***/ }),

    /***/ '6b75':
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', () => _arrayLikeToArray);
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
      /***/ }),

    /***/ 7667:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_component_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('0be3');
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_component_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_component_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
      /* unused harmony reexport * */
      /***/ }),

    /***/ ade3:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', () => _defineProperty);
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }
      /***/ }),

    /***/ b635:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (global) {
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'c', () => install);
        /* harmony import */ const _home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('5530');
        /* harmony import */ const _home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('15fd');
        /* harmony import */ const _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('025e');
        /* harmony import */ const _components_vue_tel_input_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('e348');
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'a', () => _components_vue_tel_input_vue__WEBPACK_IMPORTED_MODULE_3__.a);

        const _excluded = ['dropdownOptions', 'inputOptions'];
        const _excluded2 = ['dropdownOptions', 'inputOptions'];

        function install(Vue) {
          const customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (install.installed) return;
          install.installed = true;

          const customDropdownOptions = customOptions.dropdownOptions;
          const customInputOptions = customOptions.inputOptions;
          const otherCustomOptions = Object(_home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ 'a'])(customOptions, _excluded);

          const defaultDropdownOptions = _utils__WEBPACK_IMPORTED_MODULE_2__[/* defaultOptions */ 'b'].dropdownOptions;
          const defaultInputOptions = _utils__WEBPACK_IMPORTED_MODULE_2__[/* defaultOptions */ 'b'].inputOptions;
          const otherDefaultOptions = Object(_home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ 'a'])(_utils__WEBPACK_IMPORTED_MODULE_2__[/* defaultOptions */ 'b'], _excluded2);

          _utils__WEBPACK_IMPORTED_MODULE_2__[/* default */ 'a'].options = Object(_home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'])(Object(_home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'])({
            inputOptions: Object(_home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'])(Object(_home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'])({}, defaultInputOptions), customInputOptions),
            dropdownOptions: Object(_home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'])(Object(_home_tofandel_Desktop_vue_tel_input_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'])({}, defaultDropdownOptions), customDropdownOptions),
          }, otherDefaultOptions), otherCustomOptions);
          Vue.component('vue-tel-input', _components_vue_tel_input_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ 'a']);
        }

        const plugin = {
          install,
        }; // Auto-install

        let GlobalVue = null;

        if (typeof window !== 'undefined') {
          GlobalVue = window.Vue;
        } else if (typeof global !== 'undefined') {
          GlobalVue = global.Vue;
        }

        if (GlobalVue) {
          GlobalVue.use(plugin);
        }

        /* harmony default export */ __webpack_exports__.b = (plugin);
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')));
      /***/ }),

    /***/ c8ba:
    /***/ (function (module, exports) {
      let g;

      // This works in non-strict mode
      g = (function () {
        return this;
      }());

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function('return this')();
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === 'object') g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;
      /***/ }),

    /***/ e348:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d7d9407-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-tel-input.vue?vue&type=template&id=30b1c1c9&
      const render = function () {
        const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('div', { class: ['vue-tel-input', _vm.styleClasses, { disabled: _vm.disabled }] }, [_c('div', {
          directives: [{
            name: 'click-outside', rawName: 'v-click-outside', value: (_vm.clickedOutside), expression: 'clickedOutside',
          }],
          class: ['vti__dropdown', { open: _vm.open }],
          attrs: { tabindex: _vm.dropdownOptions.tabindex },
          on: { keydown: [_vm.keyboardNav, function ($event) { if (!$event.type.indexOf('key') && _vm._k($event.keyCode, 'esc', 27, $event.key, ['Esc', 'Escape'])) { return null; } return _vm.reset.apply(null, arguments); }], click: _vm.toggleDropdown },
        }, [_c('span', { staticClass: 'vti__selection' }, [(_vm.dropdownOptions.showFlags) ? _c('div', { class: ['vti__flag', _vm.activeCountryCode.toLowerCase()] }) : _vm._e(), (_vm.dropdownOptions.showDialCodeInSelection) ? _c('span', { staticClass: 'vti__country-code' }, [_vm._v(` +${_vm._s(_vm.activeCountry && _vm.activeCountry.dialCode)} `)]) : _vm._e(), _vm._t('arrow-icon', () => [_c('span', { staticClass: 'vti__dropdown-arrow' }, [_vm._v(_vm._s(_vm.open ? '▲' : '▼'))])], { open: _vm.open })], 2), (_vm.open) ? _vm._m(0) : _vm._e()]), ((_vm.inputOptions.type) === 'checkbox') ? _c('input', {
          directives: [{
            name: 'model', rawName: 'v-model', value: (_vm.phone), expression: 'phone',
          }],
          ref: 'input',
          class: ['vti__input', _vm.inputOptions.styleClasses],
          attrs: {
            autocomplete: _vm.inputOptions.autocomplete, autofocus: _vm.inputOptions.autofocus, disabled: _vm.disabled, id: _vm.inputOptions.id, maxlength: _vm.inputOptions.maxlength, name: _vm.inputOptions.name, placeholder: _vm.parsedPlaceholder, readonly: _vm.inputOptions.readonly, required: _vm.inputOptions.required, tabindex: _vm.inputOptions.tabindex, type: 'checkbox',
          },
          domProps: { checked: Array.isArray(_vm.phone) ? _vm._i(_vm.phone, null) > -1 : (_vm.phone) },
          on: {
            blur: _vm.onBlur, focus: _vm.onFocus, input: _vm.onInput, keyup: [function ($event) { if (!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter')) { return null; } return _vm.onEnter.apply(null, arguments); }, function ($event) { if (!$event.type.indexOf('key') && _vm._k($event.keyCode, 'space', 32, $event.key, [' ', 'Spacebar'])) { return null; } return _vm.onSpace.apply(null, arguments); }], change($event) { const $$a = _vm.phone; const $$el = $event.target; const $$c = !!$$el.checked; if (Array.isArray($$a)) { const $$v = null; const $$i = _vm._i($$a, $$v); if ($$el.checked) { $$i < 0 && (_vm.phone = $$a.concat([$$v])); } else { $$i > -1 && (_vm.phone = $$a.slice(0, $$i).concat($$a.slice($$i + 1))); } } else { _vm.phone = $$c; } },
          },
        }) : ((_vm.inputOptions.type) === 'radio') ? _c('input', {
          directives: [{
            name: 'model', rawName: 'v-model', value: (_vm.phone), expression: 'phone',
          }],
          ref: 'input',
          class: ['vti__input', _vm.inputOptions.styleClasses],
          attrs: {
            autocomplete: _vm.inputOptions.autocomplete, autofocus: _vm.inputOptions.autofocus, disabled: _vm.disabled, id: _vm.inputOptions.id, maxlength: _vm.inputOptions.maxlength, name: _vm.inputOptions.name, placeholder: _vm.parsedPlaceholder, readonly: _vm.inputOptions.readonly, required: _vm.inputOptions.required, tabindex: _vm.inputOptions.tabindex, type: 'radio',
          },
          domProps: { checked: _vm._q(_vm.phone, null) },
          on: {
            blur: _vm.onBlur, focus: _vm.onFocus, input: _vm.onInput, keyup: [function ($event) { if (!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter')) { return null; } return _vm.onEnter.apply(null, arguments); }, function ($event) { if (!$event.type.indexOf('key') && _vm._k($event.keyCode, 'space', 32, $event.key, [' ', 'Spacebar'])) { return null; } return _vm.onSpace.apply(null, arguments); }], change($event) { _vm.phone = null; },
          },
        }) : _c('input', {
          directives: [{
            name: 'model', rawName: 'v-model', value: (_vm.phone), expression: 'phone',
          }],
          ref: 'input',
          class: ['vti__input', _vm.inputOptions.styleClasses],
          attrs: {
            autocomplete: _vm.inputOptions.autocomplete, autofocus: _vm.inputOptions.autofocus, disabled: _vm.disabled, id: _vm.inputOptions.id, maxlength: _vm.inputOptions.maxlength, name: _vm.inputOptions.name, placeholder: _vm.parsedPlaceholder, readonly: _vm.inputOptions.readonly, required: _vm.inputOptions.required, tabindex: _vm.inputOptions.tabindex, type: _vm.inputOptions.type,
          },
          domProps: { value: (_vm.phone) },
          on: {
            blur: _vm.onBlur, focus: _vm.onFocus, input: [function ($event) { if ($event.target.composing) { return; }_vm.phone = $event.target.value; }, _vm.onInput], keyup: [function ($event) { if (!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter')) { return null; } return _vm.onEnter.apply(null, arguments); }, function ($event) { if (!$event.type.indexOf('key') && _vm._k($event.keyCode, 'space', 32, $event.key, [' ', 'Spacebar'])) { return null; } return _vm.onSpace.apply(null, arguments); }],
          },
        }), _vm._t('icon-right')], 2);
      };
      const staticRenderFns = [function () { const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('ul', { ref: 'list', staticClass: 'vti__dropdown-list', class: _vm.dropdownOpenDirection }, _vm._l((_vm.sortedCountries), (pb, index) => _c('li', { key: pb.iso2 + (pb.preferred ? '-preferred' : ''), class: ['vti__dropdown-item', _vm.getItemClass(index, pb.iso2)], on: { click($event) { return _vm.choose(pb); }, mousemove($event) { _vm.selectedIndex = index; } } }, [(_vm.dropdownOptions.showFlags) ? _c('div', { class: ['vti__flag', pb.iso2.toLowerCase()] }) : _vm._e(), _c('strong', [_vm._v(_vm._s(pb.name))]), (_vm.dropdownOptions.showDialCodeInList) ? _c('span', [_vm._v(` +${_vm._s(pb.dialCode)} `)]) : _vm._e()])), 0); }];

      // CONCATENATED MODULE: ./src/components/vue-tel-input.vue?vue&type=template&id=30b1c1c9&

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
      const objectWithoutProperties = __webpack_require__('15fd');

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
      const arrayLikeToArray = __webpack_require__('6b75');

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return Object(arrayLikeToArray['a' /* default */])(arr);
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
      function _iterableToArray(iter) {
        if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter);
      }
      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
      const unsupportedIterableToArray = __webpack_require__('06c5');

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
      function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Object(unsupportedIterableToArray['a' /* default */])(arr) || _nonIterableSpread();
      }
      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
      const objectSpread2 = __webpack_require__('5530');

      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/metadata.min.json.js
      // This file is a workaround for a bug in web browsers' "native"
      // ES6 importing system which is uncapable of importing "*.json" files.
      // https://github.com/catamphetamine/libphonenumber-js/issues/239
      /* harmony default export */ const metadata_min_json = ({
        version: 4,
        country_calling_codes: {
          1: ['US', 'AG', 'AI', 'AS', 'BB', 'BM', 'BS', 'CA', 'DM', 'DO', 'GD', 'GU', 'JM', 'KN', 'KY', 'LC', 'MP', 'MS', 'PR', 'SX', 'TC', 'TT', 'VC', 'VG', 'VI'], 7: ['RU', 'KZ'], 20: ['EG'], 27: ['ZA'], 30: ['GR'], 31: ['NL'], 32: ['BE'], 33: ['FR'], 34: ['ES'], 36: ['HU'], 39: ['IT', 'VA'], 40: ['RO'], 41: ['CH'], 43: ['AT'], 44: ['GB', 'GG', 'IM', 'JE'], 45: ['DK'], 46: ['SE'], 47: ['NO', 'SJ'], 48: ['PL'], 49: ['DE'], 51: ['PE'], 52: ['MX'], 53: ['CU'], 54: ['AR'], 55: ['BR'], 56: ['CL'], 57: ['CO'], 58: ['VE'], 60: ['MY'], 61: ['AU', 'CC', 'CX'], 62: ['ID'], 63: ['PH'], 64: ['NZ'], 65: ['SG'], 66: ['TH'], 81: ['JP'], 82: ['KR'], 84: ['VN'], 86: ['CN'], 90: ['TR'], 91: ['IN'], 92: ['PK'], 93: ['AF'], 94: ['LK'], 95: ['MM'], 98: ['IR'], 211: ['SS'], 212: ['MA', 'EH'], 213: ['DZ'], 216: ['TN'], 218: ['LY'], 220: ['GM'], 221: ['SN'], 222: ['MR'], 223: ['ML'], 224: ['GN'], 225: ['CI'], 226: ['BF'], 227: ['NE'], 228: ['TG'], 229: ['BJ'], 230: ['MU'], 231: ['LR'], 232: ['SL'], 233: ['GH'], 234: ['NG'], 235: ['TD'], 236: ['CF'], 237: ['CM'], 238: ['CV'], 239: ['ST'], 240: ['GQ'], 241: ['GA'], 242: ['CG'], 243: ['CD'], 244: ['AO'], 245: ['GW'], 246: ['IO'], 247: ['AC'], 248: ['SC'], 249: ['SD'], 250: ['RW'], 251: ['ET'], 252: ['SO'], 253: ['DJ'], 254: ['KE'], 255: ['TZ'], 256: ['UG'], 257: ['BI'], 258: ['MZ'], 260: ['ZM'], 261: ['MG'], 262: ['RE', 'YT'], 263: ['ZW'], 264: ['NA'], 265: ['MW'], 266: ['LS'], 267: ['BW'], 268: ['SZ'], 269: ['KM'], 290: ['SH', 'TA'], 291: ['ER'], 297: ['AW'], 298: ['FO'], 299: ['GL'], 350: ['GI'], 351: ['PT'], 352: ['LU'], 353: ['IE'], 354: ['IS'], 355: ['AL'], 356: ['MT'], 357: ['CY'], 358: ['FI', 'AX'], 359: ['BG'], 370: ['LT'], 371: ['LV'], 372: ['EE'], 373: ['MD'], 374: ['AM'], 375: ['BY'], 376: ['AD'], 377: ['MC'], 378: ['SM'], 380: ['UA'], 381: ['RS'], 382: ['ME'], 383: ['XK'], 385: ['HR'], 386: ['SI'], 387: ['BA'], 389: ['MK'], 420: ['CZ'], 421: ['SK'], 423: ['LI'], 500: ['FK'], 501: ['BZ'], 502: ['GT'], 503: ['SV'], 504: ['HN'], 505: ['NI'], 506: ['CR'], 507: ['PA'], 508: ['PM'], 509: ['HT'], 590: ['GP', 'BL', 'MF'], 591: ['BO'], 592: ['GY'], 593: ['EC'], 594: ['GF'], 595: ['PY'], 596: ['MQ'], 597: ['SR'], 598: ['UY'], 599: ['CW', 'BQ'], 670: ['TL'], 672: ['NF'], 673: ['BN'], 674: ['NR'], 675: ['PG'], 676: ['TO'], 677: ['SB'], 678: ['VU'], 679: ['FJ'], 680: ['PW'], 681: ['WF'], 682: ['CK'], 683: ['NU'], 685: ['WS'], 686: ['KI'], 687: ['NC'], 688: ['TV'], 689: ['PF'], 690: ['TK'], 691: ['FM'], 692: ['MH'], 850: ['KP'], 852: ['HK'], 853: ['MO'], 855: ['KH'], 856: ['LA'], 880: ['BD'], 886: ['TW'], 960: ['MV'], 961: ['LB'], 962: ['JO'], 963: ['SY'], 964: ['IQ'], 965: ['KW'], 966: ['SA'], 967: ['YE'], 968: ['OM'], 970: ['PS'], 971: ['AE'], 972: ['IL'], 973: ['BH'], 974: ['QA'], 975: ['BT'], 976: ['MN'], 977: ['NP'], 992: ['TJ'], 993: ['TM'], 994: ['AZ'], 995: ['GE'], 996: ['KG'], 998: ['UZ'],
        },
        countries: {
          AC: ['247', '00', '(?:[01589]\\d|[46])\\d{4}', [5, 6]], AD: ['376', '00', '(?:1|6\\d)\\d{7}|[135-9]\\d{5}', [6, 8, 9], [['(\\d{3})(\\d{3})', '$1 $2', ['[135-9]']], ['(\\d{4})(\\d{4})', '$1 $2', ['1']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['6']]]], AE: ['971', '00', '(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}', [5, 6, 7, 8, 9, 10, 11, 12], [['(\\d{3})(\\d{2,9})', '$1 $2', ['60|8']], ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[236]|[479][2-8]'], '0$1'], ['(\\d{3})(\\d)(\\d{5})', '$1 $2 $3', ['[479]']], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['5'], '0$1']], '0'], AF: ['93', '00', '[2-7]\\d{8}', [9], [['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[2-7]'], '0$1']], '0'], AG: ['1', '011', '(?:268|[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([457]\\d{6})$', '268$1', 0, '268'], AI: ['1', '011', '(?:264|[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([2457]\\d{6})$', '264$1', 0, '264'], AL: ['355', '00', '(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}', [6, 7, 8, 9], [['(\\d{3})(\\d{3,4})', '$1 $2', ['80|9'], '0$1'], ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['4[2-6]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2358][2-5]|4'], '0$1'], ['(\\d{3})(\\d{5})', '$1 $2', ['[23578]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['6'], '0$1']], '0'], AM: ['374', '00', '(?:[1-489]\\d|55|60|77)\\d{6}', [8], [['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['[89]0'], '0 $1'], ['(\\d{3})(\\d{5})', '$1 $2', ['2|3[12]'], '(0$1)'], ['(\\d{2})(\\d{6})', '$1 $2', ['1|47'], '(0$1)'], ['(\\d{2})(\\d{6})', '$1 $2', ['[3-9]'], '0$1']], '0'], AO: ['244', '00', '[29]\\d{8}', [9], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[29]']]]], AR: ['54', '00', '(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}', [10, 11], [['(\\d{4})(\\d{2})(\\d{4})', '$1 $2-$3', ['2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])', '2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)', '2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]', '2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]'], '0$1', 1], ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2-$3', ['1'], '0$1', 1], ['(\\d{3})(\\d{3})(\\d{4})', '$1-$2-$3', ['[68]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2-$3', ['[23]'], '0$1', 1], ['(\\d)(\\d{4})(\\d{2})(\\d{4})', '$2 15-$3-$4', ['9(?:2[2-469]|3[3-578])', '9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))', '9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)', '9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]', '9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]'], '0$1', 0, '$1 $2 $3-$4'], ['(\\d)(\\d{2})(\\d{4})(\\d{4})', '$2 15-$3-$4', ['91'], '0$1', 0, '$1 $2 $3-$4'], ['(\\d{3})(\\d{3})(\\d{5})', '$1-$2-$3', ['8'], '0$1'], ['(\\d)(\\d{3})(\\d{3})(\\d{4})', '$2 15-$3-$4', ['9'], '0$1', 0, '$1 $2 $3-$4']], '0', 0, '0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?', '9$1'], AS: ['1', '011', '(?:[58]\\d\\d|684|900)\\d{7}', [10], 0, '1', 0, '1|([267]\\d{6})$', '684$1', 0, '684'], AT: ['43', '00', '1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}', [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [['(\\d)(\\d{3,12})', '$1 $2', ['1(?:11|[2-9])'], '0$1'], ['(\\d{3})(\\d{2})', '$1 $2', ['517'], '0$1'], ['(\\d{2})(\\d{3,5})', '$1 $2', ['5[079]'], '0$1'], ['(\\d{3})(\\d{3,10})', '$1 $2', ['(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]'], '0$1'], ['(\\d{4})(\\d{3,9})', '$1 $2', ['[2-467]|5[2-6]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['5'], '0$1'], ['(\\d{2})(\\d{4})(\\d{4,7})', '$1 $2 $3', ['5'], '0$1']], '0'], AU: ['61', '001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011', '1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}', [5, 6, 7, 8, 9, 10], [['(\\d{2})(\\d{3,4})', '$1 $2', ['16'], '0$1'], ['(\\d{2})(\\d{3})(\\d{2,4})', '$1 $2 $3', ['16'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['14|4'], '0$1'], ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['[2378]'], '(0$1)'], ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1(?:30|[89])']]], '0', 0, '0|(183[12])', 0, 0, 0, [['(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}', [9]], ['4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}', [9]], ['180(?:0\\d{3}|2)\\d{3}', [7, 10]], ['190[0-26]\\d{6}', [10]], 0, 0, 0, ['163\\d{2,6}', [5, 6, 7, 8, 9]], ['14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}', [9]], ['13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}', [6, 8, 10]]], '0011'], AW: ['297', '00', '(?:[25-79]\\d\\d|800)\\d{4}', [7], [['(\\d{3})(\\d{4})', '$1 $2', ['[25-9]']]]], AX: ['358', '00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))', '2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}', [5, 6, 7, 8, 9, 10, 11, 12], 0, '0', 0, 0, 0, 0, '18', 0, '00'], AZ: ['994', '00', '365\\d{6}|(?:[124579]\\d|60|88)\\d{7}', [9], [['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['90'], '0$1'], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['1[28]|2|365|46', '1[28]|2|365|46', '1[28]|2|365(?:[0-46-9]|5[0-35-9])|46'], '(0$1)'], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[13-9]'], '0$1']], '0'], BA: ['387', '00', '6\\d{8}|(?:[35689]\\d|49|70)\\d{6}', [8, 9], [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['6[1-3]|[7-9]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2-$3', ['[3-5]|6[56]'], '0$1'], ['(\\d{2})(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3 $4', ['6'], '0$1']], '0'], BB: ['1', '011', '(?:246|[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([2-9]\\d{6})$', '246$1', 0, '246'], BD: ['880', '00', '1\\d{9}|2\\d{7,8}|88\\d{4,6}|(?:8[0-79]|9\\d)\\d{4,8}|(?:[346]\\d|[57])\\d{5,8}', [6, 7, 8, 9, 10], [['(\\d{2})(\\d{4,6})', '$1-$2', ['31[5-8]|[459]1'], '0$1'], ['(\\d{3})(\\d{3,7})', '$1-$2', ['3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]'], '0$1'], ['(\\d{4})(\\d{3,6})', '$1-$2', ['[13-9]'], '0$1'], ['(\\d)(\\d{7,8})', '$1-$2', ['2'], '0$1']], '0'], BE: ['32', '00', '4\\d{8}|[1-9]\\d{7}', [8, 9], [['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['(?:80|9)0'], '0$1'], ['(\\d)(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[239]|4[23]'], '0$1'], ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[15-8]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['4'], '0$1']], '0'], BF: ['226', '00', '[025-7]\\d{7}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[025-7]']]]], BG: ['359', '00', '[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}', [6, 7, 8, 9], [['(\\d)(\\d)(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['2'], '0$1'], ['(\\d{3})(\\d{4})', '$1 $2', ['43[1-6]|70[1-9]'], '0$1'], ['(\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['2'], '0$1'], ['(\\d{2})(\\d{3})(\\d{2,3})', '$1 $2 $3', ['[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['(?:70|8)0'], '0$1'], ['(\\d{3})(\\d{3})(\\d{2})', '$1 $2 $3', ['43[1-7]|7'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[48]|9[08]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['9'], '0$1']], '0'], BH: ['973', '00', '[136-9]\\d{7}', [8], [['(\\d{4})(\\d{4})', '$1 $2', ['[13679]|8[047]']]]], BI: ['257', '00', '(?:[267]\\d|31)\\d{6}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2367]']]]], BJ: ['229', '00', '[25689]\\d{7}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[25689]']]]], BL: ['590', '00', '(?:590|(?:69|80)\\d|976)\\d{6}', [9], 0, '0', 0, 0, 0, 0, 0, [['590(?:2[7-9]|5[12]|87)\\d{4}'], ['69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}'], ['80[0-5]\\d{6}'], 0, 0, 0, 0, 0, ['976[01]\\d{5}']]], BM: ['1', '011', '(?:441|[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([2-8]\\d{6})$', '441$1', 0, '441'], BN: ['673', '00', '[2-578]\\d{6}', [7], [['(\\d{3})(\\d{4})', '$1 $2', ['[2-578]']]]], BO: ['591', '00(?:1\\d)?', '(?:[2-467]\\d\\d|8001)\\d{5}', [8, 9], [['(\\d)(\\d{7})', '$1 $2', ['[23]|4[46]']], ['(\\d{8})', '$1', ['[67]']], ['(\\d{3})(\\d{2})(\\d{4})', '$1 $2 $3', ['8']]], '0', 0, '0(1\\d)?'], BQ: ['599', '00', '(?:[34]1|7\\d)\\d{5}', [7], 0, 0, 0, 0, 0, 0, '[347]'], BR: ['55', '00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)', '(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}', [8, 9, 10, 11], [['(\\d{4})(\\d{4})', '$1-$2', ['300|4(?:0[02]|37)', '4(?:02|37)0|[34]00']], ['(\\d{3})(\\d{2,3})(\\d{4})', '$1 $2 $3', ['(?:[358]|90)0'], '0$1'], ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2-$3', ['(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]'], '($1)'], ['(\\d{2})(\\d{5})(\\d{4})', '$1 $2-$3', ['[16][1-9]|[2-57-9]'], '($1)']], '0', 0, '(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?', '$2'], BS: ['1', '011', '(?:242|[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([3-8]\\d{6})$', '242$1', 0, '242'], BT: ['975', '00', '[17]\\d{7}|[2-8]\\d{6}', [7, 8], [['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-68]|7[246]']], ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['1[67]|7']]]], BW: ['267', '00', '(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}', [7, 8, 10], [['(\\d{2})(\\d{5})', '$1 $2', ['90']], ['(\\d{3})(\\d{4})', '$1 $2', ['[24-6]|3[15-79]']], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[37]']], ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['0']], ['(\\d{3})(\\d{4})(\\d{3})', '$1 $2 $3', ['8']]]], BY: ['375', '810', '(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}', [6, 7, 8, 9, 10, 11], [['(\\d{3})(\\d{3})', '$1 $2', ['800'], '8 $1'], ['(\\d{3})(\\d{2})(\\d{2,4})', '$1 $2 $3', ['800'], '8 $1'], ['(\\d{4})(\\d{2})(\\d{3})', '$1 $2-$3', ['1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])', '1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])'], '8 0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2-$3-$4', ['1(?:[56]|7[467])|2[1-3]'], '8 0$1'], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2-$3-$4', ['[1-4]'], '8 0$1'], ['(\\d{3})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['[89]'], '8 $1']], '8', 0, '0|80?', 0, 0, 0, 0, '8~10'], BZ: ['501', '00', '(?:0800\\d|[2-8])\\d{6}', [7, 11], [['(\\d{3})(\\d{4})', '$1-$2', ['[2-8]']], ['(\\d)(\\d{3})(\\d{4})(\\d{3})', '$1-$2-$3-$4', ['0']]]], CA: ['1', '011', '(?:[2-8]\\d|90)\\d{8}', [10], 0, '1', 0, 0, 0, 0, 0, [['(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|74)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}'], [''], ['8(?:00|33|44|55|66|77|88)[2-9]\\d{6}'], ['900[2-9]\\d{6}'], ['52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}'], 0, 0, 0, ['600[2-9]\\d{6}']]], CC: ['61', '001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011', '1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}', [6, 7, 8, 9, 10], 0, '0', 0, '0|([59]\\d{7})$', '8$1', 0, 0, [['8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}', [9]], ['4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}', [9]], ['180(?:0\\d{3}|2)\\d{3}', [7, 10]], ['190[0-26]\\d{6}', [10]], 0, 0, 0, 0, ['14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}', [9]], ['13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}', [6, 8, 10]]], '0011'], CD: ['243', '00', '[189]\\d{8}|[1-68]\\d{6}', [7, 9], [['(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['88'], '0$1'], ['(\\d{2})(\\d{5})', '$1 $2', ['[1-6]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[89]'], '0$1']], '0'], CF: ['236', '00', '(?:[27]\\d{3}|8776)\\d{4}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[278]']]]], CG: ['242', '00', '222\\d{6}|(?:0\\d|80)\\d{7}', [9], [['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['801']], ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['8']], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[02]']]]], CH: ['41', '00', '8\\d{11}|[2-9]\\d{8}', [9], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['8[047]|90'], '0$1'], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2-79]|81'], '0$1'], ['(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4 $5', ['8'], '0$1']], '0'], CI: ['225', '00', '[02]\\d{9}', [10], [['(\\d{2})(\\d{2})(\\d)(\\d{5})', '$1 $2 $3 $4', ['2']], ['(\\d{2})(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3 $4', ['0']]]], CK: ['682', '00', '[2-578]\\d{4}', [5], [['(\\d{2})(\\d{3})', '$1 $2', ['[2-578]']]]], CL: ['56', '(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0', '12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}', [9, 10, 11], [['(\\d{5})(\\d{4})', '$1 $2', ['219', '2196'], '($1)'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['44']], ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['2[1-3]'], '($1)'], ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['9[2-9]']], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])'], '($1)'], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['60|8']], ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['1']], ['(\\d{3})(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3 $4', ['60']]]], CM: ['237', '00', '[26]\\d{8}|88\\d{6,7}', [8, 9], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['88']], ['(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4 $5', ['[26]|88']]]], CN: ['86', '00|1(?:[12]\\d|79)\\d\\d00', '1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}', [7, 8, 9, 10, 11, 12], [['(\\d{2})(\\d{5,6})', '$1 $2', ['(?:10|2[0-57-9])[19]', '(?:10|2[0-57-9])(?:10|9[56])', '(?:10|2[0-57-9])(?:100|9[56])'], '0$1'], ['(\\d{3})(\\d{5,6})', '$1 $2', ['3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]', '(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]', '85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])', '85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['(?:4|80)0']], ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['10|2(?:[02-57-9]|1[1-9])', '10|2(?:[02-57-9]|1[1-9])', '10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])'], '0$1', 1], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]'], '0$1', 1], ['(\\d{3})(\\d{7,8})', '$1 $2', ['9']], ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['80'], '0$1', 1], ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['[3-578]'], '0$1', 1], ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['1[3-9]']], ['(\\d{2})(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3 $4', ['[12]'], '0$1', 1]], '0', 0, '0|(1(?:[12]\\d|79)\\d\\d)', 0, 0, 0, 0, '00'], CO: ['57', '00(?:4(?:[14]4|56)|[579])', '(?:1\\d|3)\\d{9}|[124-8]\\d{7}', [8, 10, 11], [['(\\d)(\\d{7})', '$1 $2', ['[14][2-9]|[25-8]'], '($1)'], ['(\\d{3})(\\d{7})', '$1 $2', ['3']], ['(\\d)(\\d{3})(\\d{7})', '$1-$2-$3', ['1'], '0$1', 0, '$1 $2 $3']], '0', 0, '0([3579]|4(?:[14]4|56))?'], CR: ['506', '00', '(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}', [8, 10], [['(\\d{4})(\\d{4})', '$1 $2', ['[2-7]|8[3-9]']], ['(\\d{3})(\\d{3})(\\d{4})', '$1-$2-$3', ['[89]']]], 0, 0, '(19(?:0[0-2468]|1[09]|20|66|77|99))'], CU: ['53', '119', '[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}', [6, 7, 8, 10], [['(\\d{2})(\\d{4,6})', '$1 $2', ['2[1-4]|[34]'], '(0$1)'], ['(\\d)(\\d{6,7})', '$1 $2', ['7'], '(0$1)'], ['(\\d)(\\d{7})', '$1 $2', ['5'], '0$1'], ['(\\d{3})(\\d{7})', '$1 $2', ['8'], '0$1']], '0'], CV: ['238', '0', '(?:[2-59]\\d\\d|800)\\d{4}', [7], [['(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3', ['[2-589]']]]], CW: ['599', '00', '(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}', [7, 8], [['(\\d{3})(\\d{4})', '$1 $2', ['[3467]']], ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['9[4-8]']]], 0, 0, 0, 0, 0, '[69]'], CX: ['61', '001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011', '1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}', [6, 7, 8, 9, 10], 0, '0', 0, '0|([59]\\d{7})$', '8$1', 0, 0, [['8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}', [9]], ['4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}', [9]], ['180(?:0\\d{3}|2)\\d{3}', [7, 10]], ['190[0-26]\\d{6}', [10]], 0, 0, 0, 0, ['14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}', [9]], ['13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}', [6, 8, 10]]], '0011'], CY: ['357', '00', '(?:[279]\\d|[58]0)\\d{6}', [8], [['(\\d{2})(\\d{6})', '$1 $2', ['[257-9]']]]], CZ: ['420', '00', '(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}', [9], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-8]|9[015-7]']], ['(\\d{2})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['9']], ['(\\d{3})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['9']]]], DE: ['49', '00', '[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:[12]\\d|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[05]\\d|31|[46][1-8])\\d{1,9}', [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [['(\\d{2})(\\d{3,13})', '$1 $2', ['3[02]|40|[68]9'], '0$1'], ['(\\d{3})(\\d{3,12})', '$1 $2', ['2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1', '2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1'], '0$1'], ['(\\d{4})(\\d{2,11})', '$1 $2', ['[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]', '[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]'], '0$1'], ['(\\d{3})(\\d{4})', '$1 $2', ['138'], '0$1'], ['(\\d{5})(\\d{2,10})', '$1 $2', ['3'], '0$1'], ['(\\d{3})(\\d{5,11})', '$1 $2', ['181'], '0$1'], ['(\\d{3})(\\d)(\\d{4,10})', '$1 $2 $3', ['1(?:3|80)|9'], '0$1'], ['(\\d{3})(\\d{7,8})', '$1 $2', ['1[67]'], '0$1'], ['(\\d{3})(\\d{7,12})', '$1 $2', ['8'], '0$1'], ['(\\d{5})(\\d{6})', '$1 $2', ['185', '1850', '18500'], '0$1'], ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['7'], '0$1'], ['(\\d{4})(\\d{7})', '$1 $2', ['18[68]'], '0$1'], ['(\\d{5})(\\d{6})', '$1 $2', ['15[0568]'], '0$1'], ['(\\d{4})(\\d{7})', '$1 $2', ['15[1279]'], '0$1'], ['(\\d{3})(\\d{8})', '$1 $2', ['18'], '0$1'], ['(\\d{3})(\\d{2})(\\d{7,8})', '$1 $2 $3', ['1(?:6[023]|7)'], '0$1'], ['(\\d{4})(\\d{2})(\\d{7})', '$1 $2 $3', ['15[279]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{8})', '$1 $2 $3', ['15'], '0$1']], '0'], DJ: ['253', '00', '(?:2\\d|77)\\d{6}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[27]']]]], DK: ['45', '00', '[2-9]\\d{7}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2-9]']]]], DM: ['1', '011', '(?:[58]\\d\\d|767|900)\\d{7}', [10], 0, '1', 0, '1|([2-7]\\d{6})$', '767$1', 0, '767'], DO: ['1', '011', '(?:[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, 0, 0, 0, '8001|8[024]9'], DZ: ['213', '00', '(?:[1-4]|[5-79]\\d|80)\\d{7}', [8, 9], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[1-4]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['9'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[5-8]'], '0$1']], '0'], EC: ['593', '00', '1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}', [8, 9, 10, 11], [['(\\d)(\\d{3})(\\d{4})', '$1 $2-$3', ['[2-7]'], '(0$1)', 0, '$1-$2-$3'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['9'], '0$1'], ['(\\d{4})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['1']]], '0'], EE: ['372', '00', '8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}', [7, 8, 10], [['(\\d{3})(\\d{4})', '$1 $2', ['[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88', '[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88']], ['(\\d{4})(\\d{3,4})', '$1 $2', ['[45]|8(?:00|[1-49])', '[45]|8(?:00[1-9]|[1-49])']], ['(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3', ['7']], ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['8']]]], EG: ['20', '00', '[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}', [8, 9, 10], [['(\\d)(\\d{7,8})', '$1 $2', ['[23]'], '0$1'], ['(\\d{2})(\\d{6,7})', '$1 $2', ['1[35]|[4-6]|8[2468]|9[235-7]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[189]'], '0$1']], '0'], EH: ['212', '00', '[5-8]\\d{8}', [9], 0, '0', 0, 0, 0, 0, '528[89]'], ER: ['291', '00', '[178]\\d{6}', [7], [['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[178]'], '0$1']], '0'], ES: ['34', '00', '[5-9]\\d{8}', [9], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[89]00']], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[5-9]']]]], ET: ['251', '00', '(?:11|[2-59]\\d)\\d{7}', [9], [['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[1-59]'], '0$1']], '0'], FI: ['358', '00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))', '[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}', [5, 6, 7, 8, 9, 10, 11, 12], [['(\\d)(\\d{4,9})', '$1 $2', ['[2568][1-8]|3(?:0[1-9]|[1-9])|9'], '0$1'], ['(\\d{3})(\\d{3,7})', '$1 $2', ['[12]00|[368]|70[07-9]'], '0$1'], ['(\\d{2})(\\d{4,8})', '$1 $2', ['[1245]|7[135]'], '0$1'], ['(\\d{2})(\\d{6,10})', '$1 $2', ['7'], '0$1']], '0', 0, 0, 0, 0, '1[03-79]|[2-9]', 0, '00'], FJ: ['679', '0(?:0|52)', '45\\d{5}|(?:0800\\d|[235-9])\\d{6}', [7, 11], [['(\\d{3})(\\d{4})', '$1 $2', ['[235-9]|45']], ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['0']]], 0, 0, 0, 0, 0, 0, 0, '00'], FK: ['500', '00', '[2-7]\\d{4}', [5]], FM: ['691', '00', '(?:[39]\\d\\d|820)\\d{4}', [7], [['(\\d{3})(\\d{4})', '$1 $2', ['[389]']]]], FO: ['298', '00', '[2-9]\\d{5}', [6], [['(\\d{6})', '$1', ['[2-9]']]], 0, 0, '(10(?:01|[12]0|88))'], FR: ['33', '00', '[1-9]\\d{8}', [9], [['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8'], '0 $1'], ['(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4 $5', ['[1-79]'], '0$1']], '0'], GA: ['241', '00', '(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}', [7, 8], [['(\\d)(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2-7]'], '0$1'], ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['11|[67]'], '0$1'], ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['0']]], 0, 0, '0(11\\d{6}|6[256]\\d{6}|7[47]\\d{6})', '$1'], GB: ['44', '00', '[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}', [7, 9, 10], [['(\\d{3})(\\d{4})', '$1 $2', ['800', '8001', '80011', '800111', '8001111'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3', ['845', '8454', '84546', '845464'], '0$1'], ['(\\d{3})(\\d{6})', '$1 $2', ['800'], '0$1'], ['(\\d{5})(\\d{4,5})', '$1 $2', ['1(?:38|5[23]|69|76|94)', '1(?:(?:38|69)7|5(?:24|39)|768|946)', '1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)'], '0$1'], ['(\\d{4})(\\d{5,6})', '$1 $2', ['1(?:[2-69][02-9]|[78])'], '0$1'], ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['[25]|7(?:0|6[02-9])', '[25]|7(?:0|6(?:[03-9]|2[356]))'], '0$1'], ['(\\d{4})(\\d{6})', '$1 $2', ['7'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[1389]'], '0$1']], '0', 0, 0, 0, 0, 0, [['(?:1(?:1(?:3(?:[0-58]\\d\\d|73[03])|4(?:[0-5]\\d\\d|69[7-9]|70[059])|(?:5[0-26-9]|6[0-4]|[78][0-49])\\d\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[02]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}', [9, 10]], ['7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}', [10]], ['80[08]\\d{7}|800\\d{6}|8001111'], ['(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d', [7, 10]], ['70\\d{8}', [10]], 0, ['(?:3[0347]|55)\\d{8}', [10]], ['76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}', [10]], ['56\\d{8}', [10]]], 0, ' x'], GD: ['1', '011', '(?:473|[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([2-9]\\d{6})$', '473$1', 0, '473'], GE: ['995', '00', '(?:[3-57]\\d\\d|800)\\d{6}', [9], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['70'], '0$1'], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['32'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[57]']], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[348]'], '0$1']], '0'], GF: ['594', '00', '(?:[56]94|80\\d|976)\\d{6}', [9], [['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[569]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8'], '0$1']], '0'], GG: ['44', '00', '(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?', [7, 9, 10], 0, '0', 0, '0|([25-9]\\d{5})$', '1481$1', 0, 0, [['1481[25-9]\\d{5}', [10]], ['7(?:(?:781|839)\\d|911[17])\\d{5}', [10]], ['80[08]\\d{7}|800\\d{6}|8001111'], ['(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d', [7, 10]], ['70\\d{8}', [10]], 0, ['(?:3[0347]|55)\\d{8}', [10]], ['76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}', [10]], ['56\\d{8}', [10]]]], GH: ['233', '00', '(?:[235]\\d{3}|800)\\d{5}', [8, 9], [['(\\d{3})(\\d{5})', '$1 $2', ['8'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[235]'], '0$1']], '0'], GI: ['350', '00', '(?:[25]\\d\\d|606)\\d{5}', [8], [['(\\d{3})(\\d{5})', '$1 $2', ['2']]]], GL: ['299', '00', '(?:19|[2-689]\\d)\\d{4}', [6], [['(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['19|[2-689]']]]], GM: ['220', '00', '[2-9]\\d{6}', [7], [['(\\d{3})(\\d{4})', '$1 $2', ['[2-9]']]]], GN: ['224', '00', '722\\d{6}|(?:3|6\\d)\\d{7}', [8, 9], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['3']], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[67]']]]], GP: ['590', '00', '(?:590|(?:69|80)\\d|976)\\d{6}', [9], [['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[569]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8'], '0$1']], '0', 0, 0, 0, 0, 0, [['590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}'], ['69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}'], ['80[0-5]\\d{6}'], 0, 0, 0, 0, 0, ['976[01]\\d{5}']]], GQ: ['240', '00', '222\\d{6}|(?:3\\d|55|[89]0)\\d{7}', [9], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[235]']], ['(\\d{3})(\\d{6})', '$1 $2', ['[89]']]]], GR: ['30', '00', '5005000\\d{3}|8\\d{9,10}|(?:[269]\\d|70)\\d{8}', [10, 11], [['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['21|7']], ['(\\d{4})(\\d{6})', '$1 $2', ['2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5']], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[2689]']], ['(\\d{3})(\\d{3})(\\d{5})', '$1 $2 $3', ['8']]]], GT: ['502', '00', '(?:1\\d{3}|[2-7])\\d{7}', [8, 11], [['(\\d{4})(\\d{4})', '$1 $2', ['[2-7]']], ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['1']]]], GU: ['1', '011', '(?:[58]\\d\\d|671|900)\\d{7}', [10], 0, '1', 0, '1|([3-9]\\d{6})$', '671$1', 0, '671'], GW: ['245', '00', '[49]\\d{8}|4\\d{6}', [7, 9], [['(\\d{3})(\\d{4})', '$1 $2', ['40']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[49]']]]], GY: ['592', '001', '(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}', [7], [['(\\d{3})(\\d{4})', '$1 $2', ['[2-46-9]']]]], HK: ['852', '00(?:30|5[09]|[126-9]?)', '8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}', [5, 6, 7, 8, 9, 11], [['(\\d{3})(\\d{2,5})', '$1 $2', ['900', '9003']], ['(\\d{4})(\\d{4})', '$1 $2', ['[2-7]|8[1-4]|9(?:0[1-9]|[1-8])']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['8']], ['(\\d{3})(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['9']]], 0, 0, 0, 0, 0, 0, 0, '00'], HN: ['504', '00', '8\\d{10}|[237-9]\\d{7}', [8, 11], [['(\\d{4})(\\d{4})', '$1-$2', ['[237-9]']]]], HR: ['385', '00', '(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}', [6, 7, 8, 9], [['(\\d{2})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['6[01]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['8'], '0$1'], ['(\\d)(\\d{4})(\\d{3})', '$1 $2 $3', ['1'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[67]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['9'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[2-5]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['8'], '0$1']], '0'], HT: ['509', '00', '[2-489]\\d{7}', [8], [['(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3', ['[2-489]']]]], HU: ['36', '00', '[235-7]\\d{8}|[1-9]\\d{7}', [8, 9], [['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '(06 $1)'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]'], '(06 $1)'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[2-9]'], '06 $1']], '06'], ID: ['62', '00[89]', '(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}', [7, 8, 9, 10, 11, 12, 13], [['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['15']], ['(\\d{2})(\\d{5,9})', '$1 $2', ['2[124]|[36]1'], '(0$1)'], ['(\\d{3})(\\d{5,7})', '$1 $2', ['800'], '0$1'], ['(\\d{3})(\\d{5,8})', '$1 $2', ['[2-79]'], '(0$1)'], ['(\\d{3})(\\d{3,4})(\\d{3})', '$1-$2-$3', ['8[1-35-9]'], '0$1'], ['(\\d{3})(\\d{6,8})', '$1 $2', ['1'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['804'], '0$1'], ['(\\d{3})(\\d)(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['80'], '0$1'], ['(\\d{3})(\\d{4})(\\d{4,5})', '$1-$2-$3', ['8'], '0$1']], '0'], IE: ['353', '00', '(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}', [7, 8, 9, 10], [['(\\d{2})(\\d{5})', '$1 $2', ['2[24-9]|47|58|6[237-9]|9[35-9]'], '(0$1)'], ['(\\d{3})(\\d{5})', '$1 $2', ['[45]0'], '(0$1)'], ['(\\d)(\\d{3,4})(\\d{4})', '$1 $2 $3', ['1'], '(0$1)'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[2569]|4[1-69]|7[14]'], '(0$1)'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['70'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['81'], '(0$1)'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[78]'], '0$1'], ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1']], ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['4'], '(0$1)'], ['(\\d{2})(\\d)(\\d{3})(\\d{4})', '$1 $2 $3 $4', ['8'], '0$1']], '0'], IL: ['972', '0(?:0|1[2-9])', '1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}', [7, 8, 9, 10, 11, 12], [['(\\d{4})(\\d{3})', '$1-$2', ['125']], ['(\\d{4})(\\d{2})(\\d{2})', '$1-$2-$3', ['121']], ['(\\d)(\\d{3})(\\d{4})', '$1-$2-$3', ['[2-489]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1-$2-$3', ['[57]'], '0$1'], ['(\\d{4})(\\d{3})(\\d{3})', '$1-$2-$3', ['12']], ['(\\d{4})(\\d{6})', '$1-$2', ['159']], ['(\\d)(\\d{3})(\\d{3})(\\d{3})', '$1-$2-$3-$4', ['1[7-9]']], ['(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})', '$1-$2 $3-$4', ['15']]], '0'], IM: ['44', '00', '1624\\d{6}|(?:[3578]\\d|90)\\d{8}', [10], 0, '0', 0, '0|([25-8]\\d{5})$', '1624$1', 0, '74576|(?:16|7[56])24'], IN: ['91', '00', '(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}', [8, 9, 10, 11, 12, 13], [['(\\d{8})', '$1', ['5(?:0|2[23]|3[03]|[67]1|88)', '5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)', '5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)'], 0, 1], ['(\\d{4})(\\d{4,5})', '$1 $2', ['180', '1800'], 0, 1], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['140'], 0, 1], ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['11|2[02]|33|4[04]|79[1-7]|80[2-46]', '11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])', '11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])'], '0$1', 1], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]', '1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]', '1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]'], '0$1', 1], ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807', '1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]', '1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]'], '0$1', 1], ['(\\d{5})(\\d{5})', '$1 $2', ['[6-9]'], '0$1', 1], ['(\\d{4})(\\d{2,4})(\\d{4})', '$1 $2 $3', ['1(?:6|8[06])', '1(?:6|8[06]0)'], 0, 1], ['(\\d{4})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['18'], 0, 1]], '0'], IO: ['246', '00', '3\\d{6}', [7], [['(\\d{3})(\\d{4})', '$1 $2', ['3']]]], IQ: ['964', '00', '(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}', [8, 9, 10], [['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[2-6]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '0$1']], '0'], IR: ['98', '00', '[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}', [4, 5, 6, 7, 10], [['(\\d{4,5})', '$1', ['96'], '0$1'], ['(\\d{2})(\\d{4,5})', '$1 $2', ['(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['9'], '0$1'], ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['[1-8]'], '0$1']], '0'], IS: ['354', '00|1(?:0(?:01|[12]0)|100)', '(?:38\\d|[4-9])\\d{6}', [7, 9], [['(\\d{3})(\\d{4})', '$1 $2', ['[4-9]']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['3']]], 0, 0, 0, 0, 0, 0, 0, '00'], IT: ['39', '00', '0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}', [6, 7, 8, 9, 10, 11], [['(\\d{2})(\\d{4,6})', '$1 $2', ['0[26]']], ['(\\d{3})(\\d{3,6})', '$1 $2', ['0[13-57-9][0159]|8(?:03|4[17]|9[245])', '0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))']], ['(\\d{4})(\\d{2,6})', '$1 $2', ['0(?:[13-579][2-46-8]|8[236-8])']], ['(\\d{4})(\\d{4})', '$1 $2', ['894']], ['(\\d{2})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['0[26]|5']], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['1[4679]|[38]']], ['(\\d{3})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['0[13-57-9][0159]']], ['(\\d{2})(\\d{4})(\\d{5})', '$1 $2 $3', ['0[26]']], ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['0']], ['(\\d{3})(\\d{4})(\\d{4,5})', '$1 $2 $3', ['3']]], 0, 0, 0, 0, 0, 0, [['0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}'], ['3[1-9]\\d{8}|3[2-9]\\d{7}', [9, 10]], ['80(?:0\\d{3}|3)\\d{3}', [6, 9]], ['(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}', [6, 8, 9, 10]], ['1(?:78\\d|99)\\d{6}', [9, 10]], 0, 0, 0, ['55\\d{8}', [10]], ['84(?:[08]\\d{3}|[17])\\d{3}', [6, 9]]]], JE: ['44', '00', '1534\\d{6}|(?:[3578]\\d|90)\\d{8}', [10], 0, '0', 0, '0|([0-24-8]\\d{5})$', '1534$1', 0, 0, [['1534[0-24-8]\\d{5}'], ['7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}'], ['80(?:07(?:35|81)|8901)\\d{4}'], ['(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}'], ['701511\\d{4}'], 0, ['(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}'], ['76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}'], ['56\\d{8}']]], JM: ['1', '011', '(?:[58]\\d\\d|658|900)\\d{7}', [10], 0, '1', 0, 0, 0, 0, '658|876'], JO: ['962', '00', '(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}', [8, 9], [['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[2356]|87'], '(0$1)'], ['(\\d{3})(\\d{5,6})', '$1 $2', ['[89]'], '0$1'], ['(\\d{2})(\\d{7})', '$1 $2', ['70'], '0$1'], ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['7'], '0$1']], '0'], JP: ['81', '010', '00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}', [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [['(\\d{3})(\\d{3})(\\d{3})', '$1-$2-$3', ['(?:12|57|99)0'], '0$1'], ['(\\d{4})(\\d)(\\d{4})', '$1-$2-$3', ['1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])', '1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]', '1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1-$2-$3', ['60'], '0$1'], ['(\\d)(\\d{4})(\\d{4})', '$1-$2-$3', ['[36]|4(?:2[09]|7[01])', '[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1-$2-$3', ['1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])', '1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]', '1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]', '1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{4})', '$1-$2-$3', ['[14]|[289][2-9]|5[3-9]|7[2-4679]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1-$2-$3', ['800'], '0$1'], ['(\\d{2})(\\d{4})(\\d{4})', '$1-$2-$3', ['[257-9]'], '0$1']], '0'], KE: ['254', '000', '(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}', [7, 8, 9, 10], [['(\\d{2})(\\d{5,7})', '$1 $2', ['[24-6]'], '0$1'], ['(\\d{3})(\\d{6})', '$1 $2', ['[17]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[89]'], '0$1']], '0'], KG: ['996', '00', '8\\d{9}|(?:[235-8]\\d|99)\\d{7}', [9, 10], [['(\\d{4})(\\d{5})', '$1 $2', ['3(?:1[346]|[24-79])'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[235-79]|88'], '0$1'], ['(\\d{3})(\\d{3})(\\d)(\\d{2,3})', '$1 $2 $3 $4', ['8'], '0$1']], '0'], KH: ['855', '00[14-9]', '1\\d{9}|[1-9]\\d{7,8}', [8, 9, 10], [['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[1-9]'], '0$1'], ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1']]], '0'], KI: ['686', '00', '(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}', [5, 8], 0, '0'], KM: ['269', '00', '[3478]\\d{6}', [7], [['(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3', ['[3478]']]]], KN: ['1', '011', '(?:[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([2-7]\\d{6})$', '869$1', 0, '869'], KP: ['850', '00|99', '85\\d{6}|(?:19\\d|[2-7])\\d{7}', [8, 10], [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['8'], '0$1'], ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[2-7]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1']], '0'], KR: ['82', '00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))', '00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}', [5, 6, 8, 9, 10, 11, 12, 13, 14], [['(\\d{2})(\\d{3,4})', '$1-$2', ['(?:3[1-3]|[46][1-4]|5[1-5])1'], '0$1'], ['(\\d{4})(\\d{4})', '$1-$2', ['1']], ['(\\d)(\\d{3,4})(\\d{4})', '$1-$2-$3', ['2'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1-$2-$3', ['60|8'], '0$1'], ['(\\d{2})(\\d{3,4})(\\d{4})', '$1-$2-$3', ['[1346]|5[1-5]'], '0$1'], ['(\\d{2})(\\d{4})(\\d{4})', '$1-$2-$3', ['[57]'], '0$1'], ['(\\d{2})(\\d{5})(\\d{4})', '$1-$2-$3', ['5'], '0$1']], '0', 0, '0(8(?:[1-46-8]|5\\d\\d))?'], KW: ['965', '00', '(?:18|[2569]\\d\\d)\\d{5}', [7, 8], [['(\\d{4})(\\d{3,4})', '$1 $2', ['[169]|2(?:[235]|4[1-35-9])|52']], ['(\\d{3})(\\d{5})', '$1 $2', ['[25]']]]], KY: ['1', '011', '(?:345|[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([2-9]\\d{6})$', '345$1', 0, '345'], KZ: ['7', '810', '33622\\d{5}|(?:7\\d|80)\\d{8}', [10], 0, '8', 0, 0, 0, 0, '33|7', 0, '8~10'], LA: ['856', '00', '[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}', [8, 9, 10], [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['2[13]|3[14]|[4-8]'], '0$1'], ['(\\d{2})(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3 $4', ['30[013-9]'], '0$1'], ['(\\d{2})(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['[23]'], '0$1']], '0'], LB: ['961', '00', '[27-9]\\d{7}|[13-9]\\d{6}', [7, 8], [['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[27-9]']]], '0'], LC: ['1', '011', '(?:[58]\\d\\d|758|900)\\d{7}', [10], 0, '1', 0, '1|([2-8]\\d{6})$', '758$1', 0, '758'], LI: ['423', '00', '90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}', [7, 9], [['(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3', ['[237-9]']], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['69']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['6']]], '0', 0, '0|(1001)'], LK: ['94', '00', '[1-9]\\d{8}', [9], [['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[1-689]'], '0$1']], '0'], LR: ['231', '00', '(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}', [7, 8, 9], [['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[4-6]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['2'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[3578]'], '0$1']], '0'], LS: ['266', '00', '(?:[256]\\d\\d|800)\\d{5}', [8], [['(\\d{4})(\\d{4})', '$1 $2', ['[2568]']]]], LT: ['370', '00', '(?:[3469]\\d|52|[78]0)\\d{6}', [8], [['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['52[0-7]'], '(8-$1)', 1], ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['[7-9]'], '8 $1', 1], ['(\\d{2})(\\d{6})', '$1 $2', ['37|4(?:[15]|6[1-8])'], '(8-$1)', 1], ['(\\d{3})(\\d{5})', '$1 $2', ['[3-6]'], '(8-$1)', 1]], '8', 0, '[08]'], LU: ['352', '00', '35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}', [4, 5, 6, 7, 8, 9, 10, 11], [['(\\d{2})(\\d{3})', '$1 $2', ['2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])']], ['(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])']], ['(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['20[2-689]']], ['(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})', '$1 $2 $3 $4', ['2(?:[0367]|4[3-8])']], ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['80[01]|90[015]']], ['(\\d{2})(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3 $4', ['20']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['6']], ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})', '$1 $2 $3 $4 $5', ['2(?:[0367]|4[3-8])']], ['(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})', '$1 $2 $3 $4', ['[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]']]], 0, 0, '(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)'], LV: ['371', '00', '(?:[268]\\d|90)\\d{6}', [8], [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[269]|8[01]']]]], LY: ['218', '00', '[2-9]\\d{8}', [9], [['(\\d{2})(\\d{7})', '$1-$2', ['[2-9]'], '0$1']], '0'], MA: ['212', '00', '[5-8]\\d{8}', [9], [['(\\d{5})(\\d{4})', '$1-$2', ['5(?:29|38)', '5(?:29|38)[89]', '5(?:29|38)[89]0'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['5[45]'], '0$1'], ['(\\d{4})(\\d{5})', '$1-$2', ['5(?:2[2-489]|3[5-9]|9)|892', '5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892'], '0$1'], ['(\\d{2})(\\d{7})', '$1-$2', ['8'], '0$1'], ['(\\d{3})(\\d{6})', '$1-$2', ['[5-7]'], '0$1']], '0', 0, 0, 0, 0, 0, [['5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[015-7]\\d|2[02-9]|3[0-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}'], ['(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0\\d|10|6[1267]|7[0-57]))\\d{6}'], ['80\\d{7}'], ['89\\d{7}'], 0, 0, 0, 0, ['592(?:4[0-2]|93)\\d{4}']]], MC: ['377', '00', '(?:[3489]|6\\d)\\d{7}', [8, 9], [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['4'], '0$1'], ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[389]']], ['(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4 $5', ['6'], '0$1']], '0'], MD: ['373', '00', '(?:[235-7]\\d|[89]0)\\d{6}', [8], [['(\\d{3})(\\d{5})', '$1 $2', ['[89]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['22|3'], '0$1'], ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['[25-7]'], '0$1']], '0'], ME: ['382', '00', '(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}', [8, 9], [['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[2-9]'], '0$1']], '0'], MF: ['590', '00', '(?:590|(?:69|80)\\d|976)\\d{6}', [9], 0, '0', 0, 0, 0, 0, 0, [['590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}'], ['69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}'], ['80[0-5]\\d{6}'], 0, 0, 0, 0, 0, ['976[01]\\d{5}']]], MG: ['261', '00', '[23]\\d{8}', [9], [['(\\d{2})(\\d{2})(\\d{3})(\\d{2})', '$1 $2 $3 $4', ['[23]'], '0$1']], '0', 0, '0|([24-9]\\d{6})$', '20$1'], MH: ['692', '011', '329\\d{4}|(?:[256]\\d|45)\\d{5}', [7], [['(\\d{3})(\\d{4})', '$1-$2', ['[2-6]']]], '1'], MK: ['389', '00', '[2-578]\\d{7}', [8], [['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['2'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[347]'], '0$1'], ['(\\d{3})(\\d)(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[58]'], '0$1']], '0'], ML: ['223', '00', '[24-9]\\d{7}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[24-9]']]]], MM: ['95', '00', '1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}', [6, 7, 8, 9, 10], [['(\\d)(\\d{2})(\\d{3})', '$1 $2 $3', ['16|2'], '0$1'], ['(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]'], '0$1'], ['(\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[12]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[4-7]|8[1-35]'], '0$1'], ['(\\d)(\\d{3})(\\d{4,6})', '$1 $2 $3', ['9(?:2[0-4]|[35-9]|4[137-9])'], '0$1'], ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['2'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8'], '0$1'], ['(\\d)(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['92'], '0$1'], ['(\\d)(\\d{5})(\\d{4})', '$1 $2 $3', ['9'], '0$1']], '0'], MN: ['976', '001', '[12]\\d{7,9}|[57-9]\\d{7}', [8, 9, 10], [['(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3', ['[12]1'], '0$1'], ['(\\d{4})(\\d{4})', '$1 $2', ['[57-9]']], ['(\\d{3})(\\d{5,6})', '$1 $2', ['[12]2[1-3]'], '0$1'], ['(\\d{4})(\\d{5,6})', '$1 $2', ['[12](?:27|3[2-8]|4[2-68]|5[1-4689])', '[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]'], '0$1'], ['(\\d{5})(\\d{4,5})', '$1 $2', ['[12]'], '0$1']], '0'], MO: ['853', '00', '(?:28|[68]\\d)\\d{6}', [8], [['(\\d{4})(\\d{4})', '$1 $2', ['[268]']]]], MP: ['1', '011', '[58]\\d{9}|(?:67|90)0\\d{7}', [10], 0, '1', 0, '1|([2-9]\\d{6})$', '670$1', 0, '670'], MQ: ['596', '00', '(?:69|80)\\d{7}|(?:59|97)6\\d{6}', [9], [['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[569]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8'], '0$1']], '0'], MR: ['222', '00', '(?:[2-4]\\d\\d|800)\\d{5}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2-48]']]]], MS: ['1', '011', '(?:[58]\\d\\d|664|900)\\d{7}', [10], 0, '1', 0, '1|([34]\\d{6})$', '664$1', 0, '664'], MT: ['356', '00', '3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}', [8], [['(\\d{4})(\\d{4})', '$1 $2', ['[2357-9]']]]], MU: ['230', '0(?:0|[24-7]0|3[03])', '(?:[2-468]|5\\d)\\d{6}', [7, 8], [['(\\d{3})(\\d{4})', '$1 $2', ['[2-46]|8[013]']], ['(\\d{4})(\\d{4})', '$1 $2', ['5']]], 0, 0, 0, 0, 0, 0, 0, '020'], MV: ['960', '0(?:0|19)', '(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}', [7, 10], [['(\\d{3})(\\d{4})', '$1-$2', ['[3467]|9[13-9]']], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[89]']]], 0, 0, 0, 0, 0, 0, 0, '00'], MW: ['265', '00', '1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}', [7, 9], [['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['1[2-9]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['2'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[137-9]'], '0$1']], '0'], MX: ['52', '0[09]', '(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}', [10, 11], [['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['33|5[56]|81'], 0, 1], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[2-9]'], 0, 1], ['(\\d)(\\d{2})(\\d{4})(\\d{4})', '$2 $3 $4', ['1(?:33|5[56]|81)'], 0, 1], ['(\\d)(\\d{3})(\\d{3})(\\d{4})', '$2 $3 $4', ['1'], 0, 1]], '01', 0, '0(?:[12]|4[45])|1', 0, 0, 0, 0, '00'], MY: ['60', '00', '1\\d{8,9}|(?:3\\d|[4-9])\\d{7}', [8, 9, 10], [['(\\d)(\\d{3})(\\d{4})', '$1-$2 $3', ['[4-79]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1-$2 $3', ['1(?:[02469]|[378][1-9])|8'], '0$1'], ['(\\d)(\\d{4})(\\d{4})', '$1-$2 $3', ['3'], '0$1'], ['(\\d)(\\d{3})(\\d{2})(\\d{4})', '$1-$2-$3-$4', ['1[36-8]']], ['(\\d{3})(\\d{3})(\\d{4})', '$1-$2 $3', ['15'], '0$1'], ['(\\d{2})(\\d{4})(\\d{4})', '$1-$2 $3', ['1'], '0$1']], '0'], MZ: ['258', '00', '(?:2|8\\d)\\d{7}', [8, 9], [['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['2|8[2-79]']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['8']]]], NA: ['264', '00', '[68]\\d{7,8}', [8, 9], [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['88'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['6'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['87'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['8'], '0$1']], '0'], NC: ['687', '00', '[2-57-9]\\d{5}', [6], [['(\\d{2})(\\d{2})(\\d{2})', '$1.$2.$3', ['[2-57-9]']]]], NE: ['227', '00', '[027-9]\\d{7}', [8], [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['08']], ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[089]|2[013]|7[04]']]]], NF: ['672', '00', '[13]\\d{5}', [6], [['(\\d{2})(\\d{4})', '$1 $2', ['1[0-3]']], ['(\\d)(\\d{5})', '$1 $2', ['[13]']]], 0, 0, '([0-258]\\d{4})$', '3$1'], NG: ['234', '009', '(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}', [7, 8, 10, 11, 12, 13, 14], [['(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['78'], '0$1'], ['(\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[12]|9(?:0[3-9]|[1-9])'], '0$1'], ['(\\d{2})(\\d{3})(\\d{2,3})', '$1 $2 $3', ['[3-7]|8[2-9]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[7-9]'], '0$1'], ['(\\d{3})(\\d{4})(\\d{4,5})', '$1 $2 $3', ['[78]'], '0$1'], ['(\\d{3})(\\d{5})(\\d{5,6})', '$1 $2 $3', ['[78]'], '0$1']], '0'], NI: ['505', '00', '(?:1800|[25-8]\\d{3})\\d{4}', [8], [['(\\d{4})(\\d{4})', '$1 $2', ['[125-8]']]]], NL: ['31', '00', '(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}', [5, 6, 7, 8, 9, 10], [['(\\d{3})(\\d{4,7})', '$1 $2', ['[89]0'], '0$1'], ['(\\d{2})(\\d{7})', '$1 $2', ['66'], '0$1'], ['(\\d)(\\d{8})', '$1 $2', ['6'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['1[16-8]|2[259]|3[124]|4[17-9]|5[124679]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[1-57-9]'], '0$1']], '0'], NO: ['47', '00', '(?:0|[2-9]\\d{3})\\d{4}', [5, 8], [['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['[489]|59']], ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[235-7]']]], 0, 0, 0, 0, 0, '[02-689]|7[0-8]'], NP: ['977', '00', '(?:1\\d|9)\\d{9}|[1-9]\\d{7}', [8, 10, 11], [['(\\d)(\\d{7})', '$1-$2', ['1[2-6]'], '0$1'], ['(\\d{2})(\\d{6})', '$1-$2', ['1[01]|[2-8]|9(?:[1-579]|6[2-6])'], '0$1'], ['(\\d{3})(\\d{7})', '$1-$2', ['9']]], '0'], NR: ['674', '00', '(?:444|(?:55|8\\d)\\d|666)\\d{4}', [7], [['(\\d{3})(\\d{4})', '$1 $2', ['[4-68]']]]], NU: ['683', '00', '(?:[47]|888\\d)\\d{3}', [4, 7], [['(\\d{3})(\\d{4})', '$1 $2', ['8']]]], NZ: ['64', '0(?:0|161)', '[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}', [5, 6, 7, 8, 9, 10], [['(\\d{2})(\\d{3,8})', '$1 $2', ['8[1-579]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['50[036-8]|[89]0', '50(?:[0367]|88)|[89]0'], '0$1'], ['(\\d)(\\d{3})(\\d{4})', '$1-$2 $3', ['24|[346]|7[2-57-9]|9[2-9]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['2(?:10|74)|[59]|80'], '0$1'], ['(\\d{2})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['1|2[028]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,5})', '$1 $2 $3', ['2(?:[169]|7[0-35-9])|7|86'], '0$1']], '0', 0, 0, 0, 0, 0, 0, '00'], OM: ['968', '00', '(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}', [7, 8, 9], [['(\\d{3})(\\d{4,6})', '$1 $2', ['[58]']], ['(\\d{2})(\\d{6})', '$1 $2', ['2']], ['(\\d{4})(\\d{4})', '$1 $2', ['[179]']]]], PA: ['507', '00', '8\\d{9}|[68]\\d{7}|[1-57-9]\\d{6}', [7, 8, 10], [['(\\d{3})(\\d{4})', '$1-$2', ['[1-57-9]']], ['(\\d{4})(\\d{4})', '$1-$2', ['[68]']], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8']]]], PE: ['51', '19(?:1[124]|77|90)00', '(?:[14-8]|9\\d)\\d{7}', [8, 9], [['(\\d{3})(\\d{5})', '$1 $2', ['80'], '(0$1)'], ['(\\d)(\\d{7})', '$1 $2', ['1'], '(0$1)'], ['(\\d{2})(\\d{6})', '$1 $2', ['[4-8]'], '(0$1)'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['9']]], '0', 0, 0, 0, 0, 0, 0, 0, ' Anexo '], PF: ['689', '00', '4\\d{5}(?:\\d{2})?|8\\d{7,8}', [6, 8, 9], [['(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['44']], ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['4|8[7-9]']], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8']]]], PG: ['675', '00|140[1-3]', '(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}', [7, 8], [['(\\d{3})(\\d{4})', '$1 $2', ['18|[2-69]|85']], ['(\\d{4})(\\d{4})', '$1 $2', ['[78]']]], 0, 0, 0, 0, 0, 0, 0, '00'], PH: ['63', '00', '1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}', [6, 8, 9, 10, 11, 12, 13], [['(\\d)(\\d{5})', '$1 $2', ['2'], '(0$1)'], ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['2'], '(0$1)'], ['(\\d{4})(\\d{4,6})', '$1 $2', ['3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2', '3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))'], '(0$1)'], ['(\\d{5})(\\d{4})', '$1 $2', ['346|4(?:27|9[35])|883', '3469|4(?:279|9(?:30|56))|8834'], '(0$1)'], ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['2'], '(0$1)'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[3-7]|8[2-8]'], '(0$1)'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[89]'], '0$1'], ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['1']], ['(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})', '$1 $2 $3 $4', ['1']]], '0'], PK: ['92', '00', '122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}', [8, 9, 10, 11, 12], [['(\\d{3})(\\d{3})(\\d{2,7})', '$1 $2 $3', ['[89]0'], '0$1'], ['(\\d{4})(\\d{5})', '$1 $2', ['1']], ['(\\d{3})(\\d{6,7})', '$1 $2', ['2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])', '9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]'], '(0$1)'], ['(\\d{2})(\\d{7,8})', '$1 $2', ['(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]'], '(0$1)'], ['(\\d{5})(\\d{5})', '$1 $2', ['58'], '(0$1)'], ['(\\d{3})(\\d{7})', '$1 $2', ['3'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91'], '(0$1)'], ['(\\d{3})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['[24-9]'], '(0$1)']], '0'], PL: ['48', '00', '6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?', [6, 7, 8, 9, 10], [['(\\d{5})', '$1', ['19']], ['(\\d{3})(\\d{3})', '$1 $2', ['11|64']], ['(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1', '(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19']], ['(\\d{3})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['64']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)']], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['1[2-8]|[2-7]|8[1-79]|9[145]']], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['8']]]], PM: ['508', '00', '(?:[45]|80\\d\\d)\\d{5}', [6, 9], [['(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['[45]'], '0$1'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8'], '0$1']], '0'], PR: ['1', '011', '(?:[589]\\d\\d|787)\\d{7}', [10], 0, '1', 0, 0, 0, 0, '787|939'], PS: ['970', '00', '[2489]2\\d{6}|(?:1\\d|5)\\d{8}', [8, 9, 10], [['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[2489]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['5'], '0$1'], ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1']]], '0'], PT: ['351', '00', '1693\\d{5}|(?:[26-9]\\d|30)\\d{7}', [9], [['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['2[12]']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['16|[236-9]']]]], PW: ['680', '01[12]', '(?:[24-8]\\d\\d|345|900)\\d{4}', [7], [['(\\d{3})(\\d{4})', '$1 $2', ['[2-9]']]]], PY: ['595', '00', '59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}', [6, 7, 8, 9, 10, 11], [['(\\d{3})(\\d{3,6})', '$1 $2', ['[2-9]0'], '0$1'], ['(\\d{2})(\\d{5})', '$1 $2', ['[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]'], '(0$1)'], ['(\\d{3})(\\d{4,5})', '$1 $2', ['2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85'], '(0$1)'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]'], '(0$1)'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['87']], ['(\\d{3})(\\d{6})', '$1 $2', ['9(?:[5-79]|8[1-6])'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-8]'], '0$1'], ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['9']]], '0'], QA: ['974', '00', '[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}', [7, 8], [['(\\d{3})(\\d{4})', '$1 $2', ['2[126]|8']], ['(\\d{4})(\\d{4})', '$1 $2', ['[2-7]']]]], RE: ['262', '00', '9769\\d{5}|(?:26|[68]\\d)\\d{7}', [9], [['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2689]'], '0$1']], '0', 0, 0, 0, 0, '26[23]|69|[89]'], RO: ['40', '00', '(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}', [6, 9], [['(\\d{3})(\\d{3})', '$1 $2', ['2[3-6]', '2[3-6]\\d9'], '0$1'], ['(\\d{2})(\\d{4})', '$1 $2', ['219|31'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[23]1'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[237-9]'], '0$1']], '0', 0, 0, 0, 0, 0, 0, 0, ' int '], RS: ['381', '00', '38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}', [6, 7, 8, 9, 10, 11, 12], [['(\\d{3})(\\d{3,9})', '$1 $2', ['(?:2[389]|39)0|[7-9]'], '0$1'], ['(\\d{2})(\\d{5,10})', '$1 $2', ['[1-36]'], '0$1']], '0'], RU: ['7', '810', '[347-9]\\d{9}', [10], [['(\\d{4})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['7(?:1[0-8]|2[1-9])', '7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))', '7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2'], '8 ($1)', 1], ['(\\d{5})(\\d)(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['7(?:1[0-68]|2[1-9])', '7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))', '7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]'], '8 ($1)', 1], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '8 ($1)', 1], ['(\\d{3})(\\d{3})(\\d{2})(\\d{2})', '$1 $2-$3-$4', ['[3489]'], '8 ($1)', 1]], '8', 0, 0, 0, 0, '3[04-689]|[489]', 0, '8~10'], RW: ['250', '00', '(?:06|[27]\\d\\d|[89]00)\\d{6}', [8, 9], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['0']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[7-9]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['2']]], '0'], SA: ['966', '00', '92\\d{7}|(?:[15]|8\\d)\\d{8}', [9, 10], [['(\\d{4})(\\d{5})', '$1 $2', ['9']], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['5'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['81'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8']]], '0'], SB: ['677', '0[01]', '(?:[1-6]|[7-9]\\d\\d)\\d{4}', [5, 7], [['(\\d{2})(\\d{5})', '$1 $2', ['7|8[4-9]|9(?:[1-8]|9[0-8])']]]], SC: ['248', '010|0[0-2]', '8000\\d{3}|(?:[249]\\d|64)\\d{5}', [7], [['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[246]|9[57]']]], 0, 0, 0, 0, 0, 0, 0, '00'], SD: ['249', '00', '[19]\\d{8}', [9], [['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[19]'], '0$1']], '0'], SE: ['46', '00', '(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}', [6, 7, 8, 9, 10], [['(\\d{2})(\\d{2,3})(\\d{2})', '$1-$2 $3', ['20'], '0$1', 0, '$1 $2 $3'], ['(\\d{3})(\\d{4})', '$1-$2', ['9(?:00|39|44)'], '0$1', 0, '$1 $2'], ['(\\d{2})(\\d{3})(\\d{2})', '$1-$2 $3', ['[12][136]|3[356]|4[0246]|6[03]|90[1-9]'], '0$1', 0, '$1 $2 $3'], ['(\\d)(\\d{2,3})(\\d{2})(\\d{2})', '$1-$2 $3 $4', ['8'], '0$1', 0, '$1 $2 $3 $4'], ['(\\d{3})(\\d{2,3})(\\d{2})', '$1-$2 $3', ['1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])'], '0$1', 0, '$1 $2 $3'], ['(\\d{3})(\\d{2,3})(\\d{3})', '$1-$2 $3', ['9(?:00|39|44)'], '0$1', 0, '$1 $2 $3'], ['(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})', '$1-$2 $3 $4', ['1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]'], '0$1', 0, '$1 $2 $3 $4'], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1-$2 $3 $4', ['10|7'], '0$1', 0, '$1 $2 $3 $4'], ['(\\d)(\\d{3})(\\d{3})(\\d{2})', '$1-$2 $3 $4', ['8'], '0$1', 0, '$1 $2 $3 $4'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1-$2 $3 $4', ['[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])'], '0$1', 0, '$1 $2 $3 $4'], ['(\\d{3})(\\d{2})(\\d{2})(\\d{3})', '$1-$2 $3 $4', ['9'], '0$1', 0, '$1 $2 $3 $4'], ['(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1-$2 $3 $4 $5', ['[26]'], '0$1', 0, '$1 $2 $3 $4 $5']], '0'], SG: ['65', '0[0-3]\\d', '(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}', [8, 10, 11], [['(\\d{4})(\\d{4})', '$1 $2', ['[369]|8(?:0[1-4]|[1-9])']], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8']], ['(\\d{4})(\\d{4})(\\d{3})', '$1 $2 $3', ['7']], ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['1']]]], SH: ['290', '00', '(?:[256]\\d|8)\\d{3}', [4, 5], 0, 0, 0, 0, 0, 0, '[256]'], SI: ['386', '00|10(?:22|66|88|99)', '[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}', [5, 6, 7, 8], [['(\\d{2})(\\d{3,6})', '$1 $2', ['8[09]|9'], '0$1'], ['(\\d{3})(\\d{5})', '$1 $2', ['59|8'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[37][01]|4[0139]|51|6'], '0$1'], ['(\\d)(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[1-57]'], '(0$1)']], '0', 0, 0, 0, 0, 0, 0, '00'], SJ: ['47', '00', '0\\d{4}|(?:[489]\\d|[57]9)\\d{6}', [5, 8], 0, 0, 0, 0, 0, 0, '79'], SK: ['421', '00', '[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}', [6, 7, 9], [['(\\d)(\\d{2})(\\d{3,4})', '$1 $2 $3', ['21'], '0$1'], ['(\\d{2})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['[3-5][1-8]1', '[3-5][1-8]1[67]'], '0$1'], ['(\\d)(\\d{3})(\\d{3})(\\d{2})', '$1/$2 $3 $4', ['2'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[689]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1/$2 $3 $4', ['[3-5]'], '0$1']], '0'], SL: ['232', '00', '(?:[237-9]\\d|66)\\d{6}', [8], [['(\\d{2})(\\d{6})', '$1 $2', ['[236-9]'], '(0$1)']], '0'], SM: ['378', '00', '(?:0549|[5-7]\\d)\\d{6}', [8, 10], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[5-7]']], ['(\\d{4})(\\d{6})', '$1 $2', ['0']]], 0, 0, '([89]\\d{5})$', '0549$1'], SN: ['221', '00', '(?:[378]\\d{4}|93330)\\d{4}', [9], [['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8']], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[379]']]]], SO: ['252', '00', '[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}', [6, 7, 8, 9], [['(\\d{2})(\\d{4})', '$1 $2', ['8[125]']], ['(\\d{6})', '$1', ['[134]']], ['(\\d)(\\d{6})', '$1 $2', ['[15]|2[0-79]|3[0-46-8]|4[0-7]']], ['(\\d)(\\d{7})', '$1 $2', ['24|[67]']], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[3478]|64|90']], ['(\\d{2})(\\d{5,7})', '$1 $2', ['1|28|6[1-35-9]|9[2-9]']]], '0'], SR: ['597', '00', '(?:[2-5]|68|[78]\\d)\\d{5}', [6, 7], [['(\\d{2})(\\d{2})(\\d{2})', '$1-$2-$3', ['56']], ['(\\d{3})(\\d{3})', '$1-$2', ['[2-5]']], ['(\\d{3})(\\d{4})', '$1-$2', ['[6-8]']]]], SS: ['211', '00', '[19]\\d{8}', [9], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[19]'], '0$1']], '0'], ST: ['239', '00', '(?:22|9\\d)\\d{5}', [7], [['(\\d{3})(\\d{4})', '$1 $2', ['[29]']]]], SV: ['503', '00', '[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?', [7, 8, 11], [['(\\d{3})(\\d{4})', '$1 $2', ['[89]']], ['(\\d{4})(\\d{4})', '$1 $2', ['[267]']], ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['[89]']]]], SX: ['1', '011', '7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|(5\\d{6})$', '721$1', 0, '721'], SY: ['963', '00', '[1-39]\\d{8}|[1-5]\\d{7}', [8, 9], [['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[1-5]'], '0$1', 1], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['9'], '0$1', 1]], '0'], SZ: ['268', '00', '0800\\d{4}|(?:[237]\\d|900)\\d{6}', [8, 9], [['(\\d{4})(\\d{4})', '$1 $2', ['[0237]']], ['(\\d{5})(\\d{4})', '$1 $2', ['9']]]], TA: ['290', '00', '8\\d{3}', [4], 0, 0, 0, 0, 0, 0, '8'], TC: ['1', '011', '(?:[58]\\d\\d|649|900)\\d{7}', [10], 0, '1', 0, '1|([2-479]\\d{6})$', '649$1', 0, '649'], TD: ['235', '00|16', '(?:22|[69]\\d|77)\\d{6}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2679]']]], 0, 0, 0, 0, 0, 0, 0, '00'], TG: ['228', '00', '[279]\\d{7}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[279]']]]], TH: ['66', '00[1-9]', '1\\d{9}|[1689]\\d{8}|[1-57]\\d{7}', [8, 9, 10], [['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['2'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[13-9]'], '0$1'], ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1']]], '0'], TJ: ['992', '810', '(?:[02]0|11|[3-57-9]\\d)\\d{7}', [9], [['(\\d{6})(\\d)(\\d{2})', '$1 $2 $3', ['331', '3317'], 0, 1], ['(\\d{3})(\\d{2})(\\d{4})', '$1 $2 $3', ['[34]7|91[78]'], 0, 1], ['(\\d{4})(\\d)(\\d{4})', '$1 $2 $3', ['3[1-5]'], 0, 1], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[02-57-9]|11'], 0, 1]], '8', 0, 0, 0, 0, 0, 0, '8~10'], TK: ['690', '00', '[2-47]\\d{3,6}', [4, 5, 6, 7]], TL: ['670', '00', '7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}', [7, 8], [['(\\d{3})(\\d{4})', '$1 $2', ['[2-489]|70']], ['(\\d{4})(\\d{4})', '$1 $2', ['7']]]], TM: ['993', '810', '[1-6]\\d{7}', [8], [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2-$3-$4', ['12'], '(8 $1)'], ['(\\d{3})(\\d)(\\d{2})(\\d{2})', '$1 $2-$3-$4', ['[1-5]'], '(8 $1)'], ['(\\d{2})(\\d{6})', '$1 $2', ['6'], '8 $1']], '8', 0, 0, 0, 0, 0, 0, '8~10'], TN: ['216', '00', '[2-57-9]\\d{7}', [8], [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-57-9]']]]], TO: ['676', '00', '(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}', [5, 7], [['(\\d{2})(\\d{3})', '$1-$2', ['[2-4]|50|6[09]|7[0-24-69]|8[05]']], ['(\\d{4})(\\d{3})', '$1 $2', ['0']], ['(\\d{3})(\\d{4})', '$1 $2', ['[5-9]']]]], TR: ['90', '00', '4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}', [7, 10, 12, 13], [['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['512|8[01589]|90'], '0$1', 1], ['(\\d{3})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['5(?:[0-59]|61)', '5(?:[0-59]|616)', '5(?:[0-59]|6161)'], '0$1', 1], ['(\\d{3})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[24][1-8]|3[1-9]'], '(0$1)', 1], ['(\\d{3})(\\d{3})(\\d{6,7})', '$1 $2 $3', ['80'], '0$1', 1]], '0'], TT: ['1', '011', '(?:[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([2-46-8]\\d{6})$', '868$1', 0, '868'], TV: ['688', '00', '(?:2|7\\d\\d|90)\\d{4}', [5, 6, 7], [['(\\d{2})(\\d{3})', '$1 $2', ['2']], ['(\\d{2})(\\d{4})', '$1 $2', ['90']], ['(\\d{2})(\\d{5})', '$1 $2', ['7']]]], TW: ['886', '0(?:0[25-79]|19)', '[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}', [7, 8, 9, 10, 11], [['(\\d{2})(\\d)(\\d{4})', '$1 $2 $3', ['202'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[258]0'], '0$1'], ['(\\d)(\\d{3,4})(\\d{4})', '$1 $2 $3', ['[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]', '[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[49]'], '0$1'], ['(\\d{2})(\\d{4})(\\d{4,5})', '$1 $2 $3', ['7'], '0$1']], '0', 0, 0, 0, 0, 0, 0, 0, '#'], TZ: ['255', '00[056]', '(?:[26-8]\\d|41|90)\\d{7}', [9], [['(\\d{3})(\\d{2})(\\d{4})', '$1 $2 $3', ['[89]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[24]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[67]'], '0$1']], '0'], UA: ['380', '00', '[89]\\d{9}|[3-9]\\d{8}', [9, 10], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]', '6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]', '4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]'], '0$1'], ['(\\d{4})(\\d{5})', '$1 $2', ['[3-6]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[89]'], '0$1']], '0', 0, 0, 0, 0, 0, 0, '0~0'], UG: ['256', '00[057]', '800\\d{6}|(?:[29]0|[347]\\d)\\d{7}', [9], [['(\\d{4})(\\d{5})', '$1 $2', ['202', '2024'], '0$1'], ['(\\d{3})(\\d{6})', '$1 $2', ['[27-9]|4(?:6[45]|[7-9])'], '0$1'], ['(\\d{2})(\\d{7})', '$1 $2', ['[34]'], '0$1']], '0'], US: ['1', '011', '[2-9]\\d{9}', [10], [['(\\d{3})(\\d{3})(\\d{4})', '($1) $2-$3', ['[2-9]'], 0, 1, '$1-$2-$3']], '1', 0, 0, 0, 0, 0, [['(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[02357]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01579]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}'], [''], ['8(?:00|33|44|55|66|77|88)[2-9]\\d{6}'], ['900[2-9]\\d{6}'], ['52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}']]], UY: ['598', '0(?:0|1[3-9]\\d)', '4\\d{9}|[249]\\d{7}|(?:[49]\\d|80)\\d{5}', [7, 8, 10], [['(\\d{3})(\\d{4})', '$1 $2', ['405|8|90'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['9'], '0$1'], ['(\\d{4})(\\d{4})', '$1 $2', ['[24]']], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['4'], '0$1']], '0', 0, 0, 0, 0, 0, 0, '00', ' int. '], UZ: ['998', '810', '(?:33|55|[679]\\d|88)\\d{7}', [9], [['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[35-9]'], '8 $1']], '8', 0, 0, 0, 0, 0, 0, '8~10'], VA: ['39', '00', '0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}', [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, '06698'], VC: ['1', '011', '(?:[58]\\d\\d|784|900)\\d{7}', [10], 0, '1', 0, '1|([2-7]\\d{6})$', '784$1', 0, '784'], VE: ['58', '00', '[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}', [10], [['(\\d{3})(\\d{7})', '$1-$2', ['[24-689]'], '0$1']], '0'], VG: ['1', '011', '(?:284|[58]\\d\\d|900)\\d{7}', [10], 0, '1', 0, '1|([2-578]\\d{6})$', '284$1', 0, '284'], VI: ['1', '011', '[58]\\d{9}|(?:34|90)0\\d{7}', [10], 0, '1', 0, '1|([2-9]\\d{6})$', '340$1', 0, '340'], VN: ['84', '00', '[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}', [7, 8, 9, 10], [['(\\d{2})(\\d{5})', '$1 $2', ['80'], '0$1', 1], ['(\\d{4})(\\d{4,6})', '$1 $2', ['1'], 0, 1], ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[69]'], '0$1', 1], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[3578]'], '0$1', 1], ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['2[48]'], '0$1', 1], ['(\\d{3})(\\d{4})(\\d{3})', '$1 $2 $3', ['2'], '0$1', 1]], '0'], VU: ['678', '00', '[48]8\\d{3}|(?:[23]|[579]\\d\\d)\\d{4}', [5, 7], [['(\\d{3})(\\d{4})', '$1 $2', ['[579]']]]], WF: ['681', '00', '(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?', [6, 9], [['(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['[478]']], ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8']]]], WS: ['685', '0', '(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}', [5, 6, 7, 10], [['(\\d{5})', '$1', ['[2-5]|6[1-9]']], ['(\\d{3})(\\d{3,7})', '$1 $2', ['[68]']], ['(\\d{2})(\\d{5})', '$1 $2', ['7']]]], XK: ['383', '00', '[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}', [8, 9], [['(\\d{3})(\\d{5})', '$1 $2', ['[89]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-4]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[23]'], '0$1']], '0'], YE: ['967', '00', '(?:1|7\\d)\\d{7}|[1-7]\\d{6}', [7, 8, 9], [['(\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[1-6]|7[24-68]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['7'], '0$1']], '0'], YT: ['262', '00', '80\\d{7}|(?:26|63)9\\d{6}', [9], 0, '0', 0, 0, 0, 0, '269|63'], ZA: ['27', '00', '[1-79]\\d{8}|8\\d{4,9}', [5, 6, 7, 8, 9, 10], [['(\\d{2})(\\d{3,4})', '$1 $2', ['8[1-4]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{2,3})', '$1 $2 $3', ['8[1-4]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['860'], '0$1'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[1-9]'], '0$1'], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8'], '0$1']], '0'], ZM: ['260', '00', '(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}', [9], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[28]'], '0$1'], ['(\\d{2})(\\d{7})', '$1 $2', ['[79]'], '0$1']], '0'], ZW: ['263', '00', '2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}', [5, 6, 7, 8, 9, 10], [['(\\d{3})(\\d{3,5})', '$1 $2', ['2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]'], '0$1'], ['(\\d)(\\d{3})(\\d{2,4})', '$1 $2 $3', ['[49]'], '0$1'], ['(\\d{3})(\\d{4})', '$1 $2', ['80'], '0$1'], ['(\\d{2})(\\d{7})', '$1 $2', ['24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2', '2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]'], '(0$1)'], ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '0$1'], ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)', '2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)'], '0$1'], ['(\\d{4})(\\d{6})', '$1 $2', ['8'], '0$1'], ['(\\d{2})(\\d{3,5})', '$1 $2', ['1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]'], '0$1'], ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['29[013-9]|39|54'], '0$1'], ['(\\d{4})(\\d{3,5})', '$1 $2', ['(?:25|54)8', '258|5483'], '0$1']], '0'],
        },
        nonGeographic: {
          800: ['800', 0, '[1-9]\\d{7}', [8], [['(\\d{4})(\\d{4})', '$1 $2', ['[1-9]']]], 0, 0, 0, 0, 0, 0, [0, 0, ['[1-9]\\d{7}']]], 808: ['808', 0, '[1-9]\\d{7}', [8], [['(\\d{4})(\\d{4})', '$1 $2', ['[1-9]']]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ['[1-9]\\d{7}']]], 870: ['870', 0, '7\\d{11}|[35-7]\\d{8}', [9, 12], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[35-7]']]], 0, 0, 0, 0, 0, 0, [0, ['(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}']]], 878: ['878', 0, '10\\d{10}', [12], [['(\\d{2})(\\d{5})(\\d{5})', '$1 $2 $3', ['1']]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ['10\\d{10}']]], 881: ['881', 0, '[0-36-9]\\d{8}', [9], [['(\\d)(\\d{3})(\\d{5})', '$1 $2 $3', ['[0-36-9]']]], 0, 0, 0, 0, 0, 0, [0, ['[0-36-9]\\d{8}']]], 882: ['882', 0, '[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}', [7, 8, 9, 10, 11, 12], [['(\\d{2})(\\d{5})', '$1 $2', ['16|342']], ['(\\d{2})(\\d{6})', '$1 $2', ['4']], ['(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3', ['[19]']], ['(\\d{2})(\\d{4})(\\d{3})', '$1 $2 $3', ['3[23]']], ['(\\d{2})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['1']], ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['34[57]']], ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['34']], ['(\\d{2})(\\d{4,5})(\\d{5})', '$1 $2 $3', ['[1-3]']]], 0, 0, 0, 0, 0, 0, [0, ['342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}', [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ['1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}']]], 883: ['883', 0, '210\\d{7}|51\\d{7}(?:\\d{3})?', [9, 10, 12], [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['510']], ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['2']], ['(\\d{3})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['510']], ['(\\d{4})(\\d{4})(\\d{4})', '$1 $2 $3', ['5']]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ['(?:210|51[013]0\\d)\\d{7}|5100\\d{5}']]], 888: ['888', 0, '\\d{11}', [11], [['(\\d{3})(\\d{3})(\\d{5})', '$1 $2 $3']], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ['\\d{11}']]], 979: ['979', 0, '[1359]\\d{8}', [9], [['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['[1359]']]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ['[1359]\\d{8}']]],
        },
      });
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/metadata.js
      // Importing from `.json.js` a workaround for a bug in web browsers' "native"
      // ES6 importing system which is uncapable of importing "*.json" files.
      // https://github.com/catamphetamine/libphonenumber-js/issues/239

      /* harmony default export */ const min_metadata = (metadata_min_json);

      function withMetadata(func, _arguments) {
        const args = Array.prototype.slice.call(_arguments);
        args.push(metadata_min_json);
        return func.apply(this, args);
      }
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/constants.js
      // The minimum length of the national significant number.
      const MIN_LENGTH_FOR_NSN = 2; // The ITU says the maximum length should be 15,
      // but one can find longer numbers in Germany.

      const MAX_LENGTH_FOR_NSN = 17; // The maximum length of the country calling code.

      const MAX_LENGTH_COUNTRY_CODE = 3; // Digits accepted in phone numbers
      // (ascii, fullwidth, arabic-indic, and eastern arabic digits).

      const VALID_DIGITS = '0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9'; // `DASHES` will be right after the opening square bracket of the "character class"

      const DASHES = '-\u2010-\u2015\u2212\u30FC\uFF0D';
      const SLASHES = '\uFF0F/';
      const DOTS = '\uFF0E.';
      const WHITESPACE = ' \xA0\xAD\u200B\u2060\u3000';
      const BRACKETS = '()\uFF08\uFF09\uFF3B\uFF3D\\[\\]'; // export const OPENING_BRACKETS = '(\uFF08\uFF3B\\\['

      const TILDES = '~\u2053\u223C\uFF5E'; // Regular expression of acceptable punctuation found in phone numbers. This
      // excludes punctuation found as a leading character only. This consists of dash
      // characters, white space characters, full stops, slashes, square brackets,
      // parentheses and tildes. Full-width variants are also present.

      const VALID_PUNCTUATION = ''.concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE)
        .concat(BRACKETS)
        .concat(TILDES);
      const PLUS_CHARS = '+\uFF0B'; // const LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+')
      // # sourceMappingURL=constants.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/ParseError.js
      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      // https://stackoverflow.com/a/46971044/970769
      const ParseError = function ParseError(code) {
        _classCallCheck(this, ParseError);

        this.name = this.constructor.name;
        this.message = code;
        this.stack = new Error(code).stack;
      };

      ParseError.prototype = Object.create(Error.prototype);
      ParseError.prototype.constructor = ParseError;
      // # sourceMappingURL=ParseError.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/tools/semver-compare.js
      // Copy-pasted from:
      // https://github.com/substack/semver-compare/blob/master/index.js
      //
      // Inlining this function because some users reported issues with
      // importing from `semver-compare` in a browser with ES6 "native" modules.
      //
      // Fixes `semver-compare` not being able to compare versions with alpha/beta/etc "tags".
      // https://github.com/catamphetamine/libphonenumber-js/issues/381
      /* harmony default export */ const semver_compare = (function (a, b) {
        a = a.split('-');
        b = b.split('-');
        const pa = a[0].split('.');
        const pb = b[0].split('.');

        for (let i = 0; i < 3; i++) {
          const na = Number(pa[i]);
          const nb = Number(pb[i]);
          if (na > nb) return 1;
          if (nb > na) return -1;
          if (!isNaN(na) && isNaN(nb)) return 1;
          if (isNaN(na) && !isNaN(nb)) return -1;
        }

        if (a[1] && b[1]) {
          return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
        }

        return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
      });
      // # sourceMappingURL=semver-compare.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/metadata.js
      function _typeof(obj) { if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function metadata_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      // Added "possibleLengths" and renamed
      // "country_phone_code_to_countries" to "country_calling_codes".

      const V2 = '1.0.18'; // Added "idd_prefix" and "default_idd_prefix".

      const V3 = '1.2.0'; // Moved `001` country code to "nonGeographic" section of metadata.

      const V4 = '1.7.35';
      const DEFAULT_EXT_PREFIX = ' ext. ';
      const CALLING_CODE_REG_EXP = /^\d+$/;
      /**
 * See: https://gitlab.com/catamphetamine/libphonenumber-js/blob/master/METADATA.md
 */

      const Metadata =
/* #__PURE__ */
(function () {
  function Metadata(metadata) {
    metadata_classCallCheck(this, Metadata);

    validateMetadata(metadata);
    this.metadata = metadata;
    setVersion.call(this, metadata);
  }

  _createClass(Metadata, [{
    key: 'getCountries',
    value: function getCountries() {
      return Object.keys(this.metadata.countries).filter((_) => _ !== '001');
    },
  }, {
    key: 'getCountryMetadata',
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    },
  }, {
    key: 'nonGeographic',
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return; // `nonGeographical` was a typo.
      // It's present in metadata generated from `1.7.35` to `1.7.37`.

      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    },
  }, {
    key: 'hasCountry',
    value: function hasCountry(country) {
      return this.getCountryMetadata(country) !== undefined;
    },
  }, {
    key: 'hasCallingCode',
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }

      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        const countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return true;
        }
      }
    },
  }, {
    key: 'isNonGeographicCallingCode',
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return !!this.nonGeographic()[callingCode];
      }
      return !this.getCountryCodesForCallingCode(callingCode);
    }, // Deprecated.

  }, {
    key: 'country',
    value: function country(countryCode) {
      return this.selectNumberingPlan(countryCode);
    },
  }, {
    key: 'selectNumberingPlan',
    value: function selectNumberingPlan(countryCode, callingCode) {
      // Supports just passing `callingCode` as the first argument.
      if (countryCode && CALLING_CODE_REG_EXP.test(countryCode)) {
        callingCode = countryCode;
        countryCode = null;
      }

      if (countryCode && countryCode !== '001') {
        if (!this.hasCountry(countryCode)) {
          throw new Error('Unknown country: '.concat(countryCode));
        }

        this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error('Unknown calling code: '.concat(callingCode));
        }

        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = undefined;
      }

      return this;
    },
  }, {
    key: 'getCountryCodesForCallingCode',
    value: function getCountryCodesForCallingCode(callingCode) {
      const countryCodes = this.countryCallingCodes()[callingCode];

      if (countryCodes) {
        // Metadata before V4 included "non-geographic entity" calling codes
        // inside `country_calling_codes` (for example, `"881":["001"]`).
        // Now the semantics of `country_calling_codes` has changed:
        // it's specifically for "countries" now.
        // Older versions of custom metadata will simply skip parsing
        // "non-geographic entity" phone numbers with new versions
        // of this library: it's not considered a bug,
        // because such numbers are extremely rare,
        // and developers extremely rarely use custom metadata.
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }

        return countryCodes;
      }
    },
  }, {
    key: 'getCountryCodeForCallingCode',
    value: function getCountryCodeForCallingCode(callingCode) {
      const countryCodes = this.getCountryCodesForCallingCode(callingCode);

      if (countryCodes) {
        return countryCodes[0];
      }
    },
  }, {
    key: 'getNumberingPlanMetadata',
    value: function getNumberingPlanMetadata(callingCode) {
      const countryCode = this.getCountryCodeForCallingCode(callingCode);

      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }

      if (this.nonGeographic()) {
        const metadata = this.nonGeographic()[callingCode];

        if (metadata) {
          return metadata;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        const countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return this.metadata.countries['001'];
        }
      }
    }, // Deprecated.

  }, {
    key: 'countryCallingCode',
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    }, // Deprecated.

  }, {
    key: 'IDDPrefix',
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    }, // Deprecated.

  }, {
    key: 'defaultIDDPrefix',
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    }, // Deprecated.

  }, {
    key: 'nationalNumberPattern',
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    }, // Deprecated.

  }, {
    key: 'possibleLengths',
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    }, // Deprecated.

  }, {
    key: 'formats',
    value: function formats() {
      return this.numberingPlan.formats();
    }, // Deprecated.

  }, {
    key: 'nationalPrefixForParsing',
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    }, // Deprecated.

  }, {
    key: 'nationalPrefixTransformRule',
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }, // Deprecated.

  }, {
    key: 'leadingDigits',
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    }, // Deprecated.

  }, {
    key: 'hasTypes',
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    }, // Deprecated.

  }, {
    key: 'type',
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    }, // Deprecated.

  }, {
    key: 'ext',
    value: function ext() {
      return this.numberingPlan.ext();
    },
  }, {
    key: 'countryCallingCodes',
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    }, // Deprecated.

  }, {
    key: 'chooseCountryByCountryCallingCode',
    value: function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    },
  }, {
    key: 'hasSelectedNumberingPlan',
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== undefined;
    },
  }]);

  return Metadata;
}());

      var NumberingPlan =
/* #__PURE__ */
(function () {
  function NumberingPlan(metadata, globalMetadataObject) {
    metadata_classCallCheck(this, NumberingPlan);

    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata;
    setVersion.call(this, globalMetadataObject.metadata);
  }

  _createClass(NumberingPlan, [{
    key: 'callingCode',
    value: function callingCode() {
      return this.metadata[0];
    }, // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.

  }, {
    key: 'getDefaultCountryMetadataForRegion',
    value: function getDefaultCountryMetadataForRegion() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    },
  }, {
    key: 'IDDPrefix',
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    },
  }, {
    key: 'defaultIDDPrefix',
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    },
  }, {
    key: 'nationalNumberPattern',
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    },
  }, {
    key: 'possibleLengths',
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    },
  }, {
    key: '_getFormats',
    value: function _getFormats(metadata) {
      return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
    }, // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: 'formats',
    value: function formats() {
      const _this = this;

      const formats = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return formats.map((_) => new Format(_, _this));
    },
  }, {
    key: 'nationalPrefix',
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    },
  }, {
    key: '_getNationalPrefixFormattingRule',
    value: function _getNationalPrefixFormattingRule(metadata) {
      return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    }, // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: 'nationalPrefixFormattingRule',
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    },
  }, {
    key: '_nationalPrefixForParsing',
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    },
  }, {
    key: 'nationalPrefixForParsing',
    value: function nationalPrefixForParsing() {
      // If `national_prefix_for_parsing` is not set explicitly,
      // then infer it from `national_prefix` (if any)
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    },
  }, {
    key: 'nationalPrefixTransformRule',
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    },
  }, {
    key: '_getNationalPrefixIsOptionalWhenFormatting',
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }, // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: 'nationalPrefixIsOptionalWhenFormattingInNationalFormat',
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    },
  }, {
    key: 'leadingDigits',
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    },
  }, {
    key: 'types',
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    },
  }, {
    key: 'hasTypes',
    value: function hasTypes() {
      // Versions 1.2.0 - 1.2.4: can be `[]`.

      /* istanbul ignore next */
      if (this.types() && this.types().length === 0) {
        return false;
      } // Versions <= 1.2.4: can be `undefined`.
      // Version >= 1.2.5: can be `0`.

      return !!this.types();
    },
  }, {
    key: 'type',
    value: function type(_type2) {
      if (this.hasTypes() && metadata_getType(this.types(), _type2)) {
        return new Type(metadata_getType(this.types(), _type2), this);
      }
    },
  }, {
    key: 'ext',
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    },
  }]);

  return NumberingPlan;
}());

      var Format =
/* #__PURE__ */
(function () {
  function Format(format, metadata) {
    metadata_classCallCheck(this, Format);

    this._format = format;
    this.metadata = metadata;
  }

  _createClass(Format, [{
    key: 'pattern',
    value: function pattern() {
      return this._format[0];
    },
  }, {
    key: 'format',
    value: function format() {
      return this._format[1];
    },
  }, {
    key: 'leadingDigitsPatterns',
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    },
  }, {
    key: 'nationalPrefixFormattingRule',
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    },
  }, {
    key: 'nationalPrefixIsOptionalWhenFormattingInNationalFormat',
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    },
  }, {
    key: 'nationalPrefixIsMandatoryWhenFormattingInNationalFormat',
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      // National prefix is omitted if there's no national prefix formatting rule
      // set for this country, or when the national prefix formatting rule
      // contains no national prefix itself, or when this rule is set but
      // national prefix is optional for this phone number format
      // (and it is not enforced explicitly)
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }, // Checks whether national prefix formatting rule contains national prefix.

  }, {
    key: 'usesNationalPrefix',
    value: function usesNationalPrefix() {
      return !!(this.nationalPrefixFormattingRule() // Check that national prefix formatting rule is not a "dummy" one.
      && !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()));
    },
  }, {
    key: 'internationalFormat',
    value: function internationalFormat() {
      return this._format[5] || this.format();
    },
  }]);

  return Format;
}());
      /**
 * A pattern that is used to determine if the national prefix formatting rule
 * has the first group only, i.e., does not start with the national prefix.
 * Note that the pattern explicitly allows for unbalanced parentheses.
 */

      var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;

      var Type =
/* #__PURE__ */
(function () {
  function Type(type, metadata) {
    metadata_classCallCheck(this, Type);

    this.type = type;
    this.metadata = metadata;
  }

  _createClass(Type, [{
    key: 'pattern',
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    },
  }, {
    key: 'possibleLengths',
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    },
  }]);

  return Type;
}());

      function metadata_getType(types, type) {
        switch (type) {
          case 'FIXED_LINE':
            return types[0];

          case 'MOBILE':
            return types[1];

          case 'TOLL_FREE':
            return types[2];

          case 'PREMIUM_RATE':
            return types[3];

          case 'PERSONAL_NUMBER':
            return types[4];

          case 'VOICEMAIL':
            return types[5];

          case 'UAN':
            return types[6];

          case 'PAGER':
            return types[7];

          case 'VOIP':
            return types[8];

          case 'SHARED_COST':
            return types[9];
        }
      }

      function validateMetadata(metadata) {
        if (!metadata) {
          throw new Error('[libphonenumber-js] `metadata` argument not passed. Check your arguments.');
        } // `country_phone_code_to_countries` was renamed to
        // `country_calling_codes` in `1.0.18`.

        if (!is_object(metadata) || !is_object(metadata.countries)) {
          throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(is_object(metadata) ? `an object of shape: { ${Object.keys(metadata).join(', ')} }` : `a ${type_of(metadata)}: ${metadata}`, '.'));
        }
      } // Babel transforms `typeof` into some "branches"
      // so istanbul will show this as "branch not covered".

      /* istanbul ignore next */

      var is_object = function is_object(_) {
        return _typeof(_) === 'object';
      }; // Babel transforms `typeof` into some "branches"
      // so istanbul will show this as "branch not covered".

      /* istanbul ignore next */

      var type_of = function type_of(_) {
        return _typeof(_);
      };
      /**
 * Returns extension prefix for a country.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string?}
 * @example
 * // Returns " ext. "
 * getExtPrefix("US")
 */

      function getExtPrefix(country, metadata) {
        metadata = new Metadata(metadata);

        if (metadata.hasCountry(country)) {
          return metadata.country(country).ext();
        }

        return DEFAULT_EXT_PREFIX;
      }
      /**
 * Returns "country calling code" for a country.
 * Throws an error if the country doesn't exist or isn't supported by this library.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string}
 * @example
 * // Returns "44"
 * getCountryCallingCode("GB")
 */

      function getCountryCallingCode(country, metadata) {
        metadata = new Metadata(metadata);

        if (metadata.hasCountry(country)) {
          return metadata.country(country).countryCallingCode();
        }

        throw new Error('Unknown country: '.concat(country));
      }
      function isSupportedCountry(country, metadata) {
        // metadata = new Metadata(metadata)
        // return metadata.hasCountry(country)
        return metadata.countries[country] !== undefined;
      }

      function setVersion(metadata) {
        const { version } = metadata;

        if (typeof version === 'number') {
          this.v1 = version === 1;
          this.v2 = version === 2;
          this.v3 = version === 3;
          this.v4 = version === 4;
        } else if (!version) {
          this.v1 = true;
        } else if (semver_compare(version, V3) === -1) {
          this.v2 = true;
        } else if (semver_compare(version, V4) === -1) {
          this.v3 = true;
        } else {
          this.v4 = true;
        }
      } // const ISO_COUNTRY_CODE = /^[A-Z]{2}$/
      // function isCountryCode(countryCode) {
      // 	return ISO_COUNTRY_CODE.test(countryCodeOrCountryCallingCode)
      // }
      // # sourceMappingURL=metadata.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
      // The RFC 3966 format for extensions.

      const RFC3966_EXTN_PREFIX = ';ext=';
      /**
 * Helper method for constructing regular expressions for parsing. Creates
 * an expression that captures up to max_length digits.
 * @return {string} RegEx pattern to capture extension digits.
 */

      const createExtensionPattern_getExtensionDigitsPattern = function getExtensionDigitsPattern(maxLength) {
        return '(['.concat(VALID_DIGITS, ']{1,').concat(maxLength, '})');
      };
      /**
 * Helper initialiser method to create the regular-expression pattern to match
 * extensions.
 * Copy-pasted from Google's `libphonenumber`:
 * https://github.com/google/libphonenumber/blob/55b2646ec9393f4d3d6661b9c82ef9e258e8b829/javascript/i18n/phonenumbers/phonenumberutil.js#L759-L766
 * @return {string} RegEx pattern to capture extensions.
 */

      function createExtensionPattern(purpose) {
        // We cap the maximum length of an extension based on the ambiguity of the way
        // the extension is prefixed. As per ITU, the officially allowed length for
        // extensions is actually 40, but we don't support this since we haven't seen real
        // examples and this introduces many false interpretations as the extension labels
        // are not standardized.

        /** @type {string} */
        const extLimitAfterExplicitLabel = '20';
        /** @type {string} */

        const extLimitAfterLikelyLabel = '15';
        /** @type {string} */

        const extLimitAfterAmbiguousChar = '9';
        /** @type {string} */

        const extLimitWhenNotSure = '6';
        /** @type {string} */

        const possibleSeparatorsBetweenNumberAndExtLabel = '[ \xA0\\t,]*'; // Optional full stop (.) or colon, followed by zero or more spaces/tabs/commas.

        /** @type {string} */

        const possibleCharsAfterExtLabel = '[:\\.\uFF0E]?[ \xA0\\t,-]*';
        /** @type {string} */

        const optionalExtnSuffix = '#?'; // Here the extension is called out in more explicit way, i.e mentioning it obvious
        // patterns like "ext.".

        /** @type {string} */

        const explicitExtLabels = '(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)'; // One-character symbols that can be used to indicate an extension, and less
        // commonly used or more ambiguous extension labels.

        /** @type {string} */

        const ambiguousExtLabels = '(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)'; // When extension is not separated clearly.

        /** @type {string} */

        const ambiguousSeparator = '[- ]+'; // This is the same as possibleSeparatorsBetweenNumberAndExtLabel, but not matching
        // comma as extension label may have it.

        /** @type {string} */

        const possibleSeparatorsNumberExtLabelNoComma = '[ \xA0\\t]*'; // ",," is commonly used for auto dialling the extension when connected. First
        // comma is matched through possibleSeparatorsBetweenNumberAndExtLabel, so we do
        // not repeat it here. Semi-colon works in Iphone and Android also to pop up a
        // button with the extension number following.

        /** @type {string} */

        const autoDiallingAndExtLabelsFound = '(?:,{2}|;)';
        /** @type {string} */

        const rfcExtn = RFC3966_EXTN_PREFIX + createExtensionPattern_getExtensionDigitsPattern(extLimitAfterExplicitLabel);
        /** @type {string} */

        const explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + createExtensionPattern_getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
        /** @type {string} */

        const ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + createExtensionPattern_getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
        /** @type {string} */

        const americanStyleExtnWithSuffix = `${ambiguousSeparator + createExtensionPattern_getExtensionDigitsPattern(extLimitWhenNotSure)}#`;
        /** @type {string} */

        const autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + createExtensionPattern_getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
        /** @type {string} */

        const onlyCommasExtn = `${possibleSeparatorsNumberExtLabelNoComma}(?:,)+${possibleCharsAfterExtLabel}${createExtensionPattern_getExtensionDigitsPattern(extLimitAfterAmbiguousChar)}${optionalExtnSuffix}`; // The first regular expression covers RFC 3966 format, where the extension is added
        // using ";ext=". The second more generic where extension is mentioned with explicit
        // labels like "ext:". In both the above cases we allow more numbers in extension than
        // any other extension labels. The third one captures when single character extension
        // labels or less commonly used labels are used. In such cases we capture fewer
        // extension digits in order to reduce the chance of falsely interpreting two
        // numbers beside each other as a number + extension. The fourth one covers the
        // special case of American numbers where the extension is written with a hash
        // at the end, such as "- 503#". The fifth one is exclusively for extension
        // autodialling formats which are used when dialling and in this case we accept longer
        // extensions. The last one is more liberal on the number of commas that acts as
        // extension labels, so we have a strict cap on the number of digits in such extensions.

        return `${rfcExtn}|${explicitExtn}|${ambiguousExtn}|${americanStyleExtnWithSuffix}|${autoDiallingExtn}|${onlyCommasExtn}`;
      }
      // # sourceMappingURL=createExtensionPattern.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js

      //  Regular expression of viable phone numbers. This is location independent.
      //  Checks we have at least three leading digits, and only valid punctuation,
      //  alpha characters and digits in the phone number. Does not include extension
      //  data. The symbol 'x' is allowed here as valid punctuation since it is often
      //  used as a placeholder for carrier codes, for example in Brazilian phone
      //  numbers. We also allow multiple '+' characters at the start.
      //
      //  Corresponds to the following:
      //  [digits]{minLengthNsn}|
      //  plus_sign*
      //  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
      //
      //  The first reg-ex is to allow short numbers (two digits long) to be parsed if
      //  they are entered as "15" etc, but only if there is no punctuation in them.
      //  The second expression restricts the number of digits to three or more, but
      //  then allows them to be in international form, and to have alpha-characters
      //  and punctuation. We split up the two reg-exes here and combine them when
      //  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
      //  with ^ and append $ to each branch.
      //
      //  "Note VALID_PUNCTUATION starts with a -,
      //   so must be the first in the range" (c) Google devs.
      //  (wtf did they mean by saying that; probably nothing)
      //

      const MIN_LENGTH_PHONE_NUMBER_PATTERN = `[${VALID_DIGITS}]{${MIN_LENGTH_FOR_NSN}}`; //
      // And this is the second reg-exp:
      // (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
      //

      const VALID_PHONE_NUMBER = `[${PLUS_CHARS}]{0,1}` + '(?:' + `[${VALID_PUNCTUATION}]*` + `[${VALID_DIGITS}]` + '){3,}' + `[${VALID_PUNCTUATION}${VALID_DIGITS}]*`;
      const VALID_PHONE_NUMBER_WITH_EXTENSION = `${VALID_PHONE_NUMBER // Phone number extensions
      }(?:${createExtensionPattern()})?`; // The combined regular expression for valid phone numbers:
      //

      const VALID_PHONE_NUMBER_PATTERN = new RegExp( // Either a short two-digit-only phone number
        `^${MIN_LENGTH_PHONE_NUMBER_PATTERN}$` + '|' // Or a longer fully parsed phone number (min 3 characters)
+ `^${VALID_PHONE_NUMBER_WITH_EXTENSION}$`, 'i',
      ); // Checks to see if the string of characters could possibly be a phone number at
      // all. At the moment, checks to see that the string begins with at least 2
      // digits, ignoring any punctuation commonly found in phone numbers. This method
      // does not require the number to be normalized in advance - but does assume
      // that leading non-number symbols have been removed, such as by the method
      // `extract_possible_number`.
      //

      function isViablePhoneNumber(number) {
        return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
      }
      // # sourceMappingURL=isViablePhoneNumber.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
      // Regexp of all known extension prefixes used by different regions followed by
      // 1 or more valid digits, for use when parsing.

      const EXTN_PATTERN = new RegExp(`(?:${createExtensionPattern()})$`, 'i'); // Strips any extension (as in, the part of the number dialled after the call is
      // connected, usually indicated with extn, ext, x or similar) from the end of
      // the number, and returns it.

      function extractExtension(number) {
        const start = number.search(EXTN_PATTERN);

        if (start < 0) {
          return {};
        } // If we find a potential extension, and the number preceding this is a viable
        // number, we assume it is an extension.

        const numberWithoutExtension = number.slice(0, start);
        const matches = number.match(EXTN_PATTERN);
        let i = 1;

        while (i < matches.length) {
          if (matches[i]) {
            return {
              number: numberWithoutExtension,
              ext: matches[i],
            };
          }

          i++;
        }
      }
      // # sourceMappingURL=extractExtension.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/parseDigits.js
      // These mappings map a character (key) to a specific digit that should
      // replace it for normalization purposes. Non-European digits that
      // may be used in phone numbers are mapped to a European equivalent.
      //
      // E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
      //
      const DIGITS = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        '\uFF10': '0',
        // Fullwidth digit 0
        '\uFF11': '1',
        // Fullwidth digit 1
        '\uFF12': '2',
        // Fullwidth digit 2
        '\uFF13': '3',
        // Fullwidth digit 3
        '\uFF14': '4',
        // Fullwidth digit 4
        '\uFF15': '5',
        // Fullwidth digit 5
        '\uFF16': '6',
        // Fullwidth digit 6
        '\uFF17': '7',
        // Fullwidth digit 7
        '\uFF18': '8',
        // Fullwidth digit 8
        '\uFF19': '9',
        // Fullwidth digit 9
        '\u0660': '0',
        // Arabic-indic digit 0
        '\u0661': '1',
        // Arabic-indic digit 1
        '\u0662': '2',
        // Arabic-indic digit 2
        '\u0663': '3',
        // Arabic-indic digit 3
        '\u0664': '4',
        // Arabic-indic digit 4
        '\u0665': '5',
        // Arabic-indic digit 5
        '\u0666': '6',
        // Arabic-indic digit 6
        '\u0667': '7',
        // Arabic-indic digit 7
        '\u0668': '8',
        // Arabic-indic digit 8
        '\u0669': '9',
        // Arabic-indic digit 9
        '\u06F0': '0',
        // Eastern-Arabic digit 0
        '\u06F1': '1',
        // Eastern-Arabic digit 1
        '\u06F2': '2',
        // Eastern-Arabic digit 2
        '\u06F3': '3',
        // Eastern-Arabic digit 3
        '\u06F4': '4',
        // Eastern-Arabic digit 4
        '\u06F5': '5',
        // Eastern-Arabic digit 5
        '\u06F6': '6',
        // Eastern-Arabic digit 6
        '\u06F7': '7',
        // Eastern-Arabic digit 7
        '\u06F8': '8',
        // Eastern-Arabic digit 8
        '\u06F9': '9', // Eastern-Arabic digit 9

      };
      function parseDigit(character) {
        return DIGITS[character];
      }
      /**
 * Parses phone number digits from a string.
 * Drops all punctuation leaving only digits.
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * parseDigits('8 (800) 555')
 * // Outputs '8800555'.
 * ```
 */

      function parseDigits(string) {
        let result = ''; // Using `.split('')` here instead of normal `for ... of`
        // because the importing application doesn't neccessarily include an ES6 polyfill.
        // The `.split('')` approach discards "exotic" UTF-8 characters
        // (the ones consisting of four bytes) but digits
        // (including non-European ones) don't fall into that range
        // so such "exotic" characters would be discarded anyway.

        for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          const character = _ref;
          const digit = parseDigit(character);

          if (digit) {
            result += digit;
          }
        }

        return result;
      }
      // # sourceMappingURL=parseDigits.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js

      /**
 * Parses phone number characters from a string.
 * Drops all punctuation leaving only digits and the leading `+` sign (if any).
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * // Outputs '8800555'.
 * parseIncompletePhoneNumber('8 (800) 555')
 * // Outputs '+7800555'.
 * parseIncompletePhoneNumber('+7 800 555')
 * ```
 */

      function parseIncompletePhoneNumber(string) {
        let result = ''; // Using `.split('')` here instead of normal `for ... of`
        // because the importing application doesn't neccessarily include an ES6 polyfill.
        // The `.split('')` approach discards "exotic" UTF-8 characters
        // (the ones consisting of four bytes) but digits
        // (including non-European ones) don't fall into that range
        // so such "exotic" characters would be discarded anyway.

        for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          const character = _ref;
          result += parsePhoneNumberCharacter(character, result) || '';
        }

        return result;
      }
      /**
 * Parses next character while parsing phone number digits (including a `+`)
 * from text: discards everything except `+` and digits, and `+` is only allowed
 * at the start of a phone number.
 * For example, is used in `react-phone-number-input` where it uses
 * [`input-format`](https://gitlab.com/catamphetamine/input-format).
 * @param  {string} character - Yet another character from raw input string.
 * @param  {string?} prevParsedCharacters - Previous parsed characters.
 * @param  {object} meta - Optional custom use-case-specific metadata.
 * @return {string?} The parsed character.
 */

      function parsePhoneNumberCharacter(character, prevParsedCharacters) {
        // Only allow a leading `+`.
        if (character === '+') {
          // If this `+` is not the first parsed character
          // then discard it.
          if (prevParsedCharacters) {
            return;
          }

          return '+';
        } // Allow digits.

        return parseDigit(character);
      }
      // # sourceMappingURL=parseIncompletePhoneNumber.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
      /**
 * Merges two arrays.
 * @param  {*} a
 * @param  {*} b
 * @return {*}
 */
      function mergeArrays(a, b) {
        const merged = a.slice();

        for (var _iterator = b, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          const element = _ref;

          if (a.indexOf(element) < 0) {
            merged.push(element);
          }
        }

        return merged.sort((a, b) => a - b); // ES6 version, requires Set polyfill.
        // let merged = new Set(a)
        // for (const element of b) {
        // 	merged.add(i)
        // }
        // return Array.from(merged).sort((a, b) => a - b)
      }
      // # sourceMappingURL=mergeArrays.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js

      function checkNumberLength(nationalNumber, metadata) {
        return checkNumberLengthForType(nationalNumber, undefined, metadata);
      } // Checks whether a number is possible for the country based on its length.
      // Should only be called for the "new" metadata which has "possible lengths".

      function checkNumberLengthForType(nationalNumber, type, metadata) {
        const type_info = metadata.type(type); // There should always be "<possiblePengths/>" set for every type element.
        // This is declared in the XML schema.
        // For size efficiency, where a sub-description (e.g. fixed-line)
        // has the same "<possiblePengths/>" as the "general description", this is missing,
        // so we fall back to the "general description". Where no numbers of the type
        // exist at all, there is one possible length (-1) which is guaranteed
        // not to match the length of any real phone number.

        let possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths(); // let local_lengths    = type_info && type.possibleLengthsLocal() || metadata.possibleLengthsLocal()
        // Metadata before version `1.0.18` didn't contain `possible_lengths`.

        if (!possible_lengths) {
          return 'IS_POSSIBLE';
        }

        if (type === 'FIXED_LINE_OR_MOBILE') {
          // No such country in metadata.

          /* istanbul ignore next */
          if (!metadata.type('FIXED_LINE')) {
            // The rare case has been encountered where no fixedLine data is available
            // (true for some non-geographic entities), so we just check mobile.
            return checkNumberLengthForType(nationalNumber, 'MOBILE', metadata);
          }

          const mobile_type = metadata.type('MOBILE');

          if (mobile_type) {
            // Merge the mobile data in if there was any. "Concat" creates a new
            // array, it doesn't edit possible_lengths in place, so we don't need a copy.
            // Note that when adding the possible lengths from mobile, we have
            // to again check they aren't empty since if they are this indicates
            // they are the same as the general desc and should be obtained from there.
            possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths()); // The current list is sorted; we need to merge in the new list and
            // re-sort (duplicates are okay). Sorting isn't so expensive because
            // the lists are very small.
            // if (local_lengths) {
            // 	local_lengths = mergeArrays(local_lengths, mobile_type.possibleLengthsLocal())
            // } else {
            // 	local_lengths = mobile_type.possibleLengthsLocal()
            // }
          }
        } // If the type doesn't exist then return 'INVALID_LENGTH'.
        else if (type && !type_info) {
          return 'INVALID_LENGTH';
        }

        const actual_length = nationalNumber.length; // In `libphonenumber-js` all "local-only" formats are dropped for simplicity.
        // // This is safe because there is never an overlap beween the possible lengths
        // // and the local-only lengths; this is checked at build time.
        // if (local_lengths && local_lengths.indexOf(nationalNumber.length) >= 0)
        // {
        // 	return 'IS_POSSIBLE_LOCAL_ONLY'
        // }

        const minimum_length = possible_lengths[0];

        if (minimum_length === actual_length) {
          return 'IS_POSSIBLE';
        }

        if (minimum_length > actual_length) {
          return 'TOO_SHORT';
        }

        if (possible_lengths[possible_lengths.length - 1] < actual_length) {
          return 'TOO_LONG';
        } // We skip the first element since we've already checked it.

        return possible_lengths.indexOf(actual_length, 1) >= 0 ? 'IS_POSSIBLE' : 'INVALID_LENGTH';
      }
      // # sourceMappingURL=checkNumberLength.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/isPossibleNumber_.js

      function isPossiblePhoneNumber(input, options, metadata) {
        /* istanbul ignore if */
        if (options === undefined) {
          options = {};
        }

        metadata = new Metadata(metadata);

        if (options.v2) {
          if (!input.countryCallingCode) {
            throw new Error('Invalid phone number object passed');
          }

          metadata.selectNumberingPlan(input.countryCallingCode);
        } else {
          if (!input.phone) {
            return false;
          }

          if (input.country) {
            if (!metadata.hasCountry(input.country)) {
              throw new Error('Unknown country: '.concat(input.country));
            }

            metadata.country(input.country);
          } else {
            if (!input.countryCallingCode) {
              throw new Error('Invalid phone number object passed');
            }

            metadata.selectNumberingPlan(input.countryCallingCode);
          }
        }

        if (metadata.possibleLengths()) {
          return isPossibleNumber(input.phone || input.nationalNumber, metadata);
        }
        // There was a bug between `1.7.35` and `1.7.37` where "possible_lengths"
        // were missing for "non-geographical" numbering plans.
        // Just assume the number is possible in such cases:
        // it's unlikely that anyone generated their custom metadata
        // in that short period of time (one day).
        // This code can be removed in some future major version update.
        if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
          // "Non-geographic entities" did't have `possibleLengths`
          // due to a bug in metadata generation process.
          return true;
        }
        throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
      }
      function isPossibleNumber(nationalNumber, metadata) {
        // , isInternational) {
        switch (checkNumberLength(nationalNumber, metadata)) {
          case 'IS_POSSIBLE':
            return true;
            // This library ignores "local-only" phone numbers (for simplicity).
            // See the readme for more info on what are "local-only" phone numbers.
            // case 'IS_POSSIBLE_LOCAL_ONLY':
            // 	return !isInternational

          default:
            return false;
        }
      }
      // # sourceMappingURL=isPossibleNumber_.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/RFC3966.js
      function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

      function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance'); }

      function _iterableToArrayLimit(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr; }

      function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

      // https://www.ietf.org/rfc/rfc3966.txt

      /**
 * @param  {string} text - Phone URI (RFC 3966).
 * @return {object} `{ ?number, ?ext }`.
 */

      function parseRFC3966(text) {
        let number;
        let ext; // Replace "tel:" with "tel=" for parsing convenience.

        text = text.replace(/^tel:/, 'tel=');

        for (var _iterator = text.split(';'), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          const part = _ref;

          const _part$split = part.split('=');
          const _part$split2 = _slicedToArray(_part$split, 2);
          const name = _part$split2[0];
          const value = _part$split2[1];

          switch (name) {
            case 'tel':
              number = value;
              break;

            case 'ext':
              ext = value;
              break;

            case 'phone-context':
              // Only "country contexts" are supported.
              // "Domain contexts" are ignored.
              if (value[0] === '+') {
                number = value + number;
              }

              break;
          }
        } // If the phone number is not viable, then abort.

        if (!isViablePhoneNumber(number)) {
          return {};
        }

        const result = {
          number,
        };

        if (ext) {
          result.ext = ext;
        }

        return result;
      }
      /**
 * @param  {object} - `{ ?number, ?extension }`.
 * @return {string} Phone URI (RFC 3966).
 */

      function formatRFC3966(_ref2) {
        const { number } = _ref2;
        const { ext } = _ref2;

        if (!number) {
          return '';
        }

        if (number[0] !== '+') {
          throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
        }

        return 'tel:'.concat(number).concat(ext ? `;ext=${ext}` : '');
      }
      // # sourceMappingURL=RFC3966.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
      /**
 * Checks whether the entire input sequence can be matched
 * against the regular expression.
 * @return {boolean}
 */
      function matchesEntirely(text, regular_expression) {
        // If assigning the `''` default value is moved to the arguments above,
        // code coverage would decrease for some weird reason.
        text = text || '';
        return new RegExp(`^(?:${regular_expression})$`).test(text);
      }
      // # sourceMappingURL=matchesEntirely.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/getNumberType.js

      const NON_FIXED_LINE_PHONE_TYPES = ['MOBILE', 'PREMIUM_RATE', 'TOLL_FREE', 'SHARED_COST', 'VOIP', 'PERSONAL_NUMBER', 'PAGER', 'UAN', 'VOICEMAIL']; // Finds out national phone number type (fixed line, mobile, etc)

      function getNumberType(input, options, metadata) {
        // If assigning the `{}` default value is moved to the arguments above,
        // code coverage would decrease for some weird reason.
        options = options || {}; // When `parse()` returned `{}`
        // meaning that the phone number is not a valid one.

        if (!input.country) {
          return;
        }

        metadata = new Metadata(metadata);
        metadata.selectNumberingPlan(input.country, input.countryCallingCode);
        const nationalNumber = options.v2 ? input.nationalNumber : input.phone; // The following is copy-pasted from the original function:
        // https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835
        // Is this national number even valid for this country

        if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern())) {
          return;
        } // Is it fixed line number

        if (isNumberTypeEqualTo(nationalNumber, 'FIXED_LINE', metadata)) {
          // Because duplicate regular expressions are removed
          // to reduce metadata size, if "mobile" pattern is ""
          // then it means it was removed due to being a duplicate of the fixed-line pattern.
          //
          if (metadata.type('MOBILE') && metadata.type('MOBILE').pattern() === '') {
            return 'FIXED_LINE_OR_MOBILE';
          } // v1 metadata.
          // Legacy.
          // Deprecated.

          if (!metadata.type('MOBILE')) {
            return 'FIXED_LINE_OR_MOBILE';
          } // Check if the number happens to qualify as both fixed line and mobile.
          // (no such country in the minimal metadata set)

          /* istanbul ignore if */

          if (isNumberTypeEqualTo(nationalNumber, 'MOBILE', metadata)) {
            return 'FIXED_LINE_OR_MOBILE';
          }

          return 'FIXED_LINE';
        }

        for (let _i = 0, _NON_FIXED_LINE_PHONE = NON_FIXED_LINE_PHONE_TYPES; _i < _NON_FIXED_LINE_PHONE.length; _i++) {
          const type = _NON_FIXED_LINE_PHONE[_i];

          if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
            return type;
          }
        }
      }
      function isNumberTypeEqualTo(nationalNumber, type, metadata) {
        type = metadata.type(type);

        if (!type || !type.pattern()) {
          return false;
        } // Check if any possible number lengths are present;
        // if so, we use them to avoid checking
        // the validation pattern if they don't match.
        // If they are absent, this means they match
        // the general description, which we have
        // already checked before a specific number type.

        if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
          return false;
        }

        return matchesEntirely(nationalNumber, type.pattern());
      }
      // # sourceMappingURL=getNumberType.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/validate_.js

      /**
 * Checks if a given phone number is valid.
 *
 * If the `number` is a string, it will be parsed to an object,
 * but only if it contains only valid phone number characters (including punctuation).
 * If the `number` is an object, it is used as is.
 *
 * The optional `defaultCountry` argument is the default country.
 * I.e. it does not restrict to just that country,
 * e.g. in those cases where several countries share
 * the same phone numbering rules (NANPA, Britain, etc).
 * For example, even though the number `07624 369230`
 * belongs to the Isle of Man ("IM" country code)
 * calling `isValidNumber('07624369230', 'GB', metadata)`
 * still returns `true` because the country is not restricted to `GB`,
 * it's just that `GB` is the default one for the phone numbering rules.
 * For restricting the country see `isValidNumberForRegion()`
 * though restricting a country might not be a good idea.
 * https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
 *
 * Examples:
 *
 * ```js
 * isValidNumber('+78005553535', metadata)
 * isValidNumber('8005553535', 'RU', metadata)
 * isValidNumber('88005553535', 'RU', metadata)
 * isValidNumber({ phone: '8005553535', country: 'RU' }, metadata)
 * ```
 */

      function isValidNumber(input, options, metadata) {
        // If assigning the `{}` default value is moved to the arguments above,
        // code coverage would decrease for some weird reason.
        options = options || {};
        metadata = new Metadata(metadata); // This is just to support `isValidNumber({})`
        // for cases when `parseNumber()` returns `{}`.

        if (!input.country) {
          return false;
        }

        metadata.selectNumberingPlan(input.country, input.countryCallingCode); // By default, countries only have type regexps when it's required for
        // distinguishing different countries having the same `countryCallingCode`.

        if (metadata.hasTypes()) {
          return getNumberType(input, options, metadata.metadata) !== undefined;
        } // If there are no type regexps for this country in metadata then use
        // `nationalNumberPattern` as a "better than nothing" replacement.

        const national_number = options.v2 ? input.nationalNumber : input.phone;
        return matchesEntirely(national_number, metadata.nationalNumberPattern());
      }
      // # sourceMappingURL=validate_.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
      // Removes brackets and replaces dashes with spaces.
      //
      // E.g. "(999) 111-22-33" -> "999 111 22 33"
      //
      // For some reason Google's metadata contains `<intlFormat/>`s with brackets and dashes.
      // Meanwhile, there's no single opinion about using punctuation in international phone numbers.
      //
      // For example, Google's `<intlFormat/>` for USA is `+1 213-373-4253`.
      // And here's a quote from WikiPedia's "North American Numbering Plan" page:
      // https://en.wikipedia.org/wiki/North_American_Numbering_Plan
      //
      // "The country calling code for all countries participating in the NANP is 1.
      // In international format, an NANP number should be listed as +1 301 555 01 00,
      // where 301 is an area code (Maryland)."
      //
      // I personally prefer the international format without any punctuation.
      // For example, brackets are remnants of the old age, meaning that the
      // phone number part in brackets (so called "area code") can be omitted
      // if dialing within the same "area".
      // And hyphens were clearly introduced for splitting local numbers into memorizable groups.
      // For example, remembering "5553535" is difficult but "555-35-35" is much simpler.
      // Imagine a man taking a bus from home to work and seeing an ad with a phone number.
      // He has a couple of seconds to memorize that number until it passes by.
      // If it were spaces instead of hyphens the man wouldn't necessarily get it,
      // but with hyphens instead of spaces the grouping is more explicit.
      // I personally think that hyphens introduce visual clutter,
      // so I prefer replacing them with spaces in international numbers.
      // In the modern age all output is done on displays where spaces are clearly distinguishable
      // so hyphens can be safely replaced with spaces without losing any legibility.
      //

      function applyInternationalSeparatorStyle(formattedNumber) {
        return formattedNumber.replace(new RegExp('['.concat(VALID_PUNCTUATION, ']+'), 'g'), ' ').trim();
      }
      // # sourceMappingURL=applyInternationalSeparatorStyle.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
      // This was originally set to $1 but there are some countries for which the
      // first group is not used in the national pattern (e.g. Argentina) so the $1
      // group does not match correctly. Therefore, we use `\d`, so that the first
      // group actually used in the pattern will be matched.

      const FIRST_GROUP_PATTERN = /(\$\d)/;
      function formatNationalNumberUsingFormat(number, format, _ref) {
        const { useInternationalFormat } = _ref;
        const { withNationalPrefix } = _ref;
        const { carrierCode } = _ref;
        const { metadata } = _ref;
        const formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() // This library doesn't use `domestic_carrier_code_formatting_rule`,
        // because that one is only used when formatting phone numbers
        // for dialing from a mobile phone, and this is not a dialing library.
        // carrierCode && format.domesticCarrierCodeFormattingRule()
        // 	// First, replace the $CC in the formatting rule with the desired carrier code.
        // 	// Then, replace the $FG in the formatting rule with the first group
        // 	// and the carrier code combined in the appropriate way.
        // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
        // 	: (
        // 		withNationalPrefix && format.nationalPrefixFormattingRule()
        // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
        // 			: format.format()
        // 	)
          : withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format());

        if (useInternationalFormat) {
          return applyInternationalSeparatorStyle(formattedNumber);
        }

        return formattedNumber;
      }
      // # sourceMappingURL=formatNationalNumberUsingFormat.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js

      /**
 * Pattern that makes it easy to distinguish whether a region has a single
 * international dialing prefix or not. If a region has a single international
 * prefix (e.g. 011 in USA), it will be represented as a string that contains
 * a sequence of ASCII digits, and possibly a tilde, which signals waiting for
 * the tone. If there are multiple available international prefixes in a
 * region, they will be represented as a regex string that always contains one
 * or more characters that are not ASCII digits or a tilde.
 */

      const SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/; // For regions that have multiple IDD prefixes
      // a preferred IDD prefix is returned.

      function getIddPrefix(country, callingCode, metadata) {
        const countryMetadata = new Metadata(metadata);
        countryMetadata.selectNumberingPlan(country, callingCode);

        if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
          return countryMetadata.IDDPrefix();
        }

        return countryMetadata.defaultIDDPrefix();
      }
      // # sourceMappingURL=getIddPrefix.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/format_.js
      function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((sym) => Object.getOwnPropertyDescriptor(source, sym).enumerable)); } ownKeys.forEach((key) => { _defineProperty(target, key, source[key]); }); } return target; }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }

      // This is a port of Google Android `libphonenumber`'s
      // `phonenumberutil.js` of December 31th, 2018.
      //
      // https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js

      const DEFAULT_OPTIONS = {
        formatExtension: function formatExtension(formattedNumber, extension, metadata) {
          return ''.concat(formattedNumber).concat(metadata.ext()).concat(extension);
        }, // Formats a phone number
        //
        // Example use cases:
        //
        // ```js
        // formatNumber('8005553535', 'RU', 'INTERNATIONAL')
        // formatNumber('8005553535', 'RU', 'INTERNATIONAL', metadata)
        // formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL')
        // formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL', metadata)
        // formatNumber('+78005553535', 'NATIONAL')
        // formatNumber('+78005553535', 'NATIONAL', metadata)
        // ```
        //

      };
      function formatNumber(input, format, options, metadata) {
        // Apply default options.
        if (options) {
          options = _objectSpread({}, DEFAULT_OPTIONS, options);
        } else {
          options = DEFAULT_OPTIONS;
        }

        metadata = new Metadata(metadata);

        if (input.country && input.country !== '001') {
          // Validate `input.country`.
          if (!metadata.hasCountry(input.country)) {
            throw new Error('Unknown country: '.concat(input.country));
          }

          metadata.country(input.country);
        } else if (input.countryCallingCode) {
          metadata.selectNumberingPlan(input.countryCallingCode);
        } else return input.phone || '';

        const countryCallingCode = metadata.countryCallingCode();
        const nationalNumber = options.v2 ? input.nationalNumber : input.phone; // This variable should have been declared inside `case`s
        // but Babel has a bug and it says "duplicate variable declaration".

        let number;

        switch (format) {
          case 'NATIONAL':
            // Legacy argument support.
            // (`{ country: ..., phone: '' }`)
            if (!nationalNumber) {
              return '';
            }

            number = formatNationalNumber(nationalNumber, input.carrierCode, 'NATIONAL', metadata, options);
            return addExtension(number, input.ext, metadata, options.formatExtension);

          case 'INTERNATIONAL':
            // Legacy argument support.
            // (`{ country: ..., phone: '' }`)
            if (!nationalNumber) {
              return '+'.concat(countryCallingCode);
            }

            number = formatNationalNumber(nationalNumber, null, 'INTERNATIONAL', metadata, options);
            number = '+'.concat(countryCallingCode, ' ').concat(number);
            return addExtension(number, input.ext, metadata, options.formatExtension);

          case 'E.164':
            // `E.164` doesn't define "phone number extensions".
            return '+'.concat(countryCallingCode).concat(nationalNumber);

          case 'RFC3966':
            return formatRFC3966({
              number: '+'.concat(countryCallingCode).concat(nationalNumber),
              ext: input.ext,
            });
            // For reference, here's Google's IDD formatter:
            // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
            // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
            // Who would even need to format phone numbers in IDD format anyway?

          case 'IDD':
            if (!options.fromCountry) {
              return; // throw new Error('`fromCountry` option not passed for IDD-prefixed formatting.')
            }

            var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
            return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);

          default:
            throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(format, '"'));
        }
      }

      function formatNationalNumber(number, carrierCode, formatAs, metadata, options) {
        const format = chooseFormatForNumber(metadata.formats(), number);

        if (!format) {
          return number;
        }

        return formatNationalNumberUsingFormat(number, format, {
          useInternationalFormat: formatAs === 'INTERNATIONAL',
          withNationalPrefix: !(format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false),
          carrierCode,
          metadata,
        });
      }

      function chooseFormatForNumber(availableFormats, nationalNnumber) {
        for (var _iterator = availableFormats, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          const format = _ref;

          // Validate leading digits
          if (format.leadingDigitsPatterns().length > 0) {
            // The last leading_digits_pattern is used here, as it is the most detailed
            const lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1]; // If leading digits don't match then move on to the next phone number format

            if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
              continue;
            }
          } // Check that the national number matches the phone number format regular expression

          if (matchesEntirely(nationalNnumber, format.pattern())) {
            return format;
          }
        }
      }

      function addExtension(formattedNumber, ext, metadata, formatExtension) {
        return ext ? formatExtension(formattedNumber, ext, metadata) : formattedNumber;
      }

      function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
        const fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata.metadata); // When calling within the same country calling code.

        if (fromCountryCallingCode === countryCallingCode) {
          const formattedNumber = formatNationalNumber(nationalNumber, carrierCode, 'NATIONAL', metadata); // For NANPA regions, return the national format for these regions
          // but prefix it with the country calling code.

          if (countryCallingCode === '1') {
            return `${countryCallingCode} ${formattedNumber}`;
          } // If regions share a country calling code, the country calling code need
          // not be dialled. This also applies when dialling within a region, so this
          // if clause covers both these cases. Technically this is the case for
          // dialling from La Reunion to other overseas departments of France (French
          // Guiana, Martinique, Guadeloupe), but not vice versa - so we don't cover
          // this edge case for now and for those cases return the version including
          // country calling code. Details here:
          // http://www.petitfute.com/voyage/225-info-pratiques-reunion
          //

          return formattedNumber;
        }

        const iddPrefix = getIddPrefix(fromCountry, undefined, metadata.metadata);

        if (iddPrefix) {
          return ''.concat(iddPrefix, ' ').concat(countryCallingCode, ' ').concat(formatNationalNumber(nationalNumber, null, 'INTERNATIONAL', metadata));
        }
      }
      // # sourceMappingURL=format_.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/PhoneNumber.js
      function PhoneNumber_objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((sym) => Object.getOwnPropertyDescriptor(source, sym).enumerable)); } ownKeys.forEach((key) => { PhoneNumber_defineProperty(target, key, source[key]); }); } return target; }

      function PhoneNumber_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }

      function PhoneNumber_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function PhoneNumber_defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function PhoneNumber_createClass(Constructor, protoProps, staticProps) { if (protoProps) PhoneNumber_defineProperties(Constructor.prototype, protoProps); if (staticProps) PhoneNumber_defineProperties(Constructor, staticProps); return Constructor; }

      const USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;

      const PhoneNumber_PhoneNumber =
/* #__PURE__ */
(function () {
  function PhoneNumber(countryCallingCode, nationalNumber, metadata) {
    PhoneNumber_classCallCheck(this, PhoneNumber);

    if (!countryCallingCode) {
      throw new TypeError('`country` or `countryCallingCode` not passed');
    }

    if (!nationalNumber) {
      throw new TypeError('`nationalNumber` not passed');
    }

    const _metadata = new Metadata(metadata); // If country code is passed then derive `countryCallingCode` from it.
    // Also store the country code as `.country`.

    if (isCountryCode(countryCallingCode)) {
      this.country = countryCallingCode;

      _metadata.country(countryCallingCode);

      countryCallingCode = _metadata.countryCallingCode();
    } else {
      /* istanbul ignore if */
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        if (_metadata.isNonGeographicCallingCode(countryCallingCode)) {
          this.country = '001';
        }
      }
    }

    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = `+${this.countryCallingCode}${this.nationalNumber}`;
    this.metadata = metadata;
  }

  PhoneNumber_createClass(PhoneNumber, [{
    key: 'isPossible',
    value: function isPossible() {
      return isPossiblePhoneNumber(this, {
        v2: true,
      }, this.metadata);
    },
  }, {
    key: 'isValid',
    value: function isValid() {
      return isValidNumber(this, {
        v2: true,
      }, this.metadata);
    },
  }, {
    key: 'isNonGeographic',
    value: function isNonGeographic() {
      const metadata = new Metadata(this.metadata);
      return metadata.isNonGeographicCallingCode(this.countryCallingCode);
    },
  }, {
    key: 'isEqual',
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    }, // // Is just an alias for `this.isValid() && this.country === country`.
    // // https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
    // isValidForRegion(country) {
    // 	return isValidNumberForRegion(this, country, { v2: true }, this.metadata)
    // }

  }, {
    key: 'getType',
    value: function getType() {
      return getNumberType(this, {
        v2: true,
      }, this.metadata);
    },
  }, {
    key: 'format',
    value: function format(_format, options) {
      return formatNumber(this, _format, options ? PhoneNumber_objectSpread({}, options, {
        v2: true,
      }) : {
        v2: true,
      }, this.metadata);
    },
  }, {
    key: 'formatNational',
    value: function formatNational(options) {
      return this.format('NATIONAL', options);
    },
  }, {
    key: 'formatInternational',
    value: function formatInternational(options) {
      return this.format('INTERNATIONAL', options);
    },
  }, {
    key: 'getURI',
    value: function getURI(options) {
      return this.format('RFC3966', options);
    },
  }]);

  return PhoneNumber;
}());

      var isCountryCode = function isCountryCode(value) {
        return /^[A-Z]{2}$/.test(value);
      };
      // # sourceMappingURL=PhoneNumber.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js

      const CAPTURING_DIGIT_PATTERN = new RegExp(`([${VALID_DIGITS}])`);
      function stripIddPrefix(number, country, callingCode, metadata) {
        if (!country) {
          return;
        } // Check if the number is IDD-prefixed.

        const countryMetadata = new Metadata(metadata);
        countryMetadata.selectNumberingPlan(country, callingCode);
        const IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());

        if (number.search(IDDPrefixPattern) !== 0) {
          return;
        } // Strip IDD prefix.

        number = number.slice(number.match(IDDPrefixPattern)[0].length); // If there're any digits after an IDD prefix,
        // then those digits are a country calling code.
        // Since no country code starts with a `0`,
        // the code below validates that the next digit (if present) is not `0`.

        const matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);

        if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
          if (matchedGroups[1] === '0') {
            return;
          }
        }

        return number;
      }
      // # sourceMappingURL=stripIddPrefix.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
      /**
 * Strips any national prefix (such as 0, 1) present in a
 * (possibly incomplete) number provided.
 * "Carrier codes" are only used  in Colombia and Brazil,
 * and only when dialing within those countries from a mobile phone to a fixed line number.
 * Sometimes it won't actually strip national prefix
 * and will instead prepend some digits to the `number`:
 * for example, when number `2345678` is passed with `VI` country selected,
 * it will return `{ number: "3402345678" }`, because `340` area code is prepended.
 * @param {string} number — National number digits.
 * @param {object} metadata — Metadata with country selected.
 * @return {object} `{ nationalNumber: string, nationalPrefix: string? carrierCode: string? }`.
 */
      function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata) {
        if (number && metadata.numberingPlan.nationalPrefixForParsing()) {
          // See METADATA.md for the description of
          // `national_prefix_for_parsing` and `national_prefix_transform_rule`.
          // Attempt to parse the first digits as a national prefix.
          const prefixPattern = new RegExp(`^(?:${metadata.numberingPlan.nationalPrefixForParsing()})`);
          const prefixMatch = prefixPattern.exec(number);

          if (prefixMatch) {
            let nationalNumber;
            let carrierCode; // https://gitlab.com/catamphetamine/libphonenumber-js/-/blob/master/METADATA.md#national_prefix_for_parsing--national_prefix_transform_rule
            // If a `national_prefix_for_parsing` has any "capturing groups"
            // then it means that the national (significant) number is equal to
            // those "capturing groups" transformed via `national_prefix_transform_rule`,
            // and nothing could be said about the actual national prefix:
            // what is it and was it even there.
            // If a `national_prefix_for_parsing` doesn't have any "capturing groups",
            // then everything it matches is a national prefix.
            // To determine whether `national_prefix_for_parsing` matched any
            // "capturing groups", the value of the result of calling `.exec()`
            // is looked at, and if it has non-undefined values where there're
            // "capturing groups" in the regular expression, then it means
            // that "capturing groups" have been matched.
            // It's not possible to tell whether there'll be any "capturing gropus"
            // before the matching process, because a `national_prefix_for_parsing`
            // could exhibit both behaviors.

            const capturedGroupsCount = prefixMatch.length - 1;
            const hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];

            if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
              nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule()); // If there's more than one captured group,
              // then carrier code is the second one.

              if (capturedGroupsCount > 1) {
                carrierCode = prefixMatch[1];
              }
            } // If there're no "capturing groups",
            // or if there're "capturing groups" but no
            // `national_prefix_transform_rule`,
            // then just strip the national prefix from the number,
            // and possibly a carrier code.
            // Seems like there could be more.
            else {
              // `prefixBeforeNationalNumber` is the whole substring matched by
              // the `national_prefix_for_parsing` regular expression.
              // There seem to be no guarantees that it's just a national prefix.
              // For example, if there's a carrier code, it's gonna be a
              // part of `prefixBeforeNationalNumber` too.
              const prefixBeforeNationalNumber = prefixMatch[0];
              nationalNumber = number.slice(prefixBeforeNationalNumber.length); // If there's at least one captured group,
              // then carrier code is the first one.

              if (hasCapturedGroups) {
                carrierCode = prefixMatch[1];
              }
            } // Tries to guess whether a national prefix was present in the input.
            // This is not something copy-pasted from Google's library:
            // they don't seem to have an equivalent for that.
            // So this isn't an "officially approved" way of doing something like that.
            // But since there seems no other existing method, this library uses it.

            let nationalPrefix;

            if (hasCapturedGroups) {
              const possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
              const possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup); // Example: an Argentinian (AR) phone number `0111523456789`.
              // `prefixMatch[0]` is `01115`, and `$1` is `11`,
              // and the rest of the phone number is `23456789`.
              // The national number is transformed via `9$1` to `91123456789`.
              // National prefix `0` is detected being present at the start.
              // if (possibleNationalPrefix.indexOf(metadata.numberingPlan.nationalPrefix()) === 0) {

              if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
                nationalPrefix = metadata.numberingPlan.nationalPrefix();
              }
            } else {
              nationalPrefix = prefixMatch[0];
            }

            return {
              nationalNumber,
              nationalPrefix,
              carrierCode,
            };
          }
        }

        return {
          nationalNumber: number,
        };
      }
      // # sourceMappingURL=extractNationalNumberFromPossiblyIncompleteNumber.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js

      /**
 * Strips national prefix and carrier code from a complete phone number.
 * The difference from the non-"FromCompleteNumber" function is that
 * it won't extract national prefix if the resultant number is too short
 * to be a complete number for the selected phone numbering plan.
 * @param  {string} number — Complete phone number digits.
 * @param  {Metadata} metadata — Metadata with a phone numbering plan selected.
 * @return {object} `{ nationalNumber: string, carrierCode: string? }`.
 */

      function extractNationalNumber(number, metadata) {
        // Parsing national prefixes and carrier codes
        // is only required for local phone numbers
        // but some people don't understand that
        // and sometimes write international phone numbers
        // with national prefixes (or maybe even carrier codes).
        // http://ucken.blogspot.ru/2016/03/trunk-prefixes-in-skype4b.html
        // Google's original library forgives such mistakes
        // and so does this library, because it has been requested:
        // https://github.com/catamphetamine/libphonenumber-js/issues/127
        const _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number, metadata);
        const { nationalNumber } = _extractNationalNumbe;
        const { carrierCode } = _extractNationalNumbe;

        if (!shouldExtractNationalPrefix(number, nationalNumber, metadata)) {
          // Don't strip the national prefix.
          return {
            nationalNumber: number,
          };
        } // If a national prefix has been extracted, check to see
        // if the resultant number isn't too short.
        // Same code in Google's `libphonenumber`:
        // https://github.com/google/libphonenumber/blob/e326fa1fc4283bb05eb35cb3c15c18f98a31af33/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L3291-L3302
        // For some reason, they do this check right after the `national_number_pattern` check
        // this library does in `shouldExtractNationalPrefix()` function.
        // Why is there a second "resultant" number validity check?
        // They don't provide an explanation.
        // This library just copies the behavior.

        if (number.length !== nationalNumber.length + (carrierCode ? carrierCode.length : 0)) {
          // If not using legacy generated metadata (before version `1.0.18`)
          // then it has "possible lengths", so use those to validate the number length.
          if (metadata.possibleLengths()) {
            // "We require that the NSN remaining after stripping the national prefix and
            // carrier code be long enough to be a possible length for the region.
            // Otherwise, we don't do the stripping, since the original number could be
            // a valid short number."
            // https://github.com/google/libphonenumber/blob/876268eb1ad6cdc1b7b5bef17fc5e43052702d57/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L3236-L3250
            switch (checkNumberLength(nationalNumber, metadata)) {
              case 'TOO_SHORT':
              case 'INVALID_LENGTH':
                // case 'IS_POSSIBLE_LOCAL_ONLY':
                // Don't strip the national prefix.
                return {
                  nationalNumber: number,
                };
            }
          }
        }

        return {
          nationalNumber,
          carrierCode,
        };
      } // In some countries, the same digit could be a national prefix
      // or a leading digit of a valid phone number.
      // For example, in Russia, national prefix is `8`,
      // and also `800 555 35 35` is a valid number
      // in which `8` is not a national prefix, but the first digit
      // of a national (significant) number.
      // Same's with Belarus:
      // `82004910060` is a valid national (significant) number,
      // but `2004910060` is not.
      // To support such cases (to prevent the code from always stripping
      // national prefix), a condition is imposed: a national prefix
      // is not extracted when the original number is "viable" and the
      // resultant number is not, a "viable" national number being the one
      // that matches `national_number_pattern`.

      function shouldExtractNationalPrefix(number, nationalSignificantNumber, metadata) {
        // The equivalent in Google's code is:
        // https://github.com/google/libphonenumber/blob/e326fa1fc4283bb05eb35cb3c15c18f98a31af33/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L2969-L3004
        if (matchesEntirely(number, metadata.nationalNumberPattern()) && !matchesEntirely(nationalSignificantNumber, metadata.nationalNumberPattern())) {
          return false;
        } // Just "possible" number check would be more relaxed, so it's not used.
        // if (isPossibleNumber(number, metadata) &&
        // 	!isPossibleNumber(numberWithNationalPrefixExtracted, metadata)) {
        // 	return false
        // }

        return true;
      }
      // # sourceMappingURL=extractNationalNumber.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js

      /**
 * Sometimes some people incorrectly input international phone numbers
 * without the leading `+`. This function corrects such input.
 * @param  {string} number — Phone number digits.
 * @param  {string?} country
 * @param  {string?} callingCode
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`.
 */

      function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata) {
        const countryCallingCode = country ? getCountryCallingCode(country, metadata) : callingCode;

        if (number.indexOf(countryCallingCode) === 0) {
          metadata = new Metadata(metadata);
          metadata.selectNumberingPlan(country, callingCode);
          const possibleShorterNumber = number.slice(countryCallingCode.length);

          const _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, metadata);
          const possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;

          const _extractNationalNumbe2 = extractNationalNumber(number, metadata);
          const { nationalNumber } = _extractNationalNumbe2; // If the number was not valid before but is valid now,
          // or if it was too long before, we consider the number
          // with the country calling code stripped to be a better result
          // and keep that instead.
          // For example, in Germany (+49), `49` is a valid area code,
          // so if a number starts with `49`, it could be both a valid
          // national German number or an international number without
          // a leading `+`.

          if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || checkNumberLength(nationalNumber, metadata) === 'TOO_LONG') {
            return {
              countryCallingCode,
              number: possibleShorterNumber,
            };
          }
        }

        return {
          number,
        };
      }
      // # sourceMappingURL=extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js

      /**
 * Converts a phone number digits (possibly with a `+`)
 * into a calling code and the rest phone number digits.
 * The "rest phone number digits" could include
 * a national prefix, carrier code, and national
 * (significant) number.
 * @param  {string} number — Phone number digits (possibly with a `+`).
 * @param  {string} [country] — Default country.
 * @param  {string} [callingCode] — Default calling code (some phone numbering plans are non-geographic).
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`
 * @example
 * // Returns `{ countryCallingCode: "1", number: "2133734253" }`.
 * extractCountryCallingCode('2133734253', 'US', null, metadata)
 * extractCountryCallingCode('2133734253', null, '1', metadata)
 * extractCountryCallingCode('+12133734253', null, null, metadata)
 * extractCountryCallingCode('+12133734253', 'RU', null, metadata)
 */

      function extractCountryCallingCode(number, country, callingCode, metadata) {
        if (!number) {
          return {};
        } // If this is not an international phone number,
        // then either extract an "IDD" prefix, or extract a
        // country calling code from a number by autocorrecting it
        // by prepending a leading `+` in cases when it starts
        // with the country calling code.
        // https://wikitravel.org/en/International_dialling_prefix
        // https://github.com/catamphetamine/libphonenumber-js/issues/376

        if (number[0] !== '+') {
          // Convert an "out-of-country" dialing phone number
          // to a proper international phone number.
          const numberWithoutIDD = stripIddPrefix(number, country, callingCode, metadata); // If an IDD prefix was stripped then
          // convert the number to international one
          // for subsequent parsing.

          if (numberWithoutIDD && numberWithoutIDD !== number) {
            number = `+${numberWithoutIDD}`;
          } else {
            // Check to see if the number starts with the country calling code
            // for the default country. If so, we remove the country calling code,
            // and do some checks on the validity of the number before and after.
            // https://github.com/catamphetamine/libphonenumber-js/issues/376
            if (country || callingCode) {
              const _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata);
              const { countryCallingCode } = _extractCountryCallin;
              const shorterNumber = _extractCountryCallin.number;

              if (countryCallingCode) {
                return {
                  countryCallingCode,
                  number: shorterNumber,
                };
              }
            }

            return {
              number,
            };
          }
        } // Fast abortion: country codes do not begin with a '0'

        if (number[1] === '0') {
          return {};
        }

        metadata = new Metadata(metadata); // The thing with country phone codes
        // is that they are orthogonal to each other
        // i.e. there's no such country phone code A
        // for which country phone code B exists
        // where B starts with A.
        // Therefore, while scanning digits,
        // if a valid country code is found,
        // that means that it is the country code.
        //

        let i = 2;

        while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
          const _countryCallingCode = number.slice(1, i);

          if (metadata.hasCallingCode(_countryCallingCode)) {
            metadata.selectNumberingPlan(_countryCallingCode);
            return {
              countryCallingCode: _countryCallingCode,
              number: number.slice(i),
            };
          }

          i++;
        }

        return {};
      }
      // # sourceMappingURL=extractCountryCallingCode.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js

      const getCountryByCallingCode_USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
      function getCountryByCallingCode(callingCode, nationalPhoneNumber, metadata) {
        /* istanbul ignore if */
        if (getCountryByCallingCode_USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
          if (metadata.isNonGeographicCallingCode(callingCode)) {
            return '001';
          }
        } // Is always non-empty, because `callingCode` is always valid

        const possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);

        if (!possibleCountries) {
          return;
        } // If there's just one country corresponding to the country code,
        // then just return it, without further phone number digits validation.

        if (possibleCountries.length === 1) {
          return possibleCountries[0];
        }

        return selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata.metadata);
      }

      function selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata) {
        // Re-create `metadata` because it will be selecting a `country`.
        metadata = new Metadata(metadata);

        for (var _iterator = possibleCountries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          const country = _ref;
          metadata.country(country); // Leading digits check would be the simplest one

          if (metadata.leadingDigits()) {
            if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
              return country;
            }
          } // Else perform full validation with all of those
          // fixed-line/mobile/etc regular expressions.
          else if (getNumberType({
            phone: nationalPhoneNumber,
            country,
          }, undefined, metadata.metadata)) {
            return country;
          }
        }
      }
      // # sourceMappingURL=getCountryByCallingCode.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parse_.js
      // This is a port of Google Android `libphonenumber`'s
      // `phonenumberutil.js` of December 31th, 2018.
      //
      // https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js

      // We don't allow input strings for parsing to be longer than 250 chars.
      // This prevents malicious input from consuming CPU.

      const MAX_INPUT_STRING_LENGTH = 250; // This consists of the plus symbol, digits, and arabic-indic digits.

      const PHONE_NUMBER_START_PATTERN = new RegExp(`[${PLUS_CHARS}${VALID_DIGITS}]`); // Regular expression of trailing characters that we want to remove.
      // A trailing `#` is sometimes used when writing phone numbers with extensions in US.
      // Example: "+1 (645) 123 1234-910#" number has extension "910".

      const AFTER_PHONE_NUMBER_END_PATTERN = new RegExp(`[^${VALID_DIGITS}#` + ']+$');
      const parse_USE_NON_GEOGRAPHIC_COUNTRY_CODE = false; // Examples:
      //
      // ```js
      // parse('8 (800) 555-35-35', 'RU')
      // parse('8 (800) 555-35-35', 'RU', metadata)
      // parse('8 (800) 555-35-35', { country: { default: 'RU' } })
      // parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
      // parse('+7 800 555 35 35')
      // parse('+7 800 555 35 35', metadata)
      // ```
      //

      function parse(text, options, metadata) {
        // If assigning the `{}` default value is moved to the arguments above,
        // code coverage would decrease for some weird reason.
        options = options || {};
        metadata = new Metadata(metadata); // Validate `defaultCountry`.

        if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
          if (options.v2) {
            throw new ParseError('INVALID_COUNTRY');
          }

          throw new Error('Unknown country: '.concat(options.defaultCountry));
        } // Parse the phone number.

        const _parseInput = parseInput(text, options.v2, options.extract);
        const formattedPhoneNumber = _parseInput.number;
        const { ext } = _parseInput; // If the phone number is not viable then return nothing.

        if (!formattedPhoneNumber) {
          if (options.v2) {
            throw new ParseError('NOT_A_NUMBER');
          }

          return {};
        }

        const _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata);
        const { country } = _parsePhoneNumber;
        const { nationalNumber } = _parsePhoneNumber;
        const { countryCallingCode } = _parsePhoneNumber;
        const { carrierCode } = _parsePhoneNumber;

        if (!metadata.hasSelectedNumberingPlan()) {
          if (options.v2) {
            throw new ParseError('INVALID_COUNTRY');
          }

          return {};
        } // Validate national (significant) number length.

        if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
          // Won't throw here because the regexp already demands length > 1.

          /* istanbul ignore if */
          if (options.v2) {
            throw new ParseError('TOO_SHORT');
          } // Google's demo just throws an error in this case.

          return {};
        } // Validate national (significant) number length.
        //
        // A sidenote:
        //
        // They say that sometimes national (significant) numbers
        // can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
        // https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
        // Such numbers will just be discarded.
        //

        if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
          if (options.v2) {
            throw new ParseError('TOO_LONG');
          } // Google's demo just throws an error in this case.

          return {};
        }

        if (options.v2) {
          const phoneNumber = new PhoneNumber_PhoneNumber(countryCallingCode, nationalNumber, metadata.metadata);

          if (country) {
            phoneNumber.country = country;
          }

          if (carrierCode) {
            phoneNumber.carrierCode = carrierCode;
          }

          if (ext) {
            phoneNumber.ext = ext;
          }

          return phoneNumber;
        } // Check if national phone number pattern matches the number.
        // National number pattern is different for each country,
        // even for those ones which are part of the "NANPA" group.

        const valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) : false;

        if (!options.extended) {
          return valid ? parse_result(country, nationalNumber, ext) : {};
        } // isInternational: countryCallingCode !== undefined

        return {
          country,
          countryCallingCode,
          carrierCode,
          valid,
          possible: valid ? true : !!(options.extended === true && metadata.possibleLengths() && isPossibleNumber(nationalNumber, metadata)),
          phone: nationalNumber,
          ext,
        };
      }
      /**
 * Extracts a formatted phone number from text.
 * Doesn't guarantee that the extracted phone number
 * is a valid phone number (for example, doesn't validate its length).
 * @param  {string} text
 * @param  {boolean} [extract] — If `false`, then will parse the entire `text` as a phone number.
 * @param  {boolean} [throwOnError] — By default, it won't throw if the text is too long.
 * @return {string}
 * @example
 * // Returns "(213) 373-4253".
 * extractFormattedPhoneNumber("Call (213) 373-4253 for assistance.")
 */

      function extractFormattedPhoneNumber(text, extract, throwOnError) {
        if (!text) {
          return;
        }

        if (text.length > MAX_INPUT_STRING_LENGTH) {
          if (throwOnError) {
            throw new ParseError('TOO_LONG');
          }

          return;
        }

        if (extract === false) {
          return text;
        } // Attempt to extract a possible number from the string passed in

        const startsAt = text.search(PHONE_NUMBER_START_PATTERN);

        if (startsAt < 0) {
          return;
        }

        return text // Trim everything to the left of the phone number
          .slice(startsAt) // Remove trailing non-numerical characters
          .replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
      }
      /**
 * @param  {string} text - Input.
 * @param  {boolean} v2 - Legacy API functions don't pass `v2: true` flag.
 * @param  {boolean} [extract] - Whether to extract a phone number from `text`, or attempt to parse the entire text as a phone number.
 * @return {object} `{ ?number, ?ext }`.
 */

      function parseInput(text, v2, extract) {
        // Parse RFC 3966 phone number URI.
        if (text && text.indexOf('tel:') === 0) {
          return parseRFC3966(text);
        }

        const number = extractFormattedPhoneNumber(text, extract, v2); // If the phone number is not viable, then abort.

        if (!number || !isViablePhoneNumber(number)) {
          return {};
        } // Attempt to parse extension first, since it doesn't require region-specific
        // data and we want to have the non-normalised number here.

        const withExtensionStripped = extractExtension(number);

        if (withExtensionStripped.ext) {
          return withExtensionStripped;
        }

        return {
          number,
        };
      }
      /**
 * Creates `parse()` result object.
 */

      function parse_result(country, nationalNumber, ext) {
        const result = {
          country,
          phone: nationalNumber,
        };

        if (ext) {
          result.ext = ext;
        }

        return result;
      }
      /**
 * Parses a viable phone number.
 * @param {string} formattedPhoneNumber — Example: "(213) 373-4253".
 * @param {string} [defaultCountry]
 * @param {string} [defaultCallingCode]
 * @param {Metadata} metadata
 * @return {object} Returns `{ country: string?, countryCallingCode: string?, nationalNumber: string? }`.
 */

      function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
        // Extract calling code from phone number.
        const _extractCountryCallin = extractCountryCallingCode(parseIncompletePhoneNumber(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata.metadata);
        let { countryCallingCode } = _extractCountryCallin;
        const { number } = _extractCountryCallin; // Choose a country by `countryCallingCode`.

        let country;

        if (countryCallingCode) {
          metadata.selectNumberingPlan(countryCallingCode);
        } // If `formattedPhoneNumber` is in "national" format
        // then `number` is defined and `countryCallingCode` isn't.
        else if (number && (defaultCountry || defaultCallingCode)) {
          metadata.selectNumberingPlan(defaultCountry, defaultCallingCode);

          if (defaultCountry) {
            country = defaultCountry;
          } else {
            /* istanbul ignore if */
            if (parse_USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
              if (metadata.isNonGeographicCallingCode(defaultCallingCode)) {
                country = '001';
              }
            }
          }

          countryCallingCode = defaultCallingCode || getCountryCallingCode(defaultCountry, metadata.metadata);
        } else return {};

        if (!number) {
          return {
            countryCallingCode,
          };
        }

        const _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number), metadata);
        const { nationalNumber } = _extractNationalNumbe;
        const { carrierCode } = _extractNationalNumbe; // Sometimes there are several countries
        // corresponding to the same country phone code
        // (e.g. NANPA countries all having `1` country phone code).
        // Therefore, to reliably determine the exact country,
        // national (significant) number should have been parsed first.
        //
        // When `metadata.json` is generated, all "ambiguous" country phone codes
        // get their countries populated with the full set of
        // "phone number type" regular expressions.
        //

        const exactCountry = getCountryByCallingCode(countryCallingCode, nationalNumber, metadata);

        if (exactCountry) {
          country = exactCountry;
          /* istanbul ignore if */

          if (exactCountry === '001') { // Can't happen with `USE_NON_GEOGRAPHIC_COUNTRY_CODE` being `false`.
            // If `USE_NON_GEOGRAPHIC_COUNTRY_CODE` is set to `true` for some reason,
            // then remove the "istanbul ignore if".
          } else {
            metadata.country(country);
          }
        }

        return {
          country,
          countryCallingCode,
          nationalNumber,
          carrierCode,
        };
      }
      // # sourceMappingURL=parse_.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
      function parsePhoneNumber_objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((sym) => Object.getOwnPropertyDescriptor(source, sym).enumerable)); } ownKeys.forEach((key) => { parsePhoneNumber_defineProperty(target, key, source[key]); }); } return target; }

      function parsePhoneNumber_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }

      function parsePhoneNumber_parsePhoneNumber(text, options, metadata) {
        return parse(text, parsePhoneNumber_objectSpread({}, options, {
          v2: true,
        }), metadata);
      }
      // # sourceMappingURL=parsePhoneNumber_.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parsePhoneNumber.js
      function parsePhoneNumber_typeof(obj) { if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { parsePhoneNumber_typeof = function _typeof(obj) { return typeof obj; }; } else { parsePhoneNumber_typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return parsePhoneNumber_typeof(obj); }

      function es6_parsePhoneNumber_objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((sym) => Object.getOwnPropertyDescriptor(source, sym).enumerable)); } ownKeys.forEach((key) => { es6_parsePhoneNumber_defineProperty(target, key, source[key]); }); } return target; }

      function es6_parsePhoneNumber_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }

      function parsePhoneNumber_slicedToArray(arr, i) { return parsePhoneNumber_arrayWithHoles(arr) || parsePhoneNumber_iterableToArrayLimit(arr, i) || parsePhoneNumber_nonIterableRest(); }

      function parsePhoneNumber_nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance'); }

      function parsePhoneNumber_iterableToArrayLimit(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr; }

      function parsePhoneNumber_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

      function es6_parsePhoneNumber_parsePhoneNumber() {
        const _normalizeArguments = normalizeArguments(arguments);
        const { text } = _normalizeArguments;
        const { options } = _normalizeArguments;
        const { metadata } = _normalizeArguments;

        return parsePhoneNumber_parsePhoneNumber(text, options, metadata);
      }
      function normalizeArguments(args) {
        const _Array$prototype$slic = Array.prototype.slice.call(args);
        const _Array$prototype$slic2 = parsePhoneNumber_slicedToArray(_Array$prototype$slic, 4);
        const arg_1 = _Array$prototype$slic2[0];
        const arg_2 = _Array$prototype$slic2[1];
        const arg_3 = _Array$prototype$slic2[2];
        const arg_4 = _Array$prototype$slic2[3];

        let text;
        let options;
        let metadata; // If the phone number is passed as a string.
        // `parsePhoneNumber('88005553535', ...)`.

        if (typeof arg_1 === 'string') {
          text = arg_1;
        } else throw new TypeError('A text for parsing must be a string.'); // If "default country" argument is being passed then move it to `options`.
        // `parsePhoneNumber('88005553535', 'RU', [options], metadata)`.

        if (!arg_2 || typeof arg_2 === 'string') {
          if (arg_4) {
            options = arg_3;
            metadata = arg_4;
          } else {
            options = undefined;
            metadata = arg_3;
          }

          if (arg_2) {
            options = es6_parsePhoneNumber_objectSpread({
              defaultCountry: arg_2,
            }, options);
          }
        } // `defaultCountry` is not passed.
        // Example: `parsePhoneNumber('+78005553535', [options], metadata)`.
        else if (isObject(arg_2)) {
          if (arg_3) {
            options = arg_2;
            metadata = arg_3;
          } else {
            metadata = arg_2;
          }
        } else throw new Error('Invalid second argument: '.concat(arg_2));

        return {
          text,
          options,
          metadata,
        };
      } // Otherwise istanbul would show this as "branch not covered".

      /* istanbul ignore next */

      var isObject = function isObject(_) {
        return parsePhoneNumber_typeof(_) === 'object';
      };
      // # sourceMappingURL=parsePhoneNumber.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString_.js
      function parsePhoneNumberFromString_objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((sym) => Object.getOwnPropertyDescriptor(source, sym).enumerable)); } ownKeys.forEach((key) => { parsePhoneNumberFromString_defineProperty(target, key, source[key]); }); } return target; }

      function parsePhoneNumberFromString_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value, enumerable: true, configurable: true, writable: true,
          });
        } else { obj[key] = value; } return obj;
      }

      function parsePhoneNumberFromString(text, options, metadata) {
        // Validate `defaultCountry`.
        if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata)) {
          options = parsePhoneNumberFromString_objectSpread({}, options, {
            defaultCountry: undefined,
          });
        } // Parse phone number.

        try {
          return parsePhoneNumber_parsePhoneNumber(text, options, metadata);
        } catch (error) {
          /* istanbul ignore else */
          if (error instanceof ParseError) { //
          } else {
            throw error;
          }
        }
      }
      // # sourceMappingURL=parsePhoneNumberFromString_.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString.js

      function parsePhoneNumberFromString_parsePhoneNumberFromString() {
        const _normalizeArguments = normalizeArguments(arguments);
        const { text } = _normalizeArguments;
        const { options } = _normalizeArguments;
        const { metadata } = _normalizeArguments;

        return parsePhoneNumberFromString(text, options, metadata);
      }
      // # sourceMappingURL=parsePhoneNumberFromString.js.map
      // CONCATENATED MODULE: ./node_modules/libphonenumber-js/min/exports/parsePhoneNumberFromString.js

      function exports_parsePhoneNumberFromString_parsePhoneNumberFromString() {
        return withMetadata(parsePhoneNumberFromString_parsePhoneNumberFromString, arguments);
      }
      // EXTERNAL MODULE: ./src/utils.js + 5 modules
      const utils = __webpack_require__('025e');

      // CONCATENATED MODULE: ./src/directives/click-outside.js
      // Polyfill for Event.path in IE 11: https://stackoverflow.com/a/46093727
      function getParents(node, memo) {
        const parsedMemo = memo || [];
        const { parentNode } = node;

        if (!parentNode) {
          return parsedMemo;
        }

        return getParents(parentNode, parsedMemo.concat(parentNode));
      } // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside

      /* harmony default export */ const click_outside = ({
        bind: function bind(el, binding, vNode) {
          // Provided expression must evaluate to a function.
          if (typeof binding.value !== 'function') {
            const compName = vNode.context.name;
            let warn = '[Vue-click-outside:] provided expression '.concat(binding.expression, ' is not a function, but has to be');

            if (compName) {
              warn += 'Found in component '.concat(compName);
            }

            console.warn(warn);
          } // Define Handler and cache it on the element

          const { bubble } = binding.modifiers;

          const handler = function handler(e) {
            // Fall back to composedPath if e.path is undefined
            const path = e.path || (e.composedPath ? e.composedPath() : false) || getParents(e.target);

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
        },
      });
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-tel-input.vue?vue&type=script&lang=js&

      const _excluded = ['metadata'];
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      function getDefault(key) {
        const value = utils['a' /* default */].options[key];

        if (typeof value === 'undefined') {
          return utils['a' /* default */].options[key];
        }

        return value;
      } // let examples = null;
      // const getExamples = () => new Promise(
      //   (resolve) => (
      //     examples
      //       ? resolve(examples)
      //       : import('libphonenumber-js/examples.mobile.json')
      //         .then((results) => {
      //           examples = results;
      //           resolve(results);
      //         })
      //   ),
      // );

      /* harmony default export */ const vue_tel_inputvue_type_script_lang_js_ = ({
        name: 'VueTelInput',
        directives: {
          clickOutside: click_outside,
        },
        props: {
          value: {
            type: String,
            default: '',
          },
          allCountries: {
            type: Array,
            default: function _default() {
              return getDefault('allCountries');
            },
          },
          autoFormat: {
            type: Boolean,
            default: function _default() {
              return getDefault('autoFormat');
            },
          },
          customValidate: {
            type: [Boolean, RegExp],
            default: function _default() {
              return getDefault('customValidate');
            },
          },
          defaultCountry: {
            // Default country code, ie: 'AU'
            // Will override the current country of user
            type: [String, Number],
            default: function _default() {
              return getDefault('defaultCountry');
            },
          },
          disabled: {
            type: Boolean,
            default: function _default() {
              return getDefault('disabled');
            },
          },
          autoDefaultCountry: {
            type: Boolean,
            default: function _default() {
              return getDefault('autoDefaultCountry');
            },
          },
          dropdownOptions: {
            type: Object,
            default: function _default() {
              return getDefault('dropdownOptions');
            },
          },
          ignoredCountries: {
            type: Array,
            default: function _default() {
              return getDefault('ignoredCountries');
            },
          },
          inputOptions: {
            type: Object,
            default: function _default() {
              return getDefault('inputOptions');
            },
          },
          invalidMsg: {
            type: String,
            default: function _default() {
              return getDefault('invalidMsg');
            },
          },
          mode: {
            type: String,
            default: function _default() {
              return getDefault('mode');
            },
          },
          onlyCountries: {
            type: Array,
            default: function _default() {
              return getDefault('onlyCountries');
            },
          },
          preferredCountries: {
            type: Array,
            default: function _default() {
              return getDefault('preferredCountries');
            },
          },
          validCharactersOnly: {
            type: Boolean,
            default: function _default() {
              return getDefault('validCharactersOnly');
            },
          },
          styleClasses: {
            type: [String, Array, Object],
            default: function _default() {
              return getDefault('styleClasses');
            },
          },
        },
        data: function data() {
          return {
            phone: '',
            activeCountryCode: '',
            open: false,
            finishMounted: false,
            selectedIndex: null,
            typeToFindInput: '',
            typeToFindTimer: null,
            dropdownOpenDirection: 'below',
            parsedPlaceholder: this.inputOptions.placeholder,
          };
        },
        computed: {
          activeCountry: function activeCountry() {
            return this.findCountry(this.activeCountryCode);
          },
          parsedMode: function parsedMode() {
            if (this.mode === 'auto') {
              if (!this.phone || this.phone[0] !== '+') {
                return 'national';
              }

              return 'international';
            }

            if (!['international', 'national'].includes(this.mode)) {
              console.error('Invalid value of prop "mode"');
              return 'international';
            }

            return this.mode;
          },
          filteredCountries: function filteredCountries() {
            const _this = this;

            // List countries after filtered
            if (this.onlyCountries.length) {
              return this.allCountries.filter((_ref) => {
                const { iso2 } = _ref;
                return _this.onlyCountries.some((c) => c.toUpperCase() === iso2);
              });
            }

            if (this.ignoredCountries.length) {
              return this.allCountries.filter((_ref2) => {
                const { iso2 } = _ref2;
                return !_this.ignoredCountries.includes(iso2.toUpperCase()) && !_this.ignoredCountries.includes(iso2.toLowerCase());
              });
            }

            return this.allCountries;
          },
          sortedCountries: function sortedCountries() {
            // Sort the list countries: from preferred countries to all countries
            const preferredCountries = this.getCountries(this.preferredCountries).map((country) => Object(objectSpread2['a' /* default */])(Object(objectSpread2['a' /* default */])({}, country), {}, {
              preferred: true,
            }));
            return [].concat(_toConsumableArray(preferredCountries), _toConsumableArray(this.filteredCountries));
          },
          phoneObject: function phoneObject() {
            let _this$phone; let _result$isValid; let
              _result2;

            let result;

            if (((_this$phone = this.phone) === null || _this$phone === void 0 ? void 0 : _this$phone[0]) === '+') {
              result = exports_parsePhoneNumberFromString_parsePhoneNumberFromString(this.phone) || {};
            } else {
              result = exports_parsePhoneNumberFromString_parsePhoneNumberFromString(this.phone, this.activeCountryCode) || {};
            }

            const _result = result;
            const { metadata } = _result;
            const phoneObject = Object(objectWithoutProperties['a' /* default */])(_result, _excluded);

            let valid = (_result$isValid = (_result2 = result).isValid) === null || _result$isValid === void 0 ? void 0 : _result$isValid.call(_result2);
            let formatted = this.phone;

            if (valid) {
              let _result$format; let
                _result3;

              formatted = (_result$format = (_result3 = result).format) === null || _result$format === void 0 ? void 0 : _result$format.call(_result3, this.parsedMode.toUpperCase());
            }

            if (result.country && (this.ignoredCountries.length || this.onlyCountries.length)) {
              if (!this.findCountry(result.country)) {
                valid = false;
                Object.assign(result, {
                  country: null,
                });
              }
            }

            Object.assign(phoneObject, {
              countryCode: result.country,
              valid,
              country: this.activeCountry,
              formatted,
            });
            return phoneObject;
          },
        },
        watch: {
          activeCountry: function activeCountry(value, oldValue) {
            if (!value && oldValue !== null && oldValue !== void 0 && oldValue.iso2) {
              this.activeCountryCode = oldValue.iso2;
              return;
            }

            if (value !== null && value !== void 0 && value.iso2) {
              this.$emit('country-changed', value); // this.resetPlaceholder();
            }
          },
          'phoneObject.countryCode': function phoneObjectCountryCode(value) {
            this.activeCountryCode = value;
          },
          'phoneObject.valid': function phoneObjectValid() {
            this.$emit('validate', this.phoneObject);
          },
          'phoneObject.formatted': function phoneObjectFormatted(value) {
            const _this2 = this;

            if (!this.autoFormat || this.customValidate) {
              return;
            }

            this.emitInput(value);
            this.$nextTick(() => {
              // In case `v-model` is not set, we need to update the `phone` to be new formatted value
              if (value && !_this2.value) {
                _this2.phone = value;
              }
            });
          },
          // finishMounted() {
          //   this.resetPlaceholder();
          // },
          'inputOptions.placeholder': function inputOptionsPlaceholder() {
            this.resetPlaceholder();
          },
          value: function value(_value, oldValue) {
            const _this3 = this;

            if (!this.testCharacters()) {
              this.$nextTick(() => {
                _this3.phone = oldValue;

                _this3.onInput();
              });
            } else {
              this.phone = _value;
            }
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
        },
        mounted: function mounted() {
          const _this4 = this;

          if (this.value) {
            this.phone = this.value.trim();
          }

          this.cleanInvalidCharacters();
          this.initializeCountry().then(() => {
            let _this4$inputOptions;

            if (!_this4.phone && (_this4$inputOptions = _this4.inputOptions) !== null && _this4$inputOptions !== void 0 && _this4$inputOptions.showDialCode && _this4.activeCountryCode) {
              _this4.phone = '+'.concat(_this4.activeCountryCode);
            }

            _this4.$emit('validate', _this4.phoneObject);
          }).catch(console.error).then(() => {
            _this4.finishMounted = true;
          });
        },
        methods: {
          resetPlaceholder: function resetPlaceholder() {
            this.parsedPlaceholder = this.inputOptions.placeholder; // TODO: Fix dynamicPlaceholder
            // if (!this.inputOptions.dynamicPlaceholder) {
            //   return result;
            // }
            // getExamples()
            //   .then((results) => {
            //     examples = results;
            //     const mode = (!this.mode || this.mode === 'auto') ? 'international' : this.mode;
            //     const number = getExampleNumber(this.activeCountryCode.toUpperCase(), results);
            //     this.parsedPlaceholder = number?.format(mode.toUpperCase()) || this.placeholder;
            //   })
            //   .catch(console.error);
          },
          initializeCountry: function initializeCountry() {
            const _this5 = this;

            return new Promise(((resolve) => {
              let _this5$phone;

              /**
           * 1. If the phone included prefix (i.e. +12), try to get the country and set it
           */
              if (((_this5$phone = _this5.phone) === null || _this5$phone === void 0 ? void 0 : _this5$phone[0]) === '+') {
                resolve();
                return;
              }
              /**
         * 2. Use default country if passed from parent
         */

              if (_this5.defaultCountry) {
                if (typeof _this5.defaultCountry === 'string') {
                  _this5.choose(_this5.defaultCountry);

                  resolve();
                  return;
                }

                if (typeof _this5.defaultCountry === 'number') {
                  const country = _this5.findCountryByDialCode(_this5.defaultCountry);

                  if (country) {
                    _this5.choose(country.iso2);

                    resolve();
                    return;
                  }
                }
              }

              const fallbackCountry = _this5.preferredCountries[0] || _this5.filteredCountries[0];
              /**
         * 3. Check if fetching country based on user's IP is allowed, set it as the default country
         */

              if (_this5.autoDefaultCountry) {
                Object(utils['c' /* getCountry */])().then((res) => {
                  _this5.choose(res || _this5.activeCountryCode);
                }).catch((error) => {
                  console.warn(error);
                  /**
             * 4. Use the first country from preferred list (if available) or all countries list
             */

                  _this5.choose(fallbackCountry);
                }).then(() => {
                  resolve();
                });
              } else {
                /**
             * 4. Use the first country from preferred list (if available) or all countries list
             */
                _this5.choose(fallbackCountry);

                resolve();
              }
            }));
          },

          /**
     * Get the list of countries from the list of iso2 code
     */
          getCountries: function getCountries() {
            const _this6 = this;

            const list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return list.map((countryCode) => _this6.findCountry(countryCode)).filter(Boolean);
          },
          findCountry: function findCountry() {
            const iso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return this.filteredCountries.find((country) => country.iso2 === iso.toUpperCase());
          },
          findCountryByDialCode: function findCountryByDialCode(dialCode) {
            return this.filteredCountries.find((country) => Number(country.dialCode) === dialCode);
          },
          getItemClass: function getItemClass(index, iso2) {
            const highlighted = this.selectedIndex === index;
            const lastPreferred = index === this.preferredCountries.length - 1;
            const preferred = this.preferredCountries.some((c) => c.toUpperCase() === iso2);
            return {
              highlighted,
              'last-preferred': lastPreferred,
              preferred,
            };
          },
          choose: function choose(country) {
            let _this$phone2; let
              _this$inputOptions;

            let parsedCountry = country;

            if (typeof parsedCountry === 'string') {
              parsedCountry = this.findCountry(parsedCountry);
            }

            if (!parsedCountry) {
              return;
            }

            if (((_this$phone2 = this.phone) === null || _this$phone2 === void 0 ? void 0 : _this$phone2[0]) === '+' && parsedCountry.iso2 && this.phoneObject.nationalNumber) {
              this.activeCountryCode = parsedCountry.iso2; // Attach the current phone number with the newly selected country

              this.phone = exports_parsePhoneNumberFromString_parsePhoneNumberFromString(this.phoneObject.nationalNumber, parsedCountry.iso2).formatInternational();
              return;
            }

            if ((_this$inputOptions = this.inputOptions) !== null && _this$inputOptions !== void 0 && _this$inputOptions.showDialCode && parsedCountry) {
              // Reset phone if the showDialCode is set
              this.phone = '+'.concat(parsedCountry.dialCode);
              return;
            } // update value, even if international mode is NOT used

            this.activeCountryCode = parsedCountry.iso2;
            this.emitInput(this.phone);
          },
          cleanInvalidCharacters: function cleanInvalidCharacters() {
            const currentPhone = this.phone;

            if (this.validCharactersOnly) {
              const results = this.phone.match(/[()\-+0-9\s]*/g);
              this.phone = results.join('');
            }

            if (this.customValidate && this.customValidate instanceof RegExp) {
              const _results = this.phone.match(this.customValidate);

              this.phone = _results.join('');
            }

            if (currentPhone !== this.phone) {
              this.emitInput(this.phone);
            }
          },
          testCharacters: function testCharacters() {
            if (this.validCharactersOnly) {
              const result = /^[()\-+0-9\s]*$/.test(this.phone);

              if (!result) {
                return false;
              }
            }

            if (this.customValidate) {
              return this.testCustomValidate();
            }

            return true;
          },
          testCustomValidate: function testCustomValidate() {
            return this.customValidate instanceof RegExp ? this.customValidate.test(this.phone) : false;
          },
          onInput: function onInput() {
            this.$refs.input.setCustomValidity(this.phoneObject.valid ? '' : this.invalidMsg); // Returns response.number to assign it to v-model (if being used)
            // Returns full response for cases @input is used
            // and parent wants to return the whole response.

            this.emitInput(this.phone);
          },
          emitInput: function emitInput(value) {
            this.$emit('input', value, this.phoneObject, this.$refs.input);
          },
          onBlur: function onBlur() {
            this.$emit('blur');
          },
          onFocus: function onFocus() {
            Object(utils['d' /* setCaretPosition */])(this.$refs.input, this.phone.length);
            this.$emit('focus');
          },
          onEnter: function onEnter() {
            this.$emit('enter');
          },
          onSpace: function onSpace() {
            this.$emit('space');
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
            const _this7 = this;

            if (e.keyCode === 40) {
              // down arrow
              e.preventDefault();
              this.open = true;

              if (this.selectedIndex === null) {
                this.selectedIndex = 0;
              } else {
                this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
              }

              const selEle = this.$refs.list.children[this.selectedIndex];

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

              const _selEle = this.$refs.list.children[this.selectedIndex];

              if (_selEle.offsetTop < this.$refs.list.scrollTop) {
                this.$refs.list.scrollTop = _selEle.offsetTop;
              }
            } else if (e.keyCode === 13) {
              // enter key
              if (this.selectedIndex !== null) {
                this.choose(this.sortedCountries[this.selectedIndex]);
              }

              this.open = !this.open;
            } else {
              // typing a country's name
              this.typeToFindInput += e.key;
              clearTimeout(this.typeToFindTimer);
              this.typeToFindTimer = setTimeout(() => {
                _this7.typeToFindInput = '';
              }, 700); // don't include preferred countries so we jump to the right place in the alphabet

              const typedCountryI = this.sortedCountries.slice(this.preferredCountries.length).findIndex((c) => c.name.toLowerCase().startsWith(_this7.typeToFindInput));

              if (typedCountryI >= 0) {
                this.selectedIndex = this.preferredCountries.length + typedCountryI;
                const _selEle2 = this.$refs.list.children[this.selectedIndex];
                const needToScrollTop = _selEle2.offsetTop < this.$refs.list.scrollTop;
                const needToScrollBottom = _selEle2.offsetTop + _selEle2.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight;

                if (needToScrollTop || needToScrollBottom) {
                  this.$refs.list.scrollTop = _selEle2.offsetTop - this.$refs.list.clientHeight / 2;
                }
              }
            }
          },
          reset: function reset() {
            this.selectedIndex = this.sortedCountries.map((c) => c.iso2).indexOf(this.activeCountryCode);
            this.open = false;
          },
          setDropdownPosition: function setDropdownPosition() {
            const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
            const hasEnoughSpaceBelow = spaceBelow > 200;

            if (hasEnoughSpaceBelow) {
              this.dropdownOpenDirection = 'below';
            } else {
              this.dropdownOpenDirection = 'above';
            }
          },
        },
      });
      // CONCATENATED MODULE: ./src/components/vue-tel-input.vue?vue&type=script&lang=js&
      /* harmony default export */ const components_vue_tel_inputvue_type_script_lang_js_ = (vue_tel_inputvue_type_script_lang_js_);
      // EXTERNAL MODULE: ./src/assets/sprite.css?vue&type=style&index=0&lang=css&
      const spritevue_type_style_index_0_lang_css_ = __webpack_require__('3c6f');

      // EXTERNAL MODULE: ./src/assets/component.css?vue&type=style&index=1&lang=css&
      const componentvue_type_style_index_1_lang_css_ = __webpack_require__('7667');

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier, /* server only */
        shadowMode, /* vue-cli only */
      ) {
        // Vue.extend constructor export interop
        const options = typeof scriptExports === 'function'
          ? scriptExports.options
          : scriptExports;

        // render functions
        if (render) {
          options.render = render;
          options.staticRenderFns = staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = `data-v-${scopeId}`;
        }

        let hook;
        if (moduleIdentifier) { // server build
          hook = function (context) {
            // 2.3 injection
            context = context // cached call
        || (this.$vnode && this.$vnode.ssrContext) // stateful
        || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = shadowMode
            ? function () {
              injectStyles.call(
                this,
                (options.functional ? this.parent : this).$root.$options.shadowRoot,
              );
            }
            : injectStyles;
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook];
          }
        }

        return {
          exports: scriptExports,
          options,
        };
      }

      // CONCATENATED MODULE: ./src/components/vue-tel-input.vue

      /* normalize component */

      const component = normalizeComponent(
        components_vue_tel_inputvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null,

      );

      /* harmony default export */ const vue_tel_input = __webpack_exports__.a = (component.exports);
      /***/ }),

    /***/ fb15:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'install', () => /* reexport */ src_0['c' /* install */]);
      __webpack_require__.d(__webpack_exports__, 'VueTelInput', () => /* reexport */ src_0['a' /* VueTelInput */]);

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== 'undefined') {
        const { currentScript } = window.document;
        if (false) { let getCurrentScript; }

        const src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
        }
      }

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ const setPublicPath = (null);

      // EXTERNAL MODULE: ./src/index.js
      var src_0 = __webpack_require__('b635');

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

      /* harmony default export */ const entry_lib = __webpack_exports__.default = (src_0['b' /* default */]);
      /***/ }),

    /***/ fee6:
    /***/ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/ }),

    /** *** */ }))));
// # sourceMappingURL=vue-tel-input.umd.js.map
