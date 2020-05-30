/* JS: Impelemtents the Stopwatch utility. */


/**
 * Defines essential variables & objects.
 *   H         = No. of hours.
 *   M         = No. of minutes.
 *   S         = No. of seconds.
 *   btn_start = Start button.
 *   btn_stop  = Stop button.
 *   btn_reset = Reset button.
 */
let stopwatch;
let H=0;
let M=0;
let S=0;
let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");
let btn_reset = document.getElementById("reset");
let display_time = document.getElementById("stopwatch");


/**
 * Checks for button presses.
 *   Monitors Start, Stop & Reset buttons for key presses.
 */
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

/**
 * Resets hours, minutes & seconds.
 */
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

/**
 * Displays the time elapsed.
 *   Uses an extra set of variables to display 2-digit
 *   variable values at all times (HH:MM:SS).
 */
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