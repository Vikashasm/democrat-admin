import React from "react";
import { createContext, useEffect, useState } from "react";

export const CommentContext = createContext();

const CommentContextProvider = (props) => {
  const [comments, setComments] = useState([
    {
      id: "112341341",
      name: "Snow flake",
      comment: "nah ya just hell wrong.",
      approved: "True",
    },
    {
      id: "11132441",
      name: "Penguine",
      comment: "ya just hell dumb man.",
      approved: "False",
    },

    {
      id: "1534241341",
      name: "Pikachu",
      comment: "nothing much boring.",
      approved: "False",
    },
  ]);

  useEffect(() => {
    setComments(JSON.parse(localStorage.getItem("comments")));
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  });

  const sortedComments = comments.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addComment = (name, comment, approved) => {
    setComments([...comments, { id: uuidv4(), name, comment, approved }]);
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const updateComment = (id, updatedComment) => {
    setComments(
      comments.map((comment) => (comment.id === id ? updatedComment : comment))
    );
  };

  return (
    <CommentContext.Provider
      value={{ sortedComments, addComment, deleteComment, updateComment }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
