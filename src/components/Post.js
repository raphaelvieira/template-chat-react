import React from "react";
import Comment from "./Comment";
function Post({ data }) {
  return (
    <>
      <div className="container">
        <div>
          <img src={data.author.avatar} width="20px" />
          <b>{data.author.name}</b>
        </div>
        <div>
          <small>{data.date}</small>
        </div>
        <br />
        <div>{data.content}</div>
      </div>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </>
  );
}

export default Post;
