import React from "react";
import { Container } from "react-bootstrap";
import Map from "../components/Map";
import shop from "../shop.jpeg";

function About() {
  return (
    <Container className="container-fluid " disableGutters>
      <div className="contact">
        <div>
          <h4>CONTACT</h4>
          <p>Sportshop "Camping"</p>
          <p>Lindwurmstr.103</p>
          <p>12305 BERLIN</p>
          <p>TEL: +4989535485</p>
          <p>E-Mail: info@sportshop-camping.de</p>
        </div>
        <div>
          <img src={shop} alt="shop" />
        </div>
      </div>
      <div className="about">
        <h5>Anfahrt</h5>
        <Map />
      </div>
    </Container>
  );
}

export default About;
