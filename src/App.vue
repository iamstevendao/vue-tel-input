<template lang="pug">
#app
  b-card(title="Telephone Input Vue"
        sub-title="made with &#x2764; by Steven.")
    tel-input
  
  b-card(title="Use as a VueFormGenerator's field")
    vue-form-generator(:schema="schema", :model="model", :options="formOptions")
</template>

<script>
import TelInput from './components/tel-input';

export default {
  name: 'app',
  components: {
    TelInput,
  },
  data() {
    return {
      model: {
        id: 1,
        name: 'John Doe',
        password: 'J0hnD03!x4',
        skills: ['Javascript', 'VueJS'],
        phone: '+91231209231',
        email: 'john.doe@gmail.com',
        status: true,
      },

      schema: {
        fields: [
          {
            type: 'telephone',
            model: 'phone',
            inputType: 'text',
            label: 'Phone number',
          },
        ],
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'user-',
      },
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card-subtitle {
  margin: 5px;
  padding-bottom: 30px;
}
</style>
