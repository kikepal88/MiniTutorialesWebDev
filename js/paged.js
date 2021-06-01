const allCards = Array.from(document.querySelectorAll(".tutorials__cards"));
const pagedSection = document.querySelector(".main__paged");
let quantityAllCards = allCards.length;
let quantityHtmlCards = htmlCards.length;
let quantityCssCards = cssCards.length;
let quantityJsCards = jsCards.length;
const classOfAllButton = allButton.getAttribute('class');
const classOfHtmlButton = htmlButton.getAttribute('class');
const classOfCssButton = cssButton.getAttribute('class');
const classOfJsButton = jsButton.getAttribute('class');

function showPagedSection() {
  if(classOfAllButton === "buttons__all is-active"){
    if(quantityAllCards <= 5) {
      pagedSection.classList.add("hidden");
    }
  }
}

showPagedSection();
