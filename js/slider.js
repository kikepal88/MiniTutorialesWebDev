const slider = Array.from(document.getElementsByClassName("tutorial__img-container"));
const idSlider = [];
const nextButton = Array.from(document.getElementsByClassName("button__next"));
const idNextButtton = [];
let margin = 0;
let counter = 0;
const changeMargin = 100 

function getIdSlider() {
  slider.forEach(function(item){
    let id = item.getAttribute("id");
    idSlider.push(id);
  })
}
getIdSlider();


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
  console.log(`El contador es ${counter}`);
  console.log(buttonNextGetClick);
  console.log(sliderGetClick);
  console.log(imagesOnSlider);
  console.log(`La cantidad de images es ${lengthImagesArray}`);
  function addMargin(){
    sliderGetClick.style.marginInlineStart = `${margin - changeMargin}%`;
    counter++;
    margin = margin - changeMargin;
    return margin, counter;
  }
  const sliderActive = function() {
    if(lengthImagesArray === lengthImagesArray){
      if(counter < lengthImagesArray - 2){
        addMargin();
      } else if(counter <= lengthImagesArray - 1) {
        addMargin();
        buttonNextGetClick.style.display = "none";
      }
    }
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
