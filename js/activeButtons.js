const allButton = document.querySelector(".buttons__all");
const htmlButton = document.querySelector(".buttons__html");
const cssButton = document.querySelector(".buttons__css");
const jsButton = document.querySelector(".buttons__js");

const htmlCards = Array.from(document.querySelectorAll(".HTML"));
const cssCards = Array.from(document.querySelectorAll(".CSS"));
const jsCards = Array.from(document.querySelectorAll(".JS"));

function showHtmlCards() {
  showAll();
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
}

function showCssCards() {
  showAll();
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
}

function showJsCards() {
  showAll();
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
}

function showAll() {
  allButton.classList.add("is-active");
  htmlButton.classList.remove("is-active");
  cssButton.classList.remove("is-active");
  jsButton.classList.remove("is-active");
  htmlCards.forEach(function(item){
    item.classList.remove("hide");
  });
  cssCards.forEach(function(item){
    item.classList.remove("hide");
  });
  jsCards.forEach(function(item){
    item.classList.remove("hide");
  });
  showPagedSection();
}
