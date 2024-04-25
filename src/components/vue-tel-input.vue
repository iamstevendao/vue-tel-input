<template>
  <div ref="refRoot"
       :class="['vue-tel-input', styleClasses, { disabled }]">
    <div v-click-outside="clickedOutside"
         aria-label="Country Code Selector"
         aria-haspopup="listbox"
         :aria-expanded="data.open"
         role="button"
         :class="['vti__dropdown', { open: data.open, disabled: dropdownOptions.disabled }]"
         :tabindex="dropdownOptions.tabindex"
         @keydown="keyboardNav"
         @click="toggleDropdown"
         @keydown.space="toggleDropdown"
         @keydown.esc="reset"
         @keydown.tab="reset">
      <span class="vti__selection">
          <span
            v-if="dropdownOptions.showFlags"
            :class="['vti__flag', toLowerCase(data.activeCountryCode)]"
          ></span>
      <span v-if="dropdownOptions.showDialCodeInSelection" class="vti__country-code">
            +{{ activeCountry && activeCountry.dialCode }}
          </span>
      <slot name="arrow-icon"
            :open="data.open">
        <span class="vti__dropdown-arrow">{{ data.open ? "▲" : "▼" }}</span>
      </slot>
      </span>
      <ul v-if="data.open"
          ref="refList"
          :class="['vti__dropdown-list', data.dropdownOpenDirection]"
          role="listbox">
        <div v-if="dropdownOptions.showSearchBox" class="vti__search_box_container">
            <slot name="search-icon"></slot>
            <input :class="['vti__input', 'vti__search_box']"
                  aria-label="Search by country name or country code"
                  :placeholder="dropdownOptions.searchBoxPlaceholder || (sortedCountries.length ? sortedCountries[0].name : '')"
                  type="text"
                  v-model="data.searchQuery"
                  @click.stop />
          </div>
        <li v-for="(pb, index) in sortedCountries"
            role="option"
            :class="['vti__dropdown-item', getItemClass(index, pb.iso2)]"
            :key="pb.iso2 + (pb.preferred ? '-preferred' : '')"
            tabindex="-1"
            @click="choose(pb)"
            @mousemove="data.selectedIndex = index"
            :aria-selected="data.activeCountryCode === pb.iso2 && !pb.preferred">
          <span
              v-if="dropdownOptions.showFlags"
              :class="['vti__flag', toLowerCase(pb.iso2)]"
            ></span>
          <strong>{{ pb.name }}</strong>
          <span v-if="dropdownOptions.showDialCodeInList"> +{{ pb.dialCode }} </span>
        </li>
      </ul>
    </div>
    <input v-model="data.phone"
           ref="refInput"
           :type="inputOptions.type"
           :autocomplete="inputOptions.autocomplete"
           :autofocus="inputOptions.autofocus"
           :class="['vti__input', 'vti__phone', inputOptions.styleClasses]"
           :disabled="disabled"
           :id="inputOptions.id"
           :maxlength="inputOptions.maxlength"
           :name="inputOptions.name"
           :placeholder="data.parsedPlaceholder"
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

<script setup lang="ts">
  import type { PropType } from 'vue';
  import type { CountryCode, NumberFormat } from 'libphonenumber-js';
  import type { CountryObject, DropdownOptions, InputOptions, PhoneMeta } from '../types';

  import { parsePhoneNumberFromString } from 'libphonenumber-js';
  import { getDefault, setCaretPosition, getCountry, toLowerCase, toUpperCase } from '../utils';
  import clickOutside from '../directives/click-outside';
  import { computed, nextTick, onMounted, reactive, shallowRef, watch, defineExpose } from 'vue';

  const refRoot = shallowRef<HTMLDivElement>()
  const refList = shallowRef<HTMLUListElement>()
  const refInput = shallowRef<HTMLInputElement>()

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

  defineOptions({
    name: 'VueTelInput',
    directives: {
      clickOutside,
    },
  })

  const emit = defineEmits([
    'blur',
    'close',
    'country-changed',
    'enter',
    'focus',
    'on-input',
    'open',
    'space',
    'validate',
  ])
  const props = defineProps({
    allCountries: {
      type: Array as PropType<CountryObject[]>,
      default: () => getDefault('allCountries') as CountryObject[],
    },
    autoFormat: {
      type: Boolean,
      default: () => getDefault('autoFormat') as boolean,
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: () => getDefault('customValidate') as boolean,
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: [String, Number],
      default: () => getDefault('defaultCountry') as string,
    },
    disabled: {
      type: Boolean,
      default: () => getDefault('disabled') as boolean,
    },
    autoDefaultCountry: {
      type: Boolean,
      default: () => getDefault('autoDefaultCountry') as boolean,
    },
    dropdownOptions: {
      type: Object as PropType<DropdownOptions>,
      default: () => getDefault('dropdownOptions') as DropdownOptions,
    },
    ignoredCountries: {
      type: Array as PropType<string[]>,
      default: () => getDefault('ignoredCountries') as never[],
    },
    inputOptions: {
      type: Object as PropType<InputOptions>,
      default: () => getDefault('inputOptions') as InputOptions,
    },
    invalidMsg: {
      type: String,
      default: () => getDefault('invalidMsg') as string,
    },
    mode: {
      type: String as PropType<'auto' | Lowercase<NumberFormat>>,
      default: () => getDefault('mode') as 'auto',
    },
    onlyCountries: {
      type: Array as PropType<string[]>,
      default: () => getDefault('onlyCountries') as never[],
    },
    preferredCountries: {
      type: Array as PropType<string[]>,
      default: () => getDefault('preferredCountries') as never[],
    },
    validCharactersOnly: {
      type: Boolean,
      default: () => getDefault('validCharactersOnly') as boolean,
    },
    styleClasses: {
      type: [String, Array, Object],
      default: () => getDefault('styleClasses') as string,
    },
  })

  const modelValue = defineModel({ type: String })
  watch(modelValue, (value, oldValue) => {
    if (!testCharacters()) {
      nextTick(() => {
        data.phone = oldValue ?? '';
        onInput();
      });
    } else {
      data.phone = value ?? '';
    }
  })

  const data = reactive({
    phone: '',
    activeCountryCode: undefined as CountryCode | undefined,
    open: false,
    finishMounted: false,
    selectedIndex: null as number | null,
    typeToFindInput: '',
    typeToFindTimer: undefined as ReturnType<typeof setTimeout> | undefined,
    dropdownOpenDirection: 'below' as 'above' | 'below',
    parsedPlaceholder: props.inputOptions.placeholder,
    searchQuery: '',
  })
  watch(() => data.open, (isDropdownOpened) => {
    // Emit open and close events
    if (isDropdownOpened) {
      setDropdownPosition();
      emit('open');
    } else {
      emit('close');
    }
  })

  const filteredCountries = computed(() => {
    // List countries after filtered
    if (props.onlyCountries.length) {
      return props.allCountries
        .filter(({ iso2 }) => props.onlyCountries.some((c) => toUpperCase(c) === iso2));
    }

    if (props.ignoredCountries.length) {
      return props.allCountries.filter(
        ({ iso2 }) => !props.ignoredCountries.includes(toUpperCase(iso2))
          && !props.ignoredCountries.includes(toLowerCase(iso2)),
      );
    }

    return props.allCountries;
  })

  const activeCountry = computed(() => findCountry(data.activeCountryCode))
  watch(activeCountry, (value, oldValue) => {
    if (!value && oldValue?.iso2) {
      data.activeCountryCode = oldValue.iso2;
      return;
    }
    if (value?.iso2) {
      emit('country-changed', value);
      // resetPlaceholder();
    }
  })

  const parsedMode = computed<Lowercase<NumberFormat>>(() => {
    const mode = toLowerCase(props.mode)
    if (mode === 'auto') {
      if (!data.phone || data.phone?.startsWith('+')) {
        return 'national';
      }
      return 'international';
    }
    if (!['national', 'international', 'e.164', 'rfc3966', 'idd'].includes(mode)) {
      console.error('Invalid value of prop "mode"');
      return 'international';
    }
    return mode;
  })

  const sortedCountries = computed(() => {
    // Sort the list countries: from preferred countries to all countries
    const preferredCountries = getCountries(props.preferredCountries)
      .map((country) => ({ ...country, preferred: true }));

    const countriesList = [...preferredCountries, ...filteredCountries.value] as Array<CountryObject & { preferred: boolean }>
    if (!props.dropdownOptions.showSearchBox) {
      return countriesList
    }
    const userInput = data.searchQuery;
    const cleanInput = userInput.replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, '');

    return countriesList.filter(
      (c) => (new RegExp(cleanInput, 'i')).test(c.name)
        || (new RegExp(cleanInput, 'i')).test(c.iso2)
        || (new RegExp(cleanInput, 'i')).test(c.dialCode),
    );
  })

  const phoneObject = computed(() => {
    const result = data.phone.startsWith('+')
      ? parsePhoneNumberFromString(data.phone)
      : parsePhoneNumberFromString(data.phone, data.activeCountryCode);

    const meta: PhoneMeta = {
      country: result?.country,
      countryCode: result?.country,
      formatted: data.phone,
      valid: result?.isValid(),
      possible: result?.isPossible?.(),
      nationalNumber: result?.nationalNumber,
    }

    if (meta.valid) {
      meta.formatted = result?.format(toUpperCase(parsedMode.value));
    }

    if (result?.country
      && (props.ignoredCountries.length || props.onlyCountries.length)
      && !findCountry(result.country)) {
        meta.valid = false;
        meta.possible = false;
        result.country = null;
    }

    if(!result) {
      return meta
    }

    return {
      ...meta,
      ...result,
    }
  })
  watch(() => phoneObject.value.countryCode, (value) => {
    data.activeCountryCode = value;
  })
  watch(() => phoneObject.value.valid, () => {
    emit('validate', phoneObject.value);
  })
  watch(() => phoneObject.value.formatted, (value) => {
    if (!props.autoFormat || props.customValidate) {
      return;
    }
    emitInput(value);

    nextTick(() => {
      // In case `v-model` is not set, we need to update the `phone` to be new formatted value
      if (value && !modelValue.value) {
        data.phone = value;
      }
    });
  })

  // finishMounted() {
  //   resetPlaceholder();
  // },

  watch(() => props.inputOptions.placeholder, resetPlaceholder)

  onMounted(() => {
    if (modelValue.value) {
      data.phone = modelValue.value.trim();
    }

    cleanInvalidCharacters();

    initializeCountry()
      .then(() => {
        if (!data.phone
          && props.inputOptions?.showDialCode
          && data.activeCountryCode) {
          data.phone = `+${data.activeCountryCode}`;
        }
        emit('validate', phoneObject.value);
      })
      .catch(console.error)
      .then(() => {
        data.finishMounted = true;
      });
  })

  function resetPlaceholder() {
    data.parsedPlaceholder = props.inputOptions.placeholder;
    // TODO: Fix dynamicPlaceholder
    // if (!props.inputOptions.dynamicPlaceholder) {
    //   return result;
    // }
    // getExamples()
    //   .then((results) => {
    //     examples = results;
    //     const mode = (!props.mode || props.mode === 'auto') ? 'international' : props.mode;
    //     const number = getExampleNumber(data.activeCountryCode.toUpperCase(), results);
    //     data.parsedPlaceholder = number?.format(mode.toUpperCase()) || this.placeholder;
    //   })
    //   .catch(console.error);
  }
  function initializeCountry(): Promise<void> {
    return new Promise((resolve) => {
      /**
       * 1. If the phone included prefix (i.e. +12), try to get the country and set it
       */
      if (data.phone?.[0] === '+') {
        resolve();
        return;
      }
      /**
       * 2. Use default country if passed from parent
       */
      if (props.defaultCountry) {
        if (typeof props.defaultCountry === 'string') {
          choose(props.defaultCountry);
          resolve();
          return;
        }
        if (typeof props.defaultCountry === 'number') {
          const country = findCountryByDialCode(props.defaultCountry);
          if (country) {
            choose(country.iso2);
            resolve();
            return;
          }
        }
      }

      const fallbackCountry = props.preferredCountries[0] || filteredCountries.value[0];
      /**
       * 3. Check if fetching country based on user's IP is allowed, set it as the default country
       */
      if (props.autoDefaultCountry) {
        getCountry()
          .then((res) => {
            choose(res || data.activeCountryCode);
          })
          .catch((error) => {
            console.warn(error);
            /**
             * 4. Use the first country from preferred list (if available) or all countries list
             */
            choose(fallbackCountry);
          })
          .then(() => {
            resolve();
          });
      } else {
        /**
         * 4. Use the first country from preferred list (if available) or all countries list
         */
        choose(fallbackCountry);
        resolve();
      }
    });
  }
  /**
   * Get the list of countries from the list of iso2 code
   */
  function getCountries(list: string[] = []) {
    return list
      .map(findCountry)
      .filter(Boolean);
  }
  function findCountry(iso = '') {
    return filteredCountries.value.find((country) => country.iso2 === toUpperCase(iso));
  }
  function findCountryByDialCode(dialCode: number) {
    return filteredCountries.value.find((country) => Number(country.dialCode) === dialCode);
  }
  function getItemClass(index: number, iso2: string) {
    const highlighted = data.selectedIndex === index;
    const lastPreferred = index === props.preferredCountries.length - 1;
    const preferred = props.preferredCountries.some((c) => toUpperCase(c) === iso2);
    return {
      highlighted,
      'last-preferred': lastPreferred,
      preferred,
    };
  }
  function choose(country: string | CountryObject) {
    let parsedCountry = country;
    if (typeof parsedCountry === 'string') {
      parsedCountry = findCountry(parsedCountry);
    }

    if (!parsedCountry) {
      return;
    }

    if (data.phone?.[0] === '+'
      && parsedCountry.iso2
      && phoneObject.value.nationalNumber) {
      data.activeCountryCode = parsedCountry.iso2;
      // Attach the current phone number with the newly selected country
      data.phone = parsePhoneNumberFromString(
        phoneObject.value.nationalNumber,
        parsedCountry.iso2,
      )
        ?.formatInternational() ?? '';
      return;
    }

    if (props.inputOptions?.showDialCode && parsedCountry) {
      // Reset phone if the showDialCode is set
      data.phone = `+${parsedCountry.dialCode}`;
      data.activeCountryCode = parsedCountry.iso2;
      return;
    }

    // update value, even if international mode is NOT used
    data.activeCountryCode = parsedCountry.iso2;
    emitInput(data.phone);
  }
  function cleanInvalidCharacters() {
    const currentPhone = data.phone;
    if (props.validCharactersOnly) {
      const results = data.phone.match(/[()\-+0-9\s]*/g);
      data.phone = results.join('');
    }

    if (props.customValidate && props.customValidate instanceof RegExp) {
      const results = data.phone.match(props.customValidate);
      data.phone = results.join('');
    }

    if (currentPhone !== data.phone) {
      emitInput(data.phone);
    }
  }
  function testCharacters() {
    if (props.validCharactersOnly) {
      const result = /^[()\-+0-9\s]*$/.test(data.phone);
      if (!result) {
        return false;
      }
    }
    if (props.customValidate) {
      return testCustomValidate();
    }
    return true;
  }
  function testCustomValidate() {
    return props.customValidate instanceof RegExp ? props.customValidate.test(data.phone) : false;
  }
  function onInput() {
    refInput.value?.setCustomValidity(phoneObject.value.valid ? '' : props.invalidMsg);
    // Returns response.number to assign it to v-model (if being used)
    // Returns full response for cases @input is used
    // and parent wants to return the whole response.
    emitInput(data.phone);
  }
  function emitInput(value: string) {
    // emit('update:modelValue', value);
    modelValue.value = value;

    emit('on-input', value, phoneObject.value, refInput.value);
  }
  function onBlur(e: FocusEvent) {
    emit('blur', e);
  }
  function onFocus(e: FocusEvent) {
    setCaretPosition(refInput.value, data.phone.length);
    emit('focus', e);
  }
  function onEnter(e: KeyboardEvent) {
    emit('enter', e);
  }
  function onSpace(e: KeyboardEvent) {
    emit('space', e);
  }
  function focus() {
    refInput.value?.focus();
  }
  function blur() {
    refInput.value?.blur();
  }
  function toggleDropdown() {
    if (props.disabled || props.dropdownOptions.disabled) {
      return;
    }
    data.searchQuery = '';
    data.open = !data.open;
  }
  function clickedOutside() {
    data.open = false;
  }
  function keyboardNav(e: KeyboardEvent) {
    if (e.keyCode === 40) {
      // down arrow
      e.preventDefault();
      data.open = true;
      if (data.selectedIndex === null) {
        data.selectedIndex = 0;
      } else {
        data.selectedIndex = Math.min(sortedCountries.value.length - 1, data.selectedIndex + 1);
      }
      const selEle = refList.value.children[data.selectedIndex] as HTMLLIElement;
      selEle.focus();
      if (selEle.offsetTop + selEle.clientHeight
        > refList.value.scrollTop + refList.value.clientHeight) {
        refList.value.scrollTop = selEle.offsetTop
          - refList.value.clientHeight
          + selEle.clientHeight;
      }
    } else if (e.keyCode === 38) {
      // up arrow
      e.preventDefault();
      data.open = true;
      if (data.selectedIndex === null) {
        data.selectedIndex = sortedCountries.value.length - 1;
      } else {
        data.selectedIndex = Math.max(0, data.selectedIndex - 1);
      }
      const selEle = refList.value.children[data.selectedIndex] as HTMLLIElement;
      selEle.focus();
      if (selEle.offsetTop < refList.value.scrollTop) {
        refList.value.scrollTop = selEle.offsetTop;
      }
    } else if (e.keyCode === 13) {
      // enter key
      if (data.selectedIndex !== null) {
        choose(sortedCountries.value[data.selectedIndex]);
      }
      data.open = !data.open;
    } else {
      // typing a country's name
      data.typeToFindInput += e.key;
      clearTimeout(data.typeToFindTimer);
      data.typeToFindTimer = setTimeout(() => {
        data.typeToFindInput = '';
      }, 700);
      // don't include preferred countries so we jump to the right place in the alphabet
      const typedCountryI = sortedCountries.value
        .slice(props.preferredCountries.length)
        .findIndex((c) => toLowerCase(c.name).startsWith(data.typeToFindInput));
      if (typedCountryI >= 0) {
        data.selectedIndex = props.preferredCountries.length + typedCountryI;
        const selEle = refList.value.children[data.selectedIndex] as HTMLLIElement;
        const needToScrollTop = selEle.offsetTop < refList.value.scrollTop;
        const needToScrollBottom = selEle.offsetTop + selEle.clientHeight
          > refList.value.scrollTop + refList.value.clientHeight;
        if (needToScrollTop || needToScrollBottom) {
          refList.value.scrollTop = selEle.offsetTop - refList.value.clientHeight / 2;
        }
      }
    }
  }
  function reset() {
    data.selectedIndex = sortedCountries.value.map((c) => c.iso2).indexOf(data.activeCountryCode);
    data.open = false;
  }
  function setDropdownPosition() {
    const spaceBelow = window.innerHeight - refRoot.value.getBoundingClientRect().bottom;
    const hasEnoughSpaceBelow = spaceBelow > 200;
    if (hasEnoughSpaceBelow) {
      data.dropdownOpenDirection = 'below';
    } else {
      data.dropdownOpenDirection = 'above';
    }
  }
  defineExpose({
    focus,
    blur,
  })
</script>

<style src="../assets/sprite.css"></style>
<style src="../assets/component.css"></style>
