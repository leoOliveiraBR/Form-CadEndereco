'use strict'; // moodo restrito 
// consumindo API e CEP  do viaCep
// http://viacep.com.br/
// Verifica se Cep é valido

const eNumero = (numero) => /^[0-9]+$/.test(numero); //testa número informado com expresão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep);// Verifica tamanho do cep digite e executa função de validação do cep eNumero

//função para preencher formulario
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = enderco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//Consumo da API da ViaCEp
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
}
if(cepValido(value)){
    const dados = await fetch(url); //aguardar
    const adrres = await dados.json();

    if(adrres.hasOwnProperty('erro')){

    }
}