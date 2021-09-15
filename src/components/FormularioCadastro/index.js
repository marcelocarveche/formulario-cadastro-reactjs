import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadoPessoais";
import DadosEntrega from "./DadosEntrega";
import DadosUsuario from "./DadosUsuario";

export default function Index({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography align="center" variant="h5">
      Obrigado pelo Cadastro!
    </Typography>,
  ];
  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }
  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximaEtapa();
  }
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel completed={etapaAtual === 3 ? true : false}>
            Finalização
          </StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}
