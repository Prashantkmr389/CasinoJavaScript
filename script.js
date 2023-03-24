let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');


let inpspeed = document.getElementById('inpspeed');



let values = [
    '😀', '😎', '😍', '🤑', '😡', '👾', '👽', '🐓'
]

function getRandomValue(){
    return values[Math.floor((Math.random()*8))]
}

setInterval( () =>{
    value1.innerText = getRandomValue()
    value2.innerText = getRandomValue()
    value3.innerText = getRandomValue()
    
}, 500)


let animationId;
function updateAnimationSpeed(newSpeed){
    if(animationId) clearInterval(animationId)
    animationId = setInterval( () =>{
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    }, 1000/newSpeed)
}


inpspeed.onchange = function(event){
    // document.documentElement  this is the root of the css 
    document.documentElement.style.setProperty('--speed', event.target.value)
  console.log(event.target, "value changed")
  updateAnimationSpeed(event.target.value)
}