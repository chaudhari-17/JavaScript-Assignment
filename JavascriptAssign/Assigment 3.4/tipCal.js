let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalEl = document.getElementById("total");
let buttonCalculateEl = document.getElementById("buttonCalculate");
let errorShowEl = document.getElementById("errorShow");

function clickOnCalculate(){

    let num1 = parseInt(billAmountEl.value);
    let num2 = parseInt(percentageTipEl.value);
    let percent = num2/100;

    if(billAmountEl.value === "" || percentageTipEl.value === ""){

        errorShowEl.textContent = "Please Enter the valid Inpit!!!"

        buttonCalculateEl.style.border = "white";
        buttonCalculateEl.style.backgroundColor = "red";
        buttonCalculateEl.style.color = "white"

    }
    else{
        tipAmountEl.textContent = num1 * percent;

        totalEl.textContent = num1 + (num1 * percent);

        buttonCalculateEl.style.backgroundColor = "rgb(5,147,5)";

        buttonCalculateEl.style.color = "rgb(190,235,190)";

        buttonCalculateEl.style.border = "rgb(185,236,186)";

        errorShowEl.textContent = "";


    }
}
buttonCalculateEl.addEventListener("click",clickOnCalculate)

