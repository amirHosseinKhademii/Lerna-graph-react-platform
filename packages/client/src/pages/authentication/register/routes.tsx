import { lazy } from "react";

export const route = {
  path: "/authentication/register",
  name: "ROUTE:REGISTER",
  exact: true,
  layout: "admin",
  component: lazy(() => import(".")),
};
