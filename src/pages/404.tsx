import { routeEnum } from "@/constants/RouteConstants";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const ErrorPage: FC = () => {
  return (
    <div>
      <h1>Ooops... 404!</h1>
      <p>The page you requested could not be found.</p>

      <NavLink
        to={routeEnum.DASHBOARD}
        style={{
          display: "block",
          marginTop: "1.5rem",
          fontWeight: 600,
          textDecoration: "underline",
          color: "blue",
        }}
      >
        Back to Dashboard
      </NavLink>
    </div>
  );
};

export default ErrorPage;
