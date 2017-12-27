<template lang="pug">
b-row.justify-content-md-center
  b-col(col md="5")
    b-input-group
      b-dropdown(variant="outline-secondary")
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
    // h1 {{ formattedResult }}
    // h3 {{ parsedResult }}
</template>

<script>
import { parse, format, asYouType, isValidNumber } from 'libphonenumber-js';
import { abstractField } from "vue-form-generator";
import allCountries from '../assets/all-countries';
import getCountry from '../assets/default-country';

export default {
  name: 'vfg-field-telephone',
  mixins: [abstractField],
  mounted() {
    getCountry().then((res) => {
      this.activeCountry = allCountries.find(country => country.iso2 === res);
    });
  },
  data() {
    return {
      allCountries,
      activeCountry: allCountries[0],
      phoneNumber: '',
    };
  },
  computed: {
    formattedResult() {
      const formatter = new asYouType();
      const result = formatter.input(this.phoneNumber);
      if (this.phoneNumber && this.phoneNumber[0] === '+') {
        // if user manually type the country code
        this.activeCountry = this.allCountries.find(ele => ele['iso2'].toUpperCase() === formatter.country) || this.activeCountry;
      }
      return format(this.phoneNumber, this.activeCountry.iso2, 'International');
    },
    state() {
      return isValidNumber(this.formattedResult);
    },
  },
  watch: {
    state(value) {
      if (value) {
        this.phoneNumber = this.formattedResult;
      }
    },
  },
  methods: {
    choose(country) {
      this.activeCountry = country;
    },
    format(value) {
      return new asYouType(this.activeCountry.iso2).input(value);
    },
  },
};
</script>

<style>
.dropdown-menu.show {
  max-height: 300px;
  overflow: scroll;
}
.input-group img {
  width: 25px;
  margin-right: 5px;
}
h1 {
  margin-top: 30px;
}
</style>

