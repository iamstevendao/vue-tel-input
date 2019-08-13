<template>
  <div :class="['vue-tel-input', wrapperClasses, { disabled: disabled }]">
    <div
      v-click-outside="clickedOutside"
      :tabindex="dropdownOptions && dropdownOptions.tabindex ? dropdownOptions.tabindex : 0"
      :class="{ open: open }"
      class="dropdown"
      @keydown="keyboardNav"
      @click="toggleDropdown"
      @keydown.esc="reset"
    >
      <span class="selection">
        <div v-if="enabledFlags" :class="activeCountry.iso2.toLowerCase()" class="iti-flag" />
        <span v-if="enabledCountryCode" class="country-code">+{{ activeCountry.dialCode }}</span>
        <slot :open="open" name="arrow-icon">
          <span class="dropdown-arrow">{{ open ? "▲" : "▼" }}</span>
        </slot>
      </span>
      <ul v-show="open" ref="list">
        <li
          v-for="(pb, index) in sortedCountries"
          :key="pb.iso2 + (pb.preferred ? '-preferred' : '')"
          :class="getItemClass(index, pb.iso2)"
          class="dropdown-item"
          @click="choose(pb)"
          @mousemove="selectedIndex = index"
        >
          <div v-if="enabledFlags" :class="pb.iso2.toLowerCase()" class="iti-flag" />
          <strong>{{ pb.name }}</strong>
          <span v-if="dropdownOptions && !dropdownOptions.disabledDialCode"
            >+{{ pb.dialCode }}</span
          >
        </li>
      </ul>
    </div>
    <input
      ref="input"
      v-model="phone"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete"
      :name="name"
      :class="inputClasses"
      :id="inputId"
      :maxlength="maxLen"
      :tabindex="inputOptions && inputOptions.tabindex ? inputOptions.tabindex : 0"
      type="tel"
      @blur="onBlur"
      @input="onInput"
      @keyup.enter="onEnter"
      @keyup.space="onSpace"
    />
  </div>
</template>

<style src="../assets/sprite.css"></style>
<style scoped>
li.last-preferred {
  border-bottom: 1px solid #cacaca;
}
.iti-flag {
  margin-right: 5px;
  margin-left: 5px;
}
.dropdown-item .iti-flag {
  display: inline-block;
  margin-right: 5px;
}
.selection {
  font-size: 0.8em;
  display: flex;
  align-items: center;
}
.vue-tel-input {
  border-radius: 3px;
  display: flex;
  border: 1px solid #bbb;
  text-align: left;
}
.vue-tel-input:focus-within {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  border-color: #66afe9;
}
input {
  border: none;
  border-radius: 0 2px 2px 0;
  width: 100%;
  outline: none;
  padding-left: 7px;
}
ul {
  z-index: 1;
  padding: 0;
  margin: 0;
  text-align: left;
  list-style: none;
  max-height: 200px;
  overflow-y: scroll;
  position: absolute;
  top: 33px;
  left: -1px;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 390px;
}
.dropdown {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  padding: 7px;
  cursor: pointer;
}
.dropdown.open {
  background-color: #f3f3f3;
}
.dropdown:hover {
  background-color: #f3f3f3;
}
.country-code {
  color: #666;
}
.dropdown-arrow {
  transform: scaleY(0.5);
  display: inline-block;
  color: #666;
}
.dropdown-item {
  cursor: pointer;
  padding: 4px 15px;
}
.dropdown-item.highlighted {
  background-color: #f3f3f3;
}
.dropdown-menu.show {
  max-height: 300px;
  overflow: scroll;
}
.vue-tel-input.disabled .selection,
.vue-tel-input.disabled .dropdown,
.vue-tel-input.disabled input {
  cursor: no-drop;
}
</style>

<script>
import PhoneNumber from 'awesome-phonenumber';
import allCountries from '../assets/all-countries';
import getCountry from '../assets/default-country';

export default {
  name: 'VueTelInput',
  directives: {
    // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside
    'click-outside': {
      bind(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression ${binding.expression} is not a function, but has to be`;
          if (compName) {
            warn += `Found in component ${compName}`;
          }
          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const { bubble } = binding.modifiers;
        const handler = (e) => {
          // Fall back to composedPath if e.path is undefined
          const path = e.path || (e.composedPath && e.composedPath());
          if (bubble || (path.length && !el.contains(path[0]) && el !== path[0])) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        // add Event Listeners
        document.addEventListener('click', handler);
      },
      unbind(el) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Enter a phone number',
    },
    disabledFetchingCountry: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledFormatting: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: '',
    },
    invalidMsg: {
      default: '',
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    allCountries: {
      type: Array,
      default: () => allCountries,
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: String,
      default: '',
    },
    enabledCountryCode: {
      type: Boolean,
      default: false,
    },
    enabledFlags: {
      type: Boolean,
      default: true,
    },
    preferredCountries: {
      type: Array,
      default: () => [],
    },
    onlyCountries: {
      type: Array,
      default: () => [],
    },
    ignoredCountries: {
      type: Array,
      default: () => [],
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    name: {
      type: String,
      default: 'telephone',
    },
    wrapperClasses: {
      type: [String, Array, Object],
      default: '',
    },
    inputClasses: {
      type: [String, Array, Object],
      default: '',
    },
    inputId: {
      type: String,
      default: '',
    },
    dropdownOptions: {
      type: Object,
      default: () => ({}),
    },
    inputOptions: {
      type: Object,
      default: () => ({}),
    },
    maxLen: {
      type: Number,
      default: 25,
    },
    validCharactersOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      phone: '',
      activeCountry: { iso2: '' },
      open: false,
      selectedIndex: null,
      typeToFindInput: '',
      typeToFindTimer: null,
    };
  },
  computed: {
    parsedMode() {
      if (this.mode) {
        if (!['international', 'national'].includes(this.mode)) {
          console.error('Invalid value of prop "mode"');
        } else {
          return this.mode;
        }
      }
      if (!this.phone) {
        return 'national';
      }
      return this.phone[0] === '+' ? 'international' : 'national';
    },
    filteredCountries() {
      // List countries after filtered
      if (this.onlyCountries.length) {
        return this.getCountries(this.onlyCountries);
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
        .map(country => ({ ...country, preferred: true }));

      return [...preferredCountries, ...this.filteredCountries];
    },
    phoneObject() {
      const result = PhoneNumber(this.phone, this.activeCountry.iso2).toJSON();
      Object.assign(result, {
        isValid: result.valid,
        country: this.activeCountry,
      });
      return result;
    },
  },
  watch: {
    // eslint-disable-next-line func-names
    'phoneObject.valid': function (value) {
      if (value) {
        this.phone = this.phoneObject.number[this.parsedMode];
      }
      this.$emit('validate', this.phoneObject);
      this.$emit('onValidate', this.phoneObject); // Deprecated
    },
    value() {
      this.phone = this.value;
    },
    open(isDropdownOpened) {
      // Emit open and close events
      if (isDropdownOpened) {
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
    phone(newValue, oldValue) {
      if (this.validCharactersOnly && !this.testCharacters()) {
        this.$nextTick(() => { this.phone = oldValue; });
      } else if (newValue) {
        if (newValue[0] === '+') {
          const code = PhoneNumber(newValue).getRegionCode();
          if (code) {
            this.activeCountry = this.findCountry(code) || this.activeCountry;
          }
        }
      }
    },
    activeCountry(value) {
      if (value && value.iso2) {
        this.$emit('country-changed', value);
      }
    },
  },
  mounted() {
    this.initializeCountry().then(() => {
      if (!this.phone
        && this.inputOptions
        && this.inputOptions.showDialCode
        && this.activeCountry) {
        this.phone = `+${this.activeCountry.dialCode}`;
      }
      this.$emit('validate', this.phoneObject);
      this.$emit('onValidate', this.phoneObject); // Deprecated
    }).catch(console.error); // eslint-disable-line
  },
  created() {
    if (this.value) {
      this.phone = this.value.trim();
    }
  },
  methods: {
    initializeCountry() {
      return new Promise((resolve) => {
        /**
         * 1. If the phone included prefix (+12), try to get the country and set it
         */
        if (this.phone && this.phone[0] === '+') {
          const activeCountry = PhoneNumber(this.phone).getRegionCode();
          if (activeCountry) {
            this.activeCountry = activeCountry;
            resolve();
            return;
          }
        }
        /**
         * 2. Use default country if passed from parent
         */
        if (this.defaultCountry) {
          const defaultCountry = this.findCountry(this.defaultCountry);
          if (defaultCountry) {
            this.activeCountry = defaultCountry;
            resolve();
            return;
          }
        }
        /**
         * 3. Use the first country from preferred list (if available) or all countries list
         */
        this.activeCountry = this.findCountry(this.preferredCountries[0])
          || this.filteredCountries[0];
        /**
         * 4. Check if fetching country based on user's IP is allowed, set it as the default country
         */
        if (!this.disabledFetchingCountry) {
          getCountry().then((res) => {
            this.activeCountry = this.findCountry(res) || this.activeCountry;
          }).finally(resolve)
            .catch((error) => {
              console.warn(error);
            });
        } else {
          resolve();
        }
      });
    },
    /**
     * Get the list of countries from the list of iso2 code
     */
    getCountries(list = []) {
      return list
        .map(countryCode => this.findCountry(countryCode))
        .filter(Boolean);
    },
    findCountry(iso = '') {
      return this.allCountries.find(country => country.iso2 === iso.toUpperCase());
    },
    getItemClass(index, iso2) {
      const highlighted = this.selectedIndex === index;
      const lastPreferred = index === this.preferredCountries.length - 1;
      const preferred = this.preferredCountries.some(c => c.toUpperCase() === iso2);
      return {
        highlighted,
        'last-preferred': lastPreferred,
        preferred,
      };
    },
    choose(country) {
      this.activeCountry = country;
      if (this.inputOptions && this.inputOptions.showDialCode && country) {
        this.phone = `+${country.dialCode}`;
      }
      if (this.phone && this.phone[0] === '+') {
        this.phone = PhoneNumber(this.phoneObject.number.national, this.activeCountry.iso2)
          .getNumber('international');
      }
      this.$emit('input', this.phoneObject.number[this.parsedMode], this.phoneObject);
      this.$emit('onInput', this.phoneObject); // Deprecated
    },
    testCharacters() {
      const re = /^[()-+0-9\s]*$/;
      return re.test(this.phone);
    },
    onInput() {
      if (this.validCharactersOnly && !this.testCharacters()) {
        return;
      }
      this.$refs.input.setCustomValidity(this.phoneObject.valid ? '' : this.invalidMsg);
      // Returns response.number to assign it to v-model (if being used)
      // Returns full response for cases @input is used
      // and parent wants to return the whole response.
      this.$emit('input', this.phoneObject.number[this.parsedMode], this.phoneObject);
      this.$emit('onInput', this.phoneObject); // Deprecated
    },
    onBlur() {
      this.$emit('blur');
      this.$emit('onBlur'); // Deprecated
    },
    onEnter() {
      this.$emit('enter');
      this.$emit('onEnter'); // Deprecated
    },
    onSpace() {
      this.$emit('space');
      this.$emit('onSpace'); // Deprecated
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
          .findIndex(c => c.name.toLowerCase().startsWith(this.typeToFindInput));
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
      this.selectedIndex = this.sortedCountries.map(c => c.iso2).indexOf(this.activeCountry.iso2);
      this.open = false;
    },
  },
};
</script>
