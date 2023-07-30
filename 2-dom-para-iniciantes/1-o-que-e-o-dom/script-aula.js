// window.alert('ALERTA');

const href = window.location.href;
if (
  href ===
  'http://127.0.0.1:5500/2-dom-para-iniciantes/1-o-que-e-o-dom/index.html'
) {
  console.log('Você está na página correta :D');
} else {
  console.log('Página não encontrada :(');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;
// h1Selecionado.innerHTML = 'Troquei o título garai kkk';
h1Selecionado.addEventListener('click', () => {
  h1Selecionado.innerHTML = 'Cliquei nessa bagaça';
  h1Selecionado.style.fontFamily = 'arial';
  document.body.style.background = 'pink';
});
