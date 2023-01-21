let timer = null;
let minutes = 30;
let seconds = 0;
let isRunning = false;

const startStopBtn = document.getElementById("start-stop");
const resetBtn = document.getElementById("reset");

startStopBtn.addEventListener("click", function() {
    if (!isRunning) {
        startTimer();
        isRunning = true;
        this.innerHTML = "Stop";
    } else {
        stopTimer();
        this.innerHTML = "Start";
    }
});

resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    timer = setInterval(function() {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        document.getElementById("display").innerHTML = 
            (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    minutes = 25;
    seconds = 0;
    document.getElementById("display").innerHTML = "30:00";
}