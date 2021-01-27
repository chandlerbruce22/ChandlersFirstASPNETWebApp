
// The following function is the grade calculator

//import { isEmptyObject } from "jquery";


 
$("#submitButton").click( function () {

    // Assign variables to each category for grade calculation
    var assignments = parseInt($("#assignments").val());
    var projects = parseInt($("#projects").val());
    var quizzes = parseInt($("#quizzes").val());
    var exams = parseInt($("#exams").val());
    var intex = parseInt($("#intex").val());

    if ((isNaN(assignments)) || (isNaN(projects)) || (isNaN(quizzes)) || (isNaN(exams)) || (isNaN(intex))) {
        $("#gradeOutput").html("Make sure all fields are filled out!");
        return false;
    }
    else {}

     if ((assignments > 100 || assignments < 0) || (projects > 100 || projects < 0) || (quizzes > 100 || quizzes < 0) || (exams > 100 || exams < 0) || (intex > 100 || intex < 0)) {
        $("#gradeOutput").html("Make sure your numbers are between 0 and 100!");
        return;
     }
    else {}

    assignments = assignments * .5;
    projects = projects * .1;
    quizzes = quizzes * .1;
    exams = exams * .2;
    intex = intex * .1;

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
    $("#gradeOutput").html("You scored " + finalGrade + "% which is an " + letterGrade + "!");

});





// var submit = document.getElementById("submitButton");

/*
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

*/