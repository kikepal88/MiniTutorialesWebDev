// const TutorialSlider = document.querySelector("#tutorial__slider");
// let imgTutorials = document.querySelectorAll(".img__container");
// let imgTutorialsLast = imgTutorials[imgTutorials.length - 1];

// const buttonBack = document.querySelector("button__back");
// const buttonNext = document.querySelector("button__next");

// TutorialSlider.insertAdjacentElement('afterbegin', imgTutorialsLast);

// function Next() {
//   let imgTutorialsFirst = document.querySelectorAll(".img__container")[0];
//   TutorialSlider.style.marginInlineStart = "-200%";
//   TutorialSlider.style.transition = "all 0.5s";
//   setTimeout(function(){
//     TutorialSlider.style.transition = "none";
//     TutorialSlider.insertAdjacentElement('beforeend', imgTutorialsFirst);
//     TutorialSlider.style.marginInlineStart = "-100%";
//   }, 500);
// }

// function Back() {
//   let imgTutorials = document.querySelectorAll(".img__container");
//   let imgTutorialsLast = imgTutorials[imgTutorials.length - 1];
//   TutorialSlider.style.marginInlineStart = "0";
//   TutorialSlider.style.transition = "all 0.5s";
//   setTimeout(function(){
//     TutorialSlider.style.transition = "none";
//     TutorialSlider.insertAdjacentElement('afterbegin', imgTutorialsLast);
//     TutorialSlider.style.marginInlineStart = "-100%";
//   }, 500);
// }

const allButton = document.querySelector(".buttons__all");
const htmlButton = document.querySelector(".buttons__html");
const cssButton = document.querySelector(".buttons__css");
const jsButton = document.querySelector(".buttons__js");

const htmlCards = Array.from(document.querySelectorAll(".HTML"));
const cssCards = Array.from(document.querySelectorAll(".CSS"));
const jsCards = Array.from(document.querySelectorAll(".JS"));

const slider = Array.from(document.getElementsByClassName("tutorial__img-container"));
console.log(slider);
const indicatorContainer = Array.from(document.getElementsByClassName("tutorial__indicator-container"));
console.log(indicatorContainer);
const indicatorMark = indicatorContainer.forEach(function(item){
  let marks = item.getElementsByClassName("indicator__mark");
  console.log(marks);
});
const backButton = Array.from(document.getElementsByClassName("button__back"));
console.log(backButton);
const nextButton = Array.from(document.getElementsByClassName("button__next"));
console.log(nextButton);

function Next() {
  slider.forEach(function(item){
    item.addEventListener("click", function() {
      var margin = "0";
      let changeMargin = "-100%" 
      function nextMargin(mar, changeMar) {
        item.style.marginInlineStart = `calc(${mar} + ${changeMar})`;
        margin = margin + changeMargin;
      }
      nextMargin(margin, changeMargin);
    })
  })
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