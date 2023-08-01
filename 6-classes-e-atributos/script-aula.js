const menu = document.querySelector(".menu");
menu.classList.add("ativo"); //Adiciona a classe ativo
menu.classList.remove("azul"); //Remove a classe azul
menu.classList.toggle("azul"); //Se não tiver a classe, ele coloca, se tiver, ele retira

//contains verifica se o elemento contém determinada classe
if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

//Também dá pra adicionar classes utilizando o .className dessa forma
menu.className += " vermelho";

// console.log(menu.classList);

const animais = document.querySelector(".animais");
console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");

const srcImg = img.getAttribute("src");

img.setAttribute("alt", "É uma raposa");

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);

console.log(srcImg);

// console.log(img.getAttribute("alt"));