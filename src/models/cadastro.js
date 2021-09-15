function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, textoAjuda: "CPF deve ter 11 digitos" };
  } else {
    return { valido: true, textoAjuda: "" };
  }
}
function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return {
      valido: false,
      textoAjuda: "Senha deve ter entre 4 e 72 dígitos.",
    };
  } else {
    return { valido: true, textoAjuda: "" };
  }
}
function validarNome(nome) {
  if (nome.length < 4 || nome.length > 30) {
    return {
      valido: false,
      textoAjuda: "Nome deve ter entre 4 e 30 dígitos.",
    };
  } else {
    return { valido: true, textoAjuda: "" };
  }
}
function validarSobrenome(sobrenome) {
  if (sobrenome.length < 4 || sobrenome.length > 70) {
    return {
      valido: false,
      textoAjuda: "Sobrenome deve ter entre 4 e 70 dígitos.",
    };
  } else {
    return { valido: true, textoAjuda: "" };
  }
}
function validarCEP(cep) {
  if (cep.length < 8 || cep.length > 8) {
    return {
      valido: false,
      textoAjuda: "CEP inválido.",
    };
  } else {
    return { valido: true, textoAjuda: "" };
  }
}
function validarNumero(numero) {
  if (numero.length < 1 || numero.length > 999999) {
    return {
      valido: false,
      textoAjuda: "Número precisa ser maior que 1.",
    };
  } else {
    return { valido: true, textoAjuda: "" };
  }
}
function validarEndereco(endereco) {
  if (endereco.length < 5 || endereco.length > 999999) {
    return {
      valido: false,
      textoAjuda: "Endereço precisa conter no mínimo 5 caracteres.",
    };
  } else {
    return { valido: true, textoAjuda: "" };
  }
}
function validarEstado(estado) {
  if (estado.length < 2 || estado.length > 999999) {
    return {
      valido: false,
      textoAjuda: "Estado precisa ter pelo menos 2 caracteres.",
    };
  } else {
    return { valido: true, textoAjuda: "" };
  }
}
function validarCidade(cidade) {
  if (cidade.length < 5 || cidade.length > 999999) {
    return {
      valido: false,
      textoAjuda: "Cidade precisa ser conter no mínimo 5 caracteres.",
    };
  } else {
    return { valido: true, textoAjuda: "" };
  }
}



export {validarCPF, validarSenha, validarNome, validarSobrenome, validarCEP, validarNumero, validarEndereco, validarEstado, validarCidade};