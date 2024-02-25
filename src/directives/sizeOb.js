const map = new WeakMap();

const sizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const handler = map.get(entry.target);
    if (handler) {
      handler({
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      });
    }
  }
});

export const sizeOb = (app) => {
  app.directive("size-ob", {
    mounted(el, binding) {
      sizeObserver.observe(el);
      map.set(el, binding.value);
    },
    unmounted(el) {
      sizeObserver.unobserve(el);
      map.delete(el);
    }
  });
};
