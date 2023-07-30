// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
  nome: "Francisco",
  sobrenome: "Araújo",
  idade: 27,
  sexo: "M",
  possuiFaculdade: false,
};
// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function () {
  //this faz referência ao próprio objeto
  return `${this.nome} ${this.sobrenome}`;
};
console.log(eu.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latirAoVerHomem(pessoa) {
    if (pessoa === "homem") {
      return `Au au!`;
    } else {
      return `Barriguinha pra cima!`;
    }
  },
};

console.log(cachorro.latirAoVerHomem("homem"));
