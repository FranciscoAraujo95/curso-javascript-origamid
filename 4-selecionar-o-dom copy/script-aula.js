const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[2]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

// primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML[0]); //O HTML collection é atualizado ao vivo
console.log(gridSectionNode[0]); //A Nodelist se mantém da forma com a qual foi selecionada

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);

arrayGrid.forEach(function (item) {
  console.log(item);
});
