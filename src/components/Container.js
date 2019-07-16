import React from "react";
import Post from "./Post";
function Container({ posts }) {
  return (
    <div className="containerMaster">
      {posts.map(post => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default Container;
