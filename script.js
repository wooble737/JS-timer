const miliseconds = document.getElementById("timerVarMil");


const minutes = document.getElementById("timerVarSec");

const seconds = document.getElementById("timerVarMin");

let startBut = document.querySelector("#start")
let stopBut = document.querySelector("#stop")
let resetBut = document.querySelector("#reset")
let miliSecondsId;
let minutesId;



startBut.addEventListener('click', function() {
   minutesId = setInterval(function(){
      minutes.textContent ++;
      if (seconds.textContent != 60)
      {
         seconds.textContent = 0;
      }
      },6000)
   miliSecondsId = setInterval(function(){
    if (miliseconds.textContent != 100)
   {
    miliseconds.textContent = +miliseconds.textContent + 1;
   } else
   {
     miliseconds.textContent = 0;
     seconds.textContent ++;
     if (seconds.textContent = 5)
     {
        seconds.textContent = 0;
        minutes.textContent ++;
     }
   }
   },1)
   startBut.disabled = true;
});

stopBut.addEventListener('click', function() {
   clearInterval(miliSecondsId);
   clearInterval(minutesId)
   startBut.disabled = false;
});

resetBut.addEventListener('click', function (){
   miliseconds.textContent = 0;
   seconds.textContent = 0;
   minutes.textContent = 0;
})




// const timeoutId = setTimeout (() => {
//     for (i in timeoutId){
//         timerVar === i;
//     }
// }, 3000);