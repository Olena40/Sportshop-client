import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Basket from "./pages/Basket";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
// import {check} from "./http/userAPI";

const App = observer(() => {
  const { user } = useContext(Context);

  return (
    <Router>
      <NavBar />

      <AppRouter />
      <Footer />
    </Router>
  );
});
export default App;
