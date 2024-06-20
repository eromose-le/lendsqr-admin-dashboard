import { routeEnum } from "@/constants/RouteConstants";
import { type ReactElement } from "react";
import { Navigate } from "react-router-dom";


interface AuthGuardProps {
  component: ReactElement;
  route: any;
}

// TODO: add useAuthUser Hook
// PS: This can be extended as we see fit
function AuthGuard({ component }: AuthGuardProps): ReactElement {
  const isAuthorized = false;

  if (!isAuthorized) {
    return <Navigate to={routeEnum.LOGIN} replace />;
  }

  return component;
}

export default AuthGuard;
