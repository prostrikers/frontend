import { SignInPage } from "./pages/Sign-in";
import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { BookNow } from "./pages/BookNow";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/sign-in",
      element: <SignInPage />,
    },
    {
      path: "/book-now",
      element: <BookNow />,
    },
  ]);

  return routes;
};
