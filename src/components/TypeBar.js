import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { sportgood } = useContext(Context);

  return (
    <div>
      <ListGroup>
        {sportgood.types.map((type) => (
          <ListGroup.Item
            action
            variant="light"
            style={{ cursor: "pointer" }}
            //   active={type.id === sportgood.selectedType.id}
            border={type.id === sportgood.selectedType.id ? "danger" : "light"}
            onClick={() => sportgood.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});
export default TypeBar;
