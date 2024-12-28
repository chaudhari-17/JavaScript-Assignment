let dogImgEl = document.getElementById("dogImg");
let likeIconEl = document.getElementById("likeIcon");
let btnlikeEl = document.getElementById("btnlike");

let isChange = true;
function onClickButton(){
    if(isChange === true){
        dogImgEl.src = "http://www.midtown-national.com/wp_new/wp-content/uploads/2015/08/Puppy.jpg"
        likeIconEl.style.color ="blue";
        btnlikeEl.style.background ="blue";
        btnlikeEl.style.color = "white";
        isChange = false;
    }
    else{
        dogImgEl.src = "https://tse1.mm.bing.net/th?id=OIP.quUib0-2plXHpNbVU7FMCwHaFG&pid=Api&P=0&h=220";
        likeIconEl.style.color ="gray";
        btnlikeEl.style.backgroundColor="gray";
        btnlikeEl.style.color ="white";
        isChange = true;

    }
}







btnlikeEl.addEventListener("click",onClickButton);