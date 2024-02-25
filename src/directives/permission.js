const permissionList = ["add", "del", "edit", "show"];
export const permission = (app) => {
  app.directive("permission", {
    mounted(el, binding) {
      if (!permissionList.includes(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
};
