import { type RouteObject } from "react-router-dom";
import { lazy, type ReactElement } from "react";
import { USER_ROLES } from "@/constants/GlobalConstant";
import { ProtectRoutesLayout, PublicRoutesLayout } from "@/pages/layout/layout";
import { routeEnum } from "@/constants/RouteConstants";

import RootErrorBoundary from "@/common/RootErrorBoundary";
import AuthGuard from "./guard";

const Login = lazy(() => import("../pages/auth/Login"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const User = lazy(() => import("../pages/user/User"));
const Error = lazy(() => import("../pages/404"));

type ExtendedRouteObject = RouteObject & {
  guarded?: boolean;
};

export const PublicRoutes: ExtendedRouteObject[] = [
  {
    path: routeEnum.LOGIN,
    element: <PublicRoutesLayout />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: routeEnum.LOGIN,
        element: <Login />,
        errorElement: <RootErrorBoundary />,
      },
    ],
  },
];

export const ProtectedRoutes: ExtendedRouteObject[] = [
  {
    path: routeEnum.HOME,
    hasErrorBoundary: true,
    element: <ProtectRoutesLayout />,
    errorElement: <RootErrorBoundary />,
    guarded: true,
    children: [
      {
        path: routeEnum.DASHBOARD,
        element: <Dashboard />,
        errorElement: <RootErrorBoundary />,
        roles: [USER_ROLES.ADMIN],
      },
      {
        path: routeEnum.USERS.concat("/*"),
        element: <User />,
        errorElement: <RootErrorBoundary />,
        roles: [USER_ROLES.ADMIN],
      },
    ] as any,
  },
];

const allRoutes: ExtendedRouteObject[] = [
  ...PublicRoutes,
  ...ProtectedRoutes,
  {
    path: "*",
    element: <Error />,
  },
];

const appRoutes = allRoutes.map((route) => {
  if (route?.guarded && route?.element) {
    route.element = (
      <AuthGuard route={route} component={route.element as ReactElement} />
    );
  }

  return route;
});

export default appRoutes;
