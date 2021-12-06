import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserStore from "./store/UserStore";
import SportgoodStore from "./store/SportgoodStore";
import PostStore from "./store/PostStore";

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL); //Checking the connection

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        sportgood: new SportgoodStore(),
        post: new PostStore(),
      }}
    >
      <App />
    </Context.Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
