import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages/Home";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return routes;
};
