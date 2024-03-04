const modules = import.meta.glob("../directives/*.js", {
  eager: true
});

const formatePath = (path) => {
  return path && path.split("./")[1].split(".")[0];
};

export const registerDirective = (app) => {
  for (const path in modules) {
    app.directive(formatePath(path), modules[path][formatePath(path)]);
  }
};
