import { createApp } from 'vue'
import App from './App.vue';
import { VueTelInput } from '../../dist/vue-tel-input.es.js';
import '../../dist/vue-tel-input.css';

const app = createApp(App);
app.component('VueTelInput', VueTelInput);
app.mount('#app');
