// Retorne o url da página atual utilizando o objeto window
const urlPagina = window.location.href;
console.log(`Este é a URL da sua página: ${urlPagina}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelectorAll('.ativo');
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const idiomaSite = window.navigator.language;
console.log(`Seu site está em ${idiomaSite}`);

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(`A largura atual da sua janela é de ${largura} pixels`);
