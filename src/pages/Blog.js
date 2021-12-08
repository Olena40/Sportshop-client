import React from "react";

import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/blog/Sidebar.js";
import Posts from "../components/blog/Posts.js";
import { Context } from "../index";
import { fetchPosts, fetchCategories } from "../http/postAPI";
import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const Blog = observer(() => {
  const { post } = useContext(Context);

  useEffect(() => {
    fetchCategories().then((data) => post.setCategories(data));
    fetchPosts().then((data) => {
      post.setPosts(data.rows);
    });
  }, []);

  useEffect(() => {
    fetchPosts(post.selectedCategory.id).then((data) => {
      post.setPosts(data.rows);
    });
  }, [post.selectedCategory]);

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7080/api/post")
      .then((resp) => resp.json())
      .then((data) => setArticles(data))
      .catch((err) => alert(err));
  }, []);
  console.log(articles);

  return (
    <Container className="container-fluid">
      <div id="admin" className="container-fluid home">
        <Posts />
        <Sidebar />
      </div>
    </Container>
  );
});

export default Blog;
