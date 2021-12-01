import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import SportgoodItem from "./SportgoodItem";

const SportgoodList = observer((props) => {
  const { sportgood } = useContext(Context);

  return (
    <div>
      <div className="d-flex " col-4 style={{ color: "black" }}>
        {sportgood.sportgoods.map((sportgood) => (
          <SportgoodItem
            key={sportgood.id}
            sportgood={sportgood}
            appendToCart={props.appendToCart}
          />
        ))}
      </div>
    </div>
  );
});

export default SportgoodList;
