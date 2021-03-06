const allButton = document.querySelector(".buttons__all");
const htmlButton = document.querySelector(".buttons__html");
const cssButton = document.querySelector(".buttons__css");
const jsButton = document.querySelector(".buttons__js");

const htmlCards = Array.from(document.querySelectorAll(".HTML"));
const cssCards = Array.from(document.querySelectorAll(".CSS"));
const jsCards = Array.from(document.querySelectorAll(".JS"));

// Está función es para mostrar solo 5 cards de cada tecnologia
function showFiveCards(tecnology, firstCard, lastCard) {
  for(i = firstCard; i < lastCard; i++) {
    tecnology[i].classList.remove("hide");
  };
}

// Está función es para activar los estilos del boton de la tecnologia que se active
function activeTecnologyButton(activate, deactivate1, deactivate2, deactivate3) {
  activate.classList.add("is-active");
  deactivate1.classList.remove("is-active");
  deactivate2.classList.remove("is-active");
  deactivate3.classList.remove("is-active");
}

// Está función es para ocultar cards si no tiene segunda tecnologia que coincida
function showIfSecondCatergory(cards, firstCategory, secondCategory) {
  cards.forEach(function(item){
    let aditionalCategory1 = item.getAttribute('data-key');
    let aditionalCategory2 = item.getAttribute('data-key2');
    if(aditionalCategory1 === firstCategory) {
      if(aditionalCategory2 === secondCategory) {
      } else {
        item.classList.add("hide");
      }
    }
  });
}

// Está función para activar el estilo del boton 1 de paginas y apagar los demas
function activeStylesPage1Button() {
  numberOfPages.forEach(function(item){
    item.classList.remove("actived");
  });
  numberOfPages[0].classList.add("actived");
}

function showHtmlCards() {
  showFiveCards(htmlCards, 0, 5);
  activeTecnologyButton(htmlButton, allButton, cssButton, jsButton);
  showIfSecondCatergory(cssCards, "CSS", "HTML")
  showIfSecondCatergory(jsCards, "JS", "HTML")
  showPagedSection();
  activeStylesPage1Button()
}

function showCssCards() {
  showFiveCards(cssCards, 0, 5);
  activeTecnologyButton(cssButton, allButton, htmlButton, jsButton);
  showIfSecondCatergory(htmlCards, "HTML", "CSS")
  showIfSecondCatergory(jsCards, "JS", "CSS")
  showPagedSection();
  activeStylesPage1Button()
}

function showJsCards() {
  showFiveCards(jsCards, 0, 5);
  activeTecnologyButton(jsButton, allButton, cssButton, htmlButton);
  showIfSecondCatergory(htmlCards, "HTML", "JS")
  showIfSecondCatergory(cssCards, "CSS", "JS")
  showPagedSection();
  activeStylesPage1Button()
}

function showAll() {
  activeTecnologyButton(allButton, htmlButton, cssButton, jsButton);
  allCards.forEach(function(item){
    item.classList.add("hide");
  });
  showFiveCards(allCards, 0, 5);
  showPagedSection();
  activeStylesPage1Button()
}
