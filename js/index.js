const TutorialSlider = document.querySelector("#tutorial__slider");
let imgTutorials = document.querySelectorAll(".img__container");
let imgTutorialsLast = imgTutorials[imgTutorials.length - 1];

const buttonBack = document.querySelector("button__back");
const buttonNext = document.querySelector("button__next");

TutorialSlider.insertAdjacentElement('afterbegin', imgTutorialsLast);

function Next() {
  let imgTutorialsFirst = document.querySelectorAll(".img__container")[0];
  TutorialSlider.style.marginInlineStart = "-200%";
  TutorialSlider.style.transition = "all 0.5s";
  setTimeout(function(){
    TutorialSlider.style.transition = "none";
    TutorialSlider.insertAdjacentElement('beforeend', imgTutorialsFirst);
    TutorialSlider.style.marginInlineStart = "-100%";
  }, 500);
}

function Back() {
  let imgTutorials = document.querySelectorAll(".img__container");
  let imgTutorialsLast = imgTutorials[imgTutorials.length - 1];
  TutorialSlider.style.marginInlineStart = "0";
  TutorialSlider.style.transition = "all 0.5s";
  setTimeout(function(){
    TutorialSlider.style.transition = "none";
    TutorialSlider.insertAdjacentElement('afterbegin', imgTutorialsLast);
    TutorialSlider.style.marginInlineStart = "-100%";
  }, 500);
}

setInterval(function() {
  Next();}, 7000);

function showMobileMenu () {
  document.getElementById('header__icon-menu').classList.toggle('icon-close');
  document.getElementById('header__nav').classList.toggle('is-active');
  document.getElementById('header__section').classList.toggle('menu__is-active');
}