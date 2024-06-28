import Suspense from "@/common/Suspense";
import { RoutePaths } from "@/constants/RouteConstants";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { configureRoutes } from "@/utils/RouterUtils";

function User() {
  const routes = useRoutes(ROUTES);

  return (
    <>
      <Suspense>{routes}</Suspense>
    </>
  );
}

export default User;

const ROUTES = configureRoutes(
  [
    {
      path: "*",
      element: <Navigate to={RoutePaths.USERS} replace />,
    },
    {
      index: true,
      path: RoutePaths.USERS,
      element: lazy(() => import("./UserList")),
    },
    {
      path: RoutePaths.USERS_DETAILS,
      element: lazy(() => import("./UserDetails")),
    },
  ] as any,
  {
    pathPrifix: RoutePaths.USERS,
    excludePathPrifix: true,
  }
);
