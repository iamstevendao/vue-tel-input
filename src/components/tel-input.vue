<template lang="pug">
b-input-group
  b-dropdown(variant="success")
    template(slot="button-content") {{ choosen['iso2'] }}
    b-dropdown-item(v-for="pb in phoneBook"
                    :key="pb['iso2']" 
                    @click="choose(pb)") {{ pb['iso2'] }}
  b-form-input
</template>

<script>
import phoneBook from '../assets/phone-book';

export default {
  name: 'tel-input',
  data() {
    return {
      phoneBook,
      choosen: phoneBook[0],
    };
  },
  computed: {
  },
  methods: {
    choose(country) {
      this.choosen = country;
    }
  },
};
</script>

<style scoped>
.dropdown-menu.show {
  max-height: 200px;
  overflow: scroll;
}
</style>

