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

//Está función es para cambiar de pagina, estilos de los botones y cambiar los cards
// Se incluye la función de showFiveCards que esta en el archivo de activeButtons
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

//Esta función es para saber que tecnologia y pagina activar dependiendo del boton que se le de click
//Se incluye la anterior función para que se active la pagina correspondiente
function switchPages(tecnology, pageNumber) {
  switch(pageNumber) {
    case 0:
      activePaged(tecnology, pageNumber, 0, 5);
      break;
    case 1:
      activePaged(tecnology, pageNumber, 5, 10);
      break;
    case 2:
      activePaged(tecnology, pageNumber, 10, 15);
      break;
    case 3:
      activePaged(tecnology, pageNumber, 15, 20);
      break;
    case 4:
      activePaged(tecnology, pageNumber, 20, 25);
      break;
  }
}

function changePages(page) {
  let classOfAllButton = allButton.getAttribute('class');
  let classOfHtmlButton = htmlButton.getAttribute('class');
  let classOfCssButton = cssButton.getAttribute('class');
  let classOfJsButton = jsButton.getAttribute('class');
  if(classOfAllButton === "buttons__all is-active"){
    switchPages(allCards, page);
  } else if(classOfHtmlButton === "buttons__html is-active"){
    switchPages(htmlCards, page);
  } else if(classOfCssButton === "buttons__css is-active"){
    switchPages(cssCards, page);
  } else if(classOfJsButton === "buttons__js is-active"){
    switchPages(jsCards, page);
  }
};
