var carro = 'Fusca';
function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}
mostrarCarro();

//uma variável declarada com var, vai vazar do escopo do bloco, se for declarada com let ou const, não vai vazar
if (true) {
  let mes = 'Agosto';
  console.log(mes);
}

//console.log(mes); //vai apresentar um erro pois a variável está dentro do bloco do if e só é acessível lá dentro

{
  var carro2 = 'Fusca 2';
  const ano = 2018;
}

console.log(carro2);
//console.log(ano); //vai apresentar um erro pois a variável declarada com const não vaza do bloco

// for (let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }
// var i = 50;
// console.log(i * 10);

const semana = 'Sexta';
// semana = 'Quinta';
console.log(semana);

const data = {
  dia: 30,
  mes: 'Julho',
  ano: 2023
};

//É possível modificar os dados dos parâmetros passados dentro de um objeto feito à partir de uma constante, mas não é possível mudar o tipo de dado em si, por exemplo, data é um objeto, se for tentar mudar pra string ou número, o JS vai retornar um erro
// data = 'String';
data.estacao = 'Verão'; //É possível atribuir novos parâmetros também
data.ano = 2025;
console.log(data);

let ano;
ano = 2018;
ano++;
console.log(ano);

// let ano = 2023;
