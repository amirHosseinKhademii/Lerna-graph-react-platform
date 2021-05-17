import { lazy } from "react";

export const route = {
  path: "/",
  name: "ROUTE:HOME",
  exact: true,
  layout: "admin",
  component: lazy(() => import(".")),
};
