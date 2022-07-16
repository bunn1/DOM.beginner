// Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;


// Stop Watch Function

function stopWatch() {

    seconds ++;

    if (seconds / 60 === 1){
        seconds = 0
        minutes ++;
    }
}