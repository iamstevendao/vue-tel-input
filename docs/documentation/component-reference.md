# Component Reference

## Props

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
  | `mode` | `String` | `'auto'` | Format number to `'international'` (with + dial code) or `'national'` (with 0...), available from [v3.1.1](https://github.com/EducationLink/vue-tel-input/releases/tag/v3.1.1) |
  | `name` | `String` | `'telephone'` | Native input 'name' attribute |
  | `onlyCountries` | `Array` | `[]` | List of countries will be shown on the dropdown. ie `['AU', 'BR']` |
  | `placeholder` | `String` | `'Enter a phone number'` | Placeholder for the input |
  | `preferredCountries` | `Array` | `[]` | Preferred countries list, will be on top of the dropdown. ie `['AU', 'BR']` |
  | `required` | `Boolean` | `false` | Required property for HTML5 required attribute |
  | `validCharactersOnly` | `Boolean` | `false` | Only allow valid characters in a phone number (will also verify in `mounted`, so phone number with invalid characters will be shown as an empty string) |
  | `wrapperClasses` | `String` &#124; `Array` &#124; `Object` | `''` | Custom classes for the wrapper |
  | `customValidate` | `Boolean` &#124; `RegExp` | `false` | Custom validation RegExp for input, available from [v4.1.0](https://github.com/EducationLink/vue-tel-input/releases/tag/v4.1.0) |

## Events

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

## Slots
  | Slot | Description | Notes |
  | ---- | ----------- | ----- |
  | `arrow-icon` | Replace the arrow next to the flag with a component of your choice | Available from [v2.4.3](https://github.com/EducationLink/vue-tel-input/releases/tag/v2.4.3) |
