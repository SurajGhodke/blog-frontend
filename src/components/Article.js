import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Article = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthor(res.data.author),
      ])
      .catch((error) => console.log(error));
  }, [props]);

  return (
    <MainContainer>
      <h2>{title}</h2>
      <p>{article}</p>
      <h4 className="badge bg-secondary">By ~ {author}</h4>
      <br />
      <Link to="/" type="submit" className="btn btn-primary">
        Back to Home
      </Link>
    </MainContainer>
  );
};

export default Article;

//styled
const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
    text-align: center;
    font-weight: 900;
    color: darkblue;
  }
  .btn-primary {
    background: darkblue;
    border: none;
    &:hover {
      background: lightblue;
    }
  }
`;
