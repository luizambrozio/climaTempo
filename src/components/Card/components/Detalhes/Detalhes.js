import React from "react";
import styled from "styled-components";

import { Humidity } from "./components/Humidity/Humidity";
import { Pressure } from "./components/Pressure/Pressure";

export const Detalhes = ({ detais }) => {
  const data = new Date();
  return (
    <DetalhesContainer data-testid="DetalhesContainer">
      <Detail>
        {detais?.humidity && <Humidity value={detais.humidity} />}
        {detais?.pressure && <Pressure value={detais.pressure} />}
      </Detail>
      <UpdateAt data-testid="UpdateAtContainer">
        updated at {data.toLocaleTimeString({ hour12: true })}
      </UpdateAt>
    </DetalhesContainer>
  );
};

const DetalhesContainer = styled.div`
  background: #f1f1f1;
  opacity: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UpdateAt = styled.span`
  font-size: 10px;
  margin-bottom: 10px;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
