<template>
  <div class="row">
    <label :for="modelName">{{ label || modelName }}</label>
    <input v-if="type === 'input'" v-model="model[modelName]" type="text" :id="modelName" />
    <input
      v-else-if="type === 'checkbox'"
      v-model="model[modelName]"
      type="checkbox"
      :id="modelName"
    />
    <div class="radio-group" v-else-if="type === 'radio'">
      <div v-for="item in items">
        <input type="radio" :id="item" :value="item" v-model="model[modelName]" />
        <label :for="item">{{ item }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    model: {
      type: Object,
    },
    modelName: {
      type: String,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'input',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
label {
  float: left;
  width: 50%;
  margin-top: 8px;
}

input[type='text'] {
  float: left;
  margin: 8px 0 0 50px;
  padding: 5px;
  max-width: 180px;
}

input[type='checkbox'] {
  width: 20px;
  height: 20px;
  margin: 8px 0 0 50px;
}

.radio-group {
  float: left;
  margin-left: 40px;
  padding: 5px;
  width: 50%;
  max-width: 180px;
}

.radio-group label {
  width: 75%;
  margin-top: 5px;
}

.radio-group input[type='radio'] {
  float: left;
  width: 20%;
  max-width: 20px;
  margin-top: 8px;
}

/* .row:after {
  content: '';
  display: table;
  clear: both;
} */

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  label, input, select {
    width: 100%;
    margin-top: 0;
  }
}
</style>
