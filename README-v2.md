# vue-tel-input v2.x.x
International Telephone Input with Vue.

[![](https://img.shields.io/npm/dt/vue-tel-input.svg)](https://www.npmjs.com/package/vue-tel-input) [![](https://img.shields.io/github/stars/educationlink/vue-tel-input.svg)](https://github.com/EducationLink/vue-tel-input)

Checkout [Demo](https://educationlink.github.io/vue-tel-input/) or [Playground](https://codesandbox.io/s/0yyyk45q7w?fontsize=14&module=%2Fsrc%2FApp.vue&moduleview=1).

This is an old version. Check [this documentation](https://github.com/EducationLink/vue-tel-input/) for the newest documentation.

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
        <vue-tel-input v-model="phone"></vue-tel-input>
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
     }
     </script>
     ```

### Use as a custom field of [vue-form-generator](https://github.com/vue-generators/vue-form-generator)
- Add a component using `vue-form-generator`'s `abstractField` mixin
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

  Test all props on [CodeSandbox](https://codesandbox.io/s/0yyyk45q7w?fontsize=14&module=%2Fsrc%2FApp.vue&moduleview=1).

  | Property | Type | Default value | Description |
  | -------- | ---- | ------------- | ----------- |
  | `defaultCountry` | `String` | `''` | Default country, will override the country fetched from IP address of user |
  | `disabledFetchingCountry` | `Boolean` | `false` | Disable fetching current country based on IP address of user |
  | `disabled` | `Boolean` | `false` | Disable input field |
  | `disabledFormatting` | `Boolean` | `false` | Disable formatting the phone number in the input, the formatted result still be accessible by `formattedNumber` returned from `onInput` event |
  | `placeholder` | `String` | Enter a phone number | Placeholder for the input |
  | `required` | `Boolean` | `false` | Required property for HTML5 required attribute |
  | `enabledCountryCode` | `Boolean` | `false` | Enable country code in the input |
  | `enabledFlags` | `Boolean` | `true` | Enable flags in the input |
  | `preferredCountries` | `Array` | `[]` | Preferred countries list, will be on top of the dropdown. ie `['AU', 'BR']` |
  | `onlyCountries` | `Array` | `[]` | List of countries will be shown on the dropdown. ie `['AU', 'BR']` |
  | `ignoredCountries` | `Array` | `[]` | List of countries will NOT be shown on the dropdown. ie `['AU', 'BR']` |
  | `autocomplete` | `String` | `'on'` | Native input 'autocomplete' attribute |
  | `name` | `String` | `'telephone'` | Native input 'name' attribute |
  | `maxLen` | `Number` | `25` | Native input 'maxlength' attribute |
  | `wrapperClasses` | `String` &#124; `Array` &#124; `Object` | `''` | Custom classes for the wrapper |
  | `inputClasses` | `String` &#124; `Array` &#124; `Object` | `''` | Custom classes for the `input` |
  | `inputId` | `String` | `''` | Custom 'id' for the `input` |
  | `dropdownOptions` | `Object` | `{ disabledDialCode: false, tabindex: 0 }` | Options for dropdown, supporting `disabledDialCode` and `tabindex`| 
  | `inputOptions` | `Object` | `{ showDialCode: false, tabindex: 0 }` | Options for input, supporting `showDialCode` (always show dial code in the input) and `tabindex`|
  | `validCharactersOnly` | `Boolean` | `false` | Only allow valid characters in a phone number (will also verify in `mounted`, so phone number with invalid characters will be shown as an empty string) |

### Events

  | Event | Arguments | Description | Notes |
  | ----- | --------- | ----------- | ----- |
  | `input` | `String`, `Object` | Fires when the input changes with the argument is the object includes `{ number, isValid, country }` | `onInput` deprecated |
  | `validate` | `Object` | Fires when the correctness of the phone number changes (from `true` to `false` or vice-versa) and when the component is mounted `{ number, isValid, country }` | `onValidate` deprecated |
  | `blur` |  | Fires on blur event | `onBlur` deprecated |
  | `space` |  | Fires on keyup.space event | `onSpace` deprecated |
  | `enter` |  | Fires on keyup.enter event | `onEnter` deprecated |
  | `open` |  | Fires when the flags dropdown opens | |
  | `close` |  | Fires when the flags dropdown closes | |
  | `country-changed` | `Object` | Fires when country changed (even for the first time) | Available from `v2.4.2` |

### Slots
  | Slot | Description | Notes |
  | ---- | ----------- | ----- |
  | `arrow-icon` | Replace the arrow next to the flag with a component of your choice | Available from [v2.4.3](https://github.com/EducationLink/vue-tel-input/releases/tag/v2.4.3) |

## Highlights & Credits
- Telephone Number parsing, validation by [libphonenumber-js](https://catamphetamine.github.io/libphonenumber-js/).
- Country Codes data from [intl-tel-input](https://github.com/jackocnr/intl-tel-input/blob/master/src/js/data.js).
- User's country by [ip2c.org](https://ip2c.org/s), request using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Demo Usage

```bash

# install dependencies
$ yarn/npm install

# compile demo for development
$ yarn/npm dev

# open Browser and start serving in demo
$ yarn/npm demo:open

# compile dist demo
$ yarn/npm dist:demo

# compile dist
$ yarn/npm dist

```

## Typescript Support

If you working with typescript will need declaration requirements.

```bash
npm install --save-dev @types/vue-tel-input
```

## Contributors
- [mikob](https://github.com/mikob) for super awesome work to [remove the bootstrap dependency](https://github.com/EducationLink/vue-tel-input/pull/13).
- [kalcifield](https://github.com/kalcifield) for helping make the input [preload with a phone number](https://github.com/EducationLink/vue-tel-input/pull/8).
- [serbemas](https://github.com/serbemas) for [adding web components support](https://github.com/EducationLink/vue-tel-input/pull/92).

...[more](https://github.com/EducationLink/vue-tel-input/graphs/contributors)

made with &#x2764; by [Steven](https://github.com/iamstevendao).
