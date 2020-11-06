let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let state = "start";
let displaySeconds, displayMinutes, displayHours;
let dom = document.getElementById("displayTime");
let startPause = document.getElementById("startButton");
function stopWatch(){
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }
    if(seconds < 10){
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }
    if(minutes < 10){
        displayMinutes = "0" + minutes;        
    } else {
        displayMinutes = minutes;
    }
    if(hours < 10){
        displayHours = "0" + hours;
    } else {
        displayHours = hours;
    }
    dom.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}
function begin(){
    startPause.innerHTML = "Pause";
    interval = setInterval(stopWatch, 1000);
    state = "pause";
}
function end(){
    startPause.innerHTML = "Start";
    clearInterval(interval);
    state = "start";
}
function beginEnd(){
    if(state === "start"){
        begin();
    } else {
        end();
    }
}
startPause.addEventListener("click", () => {
    beginEnd();
});
document.getElementById("resetButton").addEventListener("click", () => {
    seconds = 0;
    minutes = 0;
    hours = 0;    
    dom.innerHTML = "00:00:00";
    end();
});