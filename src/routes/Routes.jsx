import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
    element: <p>Authentication layout</p>,
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
