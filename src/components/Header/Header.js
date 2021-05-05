import React from "react";
import styled from "styled-components";

import logo from "./assests/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer data-testid="HeaderContainer">
      <img src={logo} alt="logoHeader" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: #ffffff;
  height: 6vh;
  min-height: 50px;
  margin: 1vh;
  display: flex;
  justify-content: center;
`;
