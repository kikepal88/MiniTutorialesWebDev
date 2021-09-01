const allCards = Array.from(document.querySelectorAll(".tutorials__cards"));
const pagedSection = document.querySelector(".main__paged");
const numberOfPages = Array.from(document.querySelectorAll(".number__item"));
let quantityAllCards = allCards.length;
let quantityHtmlCards = htmlCards.length;
let quantityCssCards = cssCards.length;
let quantityJsCards = jsCards.length;

//Está función es para mostrar botones adicionales de las paginas si hay +10 cards
function showAditionalPagesButtons(length) {
  if(length > 10 && length <= 15) {
    numberOfPages[2].classList.remove("hide");
  } else if(length > 15 && length <= 20) {
    numberOfPages[3].classList.remove("hide");
  } else if(length > 20 && length <= 25) {
    numberOfPages[4].classList.remove("hide");
  }
}

//Está función es para activar la sección de paginado con su primer boton por cada tenologia
//Se incluye la anterior función para que se activen los demas botones
function showPagedSectionForTecnology(length) {
  if(length > 5) {
    pagedSection.classList.add("show");
    numberOfPages[1].classList.remove("hide");
    showAditionalPagesButtons(length);
  } else {
    pagedSection.classList.remove("show");
  }
}

//Está función es para ocultar todos los botones de las paginas en tecnologias
//Se incluye la anterior función para que se active la sección de paginado
function hidePagesButtons(length) {
  numberOfPages[1].classList.add("hide");
  numberOfPages[2].classList.add("hide");
  numberOfPages[3].classList.add("hide");
  numberOfPages[4].classList.add("hide");
  showPagedSectionForTecnology(length);
}

function showPagedSection() {
  let classOfAllButton = allButton.getAttribute('class');
  let classOfHtmlButton = htmlButton.getAttribute('class');
  let classOfCssButton = cssButton.getAttribute('class');
  let classOfJsButton = jsButton.getAttribute('class');
  if(classOfAllButton === "buttons__all is-active"){
    showPagedSectionForTecnology(quantityAllCards);
  } else if(classOfHtmlButton === "buttons__html is-active"){
    hidePagesButtons(quantityHtmlCards);
  } else if(classOfCssButton === "buttons__css is-active"){
    hidePagesButtons(quantityCssCards);
  } else if(classOfJsButton === "buttons__js is-active"){
    hidePagesButtons(quantityJsCards);
  }
}

showPagedSection()

function changePages(page) {
  let classOfAllButton = allButton.getAttribute('class');
  let classOfHtmlButton = htmlButton.getAttribute('class');
  let classOfCssButton = cssButton.getAttribute('class');
  let classOfJsButton = jsButton.getAttribute('class');
  if(classOfAllButton === "buttons__all is-active"){
    switch(page) {
      case 0:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        allCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(allCards, 0, 5);
        break;
      case 1:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        allCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(allCards, 5, 10);
        break;
      case 2:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        allCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(allCards, 10, 15);
        break;
      case 3:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        allCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(allCards, 15, 20);
        break;
      case 4:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        allCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(allCards, 20, 25);
        break;
    }
  } else if(classOfHtmlButton === "buttons__html is-active"){
    switch(page) {
      case 0:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        htmlCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(htmlCards, 0, 5);
        break;
      case 1:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        htmlCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(htmlCards, 5, 10);
        break;
      case 2:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        htmlCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(htmlCards, 10, 15);
        break;
      case 3:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        htmlCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(htmlCards, 15, 20);
        break;
      case 4:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        htmlCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(htmlCards, 20, 25);
        break;
    }
  } else if(classOfCssButton === "buttons__css is-active"){
    switch(page) {
      case 0:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        cssCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(cssCards, 0, 5);
        break;
      case 1:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        cssCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(cssCards, 5, 10);
        break;
      case 2:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        cssCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(cssCards, 10, 15);
        break;
      case 3:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        cssCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(cssCards, 15, 20);
        break;
      case 4:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        cssCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(cssCards, 20, 25);
        break;
    }
  } else if(classOfJsButton === "buttons__js is-active"){
    switch(page) {
      case 0:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        jsCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(jsCards, 0, 5);
        break;
      case 1:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        jsCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(jsCards, 5, 10);
        break;
      case 2:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        jsCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(jsCards, 10, 15);
        break;
      case 3:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        jsCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(jsCards, 15, 20);
        break;
      case 4:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        jsCards.forEach(function(item){
          item.classList.add("hide");
        });
        showFiveCards(jsCards, 20, 25);
        break;
    }
  }
};
