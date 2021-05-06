const slider = Array.from(document.getElementsByClassName("tutorial__img-container"));
const idSlider = [];
const marginArray = [];
const counterArray = [];
const nextButton = Array.from(document.getElementsByClassName("button__next"));
const idNextButtton = [];
let counter = 0;
const changeMargin = 100 

function getIdSlider() {
  slider.forEach(function(item){
    let id = item.getAttribute("id");
    idSlider.push(id);
  })
}
getIdSlider();

function getMarginSlider() {
  slider.forEach(function(item){
    let objectStyles = window.getComputedStyle(item);
    let marginLeft = parseFloat(objectStyles.getPropertyValue("margin-inline-start"));
    marginArray.push(marginLeft);
    counterArray.push(marginLeft);
  })
}
getMarginSlider();

function getIdNextButton() {
  nextButton.forEach(function(item){
    let id = item.getAttribute("id");
    idNextButtton.push(id);
  })
}
getIdNextButton();

function Next(index) {
  let buttonNextGetClick = document.getElementById(`${idNextButtton[index]}`);
  let sliderGetClick = document.getElementById(`${idSlider[index]}`);
  let imagesOnSlider = Array.from(sliderGetClick.getElementsByClassName("img__container"));
  let lengthImagesArray = imagesOnSlider.length;
  let objectMargin = marginArray[index];
  let objectCounter = counterArray[index];
  function addMargin(){
    sliderGetClick.style.marginInlineStart = `${objectMargin - changeMargin}%`;
    counterArray[index] = objectCounter + 1;
    marginArray[index] = objectMargin - changeMargin;
  }
  const sliderActive = function() {
    if(lengthImagesArray === lengthImagesArray){
      if(counterArray[index] < lengthImagesArray - 2){
        addMargin();
      } else if(counterArray[index] <= lengthImagesArray - 1) {
        addMargin();
        buttonNextGetClick.style.display = "none";
      }
    }
  }
  switch(marginArray[index]) {
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
