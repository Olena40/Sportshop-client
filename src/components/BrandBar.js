import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const BrandBar = observer(() => {
  const { sportgood } = useContext(Context);

  return (
    <ListGroup horizontal>
      {sportgood.brands.map((brand) => (
        <ListGroup.Item
          action
          variant="light"
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-3"
          onClick={() => sportgood.setSelectedBrand(brand)}
        >
          {brand.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default BrandBar;
