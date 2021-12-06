import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import Post from "./Post";
import "./blog.css";

const Posts = observer(() => {
  const { post } = useContext(Context);
  console.log(post);

  return (
    <div>
      <div className="posts">
        {post.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
});

export default Posts;
