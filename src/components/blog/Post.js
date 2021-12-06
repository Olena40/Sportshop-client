import { Link } from "react-router-dom";
import "./blog.css";
import React from "react";
import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { POST_ROUTE } from "../../utils/consts";
import Image from "react-bootstrap/Image";

const Post = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="post">
      <Col
        className="postInfo"
        onClick={() => navigate(POST_ROUTE + "/" + post.id)}
      >
        <div className="scale">
          <Image
            className="flex-wrap scale "
            widht={70}
            height={150}
            src={process.env.REACT_APP_API_URL + post.photo}
          />
        </div>

        <div className="postCats">{post.name}</div>
        <div>{post.username}</div>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </Col>
      <div>{post.description}</div>
    </div>
  );
};
export default Post;
