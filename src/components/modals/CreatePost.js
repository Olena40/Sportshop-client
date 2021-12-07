import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import { Button, Form, Row, Col, Dropdown } from "react-bootstrap";
import { Context } from "../../index";
import { createPost, fetchCategories } from "../../http/postAPI.js";
import { observer } from "mobx-react-lite";

const CreatePost = observer(({ show, onHide }) => {
  const { post } = useContext(Context);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchCategories().then((data) => post.setCategories(data));
  }, []);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addPost = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("username", username);
    formData.append("photo", file);
    formData.append("categoryId", post.selectedCategory.id);
    createPost(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add a post</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {post.selectedCategory.name || "Select  category"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {post.categories.map((category) => (
                <Dropdown.Item
                  onClick={() => post.setSelectedCategory(category)}
                  key={category.id}
                >
                  {category.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Enter name of post"
          />

          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-3"
            placeholder="Enter description of good"
          />

          <Form.Control
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-3"
            placeholder="Enter username "
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addPost}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreatePost;
