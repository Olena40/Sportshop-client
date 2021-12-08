import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { deleteType } from "../../http/sportgoodAPI";

const DeleteType = ({ show, onHide }) => {
  const [val, setVal] = useState("");

  const destroyType = () => {
    destroyType({}).then((data) => {
      setVal("");
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Delete a new type</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Enter type name"}
            onChange={(e) => setVal((e.target.value = ""))}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={destroyType}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default DeleteType;
