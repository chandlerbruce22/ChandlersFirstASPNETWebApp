var submit = document.getElementById("submitButton");

// The following function is the grade calculator

submit.addEventListener("click", function () {

    // Assign variables to each category for grade calculation
    var assignments = parseInt(document.getElementById("assignments").value) * .5;
    var projects = parseInt(document.getElementById("projects").value) * .1;
    var quizzes = parseInt(document.getElementById("quizzes").value) * .1;
    var exams = parseInt(document.getElementById("exams").value) * .2;
    var intex = parseInt(document.getElementById("intex").value) * .1;

    // Add up an entire final grade calculation
    var finalGrade = assignments + projects + quizzes + exams + intex;
    var letterGrade = "A";

    // if statement to determine the letter grade

    if (finalGrade >= 94) {
        letterGrade = "A";
    } else if (finalGrade >= 90) {
        letterGrade = "A-";
    } else if (finalGrade >= 87) {
        letterGrade = "B+";
    } else if (finalGrade >= 84) {
        letterGrade = "B";
    } else if (finalGrade >= 80) {
        letterGrade = "B-";
    } else if (finalGrade >= 77) {
        letterGrade = "C+";
    } else if (finalGrade >= 74) {
        letterGrade = "C";
    } else if (finalGrade >= 70) {
        letterGrade = "C-";
    } else if (finalGrade >= 67) {
        letterGrade = "D+";
    } else if (finalGrade >= 64) {
        letterGrade = "D";
    } else if (finalGrade >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }

    // Display the new data to the DOM
    document.getElementById("gradeOutput").innerHTML = ("You scored " + finalGrade + "% which is an " + letterGrade + "!");

});