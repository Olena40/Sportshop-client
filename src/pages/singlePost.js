import "../components/blog/blog.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Card } from "react-bootstrap";
import { fetchOnePost } from "../http/postAPI";
import { useParams } from "react-router-dom";

const SinglePost = (props) => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchOnePost(id).then((data) => setPost(data));
  }, []);

  const { name, username } = props;
  const item = { id: id, name: name, username: username };

  return (
    <Container id="admin" className="container-fluid">
      <div className="d-flex align-items-start">
        <Col style={{ color: "black" }}>
          <Image
            style={{ border: "2px solid lightgray" }}
            width={500}
            height={250}
            src={process.env.REACT_APP_API_URL + post.photo}
          />
          <h5>{post.name}</h5>
        </Col>

        <div className="d-flex flex-column"></div>
      </div>
      <div className="d-flex flex-column m-3">
        <h3>Detail :</h3>
        <div>{post.description}</div>
        ))
      </div>
    </Container>
  );
};

export default SinglePost;
