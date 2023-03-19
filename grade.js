function funclick() {
    let gradePoints = document.getElementById("Points").value;
    if (gradePoints > 79) {
        alert("Grade: A");// any number above 78 will return A
    } else if (gradePoints > 59) {
        alert("Grade: B");// any number above 60 will return B
    } else if (gradePoints > 49) {
        alert("Grade: C");// any number above 49 will return C
    } else if (gradePoints > 40) {
        alert("Grade: D");// any number above 40 will return D
    } else {
        alert("Grade: E");// any number below 40 will return E
    }
}