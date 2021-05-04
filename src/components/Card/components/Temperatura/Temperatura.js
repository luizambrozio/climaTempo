import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Temperatura = ({ temperatura }) => {
  const [colorText, setColorText] = useState(null);

  useEffect(() => {
    switch (true) {
      case temperatura <= 5:
        setColorText("#69A3FF");
        break;
      case temperatura <= 25:
        setColorText("#FF9623");
        break;

      case temperatura > 25:
        setColorText("#ED1946");
        break;

      default:
        break;
    }
  }, [temperatura]);

  return (
    <TemperaturaContainer data-testid="TemperaturaContainer">
      <TemperaturaTexto data-testid="TemperaturaTexto" colorText={colorText}>
        {Math.round(temperatura)}º
      </TemperaturaTexto>
    </TemperaturaContainer>
  );
};

const TemperaturaTexto = styled.span`
  font-size: 70px;
  color: ${(props) => props.colorText};
`;

const TemperaturaContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
