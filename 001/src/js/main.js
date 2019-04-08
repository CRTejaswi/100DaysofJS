/* Stopwatch */

let stopwatch;
let H=0;
let M=0;
let S=0;

let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");
let btn_reset = document.getElementById("reset");
let display_time = document.getElementById("stopwatch");

btn_start.addEventListener("click", function(){
    stopwatch = setInterval(StopwatchHandler, 1000);
    btn_reset.disabled = true;
});

btn_stop.addEventListener("click", function(){
    stopwatch = clearInterval(stopwatch);
    btn_reset.disabled = false;
});

btn_reset.addEventListener("click", function(){
    stopwatch = clearInterval(stopwatch);
    btn_reset.disabled = true;
    H=0; M=0; S=0;
    display_time.innerHTML = "00:00:00";
});


function StopwatchHandler(){
    S++;

    if (S == 60){
        S=0;
        M++;
    }
    if (M == 60){
        M=0;
        H++;
    }
    if (H == 24){
        H=0;
    }

    DisplayTime();
}


function DisplayTime(){
    let hour=H;
    let minute=M;
    let second=S;

    if (S < 10)
        second = "0"+S;
    if (M < 10)
        minute = "0"+M;
    if (H < 10)
        hour = "0"+H;

    display_time.innerHTML = hour + ":" + minute + ":" + second;
}