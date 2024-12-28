let wordsArray = ["Hello","hii","how","what","yourself","beautiful"];
let fontSizesArray = [];

function initializeFontSizes(){
    for(let i = 0; i < wordsArray.length; i++){
        const fontSize = Math.floor(Math.random() * (48 - 12 + 1)) +12;
        fontSizesArray.push(fontSize);
    }
}

function renderWords(){
    const wordCloud = document.getElementById('wordCloud');
    wordCloud.innerHTML = '';

    wordsArray.forEach((word,index) =>{
        const wordElement = document.createElement('span');
        wordElement.classList.add('span');
        wordElement.textContent = word;

        wordElement.style.fontSize = fontSizesArray[index] + 'px';

        wordCloud.appendChild(wordElement);
    })
}

document.getElementById('addWordButton').addEventListener('click', function(){
    const newWord = document.getElementById('newWord').value;
    
    if(newWord.trim() !== ''){
        wordsArray.push(newWord);

        const fontSize = Math.floor(Math.random() * (48-12+1)) + 12;
        fontSizesArray.push(fontSize);

        renderWords();

        document.getElementById('newWord').value = '';
    }
})
initializeFontSizes();
renderWords();

