import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CreateBrand from "../components/models/CreateBrand.js.js";
import CreateType from "../components/models/CreateType.js.js";
import CreateSportgood from "../components/models/CreateSportgood.js";
import CreatePost from "../components/models/CreatePost.js";

const AdminPage = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [sportgoodVisible, setSportgoodVisible] = useState(false);
  const [postVisible, setPostVisible] = useState(false);

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

        <button
          variant={"outline-success"}
          className="mt-4 p-2"
          onClick={() => setPostVisible(true)}
        >
          Add post
        </button>
      </div>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateSportgood
        show={sportgoodVisible}
        onHide={() => setSportgoodVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreatePost show={postVisible} onHide={() => setPostVisible(false)} />
    </Container>
  );
};

export default AdminPage;
