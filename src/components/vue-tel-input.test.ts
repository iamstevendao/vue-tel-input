import { mount, shallowMount } from '@vue/test-utils';
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest'

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
    const countries = [
      { iso2: 'AF', name: 'Afghanistan', dialCode: '93' },
      { iso2: 'AU', name: 'Australia', dialCode: '61' },
      { iso2: 'BR', name: 'Brazil', dialCode: '55' },
      { iso2: 'FR', name: 'France', dialCode: '33' },
      { iso2: 'GF', name: 'French Guiana', dialCode: '594' },
    ];
    const keyCodes = { ArrowDown: 40, ArrowUp: 38, Enter: 13, Escape: 27 };
    let wrapper: ReturnType<typeof mount>;
    let errors: unknown[];
    const nextMacrotask = () => new Promise((resolve) => { setTimeout(resolve); });
    const collectError = (err: unknown) => { errors.push(err); };

    const mountInput = (dropdownOptions = {}) => {
      wrapper = mount(VueTelInput, {
        attachTo: document.body,
        props: {
          allCountries: countries,
          defaultCountry: 'AU',
          autoDefaultCountry: false,
          dropdownOptions: { tabindex: 0, ...dropdownOptions },
        },
        global: { config: { errorHandler: collectError } },
      });
      (wrapper.find('.vti__dropdown').element as HTMLElement).focus();
    };
    const press = async (...keys: (keyof typeof keyCodes)[]) => {
      for (const key of keys) {
        document.activeElement!.dispatchEvent(new KeyboardEvent('keydown', { key, keyCode: keyCodes[key], bubbles: true }));
        await nextMacrotask();
      }
    };
    const typeInSearchBox = async (text: string) => {
      const searchBox = wrapper.find('.vti__search_box').element as HTMLInputElement;
      searchBox.focus();
      for (const key of text) {
        searchBox.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
        searchBox.value += key;
        searchBox.dispatchEvent(new Event('input', { bubbles: true }));
        await nextMacrotask();
      }
    };
    const highlighted = () => document.querySelector('.vti__dropdown-item.highlighted');

    beforeEach(async () => {
      await nextMacrotask();
      errors = [];
      process.on('unhandledRejection', collectError);
    });
    afterEach(() => {
      process.off('unhandledRejection', collectError);
      wrapper.unmount();
    });

    it('opens on the active country with the arrow keys', async () => {
      mountInput();
      await press('ArrowDown');
      expect(document.activeElement).toBe(highlighted());
      expect(highlighted()?.textContent).toContain('Australia');

      await press('Escape', 'ArrowUp');
      expect(document.activeElement).toBe(highlighted());
      expect(highlighted()?.textContent).toContain('Australia');
      expect(errors).toEqual([]);
    });

    it('moves focus with the highlight when the search box is shown', async () => {
      mountInput({ showSearchBox: true });
      for (const key of ['ArrowDown', 'ArrowDown', 'ArrowUp'] as const) {
        await press(key);
        expect(document.activeElement).toBe(highlighted());
      }
    });

    it('chooses the focused country with Enter and returns focus to the dropdown', async () => {
      mountInput();
      await press('ArrowDown', 'ArrowDown', 'Enter');
      expect(wrapper.emitted('country-changed')!.at(-1)![0]).toMatchObject({ iso2: 'BR' });
      expect(document.activeElement).toBe(wrapper.find('.vti__dropdown').element);
    });

    it('returns focus to the dropdown when closed with Escape', async () => {
      mountInput();
      await press('ArrowDown', 'Escape');
      expect(wrapper.find('.vti__dropdown-list').exists()).toBe(false);
      expect(document.activeElement).toBe(wrapper.find('.vti__dropdown').element);
    });

    it('chooses the first search result with Enter', async () => {
      mountInput({ showSearchBox: true });
      await wrapper.find('.vti__dropdown').trigger('click');
      await typeInSearchBox('fr');
      expect(highlighted()?.textContent).toContain('France');

      await press('Enter');
      expect(wrapper.emitted('country-changed')!.at(-1)![0]).toMatchObject({ iso2: 'FR' });
    });

    it('handles the arrow keys when the search matches no country', async () => {
      mountInput({ showSearchBox: true });
      await wrapper.find('.vti__dropdown').trigger('click');
      await wrapper.find('.vti__search_box').setValue('zzz');
      (wrapper.find('.vti__search_box').element as HTMLElement).focus();
      await press('ArrowDown', 'ArrowUp');
      expect(errors).toEqual([]);
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
    it('.inputmode sets `inputmode` native attribute of input', () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { inputmode: 'tel' },
        },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.vti__input').attributes('inputmode')).toBe('tel');
      })
    });
    it('.aria-invalid sets `aria-invalid` native attribute of input', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { 'aria-invalid': true },
        },
      });
      await wrapper.vm.$nextTick();

      expect(wrapper.find('.vti__input').attributes('aria-invalid')).toBe('true');
    });
    it('.aria-required sets `aria-required` native attribute of input', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { 'aria-required': true },
        },
      });
      await wrapper.vm.$nextTick();

      expect(wrapper.find('.vti__input').attributes('aria-required')).toBe('true');
    });
    it('.aria-label sets `aria-label` native attribute of input', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { 'aria-label': 'Phone number' },
        },
      });
      await wrapper.vm.$nextTick();

      expect(wrapper.find('.vti__input').attributes('aria-label')).toBe('Phone number');
    });
    it('.aria-labelledby sets `aria-labelledby` native attribute of input', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { 'aria-labelledby': 'phone-label' },
        },
      });
      await wrapper.vm.$nextTick();

      expect(wrapper.find('.vti__input').attributes('aria-labelledby')).toBe('phone-label');
    });
    it('does not render ARIA attributes on input when not set', async () => {
      const wrapper = shallowMount(VueTelInput);
      await wrapper.vm.$nextTick();

      const attrs = wrapper.find('.vti__input').attributes();
      expect(attrs).not.toHaveProperty('aria-invalid');
      expect(attrs).not.toHaveProperty('aria-required');
      expect(attrs).not.toHaveProperty('aria-label');
      expect(attrs).not.toHaveProperty('aria-labelledby');
    });
    it('.aria-invalid follows the consumer when the error state is cleared', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          inputOptions: { 'aria-invalid': true },
        },
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.find('.vti__input').attributes('aria-invalid')).toBe('true');

      await wrapper.setProps({ inputOptions: { 'aria-invalid': false } });

      expect(wrapper.find('.vti__input').attributes('aria-invalid')).toBe('false');
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
  describe(':strictValidation', () => {
    it('defaults to false', () => {
      const wrapper = shallowMount(VueTelInput);
      expect(wrapper.props('strictValidation')).toBe(false);
    });

    describe('with strictValidation: false (min metadata)', () => {
      it('accepts Brazilian mobile with 8 digits (old format)', async () => {
        const wrapper = shallowMount(VueTelInput, {
          props: {
            defaultCountry: 'BR',
            autoDefaultCountry: false,
            strictValidation: false,
          },
        });

        await wrapper.vm.$nextTick();
        // +55 (DDI) + 75 (DDD) + 99980948 (8 digits - old format, missing the leading 9)
        wrapper.vm.data.phone = '+557599980948';
        await wrapper.vm.$nextTick();

        // Min metadata only checks length, so this passes as valid
        expect(wrapper.vm.phoneObject.valid).toBe(true);
      });

      it('accepts valid Brazilian mobile with 9 digits', async () => {
        const wrapper = shallowMount(VueTelInput, {
          props: {
            defaultCountry: 'BR',
            autoDefaultCountry: false,
            strictValidation: false,
          },
        });

        await wrapper.vm.$nextTick();
        // +55 (DDI) + 75 (DDD) + 999980948 (9 digits - current format)
        wrapper.vm.data.phone = '+5575999980948';
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.phoneObject.valid).toBe(true);
      });
    });

    describe('with strictValidation: true (max metadata)', () => {
      it('rejects Brazilian mobile with 8 digits (old format)', async () => {
        const wrapper = shallowMount(VueTelInput, {
          props: {
            defaultCountry: 'BR',
            autoDefaultCountry: false,
            strictValidation: true,
          },
        });

        await wrapper.vm.$nextTick();

        // Wait for strict parser to load (async dynamic import)
        await new Promise(resolve => setTimeout(resolve, 100));

        // +55 (DDI) + 75 (DDD) + 99980948 (8 digits - old format)
        // This is the problematic format that max metadata should reject
        wrapper.vm.data.phone = '+557599980948';
        await wrapper.vm.$nextTick();

        // Max metadata validates digit patterns, so this should be invalid
        expect(wrapper.vm.phoneObject.valid).toBe(false);
      });

      it('accepts valid Brazilian mobile with 9 digits', async () => {
        const wrapper = shallowMount(VueTelInput, {
          props: {
            defaultCountry: 'BR',
            autoDefaultCountry: false,
            strictValidation: true,
          },
        });

        await wrapper.vm.$nextTick();

        await new Promise(resolve => setTimeout(resolve, 100));

        // +55 (DDI) + 75 (DDD) + 999980948 (9 digits - current format)
        wrapper.vm.data.phone = '+5575999980948';
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.phoneObject.valid).toBe(true);
      });

      it('accepts valid US phone number', async () => {
        const wrapper = shallowMount(VueTelInput, {
          props: {
            defaultCountry: 'US',
            autoDefaultCountry: false,
            strictValidation: true,
          },
        });

        await wrapper.vm.$nextTick();

        await new Promise(resolve => setTimeout(resolve, 100));

        wrapper.vm.data.phone = '+12015550123';
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.phoneObject.valid).toBe(true);
        expect(wrapper.vm.phoneObject.country).toBe('US');
      });
    });
  });
  describe('IDD format numbers (e.g. 006595554721)', () => {
    // 006595554721 = 00 (IDD) + 65 (Singapore) + 95554721 (subscriber)
    it('resolves an IDD number to the right country without an infinite reactive loop', async () => {
      // Full mount + v-model + autoFormat to exercise the real reactive flow.
      const errors: unknown[] = [];
      const wrapper = mount(VueTelInput, {
        props: {
          modelValue: '',
          defaultCountry: 'FR', // France uses 00 as its IDD prefix
          autoDefaultCountry: false,
        },
      });
      await wrapper.vm.$nextTick();
      wrapper.vm.$.appContext.config.errorHandler = (err) => { errors.push(err); };

      await wrapper.setProps({ modelValue: '006595554721' });
      for (let i = 0; i < 20; i += 1) await wrapper.vm.$nextTick();

      // No "Maximum recursive updates exceeded" crash, resolves to SG not PY.
      expect(errors.filter((e) => String(e).includes('recursive'))).toHaveLength(0);
      expect(wrapper.vm.phoneObject.valid).toBe(true);
      expect(wrapper.vm.phoneObject.country).toBe('SG');
      expect(wrapper.vm.data.phone.startsWith('+65')).toBe(true);
      expect(wrapper.vm.data.activeCountryCode).toBe('SG');
    });

    it('does not oscillate when autoFormat is disabled (phone keeps the IDD prefix)', async () => {
      const errors: unknown[] = [];
      const wrapper = mount(VueTelInput, {
        props: {
          modelValue: '',
          defaultCountry: 'FR',
          autoDefaultCountry: false,
          autoFormat: false,
        },
      });
      await wrapper.vm.$nextTick();
      wrapper.vm.$.appContext.config.errorHandler = (err) => { errors.push(err); };

      await wrapper.setProps({ modelValue: '006595554721' });
      for (let i = 0; i < 20; i += 1) await wrapper.vm.$nextTick();

      // Digits kept as-is, still valid, active country stays the calling context.
      expect(errors.filter((e) => String(e).includes('recursive'))).toHaveLength(0);
      expect(wrapper.vm.phoneObject.valid).toBe(true);
      expect(wrapper.vm.phoneObject.country).toBe('SG');
      expect(wrapper.vm.data.activeCountryCode).toBe('FR');
    });

    it('keeps the number invalid when the active country does not use 00 as IDD', async () => {
      const wrapper = shallowMount(VueTelInput, {
        props: {
          defaultCountry: 'US', // US uses 011 as its IDD prefix
          autoDefaultCountry: false,
        },
      });

      await wrapper.vm.$nextTick();
      wrapper.vm.data.phone = '006595554721';
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.phoneObject.valid).toBeFalsy();
    });
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
