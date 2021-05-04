import React from "react";
import styled from "styled-components";

export const Local = ({ cidade, estado }) => {
  return (
    <LocalContainer data-testid="LocalContainer">
      <LocalCidade>
        {cidade}, {estado}
      </LocalCidade>
    </LocalContainer>
  );
};

const LocalCidade = styled.span`
  color: #737c84;
  font-size: 18px;
`;

const LocalContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 50px;
`;
