import React from "react";
import styled, { keyframes } from "styled-components";

import loader from "../assets/loader.svg";

export const Loading = () => {
  return (
    <LoadingContainer data-testid="LoadingContainer">
      <LoadingImg src={loader} alt="loagind" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingImg = styled.img`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
