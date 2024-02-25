import { permission } from "./permission";
import { loadLazy } from "./lazy";
import { sizeOb } from "./sizeOb";

const directiveMap = [permission, loadLazy, sizeOb];

export const registerDirective = (app) => {
  for (const directive of directiveMap) {
    directive(app);
  }
};
