import React from "react";

import { DetailContainer, DetailLabel, DetailValue } from "../style";

export const Pressure = ({ value }) => {
  return (
    <DetailContainer data-testid="PressureContainer">
      <DetailLabel>PRESSURE</DetailLabel>
      <DetailValue>{value}hPa</DetailValue>
    </DetailContainer>
  );
};
