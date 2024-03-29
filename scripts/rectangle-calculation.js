 document.getElementById('rectangle-calculate').addEventListener('click', function(event) {
    const width = getInputValue('rect-width');
    const length = getInputValue('rect-length');
    const area = width * length;
    if(!isNaN(area)){
        setInputValue('area-rect', area);
        setResultInArea('calculation-result-container',area);
    }
    //console.log(area);
    event.stopPropagation();

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
    createList.innerText= `${lists.length+1}  ${area.toFixed(2)} cm2`;
    resultContainer.appendChild(createList);
}

const rectangleContainer=document.getElementById('rectangle-container');

 document.getElementById('rectangle-container').addEventListener('mouseover', function (){
    rectangleContainer.classList.add('rectangleColor');
 })
 document.getElementById('rectangle-container').addEventListener('mouseout', function (){
    rectangleContainer.classList.remove('rectangleColor');
 })