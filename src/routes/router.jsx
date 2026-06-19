import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: NotFound },
    ],
  },
]);
