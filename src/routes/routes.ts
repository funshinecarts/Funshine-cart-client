import Dashboard from "../components/Dashboard/Dashboard";
import NewCarts from "../pages/NewCarts/NewCarts";
import UsedCarts from "../pages/UsedCarts/UsedCarts";
import { Route } from "./routes.types";

const routes: Route[] = [
  {
    path: "/",
    component: Dashboard,
    secured: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    secured: true,
  },
  {
    path: "/new-golf-carts",
    component: NewCarts,
    secured: true,
  },
  {
    path: "/used-golf-carts",
    component: UsedCarts,
    secured: true,
  },
];

export default routes;