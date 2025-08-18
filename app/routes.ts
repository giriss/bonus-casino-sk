import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/casino/:id", "routes/casino.tsx"),
] satisfies RouteConfig;
