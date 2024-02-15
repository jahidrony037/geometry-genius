document.getElementById('pentagon-calculate').addEventListener('click', function() {
    const width = getInputValue('pentagon-width');
    const length = getInputValue('pentagon-length');
    const area = 0.5*width * length;
    if(!isNaN(area)){
        setInputValue('area-pentagon', area);
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
    createList.innerText= `${lists.length+1} Pentagon ${area.toFixed(2)} cm2`;
    resultContainer.appendChild(createList);
}

const pentagonContainer=document.getElementById('pentagon-container');

 document.getElementById('pentagon-container').addEventListener('mouseover', function (){
    pentagonContainer.classList.add('pentagonColor');
 })
 document.getElementById('pentagon-container').addEventListener('mouseout', function (){
    pentagonContainer.classList.remove('pentagonColor');
 })