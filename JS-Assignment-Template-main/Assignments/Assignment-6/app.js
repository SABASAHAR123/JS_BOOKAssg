// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// var a = 9;
// var aIncrement = a++;
// document.write("<h1>Results</h1>");

// document.write( "The value of a is " , a);
// document.write("<br>", "Now the value of a++ is " + a++);


// document.write( "<br>", "<br>", "The value of a is " , a);
// var aIncrement = a++;
// document.write("<br>", "Now the value of a++ is " + a++);


// document.write("<br>","<br>", "The value of a is " + a);

// document.write("<br>", "Now the value of a-- is " + a--);

// document.write("<br>","<br>", "The value of a is " + a);
// var aIncrement = a--;
// document.write("<br>", "Now the value of a-- is " + a--);



// Write a program that takes input a name from user &
// greet the user.
// var Username = prompt("Enter your name:");
// document.write("Welome!"+ Username);


// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// Prompt the user to enter a number
// var Tnumber = prompt("Enter a Tnumber:");
// Tnumber = parseInt(Tnumber);

// if (isNaN(Tnumber)) {
//   Tnumber = 5;}

// document.write("<h2>Table of " + Tnumber + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   var result = Tnumber * i;
//   document.write(Tnumber + " x " + i + " = " + result + "<br>");
// }



// ) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

//   a)  Take input from the user for subject names
// var subject1 = prompt("Enter name of subject 1:");
// var subject2 = prompt("Enter name of subject 2:");
// var subject3 = prompt("Enter name of subject 3:");

// // b)  Total marks for each subject
// var totalMarks = 100;

// // c)Take input from the user for obtained marks in each subject
// var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// // d) Calculate total marks and percentage
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// //  e)  Display the result in a table format
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td></tr>");
// document.write("<tr><td colspan='3'><strong>Percentage: " + percentage.toFixed(2) + "%</strong></td></tr>");
// document.write("</table>");



