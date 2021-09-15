import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import validacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

export default function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const validacoes = useContext(validacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({ cep, endereco, numero, estado, cidade });
        }
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cep.valido}
        helperText={erros.cep.textoAjuda}
        id="cep"
        label="Cep"
        name="cep"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.numero.valido}
        helperText={erros.numero.textoAjuda}
        id="numero"
        name="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.endereco.valido}
        helperText={erros.endereco.textoAjuda}
        id="endereco"
        label="Endereço"
        name="endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.estado.valido}
        helperText={erros.estado.textoAjuda}
        id="estado"
        label="Estado"
        name="estado"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cidade.valido}
        helperText={erros.cidade.textoAjuda}
        id="cidade"
        label="Cidade"
        name="cidade"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}
