var numero = 20;
var numero2 = 10; // numero = numero + 10
numero += numero2;
console.log(numero);
console.log(numero2);

var idade = 27;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

var possuiFaculdade = false;
//Se for retornar somente uma opção no if, não é necessário abrir parênteses, economizando código
if (possuiFaculdade) console.log("Sim, possui");
else console.log("Não possui");
