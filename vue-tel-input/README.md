# vue-tel-input
International Telephone Input Boilerplate with Vue (integrated with [VueFormGenerator](https://github.com/vue-generators/vue-form-generator)).

Checkout Demo at [Codesandbox](https://ry3wlvlxkn.codesandbox.io/).

<p align="center">
<img width="600px" alt="In-action GIF" src="https://thumbs.gfycat.com/EducatedPoliteBluefintuna-size_restricted.gif"/>
</p>

## Installation
```bash
npm install --save vue-tel-input
```

## Usage
- As a standalone component:  
  Install `vue-tel-input`:
     ```js
     // main.js

     import Vue from 'vue';
     import VueTelInput from 'vue-tel-input';

     Vue.use(VueTelInput);
     ```
  Then you can use it in your components:
     ```html
     <template>
     ...
       <vue-tel-input></vue-tel-input>
     ...
     <template>
     <script>
     export default {
       ...
     }
     </script>
     ```

- ~~As a field of VueFormGenerator~~ (Under construction)
  1. Register `vue-tel-input` as a global component:
     ```js
      import vueTelInput from "../vue-tel-input.vue";
      ...
      Vue.component("fieldTelephone", vueTelInput);
     ```
     !! As the naming convention for custom field in VueFormGenerator, you need to put the name of the component as: `field<ANameInCamelKey>.
  
  2. Now you can you it in your schema:
     ```js
     var schema: {
      fields: [{
        type: "telephone",
        label: "Phone Number",
        model: "phone"
      }]
     };
     ```
  For more info: [vue-form-generator/custom-fields](https://icebob.gitbooks.io/vueformgenerator/content/fields/custom_fields.html)

## Highlights & Credits
- Vue app created by [vue-cli](https://github.com/vuejs/vue-cli).
- Telephone Number parsing, validation by [libphonenumber-js](https://catamphetamine.github.io/libphonenumber-js/).
- Country Codes data from [intl-tel-input](https://github.com/jackocnr/intl-tel-input/blob/master/src/js/data.js).
- Country Flags by [behdad/region-flags](https://github.com/behdad/region-flags).
- [Boostrap-Vue](https://bootstrap-vue.js.org/docs/).
- User's Location by [get-json](https://www.npmjs.com/package/get-json) and [ipifo.io](https://ipinfo.io/json)

## Example App Build Setup
``` bash
npm install             # install dependencies
npm run dev             # serve with hot reload at localhost:8080
npm run build           # build for production with minification
npm run build --report  # build for production and view the bundle analyzer report
npm run unit            # run unit tests
npm test                # run all tests
```

made with &#x2764; by [Steven](https://github.com/iamstevendao).
