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

// Está función es para activar los estilos del boton de tecnologia que se active
function activeTecnologyButton(activate, deactivate1, deactivate2, deactivate3) {
  activate.classList.add("is-active");
  deactivate1.classList.remove("is-active");
  deactivate2.classList.remove("is-active");
  deactivate3.classList.remove("is-active");
}

function showHtmlCards() {
  showFiveCards(htmlCards, 0, 5);
  activeTecnologyButton(htmlButton, allButton, cssButton, jsButton);
  cssCards.forEach(function(item){
    let aditionalCategory1 = item.getAttribute('data-key');
    let aditionalCategory2 = item.getAttribute('data-key2');
    if(aditionalCategory1 === "CSS") {
      if(aditionalCategory2 === "HMTL") {
      } else {
        item.classList.add("hide");
      }
    }
  });
  jsCards.forEach(function(item){
    let aditionalCategory1 = item.getAttribute('data-key');
    let aditionalCategory2 = item.getAttribute('data-key2');
    if(aditionalCategory1 === "JS") {
      if(aditionalCategory2 === "HTML") {
      } else {
        item.classList.add("hide");
      }
    }
  });
  showPagedSection();
  numberOfPages.forEach(function(item){
    item.classList.remove("actived");
  });
  numberOfPages[0].classList.add("actived");
}

function showCssCards() {
  showFiveCards(cssCards, 0, 5);
  activeTecnologyButton(cssButton, allButton, htmlButton, jsButton);
  htmlCards.forEach(function(item){
    let aditionalCategory1 = item.getAttribute('data-key');
    let aditionalCategory2 = item.getAttribute('data-key2');
    if(aditionalCategory1 === "HTML") {
      if(aditionalCategory2 === "CSS") {
      } else {
        item.classList.add("hide");
      }
    }
  });
  jsCards.forEach(function(item){
    let aditionalCategory1 = item.getAttribute('data-key');
    let aditionalCategory2 = item.getAttribute('data-key2');
    if(aditionalCategory1 === "JS") {
      if(aditionalCategory2 === "CSS") {
      } else {
        item.classList.add("hide");
      }
    }
  });
  showPagedSection();
  numberOfPages.forEach(function(item){
    item.classList.remove("actived");
  });
  numberOfPages[0].classList.add("actived");
}

function showJsCards() {
  showFiveCards(jsCards, 0, 5);
  activeTecnologyButton(jsButton, allButton, cssButton, htmlButton);
  htmlCards.forEach(function(item){
    let aditionalCategory1 = item.getAttribute('data-key');
    let aditionalCategory2 = item.getAttribute('data-key2');
    if(aditionalCategory1 === "HTML") {
      if(aditionalCategory2 === "JS") {
      } else {
        item.classList.add("hide");
      }
    }
  });
  cssCards.forEach(function(item){
    let aditionalCategory1 = item.getAttribute('data-key');
    let aditionalCategory2 = item.getAttribute('data-key2');
    if(aditionalCategory1 === "CSS") {
      if(aditionalCategory2 === "JS") {
      } else {
        item.classList.add("hide");
      }
    }
  });
  showPagedSection();
  numberOfPages.forEach(function(item){
    item.classList.remove("actived");
  });
  numberOfPages[0].classList.add("actived");
}

function showAll() {
  activeTecnologyButton(allButton, htmlButton, cssButton, jsButton);
  allCards.forEach(function(item){
    item.classList.add("hide");
  });
  showFiveCards(allCards, 0, 5);
  showPagedSection();
  numberOfPages.forEach(function(item){
    item.classList.remove("actived");
  });
  numberOfPages[0].classList.add("actived");
}
