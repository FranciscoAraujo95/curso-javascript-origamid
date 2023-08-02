//selecionando as imagens da ul de animais, puxando todas as li's
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
//deixa o primeiro item do content ativo ao carregar a página
tabContent[0].classList.add("ativo");

//Essa função vai fazer um loop por cada item das sections, removendo a classe ativo e adicionando apenas no elemento alvo
function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove("ativo");
  });
  tabContent[index].classList.add("ativo");
}

//Essa função faz um loop por todos os itens do animais-lista, adicionando um evento de click, e ao clique, passando a função de activeTab das sections, já passando o index de cada um, como foi definido no parâmetro "index" da função
tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", () => {
    activeTab(index);
  });
});
