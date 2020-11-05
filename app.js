let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds;
let displayMinutes;
let displayHours;
var dom = document.getElementById("displayTime");
function stopWatch(){
    seconds++;
    if(seconds / 60 === 1)  {
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
document.getElementById("startButton").addEventListener("click", () => {
    var hey = window.setInterval(stopWatch, .1);
    document.getElementById("pauseButton").addEventListener("click", () => {
        clearInterval(hey);     
    });
    document.getElementById("resetButton").addEventListener("click", () => {
        minutes = 0;
        seconds = 0;
        hours = 0;
        dom.innerHTML = "00:00:00";
        clearInterval(hey);        
    });
});
