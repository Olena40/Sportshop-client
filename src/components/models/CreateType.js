import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { createType } from "../../http/sportgoodAPI";

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Add a new type</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Enter type name"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateType;
