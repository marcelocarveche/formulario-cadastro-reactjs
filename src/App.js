import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/Index";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import ValidacoesCadastro from "./context/ValidacoesCadastro";
import {
  validarCPF,
  validarSenha,
  validarNome,
  validarSobrenome,
  validarCEP,
  validarNumero,
  validarEndereco,
  validarEstado,
  validarCidade,
} from "./models/cadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" color="primary" variant="h3">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCPF,
            senha: validarSenha,
            nome: validarNome,
            sobrenome: validarSobrenome,
            cep: validarCEP,
            numero: validarNumero,
            endereco: validarEndereco,
            estado: validarEstado,
            cidade: validarCidade,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
