import React from "react";

import { DetailContainer, DetailLabel, DetailValue } from "../style";
export const Humidity = ({ value }) => {
  return (
    <DetailContainer data-testid="HumidityContainer">
      <DetailLabel>HUMIDITY</DetailLabel>
      <DetailValue>{value}%</DetailValue>
    </DetailContainer>
  );
};
