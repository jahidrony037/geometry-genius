document.getElementById('triangle-calculate').addEventListener('click', function(e){
    const baseValue = document.getElementById('base').value;
    const heightValue = document.getElementById('height').value;
    const area = 0.5 * parseFloat(baseValue) * parseFloat(heightValue);
    console.log(area.toFixed(2));
    if(!isNaN(area)){
        
        document.getElementById('area').innerText=area.toFixed(2);
        let lists = document.querySelectorAll('li');
        const resultContainer = document.getElementById('calculation-result-container');
    const createList = document.createElement('li');
    createList.innerText= `${lists.length+1}  ${area.toFixed(2)} cm2`;
    resultContainer.appendChild(createList);
   
    }
    

    
     
})

const triangleContainer = document.getElementById('triangle-container');


triangleContainer.addEventListener('mouseover', function(){
    triangleContainer.classList.add("triangleColor");
})
triangleContainer.addEventListener('mouseout',function(){
    triangleContainer.classList.remove("triangleColor");
})

