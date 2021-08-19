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
    numberOfPages[1].classList.add("hide");
    numberOfPages[2].classList.add("hide");
    numberOfPages[3].classList.add("hide");
    numberOfPages[4].classList.add("hide");
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
    numberOfPages[1].classList.add("hide");
    numberOfPages[2].classList.add("hide");
    numberOfPages[3].classList.add("hide");
    numberOfPages[4].classList.add("hide");
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
    numberOfPages[1].classList.add("hide");
    numberOfPages[2].classList.add("hide");
    numberOfPages[3].classList.add("hide");
    numberOfPages[4].classList.add("hide");
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

function changePages(page) {
  let classOfAllButton = allButton.getAttribute('class');
  let classOfHtmlButton = htmlButton.getAttribute('class');
  let classOfCssButton = cssButton.getAttribute('class');
  let classOfJsButton = jsButton.getAttribute('class');
  console.log(page);
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
        for(i = 0; i < 5; i++) {
          allCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 1:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        allCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 5; i < 10; i++) {
          allCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 2:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        allCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 10; i < 15; i++) {
          allCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 3:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        allCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 15; i < 20; i++) {
          allCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 4:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        allCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 20; i < 25; i++) {
          allCards[i].classList.remove("hide");
        };
        console.log(page);
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
        for(i = 0; i < 5; i++) {
          htmlCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 1:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        htmlCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 5; i < 10; i++) {
          htmlCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 2:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        htmlCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 10; i < 15; i++) {
          htmlCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 3:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        htmlCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 15; i < 20; i++) {
          htmlCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 4:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        htmlCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 20; i < 25; i++) {
          htmlCards[i].classList.remove("hide");
        };
        console.log(page);
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
        for(i = 0; i < 5; i++) {
          cssCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 1:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        cssCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 5; i < 10; i++) {
          cssCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 2:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        cssCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 10; i < 15; i++) {
          cssCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 3:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        cssCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 15; i < 20; i++) {
          cssCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 4:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        cssCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 20; i < 25; i++) {
          cssCards[i].classList.remove("hide");
        };
        console.log(page);
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
        for(i = 0; i < 5; i++) {
          jsCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 1:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        jsCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 5; i < 10; i++) {
          jsCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 2:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        jsCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 10; i < 15; i++) {
          jsCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 3:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        jsCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 15; i < 20; i++) {
          jsCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
      case 4:
        numberOfPages.forEach(function(item){
          item.classList.remove("actived");
        });
        numberOfPages[page].classList.add("actived");
        jsCards.forEach(function(item){
          item.classList.add("hide");
        });
        for(i = 20; i < 25; i++) {
          jsCards[i].classList.remove("hide");
        };
        console.log(page);
        break;
    }
  }
};
