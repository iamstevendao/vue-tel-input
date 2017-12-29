<template>
  <b-row class="justify-content-md-center">
    <b-col col="col"
           md="5">
      <b-input-group>
        <b-dropdown variant="outline-secondary">
          <template slot="button-content">
            <img :src="activeCountry.icon" />
          </template>
          <b-dropdown-item v-for="pb in allCountries"
                           :key="pb['iso2']"
                           @click="choose(pb)">
            <img :src="pb.icon" />
            <strong>{{ pb.name }} </strong>
            <span>+{{ pb.dialCode }}</span>
          </b-dropdown-item>
        </b-dropdown>
        <b-form-input v-model="phoneNumber"
                      placeholder="Enter your phone number"
                      :state="state"
                      :formatter="format">
        </b-form-input>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
import { format, asYouType, isValidNumber } from 'libphonenumber-js';
import allCountries from '../assets/all-countries';
import getCountry from '../assets/default-country';

export default {
  name: 'vue-tel-input',
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
      const formatter = new asYouType();// eslint-disable-line
      if (this.phoneNumber && this.phoneNumber[0] === '+') {
        // if user manually type the country code
        this.activeCountry = this.allCountries.find(ele => ele.iso2.toUpperCase() === formatter.country) || this.activeCountry;// eslint-disable-line
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
h1 {
  margin-top: 30px;
}
</style>
