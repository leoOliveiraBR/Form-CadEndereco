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