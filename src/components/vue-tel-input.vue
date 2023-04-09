<template>
  <div :class="['vue-tel-input', styleClasses, { disabled: disabled }]">
    <div v-click-outside="clickedOutside"
         aria-label="Country Code Selector"
         aria-haspopup="listbox"
         :aria-expanded="open"
         role="button"
         :class="['vti__dropdown', { open: open, disabled: dropdownOptions.disabled }]"
         :tabindex="dropdownOptions.tabindex"
         @keydown="keyboardNav"
         @click="toggleDropdown"
         @keydown.space="toggleDropdown"
         @keydown.esc="reset"
         @keydown.tab="reset">
      <span class="vti__selection">
          <span
            v-if="dropdownOptions.showFlags"
            :class="['vti__flag', activeCountryCode.toLowerCase()]"
          ></span>
      <span v-if="dropdownOptions.showDialCodeInSelection" class="vti__country-code">
            +{{ activeCountry && activeCountry.dialCode }}
          </span>
      <slot name="arrow-icon"
            :open="open">
        <span class="vti__dropdown-arrow">{{ open ? "▲" : "▼" }}</span>
      </slot>
      </span>
      <ul v-if="open"
          ref="list"
          class="vti__dropdown-list"
          :class="dropdownOpenDirection"
          role="listbox">
        <input
            v-if="dropdownOptions.showSearchBox"
            class="vti__input vti__search_box"
            aria-label="Search by country name or country code"
            :placeholder="sortedCountries.length ? sortedCountries[0].name : ''"
            type="text"
            v-model="searchQuery"
            @click.stop
        />
        <li v-for="(pb, index) in sortedCountries"
            role="option"
            :class="['vti__dropdown-item', getItemClass(index, pb.iso2)]"
            :key="pb.iso2 + (pb.preferred ? '-preferred' : '')"
            tabindex="-1"
            @click="choose(pb)"
            @mousemove="selectedIndex = index"
            :aria-selected="activeCountryCode === pb.iso2 && !pb.preferred">
          <span
              v-if="dropdownOptions.showFlags"
              :class="['vti__flag', pb.iso2.toLowerCase()]"
            ></span>
          <strong>{{ pb.name }}</strong>
          <span v-if="dropdownOptions.showDialCodeInList"> +{{ pb.dialCode }} </span>
        </li>
      </ul>
    </div>
    <input v-model="phone"
           ref="input"
           :type="inputOptions.type"
           :autocomplete="inputOptions.autocomplete"
           :autofocus="inputOptions.autofocus"
           :class="['vti__input', inputOptions.styleClasses]"
           :disabled="disabled"
           :id="inputOptions.id"
           :maxlength="inputOptions.maxlength"
           :name="inputOptions.name"
           :placeholder="parsedPlaceholder"
           :readonly="inputOptions.readonly"
           :required="inputOptions.required"
           :tabindex="inputOptions.tabindex"
           :value="modelValue"
           :aria-describedby="inputOptions['aria-describedby']"
           @blur="onBlur"
           @focus="onFocus"
           @input="onInput"
           @keyup.enter="onEnter"
           @keyup.space="onSpace" />
    <slot name="icon-right"></slot>
  </div>
</template>

<script>
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import utils, { getCountry, setCaretPosition } from '../utils';
import clickOutside from '../directives/click-outside';

function getDefault(key) {
  const value = utils.options[key];
  if (typeof value === 'undefined') {
    return utils.options[key];
  }
  return value;
}

// let examples = null;
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

export default {
  name: 'VueTelInput',
  directives: {
    clickOutside,
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    allCountries: {
      type: Array,
      default: () => getDefault('allCountries'),
    },
    autoFormat: {
      type: Boolean,
      default: () => getDefault('autoFormat'),
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: () => getDefault('customValidate'),
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: [String, Number],
      default: () => getDefault('defaultCountry'),
    },
    disabled: {
      type: Boolean,
      default: () => getDefault('disabled'),
    },
    autoDefaultCountry: {
      type: Boolean,
      default: () => getDefault('autoDefaultCountry'),
    },
    dropdownOptions: {
      type: Object,
      default: () => getDefault('dropdownOptions'),
    },
    ignoredCountries: {
      type: Array,
      default: () => getDefault('ignoredCountries'),
    },
    inputOptions: {
      type: Object,
      default: () => getDefault('inputOptions'),
    },
    invalidMsg: {
      type: String,
      default: () => getDefault('invalidMsg'),
    },
    mode: {
      type: String,
      default: () => getDefault('mode'),
    },
    onlyCountries: {
      type: Array,
      default: () => getDefault('onlyCountries'),
    },
    preferredCountries: {
      type: Array,
      default: () => getDefault('preferredCountries'),
    },
    validCharactersOnly: {
      type: Boolean,
      default: () => getDefault('validCharactersOnly'),
    },
    styleClasses: {
      type: [String, Array, Object],
      default: () => getDefault('styleClasses'),
    },
  },
  data() {
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
      searchQuery: '',
    };
  },
  computed: {
    activeCountry() {
      return this.findCountry(this.activeCountryCode);
    },
    parsedMode() {
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
    filteredCountries() {
      // List countries after filtered
      if (this.onlyCountries.length) {
        return this.allCountries
          .filter(({ iso2 }) => this.onlyCountries.some((c) => c.toUpperCase() === iso2));
      }

      if (this.ignoredCountries.length) {
        return this.allCountries.filter(
          ({ iso2 }) => !this.ignoredCountries.includes(iso2.toUpperCase())
            && !this.ignoredCountries.includes(iso2.toLowerCase()),
        );
      }

      return this.allCountries;
    },
    sortedCountries() {
      // Sort the list countries: from preferred countries to all countries
      const preferredCountries = this.getCountries(this.preferredCountries)
        .map((country) => ({ ...country, preferred: true }));

      const countriesList = [...preferredCountries, ...this.filteredCountries];
      if (!this.dropdownOptions.showSearchBox) {
        return countriesList;
      }
      return countriesList.filter(
        (c) => (new RegExp(this.searchQuery, 'i')).test(c.name)
          || (new RegExp(this.searchQuery, 'i')).test(c.iso2)
          || (new RegExp(this.searchQuery, 'i')).test(c.dialCode),
      );
    },
    phoneObject() {
      let result;
      if (this.phone?.[0] === '+') {
        result = parsePhoneNumberFromString(this.phone) || {};
      } else {
        result = parsePhoneNumberFromString(this.phone, this.activeCountryCode) || {};
      }

      const {
        metadata,
        ...phoneObject
      } = result;

      let valid = result.isValid?.();
      let formatted = this.phone;

      if (valid) {
        formatted = result.format?.(this.parsedMode.toUpperCase());
      }

      if (result.country && (this.ignoredCountries.length || this.onlyCountries.length)) {
        if (!this.findCountry(result.country)) {
          valid = false;
          Object.assign(result, { country: null });
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
    activeCountry(value, oldValue) {
      if (!value && oldValue?.iso2) {
        this.activeCountryCode = oldValue.iso2;
        return;
      }
      if (value?.iso2) {
        this.$emit('country-changed', value);
        // this.resetPlaceholder();
      }
    },
    'phoneObject.countryCode': function (value) {
      this.activeCountryCode = value || '';
    },
    'phoneObject.valid': function () {
      this.$emit('validate', this.phoneObject);
    },
    'phoneObject.formatted': function (value) {
      if (!this.autoFormat || this.customValidate) {
        return;
      }
      this.emitInput(value);

      this.$nextTick(() => {
        // In case `v-model` is not set, we need to update the `phone` to be new formatted value
        if (value && !this.modelValue) {
          this.phone = value;
        }
      });
    },
    // finishMounted() {
    //   this.resetPlaceholder();
    // },
    'inputOptions.placeholder': function () {
      this.resetPlaceholder();
    },
    modelValue(value, oldValue) {
      if (!this.testCharacters()) {
        this.$nextTick(() => {
          this.phone = oldValue;
          this.onInput();
        });
      } else {
        this.phone = value;
      }
    },
    open(isDropdownOpened) {
      // Emit open and close events
      if (isDropdownOpened) {
        this.setDropdownPosition();
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
  },
  mounted() {
    if (this.modelValue) {
      this.phone = this.modelValue.trim();
    }

    this.cleanInvalidCharacters();

    this.initializeCountry()
      .then(() => {
        if (!this.phone
          && this.inputOptions?.showDialCode
          && this.activeCountryCode) {
          this.phone = `+${this.activeCountryCode}`;
        }
        this.$emit('validate', this.phoneObject);
      })
      .catch(console.error)
      .then(() => {
        this.finishMounted = true;
      });
  },
  methods: {
    resetPlaceholder() {
      this.parsedPlaceholder = this.inputOptions.placeholder;
      // TODO: Fix dynamicPlaceholder
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
    initializeCountry() {
      return new Promise((resolve) => {
        /**
         * 1. If the phone included prefix (i.e. +12), try to get the country and set it
         */
        if (this.phone?.[0] === '+') {
          resolve();
          return;
        }
        /**
         * 2. Use default country if passed from parent
         */
        if (this.defaultCountry) {
          if (typeof this.defaultCountry === 'string') {
            this.choose(this.defaultCountry);
            resolve();
            return;
          }
          if (typeof this.defaultCountry === 'number') {
            const country = this.findCountryByDialCode(this.defaultCountry);
            if (country) {
              this.choose(country.iso2);
              resolve();
              return;
            }
          }
        }

        const fallbackCountry = this.preferredCountries[0] || this.filteredCountries[0];
        /**
         * 3. Check if fetching country based on user's IP is allowed, set it as the default country
         */
        if (this.autoDefaultCountry) {
          getCountry()
            .then((res) => {
              this.choose(res || this.activeCountryCode);
            })
            .catch((error) => {
              console.warn(error);
              /**
               * 4. Use the first country from preferred list (if available) or all countries list
               */
              this.choose(fallbackCountry);
            })
            .then(() => {
              resolve();
            });
        } else {
          /**
           * 4. Use the first country from preferred list (if available) or all countries list
           */
          this.choose(fallbackCountry);
          resolve();
        }
      });
    },
    /**
     * Get the list of countries from the list of iso2 code
     */
    getCountries(list = []) {
      return list
        .map((countryCode) => this.findCountry(countryCode))
        .filter(Boolean);
    },
    findCountry(iso = '') {
      return this.filteredCountries.find((country) => country.iso2 === iso.toUpperCase());
    },
    findCountryByDialCode(dialCode) {
      return this.filteredCountries.find((country) => Number(country.dialCode) === dialCode);
    },
    getItemClass(index, iso2) {
      const highlighted = this.selectedIndex === index;
      const lastPreferred = index === this.preferredCountries.length - 1;
      const preferred = this.preferredCountries.some((c) => c.toUpperCase() === iso2);
      return {
        highlighted,
        'last-preferred': lastPreferred,
        preferred,
      };
    },
    choose(country) {
      let parsedCountry = country;
      if (typeof parsedCountry === 'string') {
        parsedCountry = this.findCountry(parsedCountry);
      }

      if (!parsedCountry) {
        return;
      }
      if (this.phone?.[0] === '+'
        && parsedCountry.iso2
        && this.phoneObject.nationalNumber) {
        this.activeCountryCode = parsedCountry.iso2;
        // Attach the current phone number with the newly selected country
        this.phone = parsePhoneNumberFromString(
          this.phoneObject.nationalNumber,
          parsedCountry.iso2,
        )
          .formatInternational();
        return;
      }

      if (this.inputOptions?.showDialCode && parsedCountry) {
        // Reset phone if the showDialCode is set
        this.phone = `+${parsedCountry.dialCode}`;
        this.activeCountryCode = parsedCountry.iso2 || '';
        return;
      }

      // update value, even if international mode is NOT used
      this.activeCountryCode = parsedCountry.iso2 || '';
      this.emitInput(this.phone);
    },
    cleanInvalidCharacters() {
      const currentPhone = this.phone;
      if (this.validCharactersOnly) {
        const results = this.phone.match(/[()\-+0-9\s]*/g);
        this.phone = results.join('');
      }

      if (this.customValidate && this.customValidate instanceof RegExp) {
        const results = this.phone.match(this.customValidate);
        this.phone = results.join('');
      }

      if (currentPhone !== this.phone) {
        this.emitInput(this.phone);
      }
    },
    testCharacters() {
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
    testCustomValidate() {
      return this.customValidate instanceof RegExp ? this.customValidate.test(this.phone) : false;
    },
    onInput() {
      this.$refs.input.setCustomValidity(this.phoneObject.valid ? '' : this.invalidMsg);
      // Returns response.number to assign it to v-model (if being used)
      // Returns full response for cases @input is used
      // and parent wants to return the whole response.
      this.emitInput(this.phone);
    },
    emitInput(value) {
      this.$emit('update:modelValue', value);
      this.$emit('on-input', value, this.phoneObject, this.$refs.input);
    },
    onBlur() {
      this.$emit('blur');
    },
    onFocus() {
      setCaretPosition(this.$refs.input, this.phone.length);
      this.$emit('focus');
    },
    onEnter() {
      this.$emit('enter');
    },
    onSpace() {
      this.$emit('space');
    },
    focus() {
      this.$refs.input.focus();
    },
    toggleDropdown() {
      if (this.disabled || this.dropdownOptions.disabled) {
        return;
      }
      this.searchQuery = '';
      this.open = !this.open;
    },
    clickedOutside() {
      this.open = false;
    },
    keyboardNav(e) {
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
        selEle.focus();
        if (selEle.offsetTop + selEle.clientHeight
          > this.$refs.list.scrollTop + this.$refs.list.clientHeight) {
          this.$refs.list.scrollTop = selEle.offsetTop
            - this.$refs.list.clientHeight
            + selEle.clientHeight;
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
        const selEle = this.$refs.list.children[this.selectedIndex];
        selEle.focus();
        if (selEle.offsetTop < this.$refs.list.scrollTop) {
          this.$refs.list.scrollTop = selEle.offsetTop;
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
          this.typeToFindInput = '';
        }, 700);
        // don't include preferred countries so we jump to the right place in the alphabet
        const typedCountryI = this.sortedCountries
          .slice(this.preferredCountries.length)
          .findIndex((c) => c.name.toLowerCase().startsWith(this.typeToFindInput));
        if (typedCountryI >= 0) {
          this.selectedIndex = this.preferredCountries.length + typedCountryI;
          const selEle = this.$refs.list.children[this.selectedIndex];
          const needToScrollTop = selEle.offsetTop < this.$refs.list.scrollTop;
          const needToScrollBottom = selEle.offsetTop + selEle.clientHeight
            > this.$refs.list.scrollTop + this.$refs.list.clientHeight;
          if (needToScrollTop || needToScrollBottom) {
            this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight / 2;
          }
        }
      }
    },
    reset() {
      this.selectedIndex = this.sortedCountries.map((c) => c.iso2).indexOf(this.activeCountryCode);
      this.open = false;
    },
    setDropdownPosition() {
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > 200;
      if (hasEnoughSpaceBelow) {
        this.dropdownOpenDirection = 'below';
      } else {
        this.dropdownOpenDirection = 'above';
      }
    },
  },
};
</script>

<style src="../assets/sprite.css">
</style>
<style src="../assets/component.css">
</style>
