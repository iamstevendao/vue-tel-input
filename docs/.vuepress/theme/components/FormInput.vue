<template>
  <div>
    <input v-if="type === 'input'" :id="model" v-model="model[modelName]" />
    <input v-else-if="type === 'checkbox'" type="checkbox" :id="model" v-model="model[modelName]" />
    <select v-else-if="type === 'select'" :id="model" v-model="model[modelName]">
      <option v-for="item in items">{{ item }}</option>
    </select>
    <label :for="model">{{ label || model }}</label>
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
