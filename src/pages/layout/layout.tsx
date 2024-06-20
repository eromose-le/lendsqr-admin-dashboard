import "./layout.scss";
import Navbar from "@/components/navbar/Navbar";
import { routeEnum } from "@/constants/RouteConstants";
import useAuthUser from "@/hooks/useAuthUser";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoutesLayout() {
  <Navigate to={routeEnum.LOGIN} />;
  return (
    <div className="layout">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function ProtectRoutesLayout() {
  const user = useAuthUser();

  // TODO: if path '/' ? redirect to Dashboard
  if (!user) return <Navigate to={routeEnum.LOGIN} />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export { PublicRoutesLayout, ProtectRoutesLayout };
