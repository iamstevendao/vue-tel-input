// Polyfill for Event.path in IE 11: https://stackoverflow.com/a/46093727
function getParents(node, memo) {
  const parsedMemo = memo || [];
  const { parentNode } = node;

  if (!parentNode) {
    return parsedMemo;
  }

  return getParents(parentNode, parsedMemo.concat(parentNode));
}

// Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside
export default {
  bind(el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name;
      let warn = `[Vue-click-outside:] provided expression ${binding.expression} is not a function, but has to be`;
      if (compName) {
        warn += `Found in component ${compName}`;
      }
      console.warn(warn);
    }
    // Define Handler and cache it on the element
    const { bubble } = binding.modifiers;
    const handler = (e) => {
      // Fall back to composedPath if e.path is undefined
      const path = e.path
        || (e.composedPath ? e.composedPath() : false)
        || getParents(e.target);
      if (bubble || (path.length && !el.contains(path[0]) && el !== path[0])) {
        binding.value(e);
      }
    };
    el.__vueClickOutside__ = handler;
    // add Event Listeners
    document.addEventListener('click', handler);
  },
  unbind(el) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  },
};
