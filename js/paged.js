const allCards = Array.from(document.querySelectorAll(".tutorials__cards"));
console.log(allCards);
const pagedSection = document.querySelector(".main__paged");
const numberOfPages = Array.from(document.querySelectorAll(".number__item"));
console.log(numberOfPages);
let quantityAllCards = allCards.length;
let quantityHtmlCards = htmlCards.length;
let quantityCssCards = cssCards.length;
let quantityJsCards = jsCards.length;

function showPagedSection() {
  let classOfAllButton = allButton.getAttribute('class');
  let classOfHtmlButton = htmlButton.getAttribute('class');
  let classOfCssButton = cssButton.getAttribute('class');
  let classOfJsButton = jsButton.getAttribute('class');
  if(classOfAllButton === "buttons__all is-active"){
    if(quantityAllCards > 5) {
      pagedSection.classList.add("show");
      numberOfPages[1].classList.remove("hide");
      if(quantityAllCards > 10 && quantityAllCards <= 15) {
        numberOfPages[2].classList.remove("hide");
      } else if(quantityAllCards > 15 && quantityAllCards <= 20) {
        numberOfPages[3].classList.remove("hide");
      } else if(quantityAllCards > 20 && quantityAllCards <= 25) {
        numberOfPages[4].classList.remove("hide");
      }
    } else {
      pagedSection.classList.remove("show");
    }
  } else if(classOfHtmlButton === "buttons__html is-active"){
    if(quantityHtmlCards > 5) {
      pagedSection.classList.add("show");
      numberOfPages[1].classList.remove("hide");
      if(quantityHtmlCards > 10 && quantityHtmlCards <= 15) {
        numberOfPages[2].classList.remove("hide");
      } else if(quantityHtmlCards > 15 && quantityHtmlCards <= 20) {
        numberOfPages[3].classList.remove("hide");
      } else if(quantityHtmlCards > 20 && quantityHtmlCards <= 25) {
        numberOfPages[4].classList.remove("hide");
      }
    } else {
      pagedSection.classList.remove("show");
    }
  } else if(classOfCssButton === "buttons__css is-active"){
    if(quantityCssCards > 5) {
      pagedSection.classList.add("show");
      numberOfPages[1].classList.remove("hide");
      if(quantityCssCards > 10 && quantityCssCards <= 15) {
        numberOfPages[2].classList.remove("hide");
      } else if(quantityCssCards > 15 && quantityCssCards <= 20) {
        numberOfPages[3].classList.remove("hide");
      } else if(quantityCssCards > 20 && quantityCssCards <= 25) {
        numberOfPages[4].classList.remove("hide");
      }
    } else {
      pagedSection.classList.remove("show");
    }
  } else if(classOfJsButton === "buttons__js is-active"){
    if(quantityJsCards > 5) {
      pagedSection.classList.add("show");
      numberOfPages[1].classList.remove("hide");
      if(quantityJsCards > 10 && quantityJsCards <= 15) {
        numberOfPages[2].classList.remove("hide");
      } else if(quantityJsCards > 15 && quantityJsCards <= 20) {
        numberOfPages[3].classList.remove("hide");
      } else if(quantityJsCards > 20 && quantityJsCards <= 25) {
        numberOfPages[4].classList.remove("hide");
      }
    } else {
      pagedSection.classList.remove("show");
    }
  }
}

showPagedSection()
