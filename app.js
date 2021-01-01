//Set global variables;
let stopwatch_timer = null, 
    storedTime = 0, 
    start = document.getElementById('startButton'), 
    reset = document.getElementById('resetButton'), 
    time = document.getElementById('displayTime');

//Set functions
function incrementTime(time, element) {
    stopwatch_timer = setInterval(() => {
        storedTime = time++;
        element.innerHTML = watchFormat(storedTime);
    },1000)
}

function watchFormat(increment){
    return new Date(1000 * increment).toISOString().substr(11, 8);
}

function clearTime(timer, element){
    clearInterval(timer);
    element.innerHTML = "00:00:00";
}

//When button is click
start.addEventListener('click', () => {
   if(start.innerHTML == 'Start'){
       start.innerHTML = 'Pause';
       incrementTime(storedTime, time)
   } else {
       start.innerHTML = 'Start';
       clearInterval(stopwatch_timer)
   }
});

reset.addEventListener('click', () => {
    if(start.innerHTML == "Pause") start.innerHTML = "Start";
    storedTime = 0;
    clearTime(stopwatch_timer, time)
});