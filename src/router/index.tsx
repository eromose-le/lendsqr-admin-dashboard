import { RouterProvider, createBrowserRouter } from "react-router-dom";

import appRoutes from "./routes";
import Loading from "@/common/Loading";

const router = createBrowserRouter(appRoutes);

function AppRouter() {
  return (
    <RouterProvider router={router} fallbackElement={<Loading />} />
  );
}

export default AppRouter;
