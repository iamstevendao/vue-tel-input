<template lang="pug">
b-card
  b-input-group
    b-dropdown(variant="light")
      template(slot="button-content") 
        img(:src="activeCountry.icon")
      b-dropdown-item(v-for="pb in allCountries"
                      :key="pb['iso2']" 
                      @click="choose(pb)")
        img(:src="pb.icon")
        strong {{ pb.name }}  
        span +{{ pb.dialCode }}
    b-form-input(v-model="phoneNumber"
                placeholder="Enter your phone number"
                :state="state"
                :formatter="format")
  h1 {{ formattedResult }}
  h1 {{ parsedResult }}
</template>

<script>
import { parse, format, asYouType, isValidNumber } from 'libphonenumber-js';
import allCountries from '../assets/all-countries';

export default {
  name: 'tel-input',
  data() {
    return {
      allCountries,
      activeCountry: allCountries[0],
      phoneNumber: '',
    };
  },
  computed: {
    formattedResult() {
      return format(this.phoneNumber, this.activeCountry.iso2, 'International');
    },
    parsedResult() {
      const result = parse(this.phoneNumber, this.activeCountry.iso2);
      return Object.keys(result).length > 0 ? result : '';
    },
    state() {
      return isValidNumber(this.phoneNumber, this.activeCountry.iso2);
    },
  },
  methods: {
    choose(country) {
      this.activeCountry = country;
    },
    format(value, event) {
      return new asYouType(this.activeCountry.iso2).input(value);
    },
  },
};
</script>

<style>
.dropdown-menu.show {
  max-height: 200px;
  overflow: scroll;
}
.input-group img {
  width: 25px;
  margin-right: 5px;
}
</style>

