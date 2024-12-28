let seasonImageEl = document.getElementById("seasonImage");
let buttonSpringEl = document.getElementById("buttonSpring");
let buttonSummerEl = document.getElementById("buttonSummer");
let buttonAutumnEl = document.getElementById("buttonAutumn");
let buttonWinterEl = document.getElementById("buttonWinter");

function clickSpringBtn(){
    seasonImageEl.src ="http://files.ctctcdn.com/052917db301/fc1350c7-dabb-44d6-ac2e-c79d1ac7ebef.jpg?a=1121133968039"
}

function clickSummerBtn(){
    seasonImageEl.src = "http://media.istockphoto.com/photos/single-oak-tree-at-summer-picture-id464643609?k=6&m=464643609&s=612x612&w=0&h=SRykLzpPxVJCCQi2022UO-SG6srZ6R78ATGWe2nPS9g="
}

function clickAutumnBtn(){
    seasonImageEl.src ="https://images.freeimages.com/images/large-previews/e59/autumn-tree-1408307.jpg"
}

function clickWinterBtn(){
    seasonImageEl.src ="https://jooinn.com/images/tree-at-winter-1.jpg"
}
buttonSpringEl.addEventListener("click",clickSpringBtn);
buttonSummerEl.addEventListener("click",clickSummerBtn);
buttonAutumnEl.addEventListener("click",clickAutumnBtn);
buttonWinterEl.addEventListener("click",clickWinterBtn);

