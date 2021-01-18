import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);
  //delete article by id
  const deleteArticle = (id) => {
    axios
      .delete(`http://localhost:5000/articles/${id}`)
      .then((res) => alert(res.data));
    setArticle(article.filter((elem) => elem._id === id));
  };
  return (
    <MainContainer>
      {posts.map((article, key) => (
        <div className="container" key={key}>
          <Link
            to={{
              pathname: `/article/${article._id}`,
            }}
          >
            <h2>{article.title}</h2>
          </Link>
          <p>{article.article}</p>
          <span className="badge bg-secondary p-2">By ~ {article.author}</span>
          <div className="row my-4">
            <div className="col-sm-2">
              <Link
                to={`/update/${article._id}`}
                className="btn btn-outline-success"
              >
                Edit Article
              </Link>
            </div>
            <div className="col-sm-2">
              <button
                onClick={() => deleteArticle(article._id)}
                to="/"
                className="btn btn-outline-danger"
              >
                Delete Article
              </button>
            </div>
          </div>
        </div>
      ))}
    </MainContainer>
  );
};

export default Articles;

//styled article

const MainContainer = styled.div`
  margin: 7rem 0;
`;
