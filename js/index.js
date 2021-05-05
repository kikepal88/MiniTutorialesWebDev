const allButton = document.querySelector(".buttons__all");
const htmlButton = document.querySelector(".buttons__html");
const cssButton = document.querySelector(".buttons__css");
const jsButton = document.querySelector(".buttons__js");

const htmlCards = Array.from(document.querySelectorAll(".HTML"));
const cssCards = Array.from(document.querySelectorAll(".CSS"));
const jsCards = Array.from(document.querySelectorAll(".JS"));

const idSlider = [];
console.log(idSlider);
const slider = Array.from(document.getElementsByClassName("tutorial__img-container"));
console.log(slider);

function getIdSlider() {
  slider.forEach(function(item){
    let id = item.getAttribute("id");
    idSlider.push(id);
  })
}
getIdSlider();

const idNextButtton = [];
console.log(idNextButtton);
const nextButton = Array.from(document.getElementsByClassName("button__next"));
console.log(nextButton);

function getIdNextButton() {
  nextButton.forEach(function(item){
    let id = item.getAttribute("id");
    idNextButtton.push(id);
  })
}
getIdNextButton();

// const indicatorContainer = Array.from(document.getElementsByClassName("tutorial__indicator-container"));
// console.log(indicatorContainer);
// const indicatorMark = indicatorContainer.forEach(function(item){
//   let marks = item.getElementsByClassName("indicator__mark");
//   console.log(marks);
// });
// const backButton = Array.from(document.getElementsByClassName("button__back"));
// console.log(backButton);

let margin = 0;
let changeMargin = 100 

function Next(index) {
  let sliderGetClick = document.getElementById(`${idSlider[index]}`);
  function sliderActive() {
      sliderGetClick.style.marginInlineStart = `${margin - changeMargin}%`;
      margin = margin - changeMargin;
      return margin;
  }
  switch(margin) {
    case 0:
    case -100:
    case -200:
    case -300:
    case -400:
    case -500:
    case -600:
    case -700:
    case -800:
    case -900:
      sliderActive();
  }
}


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
}


function showMobileMenu () {
  document.getElementById('header__icon-menu').classList.toggle('icon-close');
  document.getElementById('header__nav').classList.toggle('is-active');
  document.getElementById('header__section').classList.toggle('menu__is-active');
}