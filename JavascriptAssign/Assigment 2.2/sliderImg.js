let alertBoxEl = document.getElementById("alertBox");
let dogImageEl = document.getElementById("dogImage");
let widthPixelEl = document.getElementById("widthPixel");
let buttonDecreaseEl = document.getElementById("buttonDecrease");
let buttonIncreaseEl = document.getElementById("buttonIncrease");

let pixelImage = 200;
function onClickDecrease(){
    if(pixelImage===100){
     
      alertBoxEl.textContent = "Can't Visible. Increase the size of the image."

    }
    else{
        pixelImage = pixelImage - 5;

        dogImageEl.style.width = `${pixelImage}px`;

        dogImageEl.style.height = `${pixelImage}px`;

        widthPixelEl.innerText = ` Width: ${pixelImage}px`;

        alertBoxEl.innerText = '';
    }
};

function onClickIncrease(){
    if(pixelImage===300){

        alertBoxEl.textContent = "Two Big. Decrease the size of the image";

    }
    else{
        pixelImage = pixelImage + 5;

        dogImageEl.style.width = `${pixelImage}px`;

        dogImageEl.style.height = `${pixelImage}px`;

        widthPixelEl.innerText = ` Width: ${pixelImage}px`;

        alertBoxEl.innerText = '';

    }
};

buttonDecreaseEl.addEventListener("click",onClickDecrease);
buttonIncreaseEl.addEventListener("click",onClickIncrease);