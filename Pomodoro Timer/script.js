const start = document.querySelector('#start');
const stp = document.querySelector('#stop');
const reset = document.querySelector('#reset');

const timer = document.querySelector('#timer')

let minutes = 25;
let seconds = 0;
let timerId;

start.addEventListener('click',() => {
    timerId=setInterval(() => {
      if(seconds === 0){
        seconds = 59;
        if(minutes !== 0){
            minutes--;
        }
      }else{
        seconds--; 
      }
      timer.textContent = `${minutes}:${seconds}`;
    },1000);

});

reset.addEventListener('click',() => {
  minutes = 25;
  seconds = 0;
  timer.innerHTML = `${minutes}:${seconds}`;
});

stp.addEventListener('click',() => {
    clearInterval(timerId);
  });