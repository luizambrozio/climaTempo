import styled from "styled-components";

import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";

const configs = {
  nuuk: {
    name: "Nuuk",
    estado: "GL",
    lat: 64.1835,
    lon: -51.7216,
  },
  urubici: {
    name: "Urubici",
    estado: "BR",
    lat: -28.015,
    lon: -49.5917,
  },
  nairobi: {
    name: "Nairobi",
    estado: "KE",
    lat: -1.2833,
    lon: 36.8167,
  },
  oslo: {
    name: "Oslo",
    estado: "NO",
    lat: 59.9127,
    lon: 10.7461,
  },
  salvador: {
    name: "Salvador",
    estado: "BR",
    lat: -12.9711,
    lon: -38.5108,
  },
};

export function App() {
  return (
    <>
      <Header />
      <ContainerMain>
        <Card config={configs.nuuk} />
        <Card centro={true} config={configs.urubici} />
        <Card config={configs.nairobi} />
      </ContainerMain>
    </>
  );
}

const ContainerMain = styled.main`
  background: #f1f1f1;
  height: 92vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-height: 800px) {
    min-height: 750px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default App;
