import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        hydrateFallbackElement: (
          <span className="loading loading-spinner loading-xl"></span>
        ),
        loader: () => fetch("../news.json"),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/news",
    element: <p>News Layout</p>,
  },
  {
    path: "/*",
    element: <p>Error404</p>,
  },
]);
