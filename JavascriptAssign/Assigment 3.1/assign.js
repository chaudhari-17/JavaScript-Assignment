let inpBgColorEl = document.getElementById("inpBgColor");
let inpFontColorEl = document.getElementById("inpFontColor");
let inpFontSizeEl = document.getElementById("inpFontSize");
let inpFontWeightEl = document.getElementById("inpFontWeight");
let inpPaddingEl = document.getElementById("inpPadding");
let inpBorderRadiusEl = document.getElementById("inpBorderRadius");
let btnApplyEl = document.getElementById("btnApply");
let btnCustomEl = document.getElementById("btnCustom");

function onClickApplyButton(){
    btnCustomEl.style.backgroundColor = inpBgColorEl.value;
    btnCustomEl.style.color = inpFontColorEl.value;
    btnCustomEl.style.fontSize = inpFontSizeEl.value;
    btnCustomEl.style.fontWeight = inpFontWeightEl.value;
    btnCustomEl.style.padding = inpPaddingEl.value;
    btnCustomEl.style.borderRadius = inpBorderRadiusEl.value;
}

btnApplyEl.addEventListener("click",onClickApplyButton);