import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import VueTelInput from './vue-tel-input.vue';
import * as utils from '../utils';

describe('vue-tel-input', () => {
  beforeEach(() => {
    jest.spyOn(utils, 'getCountry').mockImplementation(() => Promise.resolve('au'));
  });

  it('renders without crash', () => {
    const wrapper = shallowMount(VueTelInput);

    expect(wrapper.find('.vue-tel-input').exists()).toBeTruthy();
  });
  // TODO: Test validation of some specific phone numbers
});

describe('Props', () => {
  beforeEach(() => {
    jest.spyOn(utils, 'getCountry').mockImplementation(() => Promise.resolve('au'));
  });

  describe(':allCountries', () => {
    it('overrides all pre-defined countries', async () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          allCountries: [{ iso2: 'AU' }],
          autoDefaultCountry: false,
        },
      });
      await Vue.nextTick();
      expect(wrapper.vm.sortedCountries).toHaveLength(1);
      expect(wrapper.findAll('.vti__dropdown-list li')).toHaveLength(1);
      expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('au');
    });
  });
  // describe(':customValidate', () => {
  //   it('tests custom validation on type', () => {
  //     const wrapper = shallowMount(VueTelInput, {
  //       propsData: {
  //         customValidate: new RegExp('^[()-+0-9s]*$'),
  //       },
  //     });
  //     wrapper.vm.testCustomValidate = jest.fn();
  //     wrapper.vm.onInput();
  //     expect(wrapper.vm.testCustomValidate).toHaveBeenCalledTimes(1);
  //   });
  // });
  describe(':defaultCountry', () => {
    it('shows correct default country', async () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          defaultCountry: 'AU',
        },
      });
      await Vue.nextTick();
      expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('au');
    });
  });
  describe(':defaultCountryByDialCode', () => {
    it('shows correct default country by dial code', async () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          defaultCountry: 48,
        },
      });
      await Vue.nextTick();
      expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('pl');
    });
  });
  describe(':disabled', () => {
    it('adds disabled class to component', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          disabled: true,
        },
      });

      expect(wrapper.find('.vue-tel-input').classes()).toContain('disabled');
      expect(wrapper.find('.vti__input').attributes('disabled')).toBe('disabled');
    });
    it('stops showing dropdown list when true', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          disabled: true,
        },
      });

      wrapper.find('.vti__dropdown').trigger('click');
      expect(wrapper.vm.open).toBe(false);
    });
  });
  describe(':autoDefaultCountry', () => {
    it('doesn\'t fetch the country by IP when set FALSE', async () => {
      utils.getCountry.mockReset();
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          autoDefaultCountry: false,
          preferredCountries: ['AU'],
        },
      });
      await Vue.nextTick();
      expect(utils.getCountry).not.toHaveBeenCalled();
      expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('au');
    });
  });
  describe(':dropdownOptions', () => {
    it('.tabindex sets tabindex for dropdown', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          dropdownOptions: {
            tabindex: 1,
          },
        },
      });

      expect(wrapper.find('.vti__dropdown').attributes('tabindex')).toBe('1');
    });
    it('.showDialCodeInList hides dial code in the dropdown', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          dropdownOptions: {
            showDialCodeInList: false,
          },
        },
      });

      expect(wrapper.find('.vti__dropdown-item span').exists()).toBeFalsy();
    });
    it('.showDialCodeInSelection shows country code in the selection if TRUE', async () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          dropdownOptions: {
            showDialCodeInSelection: true,
          },
          defaultCountry: 'au',
        },
      });
      await Vue.nextTick();
      expect(wrapper.find('.vti__selection > .vti__country-code').text()).toBe('+61');
    });
    it('.showFlags hides flags in the dropdown list if FALSE', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          dropdownOptions: {
            showFlags: false,
          },
        },
      });

      expect(wrapper.find('.vti__dropdown-item .vti__flag').exists()).toBeFalsy();
    });
  });
  describe(':ignoredCountries', () => {
    it('hides countries from the list', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          ignoredCountries: ['AU'],
        },
      });

      expect(wrapper.vm.filteredCountries.find(({ iso2 }) => iso2 === 'AU')).toBeUndefined();
      expect(wrapper.find('.vti__dropdown-item > .vti__flag.au').exists()).toBeFalsy();
    });
  });
  describe(':inputOptions', () => {
    it('.id sets `id` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          inputOptions: { id: 'test' },
        },
      });

      expect(wrapper.find('.vti__input').attributes('id')).toBe('test');
    });
    it('.maxlength sets `maxlength` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          inputOptions: { maxlength: 20 },
        },
      });

      expect(wrapper.find('.vti__input').attributes('maxlength')).toBe('20');
    });
    it('.name sets `name` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          inputOptions: { name: 'test' },
        },
      });

      expect(wrapper.find('.vti__input').attributes('name')).toBe('test');
    });
    it('.styleClasses sets classes along side with .vti__input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          inputOptions: { styleClasses: ['test'] },
        },
      });

      expect(wrapper.find('.vti__input').classes()).toContain('test');
    });
    // it('.dynamicPlaceholder generates a random number as placeholder', async () => {
    //   const wrapper = shallowMount(VueTelInput, {
    //     propsData: {
    //       inputOptions: { dynamicPlaceholder: true },
    //       defaultCountry: 'au',
    //     },
    //   });
    //   await new Promise((res) => setTimeout(() => {
    //     expect(wrapper.find('.vti__input').attributes('placeholder')).toContain('+61 ');
    //     res();
    //   }, 2000));
    // });
  });
  describe(':invalid-msg', () => {
    // TODO
  });
  describe(':mode', () => {
    // TODO
  });
  describe(':onlyCountries', () => {
    it('limits the countries to be used', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          onlyCountries: ['AU'],
        },
      });

      expect(wrapper.findAll('.vti__dropdown-item')).toHaveLength(1);
      expect(wrapper.vm.filteredCountries).toHaveLength(1);
    });
  });
  describe(':preferredCountries', () => {
    it('are highlighted and be on top of the dropdown', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          preferredCountries: ['AU'],
        },
      });

      expect(wrapper.vm.sortedCountries[0].iso2).toBe('AU');
      expect(wrapper.find('.vti__dropdown-item > .vti__flag.au').element.parentElement.getAttribute('class')).toContain('preferred');
    });
  });
  describe(':validCharactersOnly', () => {
    // TODO
  });
  describe(':styleClasses', () => {
    it('sets classes along side with .vue-tel-input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          styleClasses: ['test'],
        },
      });

      expect(wrapper.find('.vue-tel-input').classes()).toContain('test');
    });
  });
});
