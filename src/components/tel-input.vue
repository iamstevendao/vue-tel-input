<template lang="pug">
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
  b-form-input
</template>

<script>
import allCountries from '../assets/all-countries';

export default {
  name: 'tel-input',
  data() {
    return {
      allCountries,
      activeCountry: allCountries[0],
    };
  },
  computed: {
  },
  methods: {
    choose(country) {
      this.activeCountry = country;
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

