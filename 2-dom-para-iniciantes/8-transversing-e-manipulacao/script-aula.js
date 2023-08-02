const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");
console.log(h1.innerHTML);
console.log(h1.outerHTML);

// h1.outerHTML = "<p> Novo Título </p>";
// console.log(animaisLista.innerHTML);

const lista = document.querySelector(".animais-lista");
console.log(lista.children[lista.children.length - 1]);
// console.log(lista.querySelector("li:last-child"));

console.log(lista.previousSibling);

const menu = document.querySelector(".menu");
const link = menu.querySelector("a");
const copy = document.querySelector(".copy");

console.log(link);

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const tituloContato = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

// contato.replaceChild(lista, tituloContato)
// contato.removeChild(tituloContato);
// contato.insertBefore(animais, mapa);
// animais.appendChild(tituloContato);

// console.log(contato)
// console.log(tituloContato)

const novoh1 = document.createElement("h1");

novoh1.innerText = "Novo Título";
novoh1.classList.add("titulo");
novoh1.style.marginTop = "4rem";

mapa.appendChild(novoh1);

// const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add("azul");

faq.appendChild(cloneH1);
