document.getElementById("startButton").addEventListener("click", start)
document.getElementById("stopButton").addEventListener("click", stop)
document.getElementById("resetButton").addEventListener("click", reset)

let counter;

function start() {
    counter = setInterval(timer, 1000);
    let startButton = document.getElementById("startButton");
    startButton.disabled = true;
}
function stop() {
    clearInterval(counter);
    let startButton = document.getElementById("startButton");
    startButton.disabled = false;
}
function reset() {
    stop();
    document.getElementById("timerNumber").innerHTML = 10;
}
function timer() {
    let timer = document.getElementById("timerNumber").innerHTML;
    timer = parseInt(timer);
    timer--;
    document.getElementById("timerNumber").innerHTML = timer;
    if (timer == 0) {
        stop();
        livesIndicate();
    }
}