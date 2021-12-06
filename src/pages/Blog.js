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
    fetchCategories().then((base) => post.setCategories(base));
    fetchPosts().then((base) => {
      post.setPosts(base.rows);
    });
  }, []);

  useEffect(() => {
    fetchPosts(post.selectedCategory.id).then((base) => {
      post.setPosts(base.rows);
    });
  }, []);

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
