var clockelement = document.getElementById("clock");

function binaryDisplay(timedata) {
    var timers =["mil", "sec", "min", "hour"];
    var timercounter = -1;
    timers.forEach(function(timer) {
        timercounter++;
        var current = ("000000" + timedata[timer].toString(2)).slice(-6).split("");
        var counter = 7;
        current.forEach(function(currentNum) {
            counter--;
            if (currentNum == 1) {
                document.getElementById(timer + counter).classList.remove("off");
                document.getElementById(timer + counter).classList.add("on");
            } else {
                document.getElementById(timer + counter).classList.add("off");
                document.getElementById(timer + counter).classList.remove("on");
            }
        });
    });
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function hourConversion(num) {
    if (num == 0) {
        return 12;
    } else if (num > 12) {
        return num - 12;
    } else {
        return num;
    }
}

function runclock() {
    var time = new Date();
    var timedata = {
        mil: Math.trunc(time.getMilliseconds()/100),
        sec: time.getSeconds(),
        min: time.getMinutes(),
        hour: time.getHours(),
        ampm: ""
    };
    
    binaryDisplay(timedata);
    
    if (timedata.hour > 11) {
        timedata.ampm = "pm";
    } else {
        timedata.ampm = "am";
    }
    
    clockelement.innerHTML = FormatNumberLength(hourConversion(timedata.hour), 2) + ":" + 
        FormatNumberLength(timedata.min, 2) + ":" + 
        FormatNumberLength(timedata.sec, 2) + ":" + 
        timedata.mil + " " + 
        timedata.ampm;
}

function init() {
    window.setInterval(runclock, 50);
}

init();
