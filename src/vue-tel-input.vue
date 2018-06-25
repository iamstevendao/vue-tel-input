<template>
  <div class="vue-tel-input">
	<div class="dropdown"  @click="toggleDropdown" v-click-outside="clickedOutside" :class="{open: open}">
	<span class="selection">
		<img :src="activeCountry.icon" class="flag" />
		<span class="dropdown-arrow">
		{{ open ? '▲' : '▼' }}
		</span>
	</span>
	  <ul v-show="open">
		  <li class="dropdown-item" v-for="(pb, index) in sortedCountries" :class="{'last-preferred': preferredCountries.length && index === preferredCountries.length - 1, preferred: !!~preferredCountries.map(c => c.toUpperCase()).indexOf(pb.iso2)}"
						   :key="pb.iso2"
						   @click="choose(pb)">
			<img :src="pb.icon" style="width: 25px; margin-right: 5px" />
			<strong>{{ pb.name }} </strong>
			<span>+{{ pb.dialCode }}</span>
		  </li>
	  </ul>
	</div>
	<input v-model="phone"
				  :placeholder="placeholder"
				  :state="state"
				  :formatter="format"
				  @input="onInput">
	</input>
  </div>
</template>

<style scoped>
:local {
	--border-radius: 2px;
}

li.last-preferred {
	border-bottom: 1px solid #cacaca;
}
.selection {
	cursor: pointer;
	font-size: 0.8em;
	display: flex;
	align-items: center;
}
.vue-tel-input {
	border-radius: 3px;
	display: flex;
	border: 1px solid #bbb;
	text-align: left;
}
.vue-tel-input:focus-within {
	box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
	border-color: #66afe9;
}
input {
	border: none;
	border-radius: 0 var(--border-radius) var(--border-radius) 0;
	width: 100%;
	outline: none;
	padding-left: 7px;
}
ul {
	padding: 0;
	margin: 0;
	text-align: left;
	list-style: none;
	max-height: 200px;
	overflow-y: scroll;
	position: absolute;
	top: 33px;
	left: -1px;
	background-color: #fff;
	border: 1px solid #ccc;
	width: 390px;
}
.dropdown {
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	position: relative;
	padding: 7px;
}
.dropdown.open {
	background-color: #f3f3f3;
}
.dropdown:hover {
	background-color: #f3f3f3;
}
.dropdown-arrow {
	transform: scaleY(0.5);
	display: inline-block;
	color: #666;
}
.dropdown-item {
	cursor: pointer;
	padding: 4px 15px;
}
.dropdown-item:hover {
	background-color: #f3f3f3;
}
.flag {
	width: 25px;
	margin-left: 5px;
	margin-right: 8px;
	height: 16px;
}
.dropdown-menu.show {
  max-height: 300px;
  overflow: scroll;
}
</style>

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
	placeholder: {
	  default: "Enter a phone number",
	  type: String,
	},
	preferredCountries: {
	  default: [],
	  type: Array,
	},
  },
  mounted() {
    getCountry().then((res) => {
      this.activeCountry = allCountries.find(country => country.iso2 === res) ||
        allCountries[0];
    });
  },
  created() {
    if (this.value) {
      this.phone = this.value
    }
  },
  data() {
    return {
      phone: '',
      allCountries,
      activeCountry: { iso2: '' },
	  open: false,
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
	sortedCountries() {
		let countries = [];
		for (let i = 0; i < this.preferredCountries.length; i++) {
			for (let k = 0; k < allCountries.length; k++) {
				if (allCountries[k].iso2 === this.preferredCountries[i].toUpperCase()) {
					countries.push(allCountries[k]);
				}
			}
		}
		countries = countries.concat(allCountries);
		return countries;
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
	toggleDropdown: function() {
		this.open = !this.open;
	},
	clickedOutside: function() {
		this.open = false;
	},
  },
  directives:{
        // Click-outside from BosNaufal: https://github.com/BosNaufal/vue-click-outside
        'click-outside':{
            bind: function (el, binding, vNode) {
                // Provided expression must evaluate to a function.
                if (typeof binding.value !== 'function') {
                    var compName = vNode.context.name;
                    var warn = '[Vue-click-outside:] provided expression ' + binding.expression + ' is not a function, but has to be';
                    if (compName) {
                        warn += 'Found in component ' + compName;
                    }
                    console.warn(warn);
                }
                // Define Handler and cache it on the element
                var bubble = binding.modifiers.bubble;
                var handler = function(e) {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e)
                    }
                };
                el.__vueClickOutside__ = handler;
                // add Event Listeners
                document.addEventListener('click', handler)
            },
            unbind: function (el, binding) {
                // Remove Event Listeners
                document.removeEventListener('click', el.__vueClickOutside__);
                el.__vueClickOutside__ = null
            }
	}
	}
};
</script>

