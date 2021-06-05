const allCards = Array.from(document.querySelectorAll(".tutorials__cards"));
const pagedSection = document.querySelector(".main__paged");
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
    if(quantityAllCards >= 5) {
      pagedSection.classList.add("show");
    } else {
      pagedSection.classList.remove("show");
    }
  } else if(classOfHtmlButton === "buttons__html is-active"){
    if(quantityHtmlCards >= 5) {
      pagedSection.classList.add("show");
    } else {
      pagedSection.classList.remove("show");
    }
  } else if(classOfCssButton === "buttons__css is-active"){
    if(quantityCssCards >= 5) {
      pagedSection.classList.add("show");
    } else {
      pagedSection.classList.remove("show");
    }
  } else if(classOfJsButton === "buttons__js is-active"){
    if(quantityJsCards >= 5) {
      pagedSection.classList.add("show");
    } else {
      pagedSection.classList.remove("show");
    }
  }
}

showPagedSection()
