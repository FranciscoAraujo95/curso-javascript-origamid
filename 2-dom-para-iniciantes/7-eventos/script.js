const img = document.querySelector("img");

function callback(e) {
  // console.log(e);
}

img.addEventListener("click", callback);

// -----

const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.currentTarget); //vai mostrar o elemento que selecionamos na variável
  console.log(event.target); //vai mostrar exatamente o elemento que você clicou em cima
  console.log(event.type);
}

animaisLista.addEventListener("click", callbackLista);

console.log(animaisLista);

// -----

const linkExterno = document.querySelector('a[href^="https"]');

function callbackLink(event) {
  event.preventDefault();
  // console.log(event.currentTarget);
  console.log(this.getAttribute("href"));
}

linkExterno.addEventListener("click", callbackLink);

// -----

const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", handleEvent);
