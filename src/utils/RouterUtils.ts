import { createElement } from "react";
import { RouteObject } from "react-router-dom";

export type ConfigureRoutesOptions = {
  excludePathPrifix?: boolean;
  pathPrifix?: string;
};

export type ConfigureRoutesObject = RouteObject & {
  index?: boolean;
  element: any;
};

export function configureRoutes(
  routes = [] as ConfigureRoutesObject[],
  options = {} as ConfigureRoutesOptions
) {
  const { pathPrifix, excludePathPrifix } = options;
  return routes.map(configure);

  function configure(route: any) {
    const Element = route.element;
    const element =
      Element.$$typeof === Symbol.for("react.element")
        ? Element
        : createElement(Element);
    const configured = { ...route, element };
    if (configured.path) {
      if (pathPrifix) {
        if (excludePathPrifix) {
          configured.path = configured.path.replace(new RegExp(pathPrifix), "");
        } else {
          configured.path = pathPrifix.concat(configured.path);
        }
      }
    }
    if (route.children?.length) {
      return { ...configured, children: route.children.map(configure) };
    }
    return configured;
  }
}
