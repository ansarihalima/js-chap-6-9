///////////////////////Question-1
var value = 10;

document.write("Result <br>");
document.write("The value of a is " + value + "<br>");

document.write("-----------------------------------  <br>"); 

value = ++value; 

document.write("The value of ++a is: " + value + "<br>");
document.write("Now the value of a is: " + value + "<br>");

var oldValue = value++;

document.write("<br> The value of a++ is: " + oldValue + "<br>");
document.write("Now the value of a is: " + value + "<br>");

var a = 11;

document.write("<br> The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

a++; 

document.write("<br> The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");

///////////////////////Question-2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// Step 1: --a;
--a; 
// document.write("After --a: a = " + a + ", b = " + b + ", result = " + result + "<br>");

// Step 2: --a - --b;
--a; 
--b; 
var step2Result = --a - --b;
// document.write("After --a - --b: a = " + a + ", b = " + b + ", result = " + result + "<br>");

// Step 3: --a - --b + ++b;
++b; // Increment b by 1 before using it
var step3Result = --a - --b + ++b;
// document.write("After --a - --b + ++b: a = " + a + ", b = " + b + ", result = " + result + "<br>");

// Step 4: --a - --b + ++b + b--;
var step4Result = --a - --b + ++b + b--;
// document.write("After --a - --b + ++b + b--: a = " + a + ", b = " + b + ", result = " + result + "<br>");

// Final result
var result = step4Result;

// Output the final values

document.write("<br> a is = " + a + "<br> b is = " + b + "<br> result is = " + result + "<br>" );


///////////////////////Question-3
var name = prompt("Please enter your name:");

if (name) {
    document.write("Hello, " + name + "! Welcome to our website.");
} else {

    document.write("Hello there! Welcome to our website.");
}

/////////////////////Question-5

// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var userInput = prompt("Enter a number to display its multiplication table:");

var number = userInput ? parseInt(userInput) : 5;

document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Multiplier</th><th>Result</th></tr>");
for (var i = 1; i <= 10; i++) {
    document.write("<tr><td>" + number + " x " + i + "</td><td>" + (number * i) + "</td></tr>");
}
document.write("</table>");

/////////////////////Question-6
var subject1 = prompt("Enter name of Subject 1:");
var subject2 = prompt("Enter name of Subject 2:");
var subject3 = prompt("Enter name of Subject 3:"); totalMarks = 100;


var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total obtained marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display the result in a formatted table using document.write
document.write("<h2>Result:</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td><strong>" + (3 * totalMarks) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td></tr>");
document.write("<tr><td><strong>Percentage</strong></td><td colspan='2'><strong>" + percentage.toFixed(2) + "%</strong></td></tr>");
document.write("</table>");




