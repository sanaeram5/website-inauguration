function replace() {
    document.getElementById("inaugrationText").style.display = "none";
    document.getElementById("redirectText").style.display = "block";

    // Run countdown function
    countdown();
}


// Total seconds to wait
var seconds = 6;

function countdown() {
    seconds = seconds - 1;
    if (seconds < 0) {
        // Chnage your redirection link here
        window.location.href = "fireworks.html";


    } else {
        // Update remaining seconds
        document.getElementById("countdown").innerHTML = seconds;
        // Count down using javascript
        window.setTimeout("countdown()", 1000);
    }
}