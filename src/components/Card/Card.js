import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Local } from "./components/Local/Local";
import { Temperatura } from "./components/Temperatura/Temperatura";
import { Detalhes } from "./components/Detalhes/Detalhes";
import { Error } from "./components/Error/Error";
import { Loading } from "./components/Loading/Loading";

import { useWeather } from "../../Hooks/useWeather";

export const Card = ({ centro, config }) => {
  const [previsao, setPrevisao] = useState(undefined);
  const [errorPrevisao, setErrorPrevisao] = useState(undefined);
  const { getPrevisao } = useWeather({ config });

  useEffect(() => {
    if (!previsao) {
      const fetchDados = async () => {
        const prev = await getPrevisao();

        if (prev?.code) {
          return setErrorPrevisao(true);
        }
        setPrevisao(prev);
      };

      fetchDados();
    }
  }, [getPrevisao, previsao]);

  useEffect(() => {
    setInterval(() => {
      setErrorPrevisao(undefined);
      setPrevisao(undefined);
    }, 60000);
  }, []);

  const tryGetPrevisao = () => {
    setErrorPrevisao(undefined);
    setPrevisao(undefined);
  };

  const dadosOrLoading = () => {
    if (errorPrevisao) {
      return <Error tryAgain={tryGetPrevisao} />;
    }
    if (previsao) {
      return (
        <>
          <Temperatura temperatura={previsao?.temp} />
          <Detalhes detais={previsao} name={config?.name} />
        </>
      );
    } else {
      return <Loading />;
    }
  };

  return (
    <CardContainer centro={centro} data-testid="CardContainer">
      <Local cidade={config.name} estado={config.estado} />
      <Divider />
      {dadosOrLoading()}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: #ffffff;
  width: 250px;
  height: ${(props) => (props.centro ? "270px" : "225px")};
  display: flex;
  box-shadow: 7px 9px 5px -1px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  border-radius: 5px;
`;

const Divider = styled.hr`
  margin: 0;
  border: 0;
  border-top: 1px solid #ebebeb;
`;
