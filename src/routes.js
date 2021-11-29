import AdminPage from "./pages/AdminPage.js";
import Auth from "./pages/Auth.js";
import Basket from "./pages/Basket.js";
import Shop from "./pages/Shop.js";
import SportgoodPage from "./pages/SportgoodPage.js";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SPORTGOODS_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },

  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: SPORTGOODS_ROUTE + "/:id",
    Component: SportgoodPage,
  },
];
