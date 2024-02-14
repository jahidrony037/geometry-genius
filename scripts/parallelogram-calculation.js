document.getElementById('parallelogram-calculate').addEventListener('click', function() {
    const width = getInputValue('parallelo-width');
    const length = getInputValue('parallelo-length');
    const area = width * length;
    if(!isNaN(area)){
        setInputValue('area-parallelo', area);
        setResultInArea('calculation-result-container',area);
    }
    //console.log(area);

 })

function getInputValue(idName){
    const inputText = document.getElementById(idName).value;
    const value = parseFloat(inputText);
   return value;
}

function setInputValue(idName, area){
    const inputAreaText = document.getElementById(idName);
    inputAreaText.innerText = area.toFixed(2);
}

function setResultInArea(idName,area){
    let lists = document.querySelectorAll('li');
    const resultContainer = document.getElementById(idName);
    const createList = document.createElement('li');
    createList.innerText= `${lists.length+1} Parallelogram ${area.toFixed(2)} cm2`;
    resultContainer.appendChild(createList);
}

const parallelogramContainer=document.getElementById('parallelogram-container');

 document.getElementById('parallelogram-container').addEventListener('mouseover', function (){
    parallelogramContainer.classList.add('parallelogramColor');
 })
 document.getElementById('parallelogram-container').addEventListener('mouseout', function (){
    parallelogramContainer.classList.remove('parallelogramColor');
 })