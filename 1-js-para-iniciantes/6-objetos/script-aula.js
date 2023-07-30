var pessoa = {
  nome: "Francisco",
  idade: 27,
  profissao: "Programador",
  possuiFaculdade: false,
};

//As funções dentro de objetos também podem ser escritas retirando o ': function", dessa forma:
// area(lado) {
// return lado * lado;
// }

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados); //4
console.log(quadrado.area(5)); //25
console.log(quadrado.perimetro(5)); //20

console.log(Math.random());
console.table(quadrado);

var menu = {
  width: 800,
  heigt: 50,
  backgroundColor: "84E",
  metadeHeight: function () {
    return this.heigt / 2;
  },
};

console.log(`A metade da altura é ${menu.metadeHeight()}`);

menu.backgroundColor = "#000"; //O background passa a ser esse
menu.color = "Green"; //Adiociona uma nova proprierdade ao objeto menu
menu.esconder = function () {
  console.log("Escondi");
};
var bg = menu.backgroundColor;

console.log(bg);
console.log(menu);
console.log(menu.esconder());
