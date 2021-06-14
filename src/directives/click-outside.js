// Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside
export default {
  beforeMount(el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name;
      let warn = `[Vue-click-outside:] provided expression ${binding.expression} is not a function, but has to be`;
      if (compName) {
        warn += `Found in component ${compName}`;
      }
      console.warn(warn);
    }
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    // add Event Listeners
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
