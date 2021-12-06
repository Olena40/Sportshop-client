import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

const BrandBar = observer(() => {
  const { sportgood } = useContext(Context);

  return (
    <div id="brand" class="d-flex  ml-3">
      {sportgood.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer", border: " 1px solid grey" }}
          key={brand.id}
          className="p-3"
          onClick={() => sportgood.setSelectedBrand(brand)}
          border={brand.id === sportgood.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
