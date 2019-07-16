import React, { Component } from "react";

import Container from "./Container";
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Raphael Vieira",
          avatar: "http://moziru.com/images/profile-clipart-generic-user-12.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, tudo bem?",
        comments: [
          {
            id: 1,
            author: {
              name: "Raphael Vieira",
              avatar:
                "http://moziru.com/images/profile-clipart-generic-user-12.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },

      {
        id: 2,
        author: {
          name: "Raphael Vieira",
          avatar: "http://moziru.com/images/profile-clipart-generic-user-12.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, tudo certo?",
        comments: [
          {
            id: 2,
            author: {
              name: "Raphael Vieira",
              avatar:
                "http://moziru.com/images/profile-clipart-generic-user-12.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return <Container posts={this.state.posts} />;
  }
}

export default PostList;
