// export function myPlugin(app, options) {
//   console.log("options", app, options);

//   return {
//     name: "zwj"
//   };
// }
export const myPlugin = {
  install(app, options) {
    app.config.globalProperties.$translate = (key) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };
  }
};
