import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { createBrand } from "../../http/sportgoodAPI";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <div className="container-fluid">
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Add a new brand</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              placeholder={"Enter name of new brand"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>
            Close
          </Button>
          <Button variant="outline-success" onClick={addBrand}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateBrand;
