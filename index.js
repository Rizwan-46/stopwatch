
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");

let hours = 00;
let minutes = 00;
let seconds = 00;
let count = 00;

startBtn.addEventListener("click", function () {
    timer = true;
    stopWatch();
})
stopBtn.addEventListener("click", function () {
    timer = false;
})
resetBtn.addEventListener("click", function () {
    timer = false;
    hours =00;
    minutes =00;
    seconds =00;
    count =00;
    document.getElementById('hr').innerHTML = "0";
    document.getElementById('min').innerHTML = "0";
    document.getElementById('sec').innerHTML = "0";
    document.getElementById('count').innerHTML = "0";

})


function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            seconds++;
            count = 0
        }
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }

        let hrString = hours;
        let minsString =  minutes;
        let secString = seconds;
        let countString = count;

        if (hours < 10) {
            hrString = "0"+ hrString
        }
        if (minutes < 10) {
            minsString = "0"+ minsString
        }
        if (seconds < 10) {
            secString = "0"+ secString
        }
        if (count < 10) {
            countString = "0"+ countString
        }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minsString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}