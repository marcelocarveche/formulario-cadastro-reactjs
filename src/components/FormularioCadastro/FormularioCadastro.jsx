import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";



export default function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: {
      valido: true,
      textoAjuda: ""
    }
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        variant="outlined"
        label="Nome"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        variant="outlined"
        label="Sobrenome"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.textoAjuda}
        onBlur={(event) => {
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido});
        }}
        id="CPF"
        variant="outlined"
        label="CPF"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promoções"
            checked={promocoes}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            checked={novidades}
            color="primary"
          />
        }
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
