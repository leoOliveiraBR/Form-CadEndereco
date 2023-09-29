'use strict'; // moodo restrito 
// consumindo API e CEP  do viaCep
// http://viacep.com.br/

//função para limpar o formulário
const  limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
  }

  //verificado se cep é valido
  const eNumero = (numero) => /^[0-9]+$/.test(numero); //
  const cepValido = (cep) => cep.lengh == 8 && eNumero(cep); //