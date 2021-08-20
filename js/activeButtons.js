const allButton = document.querySelector(".buttons__all");
const htmlButton = document.querySelector(".buttons__html");
const cssButton = document.querySelector(".buttons__css");
const jsButton = document.querySelector(".buttons__js");

const htmlCards = Array.from(document.querySelectorAll(".HTML"));
const cssCards = Array.from(document.querySelectorAll(".CSS"));
const jsCards = Array.from(document.querySelectorAll(".JS"));

function showHtmlCards() {
  for(i = 0; i < 5; i++) {
    htmlCards[i].classList.remove("hide");
  };
  allButton.classList.remove("is-active");
  htmlButton.classList.add("is-active");
  cssButton.classList.remove("is-active");
  jsButton.classList.remove("is-active");
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
  for(i = 0; i < 5; i++) {
    cssCards[i].classList.remove("hide");
  };
  allButton.classList.remove("is-active");
  htmlButton.classList.remove("is-active");
  cssButton.classList.add("is-active");
  jsButton.classList.remove("is-active");
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
  for(i = 0; i < 5; i++) {
    jsCards[i].classList.remove("hide");
  };
  allButton.classList.remove("is-active");
  htmlButton.classList.remove("is-active");
  cssButton.classList.remove("is-active");
  jsButton.classList.add("is-active");
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
  allButton.classList.add("is-active");
  htmlButton.classList.remove("is-active");
  cssButton.classList.remove("is-active");
  jsButton.classList.remove("is-active");
  allCards.forEach(function(item){
    item.classList.add("hide");
  });
  for(i = 0; i < 5; i++) {
    allCards[i].classList.remove("hide");
  };
  showPagedSection();
  numberOfPages.forEach(function(item){
    item.classList.remove("actived");
  });
  numberOfPages[0].classList.add("actived");
}
