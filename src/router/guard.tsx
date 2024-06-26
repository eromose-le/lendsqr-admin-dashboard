import { routeEnum } from "@/constants/RouteConstants";
import { type ReactElement } from "react";
import { Navigate } from "react-router-dom";


interface AuthGuardProps {
  component: ReactElement;
  route: any;
}

// PS: This can be extended as we see fit
function AuthGuard({ component }: AuthGuardProps): ReactElement {
  const isAuthorized = true;

  if (!isAuthorized) {
    return <Navigate to={routeEnum.LOGIN} replace />;
  }

  return component;
}

export default AuthGuard;
