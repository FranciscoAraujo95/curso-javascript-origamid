// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < anosCampeao.length; i++) {
  console.log(`O Brasil ganhou a copa de ${anosCampeao[i]}`);
}

// anosCampeao.forEach(function (item) {
//   console.log(`O Brasil ganhou a copa de ${item} `);
// });

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (let i = 0; i <= frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
//array[array.length - 1] é uma boa fórmula pra pegar o ultimo item de um array
console.log(ultimaFruta);
