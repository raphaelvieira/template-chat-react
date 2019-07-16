import React from "react";
function Comment({ data }) {
  return (
    <>
      <div className="container darker">
        <div>
          <img src={data.author.avatar} width="20px" />
          <b>{data.author.name}</b>
        </div>
        <br />
        <div className="box">{data.content}</div>
      </div>
    </>
  );
}

export default Comment;
