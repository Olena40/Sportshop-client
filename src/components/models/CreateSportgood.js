import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import { Button, Form, Row, Col, Dropdown } from "react-bootstrap";
import { Context } from "../../index";
import {
  createSportgood,
  fetchBrands,
  fetchTypes,
} from "../../http/sportgoodAPI.js";
import { observer } from "mobx-react-lite";

const CreateSportgood = observer(({ show, onHide }) => {
  const { sportgood } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState();
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => sportgood.setTypes(data));
    fetchBrands().then((data) => sportgood.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addSportgood = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("rating", rating);
    formData.append("img", file);
    formData.append("brandId", sportgood.selectedBrand.id);
    formData.append("typeId", sportgood.selectedType.id);
    formData.append("info", JSON.stringify(info));
    createSportgood(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add a good</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {sportgood.selectedType.name || "Select  type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {sportgood.types.map((type) => (
                <Dropdown.Item
                  onClick={() => sportgood.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {sportgood.selectedBrand.name || "Select  brand"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {sportgood.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => sportgood.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Enter name of good"
          />

          <Form.Control
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-3"
            placeholder="Enter rating of good"
          />

          <Form.Label className="mt+6">Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Enter price of the device"
            type="number"
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
          <hr />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Add an info
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  placeholder="Enter properties of good"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  placeholder="Enter a description  "
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addSportgood}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateSportgood;
