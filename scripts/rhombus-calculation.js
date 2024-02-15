document.getElementById('rhombus-calculate').addEventListener('click', function() {
    const width = getInputValue('rhombus-width');
    const length = getInputValue('rhombus-length');
    const area = 0.5*width * length;
    if(!isNaN(area)){
        setInputValue('area-rhombus', area);
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
    createList.innerText= `${lists.length+1} } ${area.toFixed(2)} cm2`;
    resultContainer.appendChild(createList);
}

const rhombusContainer=document.getElementById('rhombus-container');

 document.getElementById('rhombus-container').addEventListener('mouseover', function (){
    rhombusContainer.classList.add('rhombusColor');
 })
 document.getElementById('rhombus-container').addEventListener('mouseout', function (){
    rhombusContainer.classList.remove('rhombusColor');
 })