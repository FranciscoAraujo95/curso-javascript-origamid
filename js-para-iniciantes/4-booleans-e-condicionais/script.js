//se a variável for true, vai executar tudo que tiver dentro do if, se for false, tudo que tiver no else
var possuiGraduacao = false;
var possuiDoutorado = true;
if (possuiGraduacao) {
  console.log("Possui graduação!");
  // var x = 10;
} else if (possuiDoutorado) {
  console.log("Possui doutorado!");
} else {
  console.log("Não possui nada.");
}
// console.log(x);

var nome = "10kg" / 10;

if (nome) {
  console.log(nome);
} else {
  console.log(nome);
  console.log("Nome não existe.");
}

if (!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log("Não possui graduação");
}

10 > 5;
true;
10 > 10;
false;
10 <= 10;
true;
10 >= 11;
false;

var x = "Gato";

console.log(x === "Gato");

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log(condicional);
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

var corFavorita = "Verde";
switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu!");
    break;
  case "Amarelo":
    console.log("Olhe para o Sol");
    break;
  case "Verde":
    console.log("Olhe para a floresta!");
    break;
  default:
    console.log("Feche os olhos.");
    break;
}
