const slider = Array.from(document.getElementsByClassName("tutorial__img-container"));
const idSlider = [];
const marginArray = [];
const marginArray1120 = [];
const marginArray1280 = [];
const marginArray1366 = [];
const marginArray1600 = [];
const marginArray1720 = [];
const counterArray = [];
const nextButton = Array.from(document.getElementsByClassName("button__next"));
const idNextButtton = [];
const backButton = Array.from(document.getElementsByClassName("button__back"));
const idBackButton = [];
const marksContainer = Array.from(document.getElementsByClassName("tutorial__indicator-container"));
const idMarksContainer = [];
const changeMargin768 = 100;
const changeMargin1120 = 360;
const changeMargin1280 = 350;
const changeMargin1366 = 375;
const changeMargin1600 = 395;
const changeMargin1720 = 405;

//Está función es para obtener cada uno de los ID de los DIV contenedores de imagenes de cada Card y empujarlos al array vacio idSlider
function getIdSlider() {
  slider.forEach(function(item){
    let id = item.getAttribute("id");
    idSlider.push(id);
  })
}
getIdSlider();

//Está función es para obtener cada uno de los "margin-inline-start" de los DIV contenedores de imagenes de cada Card y empujarlos a los arrays vacios marginArray y counterArray
function getMarginSlider() {
  slider.forEach(function(item){
    let objectStyles = window.getComputedStyle(item);
    let marginLeft = parseFloat(objectStyles.getPropertyValue("margin-inline-start"));
    marginArray.push(marginLeft);
    marginArray1120.push(marginLeft);
    marginArray1280.push(marginLeft);
    marginArray1366.push(marginLeft);
    marginArray1600.push(marginLeft);
    marginArray1720.push(marginLeft);
    counterArray.push(marginLeft);
  })
}
getMarginSlider();

//Está función es para obtener cada uno de los ID de los NextButton de cada Card y empujarlos al array vacio idNextButtton
function getIdNextButton() {
  nextButton.forEach(function(item){
    let id = item.getAttribute("id");
    idNextButtton.push(id);
  })
}
getIdNextButton();

//Está función es para obtener cada uno de los ID de los BackButton de cada Card y empujarlos al array vacio idBackButton
function getIdBackButton() {
  backButton.forEach(function(item){
    let id = item.getAttribute("id");
    idBackButton.push(id);
  })
}
getIdBackButton();

//Está función es para obtener cada uno de los ID de los DIV contenedores de marksIndicator de cada Card y empujarlos al array vacio idMarksContainer
function getIdMarksContainer() {
  marksContainer.forEach(function(item){
    let id = item.getAttribute("id");
    idMarksContainer.push(id);
  })
}
getIdMarksContainer();

function Slider(index, button) {
  let buttonBackGetClick = document.getElementById(`${idBackButton[index]}`);
  buttonBackGetClick.classList.remove("hide");
  let buttonNextGetClick = document.getElementById(`${idNextButtton[index]}`);
  let sliderGetClick = document.getElementById(`${idSlider[index]}`);
  let imagesOnSlider = Array.from(sliderGetClick.getElementsByClassName("img__container"));
  let lengthImagesArray = imagesOnSlider.length;
  let markContainerOnSlider = document.getElementById(`${idMarksContainer[index]}`);
  let marksOnSlider = Array.from(markContainerOnSlider.getElementsByClassName("indicator__mark"));
  let objectMargin = marginArray[index];
  let objectMargin1120Px = marginArray1120[index];
  let objectMargin1280Px = marginArray1280[index];
  let objectMargin1366Px = marginArray1366[index];
  let objectMargin1600Px = marginArray1600[index];
  let objectMargin1720Px = marginArray1720[index];
  let objectCounter = counterArray[index];
  let markActive = marksOnSlider[objectCounter];
  let nextMarkToActivate = marksOnSlider[objectCounter + 1];
  let backMarkToActivate = marksOnSlider[objectCounter - 1];
  let ElementTarget = button;
  let windowWidth = window.innerWidth;
  console.log(windowWidth);
  console.log(marginArray);
  console.log(counterArray);
  
  //Está función es adicionar la margen al contenedor de imagenes y asi funcione el slider, tambien va sumando al conteo de margen
  function addMargin(initialMargin, changeMargin, unid){
    sliderGetClick.style.marginInlineStart = `${initialMargin - changeMargin}${unid}`;
    counterArray[index] = objectCounter + 1;
    marginArray[index] = objectMargin - changeMargin768;
    marginArray1120[index] = objectMargin1120Px - changeMargin1120;
    marginArray1280[index] = objectMargin1280Px - changeMargin1280;
    marginArray1366[index] = objectMargin1366Px - changeMargin1366;
    marginArray1600[index] = objectMargin1600Px - changeMargin1600;
    marginArray1720[index] = objectMargin1720Px - changeMargin1720;
    markActive.classList.remove("actived")
    nextMarkToActivate.classList.add("actived")
  }

  //Está función es retirar la margen al contenedor de imagenes y asi funcione el slider, tambien va restando al conteo de margen
  function removeMargin(initialMargin, changeMargin, unid){
    sliderGetClick.style.marginInlineStart = `${initialMargin + changeMargin}${unid}`;
    counterArray[index] = objectCounter - 1;
    marginArray[index] = objectMargin + changeMargin768;
    marginArray1120[index] = objectMargin1120Px + changeMargin1120;
    marginArray1280[index] = objectMargin1280Px + changeMargin1280;
    marginArray1366[index] = objectMargin1366Px + changeMargin1366;
    marginArray1600[index] = objectMargin1600Px + changeMargin1600;
    marginArray1720[index] = objectMargin1720Px + changeMargin1720;
    markActive.classList.remove("actived")
    backMarkToActivate.classList.add("actived")
  }

 //Está función es para que se active la funcion de addMargin cuando se da click sobre el boton Next
  const nextSliderActive = function(initialMargin, changeMargin, unid) {
    if(lengthImagesArray === lengthImagesArray){
      if(counterArray[index] < lengthImagesArray - 2){
        addMargin(initialMargin, changeMargin, unid);
      } else if(counterArray[index] <= lengthImagesArray - 1) {
        addMargin(initialMargin, changeMargin, unid);
        buttonNextGetClick.style.display = "none";
      }
    }
  }

 //Está función es para que se active la funcion de removeMargin cuando se da click sobre el boton Back
  const backSliderActive = function(initialMargin, changeMargin, unid) {
    if(lengthImagesArray === lengthImagesArray){
      if(counterArray[index] === 1){
        removeMargin(initialMargin, changeMargin, unid);
        buttonBackGetClick.classList.add("hide");
      } else if(counterArray[index] === lengthImagesArray - 1) {
        removeMargin(initialMargin, changeMargin, unid);
        buttonNextGetClick.style.display = "flex";
      } else if(counterArray[index] > 1) {
        removeMargin(initialMargin, changeMargin, unid);
      }
    }
  }

  //Está es la función de validación de cual boton se esta presionando y activar su función
  function whatButtonValidaton(initialMargin, changeMargin, unid) {
    if(ElementTarget === 'next') {
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
          nextSliderActive(initialMargin, changeMargin, unid);
      }
    } else if(ElementTarget === 'back') {
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
          backSliderActive(initialMargin, changeMargin, unid);
      }
    }
  }

  if(windowWidth < 768) {
    whatButtonValidaton(objectMargin, changeMargin768, "%");
  } else if(windowWidth < 1120) {
      whatButtonValidaton(objectMargin1120Px, changeMargin1120, "px");
  } else if(windowWidth < 1280) {
      whatButtonValidaton(objectMargin1280Px, changeMargin1280, "px");
  } else if(windowWidth < 1366) {
      whatButtonValidaton(objectMargin1366Px, changeMargin1366, "px");
  } else if(windowWidth < 1600) {
      whatButtonValidaton(objectMargin1600Px, changeMargin1600, "px");
  } else {
      whatButtonValidaton(objectMargin1720Px, changeMargin1720, "px");
  }
}
