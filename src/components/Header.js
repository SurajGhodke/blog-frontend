import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <MainContainer>
      <h1>
        Welcome to the <br />
        SURAJ blog! ❤️
      </h1>
    </MainContainer>
  );
};

export default Header;

//styled components
const MainContainer = styled.header`
  background: url(../images/header.jpg) no-repeat center/cover;
  height: 25rem;
  h1 {
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 900;
    position: absolute;
    top: 40%;
    left: 50%;
  }
`;
