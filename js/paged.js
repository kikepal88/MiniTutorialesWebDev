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

//Está función es para activar el paginado, estilos de los botones y cambiar los cards
function activePaged(tecnology, numberPage, firstRange, secondRange) {
  numberOfPages.forEach(function(item){
    item.classList.remove("actived");
  });
  numberOfPages[numberPage].classList.add("actived");
  tecnology.forEach(function(item){
    item.classList.add("hide");
  });
  showFiveCards(tecnology, firstRange, secondRange);
}

function changePages(page) {
  let classOfAllButton = allButton.getAttribute('class');
  let classOfHtmlButton = htmlButton.getAttribute('class');
  let classOfCssButton = cssButton.getAttribute('class');
  let classOfJsButton = jsButton.getAttribute('class');
  if(classOfAllButton === "buttons__all is-active"){
    switch(page) {
      case 0:
        activePaged(allCards, page, 0, 5);
        break;
      case 1:
        activePaged(allCards, page, 5, 10);
        break;
      case 2:
        activePaged(allCards, page, 10, 15);
        break;
      case 3:
        activePaged(allCards, page, 15, 20);
        break;
      case 4:
        activePaged(allCards, page, 20, 25);
        break;
    }
  } else if(classOfHtmlButton === "buttons__html is-active"){
    switch(page) {
      case 0:
        activePaged(htmlCards, page, 0, 5);
        break;
      case 1:
        activePaged(htmlCards, page, 5, 10);
        break;
      case 2:
        activePaged(htmlCards, page, 10, 15);
        break;
      case 3:
        activePaged(htmlCards, page, 15, 20);
        break;
      case 4:
        activePaged(htmlCards, page, 20, 25);
        break;
    }
  } else if(classOfCssButton === "buttons__css is-active"){
    switch(page) {
      case 0:
        activePaged(cssCards, page, 0, 5);
        break;
      case 1:
        activePaged(cssCards, page, 5, 10);
        break;
      case 2:
        activePaged(cssCards, page, 10, 15);
        break;
      case 3:
        activePaged(cssCards, page, 15, 20);
        break;
      case 4:
        activePaged(cssCards, page, 20, 25);
        break;
    }
  } else if(classOfJsButton === "buttons__js is-active"){
    switch(page) {
      case 0:
        activePaged(jsCards, page, 0, 5);
        break;
      case 1:
        activePaged(jsCards, page, 5, 10);
        break;
      case 2:
        activePaged(jsCards, page, 10, 15);
        break;
      case 3:
        activePaged(jsCards, page, 15, 20);
        break;
      case 4:
        activePaged(jsCards, page, 20, 25);
        break;
    }
  }
};
