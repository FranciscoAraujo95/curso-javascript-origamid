var nome = "Francisco";
console.log(nome.toUpperCase());

var btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  btn.classList.add("ativo");
  console.log("Botão clicado!");
});
