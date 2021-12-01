import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand.js";
import CreateType from "../components/modals/CreateType.js";
import CreateSportgood from "../components/modals/CreateSportgood.js";

const AdminPage = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [sportgoodVisible, setSportgoodVisible] = useState(false);

  return (
    <Container id="admin" className="d-flex-column container-fluid">
      <h4 className="care">Creating a new product card</h4>
      <div className="d-flex car ">
        <button
          variant={"outline-success"}
          className="mt-4 mr-4 p-2"
          onClick={() => setTypeVisible(true)}
        >
          Add type
        </button>

        <button
          variant={"outline-success"}
          className="mt-4 p-2"
          onClick={() => setBrandVisible(true)}
        >
          Add brand
        </button>

        <button
          variant={"outline-success"}
          className="mt-4 p-2"
          onClick={() => setSportgoodVisible(true)}
        >
          Add good
        </button>
      </div>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateSportgood
        show={sportgoodVisible}
        onHide={() => setSportgoodVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default AdminPage;
