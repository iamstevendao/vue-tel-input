import { shallowMount } from '@vue/test-utils';
import { describe, beforeEach, it, expect, vi } from 'vitest'

import VueTelInput from './vue-tel-input.vue';
import * as utils from '../utils';

describe('vue-tel-input', () => {
  beforeEach(() => {
    vi.spyOn(utils, 'getCountry').mockImplementation(() => Promise.resolve('au'));
  });

  it('renders without crash', () => {
    const wrapper = shallowMount(VueTelInput);

    expect(wrapper.find('.vue-tel-input').exists()).toBeTruthy();
  });
  // TODO: Test validation of some specific phone numbers

  describe('Dropdown interaction', () => {
    it('toggles dropdown on click', async () => {
      const wrapper = shallowMount(VueTelInput);

      await wrapper.find('.vti__dropdown').trigger('click');
      expect(wrapper.vm.data.open).toBe(true);

      await wrapper.find('.vti__dropdown').trigger('click');
      expect(wrapper.vm.data.open).toBe(false);
    });

    it('closes dropdown when clicked outside', async () => {
      const wrapper = shallowMount(VueTelInput);

      // Simulate opening the dropdown
      await wrapper.find('.vti__dropdown').trigger('click');
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.data.open).toBe(true);
      })

      // Simulate clicking outside
      await wrapper.vm.$el.click();
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.data.open).toBe(false);
      })
    });
  });

  describe('Keyboard navigation', () => {
    it('navigates through countries using arrow keys', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          allCountries: [{ iso2: 'US' }, { iso2: 'CA' }],
          preferredCountries: ['US']
        }
      });
      await wrapper.find('.vti__dropdown').trigger('keydown.down'); // Simulate arrow down press
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.data.selectedIndex).toBe(0); // Assuming the first country is selected
      })

      await wrapper.find('.vti__dropdown').trigger('keydown.up'); // Simulate arrow up press
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.data.selectedIndex).toBe(1); // Assuming it cycles back to the last country
      })
    });
  });

  describe('Search functionality', () => {
    it('filters countries based on input', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          allCountries: [{ iso2: 'US', name: 'United States' }, { iso2: 'CA', name: 'Canada' }],
          dropdownOptions: { showSearchBox: true }
        }
      });
      wrapper.vm.data.searchQuery = 'Uni';
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.sortedCountries).toHaveLength(1);
        expect(wrapper.vm.sortedCountries[0].iso2).toBe('US');
      })
    });
  });
});

describe('Props', () => {
  beforeEach(() => {
    vi.spyOn(utils, 'getCountry').mockImplementation(() => Promise.resolve('au'));
  });

  describe(':allCountries', () => {
    it('overrides all pre-defined countries', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          allCountries: [{ iso2: 'AU' }],
          autoDefaultCountry: false,
        },
      });
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.sortedCountries).toHaveLength(1);
        expect(wrapper.findAll('.vti__dropdown-list li')).toHaveLength(1);
        expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('au');
      });
    });
  });
  // describe(':customValidate', () => {
  //   it('tests custom validation on type', () => {
  //     const wrapper = shallowMount(VueTelInput, {
  //       props: {
  //         customValidate: new RegExp('^[()-+0-9s]*$'),
  //       },
  //     });
  //     wrapper.vm.testCustomValidate = vi.fn();
  //     wrapper.vm.onInput();
  //     expect(wrapper.vm.testCustomValidate).toHaveBeenCalledTimes(1);
  //   });
  // });
  describe(':defaultCountry', () => {
    it('shows correct default country', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          defaultCountry: 'AU',
        },
      });
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('au');
      });
    });
  });
  describe(':defaultCountryByDialCode', () => {
    it('shows correct default country by dial code', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          defaultCountry: 48,
        },
      });
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('pl');
      });
    });
  });
  describe(':disabled', () => {
    it('adds disabled class to component', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          disabled: true,
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vue-tel-input').classes()).toContain('disabled');
        expect(wrapper.find('.vti__phone').attributes('disabled')).toBe('disabled');
      })
    });
    it('stops showing dropdown list when true', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          disabled: true,
        },
      });

      wrapper.vm.$nextTick(() => {
        console.log('wrapper.vm.data :>> ', wrapper.vm.data);
        wrapper.find('.vti__dropdown').trigger('click');
        expect(wrapper.vm.data.open).toBe(false);
      })
    });
  });
  describe(':autoDefaultCountry', () => {
    it('doesn\'t fetch the country by IP when set FALSE', async () => {
      utils.getCountry.mockReset();
      const wrapper = shallowMount(VueTelInput, {
        props: {
          autoDefaultCountry: false,
          preferredCountries: ['AU'],
        },
      });
      wrapper.vm.$nextTick(() => {
        expect(utils.getCountry).not.toHaveBeenCalled();
        expect(wrapper.find('.vti__selection > .vti__flag').classes()).toContain('au');
      });
    });
  });
  describe(':dropdownOptions', () => {
    it('.tabindex sets tabindex for dropdown', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          dropdownOptions: {
            tabindex: 1,
          },
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__dropdown').attributes('tabindex')).toBe('1');
      })
    });
    it('.showDialCodeInList hides dial code in the dropdown', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          dropdownOptions: {
            showDialCodeInList: false,
          },
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__dropdown-item span').exists()).toBeFalsy();
      })
    });
    it('.showDialCodeInSelection shows country code in the selection if TRUE', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          dropdownOptions: {
            showDialCodeInSelection: true,
          },
          defaultCountry: 'au',
        },
      });
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__selection > .vti__country-code').text()).toBe('+61');
      });
    });
    it('.showFlags hides flags in the dropdown list if FALSE', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          dropdownOptions: {
            showFlags: false,
          },
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__dropdown-item .vti__flag').exists()).toBeFalsy();
      })
    });
  });
  describe(':ignoredCountries', () => {
    it('hides countries from the list', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          ignoredCountries: ['AU'],
        },
      });

      wrapper.vm.$nextTick(() => {

        expect(wrapper.vm.filteredCountries.find(({ iso2 }) => iso2 === 'AU')).toBeUndefined();
        expect(wrapper.find('.vti__dropdown-item > .vti__flag.au').exists()).toBeFalsy();
      })
    });
  });
  describe(':inputOptions', () => {
    it('.id sets `id` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { id: 'test' },
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__input').attributes('id')).toBe('test');
      })
    });
    it('.maxlength sets `maxlength` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { maxlength: 20 },
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__input').attributes('maxlength')).toBe('20');
      })
    });
    it('.name sets `name` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { name: 'test' },
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__input').attributes('name')).toBe('test');
      })
    });
    it('.styleClasses sets classes along side with .vti__input', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { styleClasses: ['test'] },
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__input').classes()).toContain('test');
      })
    });
    // it('.dynamicPlaceholder generates a random number as placeholder', async () => {
    //   const wrapper = shallowMount(VueTelInput, {
    //     props: {
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
        props: {
          onlyCountries: ['AU'],
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.findAll('.vti__dropdown-item')).toHaveLength(1);
        expect(wrapper.vm.filteredCountries).toHaveLength(1);
      })
    });
  });
  describe(':preferredCountries', () => {
    it('are highlighted and be on top of the dropdown', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          preferredCountries: ['AU'],
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.sortedCountries[0].iso2).toBe('AU');
        expect(wrapper.find('.vti__dropdown-item > .vti__flag.au').element.parentElement.getAttribute('class')).toContain('preferred');
      })
    });

    it('does not show preferred countries twice', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          preferredCountries: ['AU'],
        },
      });

      wrapper.vm.$nextTick(() => {
        var countryList = wrapper.vm.sortedCountries.filter((c) => c.iso2 == 'AU')
        expect(countryList.length).toBe(1);
      })
    })
  });
  describe(':validCharactersOnly', () => {
    // TODO
  });
  describe(':styleClasses', () => {
    it('sets classes along side with .vue-tel-input', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          styleClasses: ['test'],
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vue-tel-input').classes()).toContain('test');
      })
    });
  });
});
