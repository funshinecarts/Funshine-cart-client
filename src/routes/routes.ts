import Dashboard from "../components/Dashboard/Dashboard";
import GlobalListing from "../pages/GlobalListing/GlobalListing";
import NewCarts from "../pages/NewCarts/NewCarts";
import ProductPage from "../pages/SingleProductPage/SingleProductPage";
import UsedCarts from "../pages/UsedCarts/UsedCarts";
import UserProductPage from "../pages/UserProductPage/UserProductPage";
import { Route } from "./routes.types";

const routes: Route[] = [
  {
    path: "/",
    component: GlobalListing,
    secured: true,
  },
  {
    path: "/listing",
    component: GlobalListing,
    secured: true,
  },
  {
    path: "/listing/:condition",
    component: GlobalListing,
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
  {
    path: "/product/:id",
    component: ProductPage,
    secured: true,
  },
  {
    path: "/user/product/:id",
    component: UserProductPage,
    secured: true,
  },
];

export default routes;
