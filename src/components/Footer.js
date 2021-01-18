import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Footerstyle>
      <span className="text-muted">
        &copy; {new Date().getFullYear()} Made With ❤️ by
        <span className="text-white"> SURAJ</span>.
      </span>
    </Footerstyle>
  );
};

export default Footer;

const Footerstyle = styled.footer`
  background: #344;
  position: fixed;
  height: 2rem;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  }
`;
