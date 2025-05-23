import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

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
        hydrateFallbackElement: <Loading />,
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
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loading />,
    loader: () => fetch("../news.json"),
  },
  {
    path: "/*",
    element: <p>Error404</p>,
  },
]);
