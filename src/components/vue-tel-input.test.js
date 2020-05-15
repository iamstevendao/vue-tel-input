import 'regenerator-runtime';

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

  describe(':all-countries', () => {
    it('overrides all pre-defined countries', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          allCountries: [{ iso2: 'AU' }],
          disabledFetchingCountry: true,
        },
      });

      expect(wrapper.vm.sortedCountries).toHaveLength(1);
      expect(wrapper.findAll('.vti__dropdown-list li')).toHaveLength(1);
      expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('au');
    });
  });
  describe(':custom-validate', () => {
    it('tests custom validation on type', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          customValidate: new RegExp('^[()-+0-9s]*$'),
        },
      });
      wrapper.vm.testCustomValidate = jest.fn();
      wrapper.vm.onInput();
      expect(wrapper.vm.testCustomValidate).toHaveBeenCalledTimes(1);
    });
  });
  describe(':default-country', () => {
    it('shows correct default country', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          defaultCountry: 'AU',
        },
      });

      expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('au');
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
      expect(wrapper.find('.vti__input').is('[disabled]')).toBe(true);
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
  describe(':disabled-fetching-country', () => {
    it('doesn\'t fetch the country by IP', () => {
      utils.getCountry.mockReset();
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          disabledFetchingCountry: true,
          preferredCountries: ['AU'],
        },
      });

      expect(utils.getCountry).not.toHaveBeenCalled();
      expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('au');
    });
  });
  describe(':dropdown-options', () => {
    it(':tabindex sets tabindex for dropdown', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          dropdownOptions: {
            tabindex: 1,
          },
        },
      });

      expect(wrapper.find('.vti__dropdown').attributes('tabindex')).toBe('1');
    });
    it(':disabledDialCode hides dial code in the dropdown', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          dropdownOptions: {
            disabledDialCode: true,
          },
        },
      });

      expect(wrapper.find('.vti__dropdown-item span').exists()).toBeFalsy();
    });
  });
  describe(':dynamic-placeholder', () => {
    it('generates a random number as placeholder', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          dynamicPlaceholder: true,
          defaultCountry: 'au',
        },
      });
      wrapper.vm.finishMounted = true;
      expect(wrapper.find('.vti__input').attributes('placeholder')).toContain('+61');
    });
  });
  describe(':enabled-country-code', () => {
    it('shows country code in the selection if TRUE', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          enabledCountryCode: true,
          defaultCountry: 'au',
        },
      });

      expect(wrapper.find('.vti__selection > .vti__country-code').text()).toBe('+61');
    });
  });
  describe(':enabled-flags', () => {
    it('hides flags in the dropdown list if FALSE', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          enabledFlags: false,
        },
      });

      expect(wrapper.find('.vti__dropdown-item .vti__flag').exists()).toBeFalsy();
    });
  });
  describe(':ignored-countries', () => {
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
  describe(':input-classes', () => {
    it('sets classes along side with .vti__input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          inputClasses: ['test'],
        },
      });

      expect(wrapper.find('.vti__input').classes()).toContain('test');
    });
  });
  describe(':input-id', () => {
    it('sets `id` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          inputId: 'test',
        },
      });

      expect(wrapper.find('.vti__input').attributes('id')).toBe('test');
    });
  });
  describe(':input-options', () => {
    // TODO
  });
  describe(':invalid-msg', () => {
    // TODO
  });
  describe(':max-len', () => {
    it('sets `maxlength` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          maxLen: 20,
        },
      });

      expect(wrapper.find('.vti__input').attributes('maxlength')).toBe('20');
    });
  });
  describe(':mode', () => {
    // TODO
  });
  describe(':name', () => {
    it('sets `name` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          name: 'test',
        },
      });

      expect(wrapper.find('.vti__input').attributes('name')).toBe('test');
    });
  });
  describe(':only-countries', () => {
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
  describe(':preferred-countries', () => {
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
  describe(':valid-characters-only', () => {
    // TODO
  });
  describe(':wrapper-classes', () => {
    it('sets classes along side with .vue-tel-input', () => {
      const wrapper = shallowMount(VueTelInput, {
        propsData: {
          wrapperClasses: ['test'],
        },
      });

      expect(wrapper.find('.vue-tel-input').classes()).toContain('test');
    });
  });
});
