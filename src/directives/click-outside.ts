import { DirectiveBinding, ObjectDirective, VNode } from 'vue';

// Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside

type El = HTMLElement & {
  clickOutsideEvent: (event: MouseEvent) => void;
};

const ClickOutsideDirective: ObjectDirective = {
  beforeMount(el: El, binding: DirectiveBinding, vNode: VNode) {
    // Ensure the provided value is a function
    if (typeof binding.value !== 'function') {
      const compName = (vNode as any).context?.name || 'unknown';
      let warn = `[Vue-click-outside:] provided expression '${(binding as any).expression}' is not a function, but must be.`;
      if (compName) {
        warn += ` Found in component '${compName}'.`;
      }
      console.warn(warn);
      return;
    }

    el.clickOutsideEvent = function (event: MouseEvent) {
      const path = event.composedPath ? event.composedPath() : (event as any).path;
      if (!(el === event.target || el.contains(event.target as Node) || path.includes(el))) {
        binding.value(event, el);
      }
    };

    // Add event listener to the document body
    document.body.addEventListener('click', el.clickOutsideEvent);
  },

  unmounted(el: El) {
    // Remove the event listener when the directive is unmounted
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};

export default ClickOutsideDirective;
