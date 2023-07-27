function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); //16
console.log(areaQuadrado(5)); //25
console.log(areaQuadrado(2)); //4

function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / altura ** 2;
  return imc;
}
console.log(imc(80, 1.7).toFixed(2));

function corFavorita(cor) {
  if (cor === "Azul") {
    return "Eu escolhi o Squirtle!";
  } else if (cor === "Verde") {
    return "Eu escolhi o Bulbassauro!";
  } else if (cor === "Laranja") {
    return "Eu escolhi o Charmander!";
  } else {
    return "Talvez eu escolha o Pikachu!";
  }
}
console.log(corFavorita("Verde"));

// addEventListener("click", function () {
//   console.log("Oi");
// });

function imc2(peso, altura) {
  var imc = peso / altura ** 2;
  console.log(imc.toFixed(2));
}

imc2(20, 1.7); //undefined

console.log(imc2(1000, 1.8)); //retorna o imc e undefined

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return "Você é idoso.";
  } else {
    return "Ainda dá um caldo.";
  }
}

console.log(terceiraIdade(55));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países.`;
}
console.log(faltaVisitar(30));

var profissao = "Desenvolvedor";
function dados() {
  var nome = "Francisco";
  var idade = 26;
  function outrosDados() {
    var endereco = "Fortaleza";
    var idade = 27;
    return `${nome}, ${idade}, ${endereco}, ${profissao}.`;
  }
  return outrosDados();
}
console.log(dados());
