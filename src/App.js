import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" color="primary" variant="h3">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido: false, textoAjuda: "CPF deve ter 11 digitos"}
  }else{
    return { valido: true, textoAjuda: ""}
  }
}

export default App;
