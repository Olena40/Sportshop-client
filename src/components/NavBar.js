import React from "react";
import { Context } from "../index";
import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE, ADMIN_ROUTE, SPORTGOODS_ROUTE } from "../utils/consts";
import { Container, NavDropdown } from "react-bootstrap";

import tenty from "../tenty.jpeg";

const NavBar = observer((props) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar bg="light" variant="light" expand="lg">
        <Nav className="header">
          <img
            className="tent"
            src={tenty}
            alt="It's tent."
            title="Tent!"
          ></img>
        </Nav>
        <div class="container">
          <NavLink to={SPORTGOODS_ROUTE}>
            <button
              id="h4"
              type="button"
              class="btn btn-outline-success me-md-2"
            >
              <h4> Sportshop "Camping"</h4>
            </button>
          </NavLink>

          <NavLink to="/About">
            <div class="btn btn-outline-success me-md-2">
              <h6> About us</h6>
            </div>
          </NavLink>

          <NavLink to="/Blog">
            <div class="btn btn-outline-success me-md-2">
              <h6> Blog</h6>
            </div>
          </NavLink>

          <div className="navbar-nav ms-auto ml-auto">
            {user.isAuth ? (
              <Nav
                className="navbar-nav ms-auto ml-auto"
                style={{ color: "white" }}
              >
                <button
                  type="button"
                  class="btn btn-outline-success me-md-2"
                  onClick={() => navigate(ADMIN_ROUTE)}
                >
                  Admin
                </button>
                <button
                  type="button"
                  class="btn btn-outline-success me-md-2"
                  onClick={() => navigate(LOGIN_ROUTE)}
                >
                  Log out
                </button>
              </Nav>
            ) : (
              <Nav className="navbar-nav ms-auto">
                <button
                  type="button"
                  class="btn btn-outline-success me-md-2"
                  onClick={() => user.setIsAuth(true)}
                >
                  Authorization
                </button>
              </Nav>
            )}

            <NavLink to="/Basket">
              <div class="btn btn-outline-success me-md-2">
                <h6>
                  &#128722;
                  {props.countCartItems ? (
                    <button className="badge">{props.countCartItems}</button>
                  ) : (
                    ""
                  )}
                </h6>
              </div>
            </NavLink>
          </div>
        </div>
      </Navbar>
    </Container>
  );
});

export default NavBar;
