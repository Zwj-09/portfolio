export const loadLazy = (app) => {
  app.directive("lazy", {
    mounted(el, binding) {
      const observer = new IntersectionObserver(
        (entries) => {
          // 如果元素进入视口，加载真实的资源
          if (entries[0].isIntersecting) {
            el.src = binding.value;
            el.onload = () => {
              // 图片加载完成后移除 loading 类
              el.classList.remove("loading");
              observer.disconnect(); // 停止监听
            };
            el.onerror = () => {
              el.classList.remove("loading");
              observer.disconnect();
            };
            el.classList.add("loading");
          }
        },
        {
          threshold: 0
        }
      );

      // 开始监听目标元素
      observer.observe(el);
    }
  });
};
