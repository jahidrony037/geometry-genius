const areaContainer = document.getElementById('calculation-result-container');
const calButtons = document.getElementsByClassName('cal-btn'); 


 for(const calBtn of calButtons){

   calBtn.addEventListener('click',function(event){
    const area = event.target.parentNode.parentNode.childNodes[7].childNodes[1].innerText;
    const title = event.target.parentNode.parentNode.childNodes[1].innerText;
    //console.log(title,area);
    //const li = document.createElement('li');
    const p1 = document.createElement('p');
    //const p2 = document.createElement('p');
    p1.innerText=title;
    //p2.innerText=area;
    
    areaContainer.append(p1);

   })
 }

