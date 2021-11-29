import React, { useEffect, useState } from "react";
import { Col, Container, Image, Card } from "react-bootstrap";
import { fetchOneSportgood } from "../http/sportgoodAPI";
import starty from "../starty.jpeg";
import { useParams } from "react-router-dom";
import SportgoodItem from "../components/SportgoodItem";

const SportgoodPage = (props) => {
  const [sportgood, setSportgood] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneSportgood(id).then((data) => setSportgood(data));
  }, []);

  const { name, price, img, appendToCart } = props;
  const item = { id: id, name: name, price: price };

  return (
    <Container>
      <div className="d-flex align-items-start">
        <Col style={{ color: "black" }}>
          <Image
            style={{ border: "2px solid lightgray" }}
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + sportgood.img}
          />
          <h5>{sportgood.name}</h5>
        </Col>

        <div className="d-flex flex-column">
          <Col class="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  background: `url(${starty}) no-repeat center center`,
                  width: 70,
                  height: 70,
                  backgroundSize: "cover",
                  color: "black",
                  fontSize: 24,
                }}
              >
                {sportgood.rating}
              </div>
            </div>
          </Col>

          <Col class="col-md-4">
            <Card
              className="d-flex mt-3 flex-column align-items-center justify-content-center"
              style={{
                width: 150,
                height: 150,
                fontSize: 10,
                color: "black",
                border: "2px solid lightgray",
              }}
            >
              <h4>Price: {sportgood.price} €</h4>
              <button
                className=" align-self-center btn-outline-success"
                variant="success"
                style={{
                  width: 150,
                  height: 50,

                  fontSize: 18,
                }}
                onClick={() => appendToCart(item, 1)}
              >
                Add to Basket
              </button>
            </Card>
          </Col>
        </div>
      </div>
      <div className="d-flex flex-column m-3">
        <h3>Specifications :</h3>
        {sportgood.info.map((info, index) => (
          <div
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SportgoodPage;
