var idade = 27;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = "Francisco";
var sobrenome = "Araujo";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

var ano = "2018";
var mes = 8;
console.log(ano + mes);

var melhor = "teste";
var frase1 = "Esse é o " + melhor + " jogo.";
var frase2 = console.log(frase1);

console.log("Isso mesmo");

var gols = 1000;
var frase = "Romário fez " + gols + " gols.";
var frase2 = `Romario fez ${gols * 2} gols.`;

console.log(frase2);
