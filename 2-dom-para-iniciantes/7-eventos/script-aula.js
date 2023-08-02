const img = document.querySelector('img');

function callback(e) {
  // console.log(e);
}

img.addEventListener('click', callback);

// -----

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget); //vai mostrar o elemento que selecionamos na variável
  console.log(event.target); //vai mostrar exatamente o elemento que você clicou em cima
  console.log(event.type);
}

// animaisLista.addEventListener('click', callbackLista);

console.log(animaisLista);

// -----

const linkExterno = document.querySelector('a[href^="https"]');

function callbackLink(event) {
  event.preventDefault();
  // console.log(event.currentTarget);
  console.log(this.getAttribute('href'));
}

linkExterno.addEventListener('click', callbackLink);

// -----

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// // h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

function handleKeyboard(event) {
  if (event.key === 'a') {
    document.body.classList.toggle('azul');
    console.log(event.key);
  } else if (event.key === 'p') {
    const titulos = document.querySelectorAll('.titulo');
    titulos.forEach(item => {
      item.classList.toggle('rosa');
    });
  } else if (event.key === 'd') {
    document.body.classList.toggle('dark-light');
    const animaisLista = document.querySelector('.animais-lista');
    animaisLista.classList.toggle('dark-light');
  }
}
window.addEventListener('keydown', handleKeyboard);

//Modo black
const blackButton = document.querySelector('.black-circle');
function darkModeButton() {
  console.log('clicou');
  document.body.classList.toggle('dark-light');
  blackButton.classList.toggle('ativo');
}
blackButton.addEventListener('click', darkModeButton);

//Modo verde
const tealButton = document.querySelector('.teal-circle');
function tealModeButton() {
  document.body.classList.toggle('teal-light');
}
tealButton.addEventListener('click', tealModeButton);

//Modo rosa
const pinkButton = document.querySelector('.pink-circle');
function pinkModeButton() {
  document.body.classList.toggle('pink-light');
}
pinkButton.addEventListener('click', pinkModeButton);

/////////////////////

const imgs = document.querySelectorAll('img');

function mostrarNoConsole(event) {
  console.log(event.target.getAttribute('src'));
}

//adicionar um eventlistener à todos os itens de uma nodelist utilizando o foreach
imgs.forEach(imagem => {
  imagem.addEventListener('click', mostrarNoConsole);
});
