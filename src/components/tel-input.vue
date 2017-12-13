<template lang="pug">
b-input-group
  b-dropdown(variant="light")
    template(slot="button-content") 
      img(:src="imgLink")
    b-dropdown-item(v-for="pb in phoneBook"
                    :key="pb['iso2']" 
                    @click="choose(pb)")
      img(:src="`https://raw.githubusercontent.com/behdad/region-flags/gh-pages/png/${pb['iso2']}.png`")
      strong {{ pb.name }}  
      span +{{ pb.dialCode }}
  b-form-input
</template>

<script>
import phoneBook from '../assets/phone-book';

export default {
  name: 'tel-input',
  data() {
    return {
      phoneBook,
      choosen: phoneBook[0].iso2,
    };
  },
  computed: {
    imgLink() {
      return "https://raw.githubusercontent.com/behdad/region-flags/gh-pages/png/" + this.choosen + ".png";
    },
  },
  methods: {
    choose(country) {
      this.choosen = country.iso2;
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

