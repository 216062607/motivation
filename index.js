//API variable 
const adviceUrl = 'https://api.adviceslip.com/advice'


const adviceEl = document.getElementById("advice");

//button to fetch advice 
document.getElementById("getAdvice").addEventListener("click", getAdvice);

//fetch function
function getAdvice(){
    fetch(adviceUrl)
    .then(response => response.json())
    .then(data=>{
      
    const motive = data.slip.advice
        
    //displaying data on html
        adviceEl.innerText = motive
        
    })
}

