import "./layout.scss";
import Navbar from "@/components/navbar/Navbar";
import { Sidebar } from "@/components/sidbar/Sidebar";
import { routeEnum } from "@/constants/RouteConstants";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PublicRoutesLayout() {
  <Navigate to={routeEnum.LOGIN} />;
  return <Outlet />;
}

function ProtectRoutesLayout() {
  const location = useLocation();

  if (location.pathname === "/") return <Navigate to={routeEnum.LOGIN} />;
  else {
    return (
      <div>
        <Navbar />
        <div className="dashboard-container">
          <div className="side">
            <Sidebar />
          </div>
          <section className="main">
            <Outlet />
          </section>
        </div>
      </div>
    );
  }
}

export { PublicRoutesLayout, ProtectRoutesLayout };
