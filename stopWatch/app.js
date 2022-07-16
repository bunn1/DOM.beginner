// Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variables for time values


let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


// Variables for set interval and timerstatus

let timerInterval = null;
let timerStatus = "stopped"


// Stop Watch Function

function stopWatch() {

        seconds++;

    if (seconds / 60 === 1) {
        seconds = 0
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0
            hours++;
      
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();  
    }else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();  
    }else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();  
    }else {
        leadingHours = hours;
    }
    let displayTimer = document.getElementById("timer").innerText = 
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;

 }
    
startStopBtn.addEventListener("click", function(){

        if (timerStatus === "stopped") {
            timerInterval = window.setInterval(stopWatch, 1000)
        }
})


// Starts the stopWatch automatic
// window.setInterval(stopWatch, 1000)
