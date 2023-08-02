// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleAtivo(event) {
  event.preventDefault();
  linksInternos.forEach(link => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
  //this.classList.add('ativo') também funcionaria, pois o this faz referência exatamente ao elemento selecionado na constante, no caso, cada link interno exatamente.
}

linksInternos.forEach(links => {
  links.addEventListener('click', handleAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll('body *');

function handleElemento(event) {
  console.log(event.currentTarget);
}

allElements.forEach(item => {
  item.addEventListener('click', handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function removeElemento(event) {
  event.currentTarget.remove();
}

// allElements.forEach(item => {
//   item.addEventListener('click', removeElemento);
// });

// allElements.addEventListener('click', removeTarget);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const allText = document.body.textContent;

function textoGrande(event) {
  if (event.key === 't') {
    //documentElement fala diretamente com o html inteiro da página
    document.documentElement.classList.toggle('texto-maior');
  }
}

window.addEventListener('keydown', textoGrande);

// console.log(allText);
