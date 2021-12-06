import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE, SPORTGOODS_ROUTE } from "../utils/consts";
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";
import Blog from "../pages/Blog";
import About from "../pages/About";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  console.log(user);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      {/* {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))} */}

      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
});

export default AppRouter;
