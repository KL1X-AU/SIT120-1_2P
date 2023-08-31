//Function Method
function liveClock() {
    var x = setInterval(function () {
        var now = new Date();
        var ampm;
        // 1 Method
        var hours = now.getHours()
        if (hours < 12) {
            ampm = "am";
        }
        else {
            ampm = "pm";
        }
        if (hours > 12) {
            hours -= 12;
        }
        // 2 Method
        var minutes = now.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // 3 Method
        var seconds = now.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        // 4-6 Method
        var day = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        document.getElementById("script4_date1").innerHTML = 
        hours + ":" + minutes + ":" + seconds + ampm;
        document.getElementById("script4_date2").innerHTML = 
        day + "/" + month + "/" + year;
    }, 1000);
}

liveClock();