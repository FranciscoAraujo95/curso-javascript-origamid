function initTabNav() {
  //Selecionando os elementos
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  //deixa a primeira section sempre ativada pra ter o que visualizar no site
  tabContent[0].classList.add("ativo");
  //esse if verifica se os itens existem no site, se sim, roda o código, se não, não roda
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itenMenu, index) => {
      itenMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();
