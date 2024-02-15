document.getElementById('ellipse-calculate').addEventListener('click', function(event) {
    const width = getInputValue('ellipse-width');
    const length = getInputValue('ellipse-length');
    const area = 3.1416*width * length;
    if(!isNaN(area)){
        setInputValue('area-ellipse', area);
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
    createList.innerText= `${lists.length+1}  ${area.toFixed(2)} cm2`;
    resultContainer.appendChild(createList);
}

const ellipseContainer=document.getElementById('ellipse-container');

 document.getElementById('ellipse-container').addEventListener('mouseover', function (){
    ellipseContainer.classList.add('ellipseColor');
 })
 document.getElementById('ellipse-container').addEventListener('mouseout', function (){
    ellipseContainer.classList.remove('ellipseColor');
 })