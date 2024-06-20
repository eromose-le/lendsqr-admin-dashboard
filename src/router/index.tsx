import { RouterProvider, createBrowserRouter } from "react-router-dom";

import appRoutes from "./routes";

const router = createBrowserRouter(appRoutes);

// TODO: add loading component
function AppRouter() {
  return (
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  );
}

export default AppRouter;
