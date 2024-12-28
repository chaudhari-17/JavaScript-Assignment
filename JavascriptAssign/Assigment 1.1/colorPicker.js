let btn1El = document.getElementById("btn1");
let btn2El = document.getElementById("btn2");
let btn3El = document.getElementById("btn3");
let btn4El = document.getElementById("btn4");
let spanEl = document.getElementById("span")
let mainBodyEl = document.getElementById("mainBody")

btn1El.addEventListener("click",(e)=>{
    mainBodyEl.style.backgroundColor="#e0e0e0";
    spanEl.innerText = "#e0e0e0";
})

btn2El.addEventListener("click",(e)=>{
    mainBodyEl.style.backgroundColor="#6fcf97";
    spanEl.innerText ="#6fcf97"
})

btn3El.addEventListener("click",(e)=>{
  mainBodyEl.style.backgroundColor="#56ccf2";
  spanEl.innerText ="#56ccf2";
})

btn4El.addEventListener("click",(e)=>{
    mainBodyEl.style.backgroundColor="#bb6bd9";
    spanEl.innerText="#bb6bd9";

})

