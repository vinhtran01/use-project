import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/homePage"));

export const route = [
  {
    label: "Homepage",
    path: "",
    element: HomePage,
  },
];
