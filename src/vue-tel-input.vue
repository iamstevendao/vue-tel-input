<template>
  <b-row class="vue-tel-input justify-content-md-center">
    <b-col col="col"
           md="12">
      <b-input-group>
        <b-dropdown variant="outline-secondary">
          <template slot="button-content">
            <img :src="activeCountry.icon"
                 style="width: 25px; margin-right: 5px" />
          </template>
          <b-dropdown-item v-for="pb in allCountries"
                           :key="pb['iso2']"
                           @click="choose(pb)">
            <img :src="pb.icon"
                 style="width: 25px; margin-right: 5px" />
            <strong>{{ pb.name }} </strong>
            <span>+{{ pb.dialCode }}</span>
          </b-dropdown-item>
        </b-dropdown>
        <b-form-input v-model="phone"
                      placeholder="Enter your phone number"
                      :state="state"
                      :formatter="format"
                      @input="onInput">
        </b-form-input>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
import { format, asYouType, isValidNumber } from 'libphonenumber-js';
import allCountries from './assets/all-countries';
import getCountry from './assets/default-country';

export default {
  name: 'vue-tel-input',
  props: {
    value: {
      type: String,
    },
  },
  mounted() {
    getCountry().then((res) => {
      this.activeCountry = allCountries.find(country => country.iso2 === res);
    });
  },
  created() {
    if(this.value) {
      this.phone = this.value
    }
  },
  data() {
    return {
      phone: '',
      allCountries,
      activeCountry: { iso2: '' },
    };
  },
  computed: {
    mode() {
      if (!this.phone) {
        return '';
      }
      if (this.phone[0] === '+') {
        return 'code';
      }
      if (this.phone[0] === '0') {
        return 'prefix';
      }
      return 'normal';
    },
    formattedResult() {
      // Calculate phone number based on mode
      if (!this.mode || !this.allCountries) {
        return '';
      }
      let phone = this.phone;
      if (this.mode === 'code') {
        // If user manually type the country code
        const formatter = new asYouType();// eslint-disable-line
        formatter.input(this.phone);

        // Find inputted country in the countries list
        this.activeCountry = this.allCountries.find(ele =>
          ele.iso2.toUpperCase() === formatter.country) || this.activeCountry;
      } else if (this.mode === 'prefix') {
        // Remove the first '0' if this is a '0' prefix number
        // Ex: 0432421999
        phone = this.phone.slice(1);
      }
      return format(phone, this.activeCountry && this.activeCountry.iso2, 'International');
    },
    state() {
      return isValidNumber(this.formattedResult);
    },
    response() {
      const number = this.formattedResult && this.formattedResult.replace(/ /g, '');
      return {
        number,
        isValid: this.state,
        country: this.activeCountry.name,
      };
    },
  },
  watch: {
    state(value) {
      if (value) {
        // If mode is 'prefix', keep the number as user typed,
        // Otherwise format it
        if (this.mode !== 'prefix') {
          this.phone = this.formattedResult;
        }
      }
    },
  },
  methods: {
    choose(country) {
      this.activeCountry = country;
      this.$emit('onInput', this.response);
    },
    format(value) {
      return new asYouType(this.activeCountry.iso2).input(value);// eslint-disable-line
    },
    onInput() {
      // Emit input event in case v-model is used in the parent
      this.$emit('input', this.response.number);

      // Emit the response, includes phone, validity and country
      this.$emit('onInput', this.response);
    },
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style>
.dropdown-menu.show {
  max-height: 300px;
  overflow: scroll;
}
</style>
