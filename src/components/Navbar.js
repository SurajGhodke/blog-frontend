import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Navstyle>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary px-5 py-8">
        <Link className="navbar-brand" to="#">
          #LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-article">
                Add Article
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Navstyle>
  );
};

export default Navbar;

const Navstyle = styled.div`
  background: #7abfe7;
  .nav-link {
    color: white !important;
    margin-left: 2rem;
    &:hover {
      background: lightblue;
    }
  }
`;
