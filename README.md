# vue-tel-input
International Telephone Input with Vue.

Checkout Demo at [Github pages](https://educationlink.github.io/vue-tel-input/).

<p align="center">
<img width="600px" alt="In-action GIF" src="https://thumbs.gfycat.com/EducatedPoliteBluefintuna-size_restricted.gif"/>
</p>

## Installation
- **yarn**:
  ```bash
    yarn add vue-tel-input
  ```
- **npm**:
  ```bash
    npm i --save vue-tel-input
  ```

## Usage
- Import default `CSS` to your project:
    ```js
    import 'vue-tel-input/dist/vue-tel-input.css';
    ```

- In your component:
     ```html
     <template>
     ...
        <vue-tel-input v-model="phone"
                       @onInput="onInput"
                       <!-- optional -->
                       :preferredCountries="['us', 'gb', 'ua']">
        </vue-tel-input>
     ...
     <template>
     <script>
     import VueTelInput from 'vue-tel-input';

     export default {
       components: {
         VueTelInput,
       },
       data() {
         return {
           phone: '',
         };
       },
       methods: {
         /**
          * @param {string} number
          * the phone number inputted by user, will be formatted along with country code
          * // Ex: inputted: (AU) 0432 432 432
          * // number = '+61432421546'
          *
          * @param {Boolean} isValid
          * @param {string} country
          */
          onInput({ number, isValid, country }) {
            console.log(number, isValid, country);
          },
       },
     }
     </script>
     ```

### Use as a custom field of [vue-form-generator](https://github.com/vue-generators/vue-form-generator)
- Add a component with `vue-form-generator`'s abstractField
  ```js
  // tel-input.vue
  <template>
    <vue-tel-input v-model="value"></vue-tel-input>
  </template>

  <script>
  import VueTelInput from 'vue-tel-input'
  import { abstractField } from 'vue-form-generator';

  export default {
    name: 'TelephoneInput',
    mixins: [abstractField],
    components: {
      VueTelInput,
    },
  };
  </script>
  ```

- Register the new field as a global component
  ```js
    import Vue from 'vue';
    import TelInput from '<path>/tel-input.vue';

    import 'vue-tel-input/dist/vue-tel-input.css';

    Vue.component('field-tel-input', TelInput);
  ```

- Now it can be used as `tel-input` in schema of `vue-form-generator`
  ```js
  var schema: {
    fields: [{
        type: "tel-input",
        label: "Awesome (tel input)",
        model: "telephone"
    }]
  };
  ```
Read more on `vue-form-generator`'s [instruction page](https://icebob.gitbooks.io/vueformgenerator/content/fields/custom_fields.html)

### Props

  | Property value | Type | Default value | Description |
  | -------------- | ---- | ------------- | ----------- |
  | `defaultCountry` | `string` | `''` | Default country, will override the country fetched from IP address of user |
  | `disabledFetchingCountry` | `Boolean` | false | Disable fetching current country based on IP address of user |
  | `disabled` | `Boolean` | `false` | Disable input field |
  | `disabledFormatting` | `Boolean` | `false` | Disable formatting the phone number in the input, the formatted result still be accessible by `formattedNumber` returned from `onInput` event |
  | `placeholder` | `string` | Enter a phone number | Placeholder for the input |
  | `required` | `Boolean` | `false` | Required property for HTML5 required attribute |
  | `enabledCountryCode` | `Boolean` | `false` | Enable country code in the input |
  | `enabledFlags` | `Boolean` | `true` | Enable flags in the input |
  | `preferredCountries` | `Array` | `[]` | Preferred countries list, will be on top of the dropdown. ie `['AU', 'BR']` |
  | `onlyCountries` | `Array` | `[]` | List of countries will be shown on the dropdown. ie `['AU', 'BR']` |
  | `ignoredCountries` | `Array` | `[]` | List of countries will NOT be shown on the dropdown. ie `['AU', 'BR']` |
  | `autocomplete`| `String` | `'on'` | Native input 'autocomplete' attribute |
  | `name`| `String` | `'telephone'` | Native input 'name' attribute |
  | `maxLen`| `Number` | `25` | Native input 'maxlength' attribute |
  | `wrapperClasses`| `String` | `''` | Custom classes for the wrapper |
  | `inputClasses`| `String` | `''` | Custom classes for the `input` |
  | `dropdownOptions`| `Object` | `{ disabledDialCode: false }` | Options for dropdown, supporting `disabledDialCode` |
  | `inputOptions`| `Object` | `{ showDialCode: false }` | Options for input, always show dial code in the input |

### Events

  | Property value | Arguments | Description |
  | -------------- | --------- | ----------- |
  | `onInput` | `Object` | Fires when the input changes with the argument is the object includes `{ number, isValid, country }` |
  | `onValidate` | `Object` | Fires when the correctness of the phone number changes (from `true` to `false` or vice-versa) and when the component is mounted `{ number, isValid, country }` |
  | `onBlur` |  | Fires on blur event |

## Highlights & Credits
- Vue app created by [vue-cli](https://github.com/vuejs/vue-cli).
- Telephone Number parsing, validation by [libphonenumber-js](https://catamphetamine.github.io/libphonenumber-js/).
- Country Codes data from [intl-tel-input](https://github.com/jackocnr/intl-tel-input/blob/master/src/js/data.js).
- Country Flags by [behdad/region-flags](https://github.com/behdad/region-flags).
- User's Location by [get-json](https://www.npmjs.com/package/get-json) and [ipifo.io](https://ipinfo.io/json)

## Demo Usage

```bash

# install dependencies
$ yarn/npm install

# compile demo for development
$ yarn/npm dev

# open Browser and start serve in demo
$ yarn/npm demo:open

# compile dist demo
$ yarn/npm dist:demo

# compile dist
$ yarn/npm dist

```

## Contributors
- [mikob](https://github.com/mikob) for super awesome work to [remove the bootstrap dependency](https://github.com/EducationLink/vue-tel-input/pull/13).
- [kalcifield](https://github.com/kalcifield) for helping make the input [preload with a phone number](https://github.com/EducationLink/vue-tel-input/pull/8).

made with &#x2764; by [Steven](https://github.com/iamstevendao).
