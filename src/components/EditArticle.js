import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EditArticle = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();

    const articles = {
      title,
      article,
      author,
    };

    setTitle("");
    setArticle("");
    setAuthor("");

    axios
      .put(
        `http://localhost:5000/articles/update/${props.match.params.id}`,
        articles
      )
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthor(res.data.author),
      ])
      .catch((error) => console.log(error));
  }, [props.match.params.id]);

  return (
    <AddArticleStyle>
      <div className="container">
        <h1>Edit Article</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="author">Author Name</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Author Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="article">Article</label>
            <textarea
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              cols="30"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Update Article
          </button>
        </form>
      </div>
    </AddArticleStyle>
  );
};

export default EditArticle;

//styled
const AddArticleStyle = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;
  h1 {
    font-weight: 900;
    color: darkblue;
  }
  .btn-primary {
    margin-top: 2rem;
    background: darkblue;
    border: none;
    &:hover {
      background: lightblue;
    }
  }
  .message {
    font-weight: 900;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
  }
`;
