let numberFirstEl = document.getElementById("numberFirst");
let numberSecondEl = document.getElementById("numberSecond");
let inputnumEl = document.getElementById("inputnum");
let buttonCheckEl = document.getElementById("buttonCheck");
let buttonRestart = document.getElementById("buttonRestart");
let divErrorEl = document.getElementById("divError");
let alertShow = document.getElementById("alertShow");

let randomNumber1 = Math.ceil(Math.random()*100);
let randomNumber2 = Math.ceil(Math.random()*100);

numberFirstEl.textContent = randomNumber1;
numberSecondEl.textContent = randomNumber2;

let randomNumber3 = Math.ceil(Math.random()*100);
let randomNumber4 = Math.ceil(Math.random()*100);

function onClickCheck(){
    let total = randomNumber1 + randomNumber2;
    let total1 = randomNumber3 + randomNumber4;
    let numInput = parseInt(inputnumEl.value);
    if(numInput === total){

        alertShow.innerText = "Congratulations! You got it Right";
        divErrorEl.style.backgroundColor = "green"
    }
    else if(numInput === total1){
        
        alertShow.innerText = "Congratulations! You got it Right";
        divErrorEl.style.backgroundColor ="green"
    }
    else{

        alertShow.innerText = " Please Try Again!";
        divErrorEl.style.backgroundColor = "red"
    }
};
function onClickRestart(){

    numberFirstEl.textContent = randomNumber3;
    numberSecondEl.textContent = randomNumber4;

    inputnumEl.value = "";
    alertShow.innerText = "";
};

buttonCheckEl.addEventListener("click",onClickCheck);
buttonRestart.addEventListener("click",onClickRestart);
