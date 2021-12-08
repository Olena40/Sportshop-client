import React, { useContext, useState } from "react";
import { Container, Form, Card } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { login, registration } from "../http/userAPI";
import { Context } from "../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
        alert("Пользователь создан");
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-start mt-3 "
      style={{ height: window.innerHeight - 54 }}
    >
      <Card
        style={{ width: "28rem", backgroundColor: "lightblue" }}
        className="p-5 aut"
      >
        <h4 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h4>

        <Form className="d-flex flex-column">
          <Form.Label className="mt-3">Email address</Form.Label>
          <Form.Control
            class="card-body"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            /*  onClick={() => {
              alert.show("Alert test");
            }} */
          />

          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control
            class="card-body"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <div className="d-flex justify-content-between mt-3  pl-3 pr-3">
            {isLogin ? (
              <div className="mt-3  pl-3 pr-3">
                Don't have an account?
                <NavLink to={REGISTRATION_ROUTE}>Register now!</NavLink>
              </div>
            ) : (
              <div className="mt-3  pl-3 pr-3">
                Do you have an account?
                <NavLink to={LOGIN_ROUTE}>Login in!</NavLink>
              </div>
            )}
            <button
              className="mt-3 align-self-end btn-outline-success"
              variant="success"
              onClick={click}
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});
export default Auth;
