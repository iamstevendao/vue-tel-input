<template lang="pug">
b-row.justify-content-md-center
  b-col(col md="12")
    b-input-group
      b-dropdown(variant="outline-secondary")
        template(slot="button-content") 
          img(:src="activeCountry.icon")
        b-dropdown-item(v-for="pb in allCountries"
                        :key="pb['iso2']" 
                        @click="choose(pb)")
          img(:src="pb.icon")
          strong &nbsp&nbsp{{ pb.name }}&nbsp&nbsp
          span +{{ pb.dialCode }}
      b-form-input(v-model="value"
                  placeholder="Enter your phone number"
                  :state="state"
                  :formatter="format")
</template>

<script>
import { format, asYouType, isValidNumber } from 'libphonenumber-js';
import { abstractField } from 'vue-form-generator';
import allCountries from '../assets/all-countries';
import getCountry from '../assets/default-country';

export default {
  name: 'vue-tel-input',
  mixins: [abstractField],
  mounted() {
    getCountry().then((res) => {
      this.activeCountry = allCountries.find(country => country.iso2 === res);
    });
    this.value = this.value || '';
  },
  data() {
    return {
      allCountries,
      activeCountry: allCountries[0],
    };
  },
  computed: {
    formattedResult() {
      if (this.value && this.value[0] === '+') {
        // if user manually type the country code
        const formatter = new asYouType();// eslint-disable-line
        formatter.input(this.value);

        this.activeCountry = this.allCountries.find(ele => ele.iso2.toUpperCase() === formatter.country) || this.activeCountry;// eslint-disable-line
      }
      return format(this.value, this.activeCountry.iso2, 'International');
    },
    state() {
      return isValidNumber(this.formattedResult);
    },
  },
  watch: {
    state(value) {
      if (value) {
        this.value = this.formattedResult;
      }
    },
  },
  methods: {
    choose(country) {
      this.activeCountry = country;
    },
    format(value) {
      return new asYouType(this.activeCountry.iso2).input(value);// eslint-disable-line
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
</style>

