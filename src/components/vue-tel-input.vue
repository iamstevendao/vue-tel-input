<template>
  <div :class="['vue-tel-input', wrapperClasses, { disabled: disabled }]">
    <div
      v-click-outside="clickedOutside"
      :class="['vti__dropdown', { open: open }]"
      :tabindex="dropdownOptions && dropdownOptions.tabindex ? dropdownOptions.tabindex : 0"
      @keydown="keyboardNav"
      @click="toggleDropdown"
      @keydown.esc="reset"
    >
      <span class="vti__selection">
        <div v-if="enabledFlags" :class="['vti__flag', activeCountryCode.toLowerCase()]" />
        <span v-if="enabledCountryCode" class="vti__country-code">
          +{{ activeCountry.dialCode }}
        </span>
        <slot name="arrow-icon" :open="open">
          <span class="vti__dropdown-arrow">{{ open ? "▲" : "▼" }}</span>
        </slot>
      </span>
      <ul ref="list" class="vti__dropdown-list" v-show="open" :class="dropdownOpenDirection">
        <li
          v-for="(pb, index) in sortedCountries"
          :class="['vti__dropdown-item', getItemClass(index, pb.iso2)]"
          :key="pb.iso2 + (pb.preferred ? '-preferred' : '')"
          @click="choose(pb)"
          @mousemove="selectedIndex = index"
        >
          <div v-if="enabledFlags" :class="['vti__flag', pb.iso2.toLowerCase()]" />
          <strong>{{ pb.name }}</strong>
          <span v-if="dropdownOptions && !dropdownOptions.disabledDialCode">
            +{{ pb.dialCode }}
          </span>
        </li>
      </ul>
    </div>
    <input
      v-model="phone"
      ref="input"
      type="tel"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :class="['vti__input', inputClasses]"
      :disabled="disabled"
      :id="inputId"
      :maxlength="maxLen"
      :name="name"
      :placeholder="parsedPlaceholder"
      :readonly="readonly"
      :required="required"
      :tabindex="inputOptions && inputOptions.tabindex ? inputOptions.tabindex : 0"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      @keyup.enter="onEnter"
      @keyup.space="onSpace"
    />
  </div>
</template>

<script>
import { getExampleNumber, parsePhoneNumberFromString } from 'libphonenumber-js';
import utils, { getCountry, setCaretPosition } from '../utils';
import clickOutside from '../directives/click-outside';

function getDefault(key) {
  const value = utils.options[key];
  if (typeof value === 'undefined') {
    return utils.options[key];
  }
  return value;
}

export default {
  name: 'VueTelInput',
  directives: {
    clickOutside,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    allCountries: {
      type: Array,
      default: () => getDefault('allCountries'),
    },
    autocomplete: {
      type: String,
      default: () => getDefault('autocomplete'),
    },
    autofocus: {
      type: Boolean,
      default: () => getDefault('autofocus'),
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
      type: String,
      default: () => getDefault('defaultCountry'),
    },
    disabled: {
      type: Boolean,
      default: () => getDefault('disabled'),
    },
    disabledFetchingCountry: {
      type: Boolean,
      default: () => getDefault('disabledFetchingCountry'),
    },
    dropdownOptions: {
      type: Object,
      default: () => getDefault('dropdownOptions'),
    },
    dynamicPlaceholder: {
      type: Boolean,
      default: () => getDefault('dynamicPlaceholder'),
    },
    enabledCountryCode: {
      type: Boolean,
      default: () => getDefault('enabledCountryCode'),
    },
    enabledFlags: {
      type: Boolean,
      default: () => getDefault('enabledFlags'),
    },
    ignoredCountries: {
      type: Array,
      default: () => getDefault('ignoredCountries'),
    },
    inputClasses: {
      type: [String, Array, Object],
      default: () => getDefault('inputClasses'),
    },
    inputId: {
      type: String,
      default: () => getDefault('inputId'),
    },
    inputOptions: {
      type: Object,
      default: () => getDefault('inputOptions'),
    },
    invalidMsg: {
      type: String,
      default: () => getDefault('invalidMsg'),
    },
    maxLen: {
      type: Number,
      default: () => getDefault('maxLen'),
    },
    name: {
      type: String,
      default: () => getDefault('name'),
    },
    mode: {
      type: String,
      default: () => getDefault('mode'),
    },
    onlyCountries: {
      type: Array,
      default: () => getDefault('onlyCountries'),
    },
    placeholder: {
      type: String,
      default: () => getDefault('placeholder'),
    },
    preferredCountries: {
      type: Array,
      default: () => getDefault('preferredCountries'),
    },
    readonly: {
      type: Boolean,
      default: () => getDefault('readonly'),
    },
    required: {
      type: Boolean,
      default: () => getDefault('required'),
    },
    validCharactersOnly: {
      type: Boolean,
      default: () => getDefault('validCharactersOnly'),
    },
    wrapperClasses: {
      type: [String, Array, Object],
      default: () => getDefault('wrapperClasses'),
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
      cursorPosition: 0,
      dropdownOpenDirection: 'below',
    };
  },
  computed: {
    activeCountry() {
      return this.findCountry(this.activeCountryCode);
    },
    parsedPlaceholder() {
      if (this.dynamicPlaceholder) {
        const mode = this.mode || 'international';
        return getExampleNumber(this.activeCountryCode, 'mobile').format(mode.toUpperCase());
      }
      return this.placeholder;
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

      return [...preferredCountries, ...this.filteredCountries];
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
      console.log('----- COMPUTED phoneObject:', this.phone, this.activeCountryCode, result);

      Object.assign(phoneObject, {
        countryCode: result.country,
        valid: result.isValid?.(),
        country: this.activeCountry,
        formatted: result.format?.(this.parsedMode.toUpperCase()),
      });

      return phoneObject;
    },
  },
  watch: {
    activeCountry(value, oldValue) {
      console.log('----- WATCH activeCountry:', value);

      if (!value && oldValue?.iso2) {
        this.activeCountryCode = oldValue.iso2;
        return;
      }
      if (value?.iso2) {
        this.$emit('country-changed', value);
      }
    },
    'phoneObject.countryCode': function (value) {
      this.activeCountryCode = value;
    },
    'phoneObject.valid': function () {
      this.$emit('validate', this.phoneObject);
    },
    'phoneObject.formatted': function (value) {
      console.log('----- WATCH phoneObject.formatted', value);

      if (!this.autoFormat || this.customValidate) {
        return;
      }
      // this.phone = value;
      this.$emit('input', value, this.phoneObject);
      // Reset the cursor to current position if it's not the last character.
      console.log('----- value:', value);

      setCaretPosition(this.$refs.input, value?.length);
    },
    value(value, oldValue) {
      console.log('----- WATCH value', value, '-', oldValue);
      if (!this.testCharacters()) {
        this.$nextTick(() => { this.phone = oldValue; });
      } else {
        this.phone = value;
      }
      // Reset the cursor to current position if it's not the last character.
      if (this.cursorPosition < oldValue.length) {
        this.$nextTick(() => { setCaretPosition(this.$refs.input, this.cursorPosition); });
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
    if (this.value) {
      this.phone = this.value.trim();
    }
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
    initializeCountry() {
      return new Promise((resolve) => {
        /**
         * 1. If the phone included prefix (i.e. +12), try to get the country and set it
         */
        if (this.phone?.[0] === '+') {
          return;
        }
        /**
       * 2. Use default country if passed from parent
       */
        if (this.defaultCountry) {
          const defaultCountry = this.findCountry(this.defaultCountry);
          if (defaultCountry) {
            this.choose(defaultCountry);
            resolve();
            return;
          }
        }
        const fallbackCountry = this.findCountry(this.preferredCountries[0])
          || this.filteredCountries[0];
        /**
       * 3. Check if fetching country based on user's IP is allowed, set it as the default country
       */
        if (!this.disabledFetchingCountry) {
          getCountry()
            .then((res) => {
              this.activeCountryCode = res || this.activeCountry;
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
      console.log('----- METHOD choose: ', country);

      let parsedCountry = country;
      if (typeof parsedCountry === 'string') {
        parsedCountry = this.findCountry(parsedCountry);
      }

      console.log('----- parsedCountry:', parsedCountry);

      if (!parsedCountry) {
        return;
      }
      if (this.phone?.[0] === '+'
        && parsedCountry.iso2
        && this.phoneObject.nationalNumber) {
        console.log('----- come here:', this.phoneObject.nationalNumber, parsedCountry.iso2);

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
      }
    },
    testCharacters() {
      if (this.validCharactersOnly) {
        const re = /^[()\-+0-9\s]*$/;
        return re.test(this.phone);
      }
      if (this.customValidate) {
        return this.customValidate instanceof RegExp ? this.customValidate.test(this.phone) : false;
      }
      return true;
    },
    testCustomValidate() {
      return this.customValidate instanceof RegExp ? this.customValidate.test(this.phone) : false;
    },
    onInput(e) {
      console.log('----- METHOD onInput');

      if (!this.testCharacters()) {
        return;
      }
      this.$refs.input.setCustomValidity(this.phoneObject.valid ? '' : this.invalidMsg);
      // Returns response.number to assign it to v-model (if being used)
      // Returns full response for cases @input is used
      // and parent wants to return the whole response.
      this.$emit('input', this.phone, this.phoneObject);

      // Keep the current cursor position just in case the input reformatted
      // and it gets moved to the last character.
      if (e && e.target) {
        this.cursorPosition = e.target.selectionStart;
      }
    },
    onBlur() {
      this.$emit('blur');
    },
    onFocus() {
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
      if (this.disabled) {
        return;
      }
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

<style src="../assets/sprite.css"></style>
<style>
.vue-tel-input {
  border-radius: 3px;
  display: flex;
  border: 1px solid #bbb;
  text-align: left;
}
.vue-tel-input.disabled .selection,
.vue-tel-input.disabled .dropdown,
.vue-tel-input.disabled input {
  cursor: no-drop;
}
.vue-tel-input:focus-within {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  border-color: #66afe9;
}
.vti__dropdown {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  padding: 7px;
  cursor: pointer;
}
.vti__dropdown.show {
  max-height: 300px;
  overflow: scroll;
}
.vti__dropdown.open {
  background-color: #f3f3f3;
}
.vti__dropdown:hover {
  background-color: #f3f3f3;
}
.vti__selection {
  font-size: 0.8em;
  display: flex;
  align-items: center;
}
.vti__selection .vti__country-code {
  color: #666;
}
.vti__flag {
  margin-right: 5px;
  margin-left: 5px;
}
.vti__dropdown-list {
  z-index: 1;
  padding: 0;
  margin: 0;
  text-align: left;
  list-style: none;
  max-height: 200px;
  overflow-y: scroll;
  position: absolute;
  left: -1px;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 390px;
}
.vti__dropdown-list.below {
  top: 33px;
}
.vti__dropdown-list.above {
  top: auto;
  bottom: 100%;
}
.vti__dropdown-arrow {
  transform: scaleY(0.5);
  display: inline-block;
  color: #666;
}
.vti__dropdown-item {
  cursor: pointer;
  padding: 4px 15px;
}
.vti__dropdown-item.highlighted {
  background-color: #f3f3f3;
}
.vti__dropdown-item.last-preferred {
  border-bottom: 1px solid #cacaca;
}
.vti__dropdown-item .vti__flag {
  display: inline-block;
  margin-right: 5px;
}
.vti__input {
  border: none;
  border-radius: 0 2px 2px 0;
  width: 100%;
  outline: none;
  padding-left: 7px;
}
</style>
