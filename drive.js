// Solution is here
function checkSpeed() {
    let speed = document.getElementById("s").value;
    if (speed <= 70) {
        document.getElementById("result").innerHTML = "Ok.";// will return ok
    } else {
        const demerit = Math.floor((speed - 70) / 5);// numbers above 150 will return the license is suspended.
        if (demerit > 12) {                     //number above 12 will be suspended
            document.getElementById("result").innerHTML = "License is suspended.";
        } else {
            document.getElementById("result").innerHTML = `Points: ${demerit}.`;
        }
    }
}