import React from "react";
import styled from "styled-components";

export const Error = ({ tryAgain }) => {
  return (
    <ErrorContainer data-testid="ErrorContainer">
      <ErrorLabel>Something went wrong</ErrorLabel>
      <ButtonTryAgain onClick={tryAgain}>Try Again</ButtonTryAgain>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ErrorLabel = styled.span`
  color: #ed1946;
`;

const ButtonTryAgain = styled.button`
  background: transparent;
  border-radius: 0;
  border: 2px solid #737c84;
  color: #737c84;
  border-radius: 10px;
  border-radius: 20px;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;

  :hover {
    background: #ebebeb;
  }
`;
