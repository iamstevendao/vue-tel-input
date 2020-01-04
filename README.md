# vue-tel-input
International Telephone Input with Vue.

[![](https://img.shields.io/npm/dt/vue-tel-input.svg)](https://www.npmjs.com/package/vue-tel-input) [![](https://img.shields.io/github/stars/educationlink/vue-tel-input.svg)](https://github.com/EducationLink/vue-tel-input)

<p align="center">
<img width="600px" alt="In-action GIF" src="https://thumbs.gfycat.com/EducatedPoliteBluefintuna-size_restricted.gif"/>
</p>

**Useful Links**

- [Live Demo](https://educationlink.github.io/vue-tel-input/)
- [Changelog](https://github.com/EducationLink/vue-tel-input/releases)
- [Documentation for `v2.x.x`](https://github.com/EducationLink/vue-tel-input/blob/master/README-v2.md)

**Table of Contents**

- [Getting started](#getting-started)
- [Installation](#installation)
  - [npm](#npm)
  - [Browser](#browser)
  - [Use as a custom field of `vue-form-generator`](#use-as-a-custom-field-of-vue-form-generator)
- [Usage](#usage)
  - [Props](#props)
  - [Events](#events)
  - [Slots](#slots)
- [Typescript Support](#typescript-support)
- [Credits & Contributors](#credits-&-contributors)

## Getting started
- Install the plugin:

  ```
  npm install vue-tel-input
  ```

- Add the plugin into your app:

  ```javascript
  import Vue from 'vue'
  import VueTelInput from 'vue-tel-input'

  Vue.use(VueTelInput)
  ```

  [More info on installation](#installation)

- Use the `vue-tel-input` component:

  ```html
  <template>
    <vue-tel-input v-model="phone"></vue-tel-input>
  <template>
  ```

## Installation
### npm
```bash
  npm install vue-tel-input
```

Install the plugin into Vue:

```javascript
import Vue from 'vue'
import VueTelInput from 'vue-tel-input'

Vue.use(VueTelInput, [globalOptions = {}]) // Define default global options here (optional)
```
> View all available options in [Props](#props).

Or use the component directly:

```html
<!-- your-component.vue-->
<template>
  <vue-tel-input v-model="value"></vue-tel-input>
</template>
<script>
import { VueTelInput } from 'vue-tel-input'

export default {
  components: {
    VueTelInput,
  },
};
</script>
```

### Browser

Include [vue-tel-input](/dist/vue-tel-input.min.js) in the page.

```html
<script src="https://unpkg.com/vue-tel-input"></script>
```

**If Vue is detected in the Page, the plugin is installed automatically.**

Manually install the plugin into Vue:

```javascript
Vue.use(VueTelInput)
```

Or use the component directly:

```javascript
Vue.component('vue-tel-input', VueTelInput.VueTelInput)
```

### Use as a custom field of [vue-form-generator](https://github.com/vue-generators/vue-form-generator)

Check out the setup in [CodeSandbox](https://codesandbox.io/s/vue-tel-input-with-vue-form-generator-q56jg).

- Add a component using `vue-form-generator`'s `abstractField` mixin
  ```html
    <!-- tel-input.vue -->
    <template>
      <vue-tel-input v-model="value"></vue-tel-input>
    </template>

    <script>
    import { abstractField } from 'vue-form-generator';

    export default {
      name: 'TelephoneInput',
      mixins: [abstractField],
    };
    </script>
  ```

- Register the new field as a global component
  ```js
    import Vue from 'vue';
    import TelInput from '<path>/tel-input.vue';

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

## Usage

### Props

  Test all props on [CodeSandbox](https://codesandbox.io/s/0yyyk45q7w?fontsize=14&module=%2Fsrc%2FApp.vue&moduleview=1).

  | Property | Type | Default value | Description |
  | -------- | ---- | ------------- | ----------- |
  | `autocomplete` | `String` | `'on'` | Native input 'autocomplete' attribute |
  | `autofocus` | `Boolean` | `false` | Native input 'autofocus' attribute |
  | `defaultCountry` | `String` | `''` | Default country, will override the country fetched from IP address of user |
  | `disabled` | `Boolean` | `false` | Disable input field |
  | `disabledFetchingCountry` | `Boolean` | `false` | Disable fetching current country based on IP address of user |
  | `dropdownOptions` | `Object` | `{ disabledDialCode: false, tabindex: 0 }` | Options for dropdown, supporting `disabledDialCode` and `tabindex`| 
  | `dynamicPlaceholder` | `Boolean` | `false` | Placeholder as a sample phone number in the current country, available from [v3.1.1](https://github.com/EducationLink/vue-tel-input/releases/tag/v3.1.1) |
  | `enabledCountryCode` | `Boolean` | `false` | Enable country code in the input |
  | `enabledFlags` | `Boolean` | `true` | Enable flags in the input |
  | `ignoredCountries` | `Array` | `[]` | List of countries will NOT be shown on the dropdown. ie `['AU', 'BR']` |
  | `inputClasses` | `String` &#124; `Array` &#124; `Object` | `''` | Custom classes for the `input` |
  | `inputId` | `String` | `''` | Custom 'id' for the `input` |
  | `inputOptions` | `Object` | `{ showDialCode: false, tabindex: 0 }` | Options for input, supporting `showDialCode` (always show dial code in the input) and `tabindex`|
  | `maxLen` | `Number` | `25` | Native input 'maxlength' attribute |
  | `mode` | `String` | `''` | Format number to `'international'` (with + dial code) or `'national'` (with 0...), available from [v3.1.1](https://github.com/EducationLink/vue-tel-input/releases/tag/v3.1.1) |
  | `name` | `String` | `'telephone'` | Native input 'name' attribute |
  | `onlyCountries` | `Array` | `[]` | List of countries will be shown on the dropdown. ie `['AU', 'BR']` |
  | `placeholder` | `String` | `'Enter a phone number'` | Placeholder for the input |
  | `preferredCountries` | `Array` | `[]` | Preferred countries list, will be on top of the dropdown. ie `['AU', 'BR']` |
  | `required` | `Boolean` | `false` | Required property for HTML5 required attribute |
  | `validCharactersOnly` | `Boolean` | `false` | Only allow valid characters in a phone number (will also verify in `mounted`, so phone number with invalid characters will be shown as an empty string) |
  | `wrapperClasses` | `String` &#124; `Array` &#124; `Object` | `''` | Custom classes for the wrapper |
  | `customValidate` | `Boolean` &#124; `RegExp` | `false` | Custom validation RegExp for input, available from [v4.1.0](https://github.com/EducationLink/vue-tel-input/releases/tag/v4.1.0) |

### Events

  | Event | Arguments | Description | Notes |
  | ----- | --------- | ----------- | ----- |
  | `input` | `String`, `Object` | Fires when the input changes with the argument is the object includes `{ number, isValid, country }` | `onInput` deprecated |
  | `validate` | `Object` | Fires when the correctness of the phone number changes (from `true` to `false` or vice-versa) and when the component is mounted `{ number, isValid, country }` | `onValidate` deprecated |
  | `blur` |  | Fires on blur event | `onBlur` deprecated |
  | `focus` |  | Fires on focus event | |
  | `space` |  | Fires on keyup.space event | `onSpace` deprecated |
  | `enter` |  | Fires on keyup.enter event | `onEnter` deprecated |
  | `open` |  | Fires when the flags dropdown opens | |
  | `close` |  | Fires when the flags dropdown closes | |
  | `country-changed` | `Object` | Fires when country changed (even for the first time) | Available from [v2.4.2](https://github.com/EducationLink/vue-tel-input/releases/tag/v2.4.2) |

### Slots
  | Slot | Description | Notes |
  | ---- | ----------- | ----- |
  | `arrow-icon` | Replace the arrow next to the flag with a component of your choice | Available from [v2.4.3](https://github.com/EducationLink/vue-tel-input/releases/tag/v2.4.3) |

## Typescript Support

If you work with typescript you will need declaration requirements.

```bash
npm install --save-dev @types/vue-tel-input
```

## Credits & Contributors

**Credits**
- Telephone Number parsing, validation by [awesome-phonenumber](https://www.npmjs.com/package/awesome-phonenumber).
- Country Codes data from [intl-tel-input](https://github.com/jackocnr/intl-tel-input/blob/master/src/js/data.js).
- User's country by [ip2c.org](https://ip2c.org/s), request using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

**Contributors**
- [mikob](https://github.com/mikob) for super awesome work to [remove the bootstrap dependency](https://github.com/EducationLink/vue-tel-input/pull/13).
- [kalcifield](https://github.com/kalcifield) for helping make the input [preload with a phone number](https://github.com/EducationLink/vue-tel-input/pull/8).
- [serbemas](https://github.com/serbemas) for [adding web components support](https://github.com/EducationLink/vue-tel-input/pull/92).

...[more](https://github.com/EducationLink/vue-tel-input/graphs/contributors)

made with &#x2764; by [Steven](https://github.com/iamstevendao).
