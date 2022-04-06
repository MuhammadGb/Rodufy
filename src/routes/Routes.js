import { lazy } from "react";

export const privateRoutes = [
  {
    path: "posts",
    component: lazy(() => import("../pages/Timeline")),
    exact: true,
  },
];
