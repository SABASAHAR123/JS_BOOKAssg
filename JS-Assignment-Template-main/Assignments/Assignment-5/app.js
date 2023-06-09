// 3. Do the following using JS Mathematic Expressions
  // a. Declare a variable.
  // b. Show the value of variable in your browser like “Value
  // after variable declaration is: ??”.
  // c. Initialize the variable with some number.
  // d. Show the value of variable in your browser like “Initial
  // value: 5
  // e. Increment the variable.
  // f. Show the value of variable in your browser like “Value
  // after increment is: 6
//   g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

//   var increment = 5
// document.write ("Initial Value = "+ increment)
// increment++
// document.write("<br>Value after increament = "+increment+"<br>")
// document.write("Value after addition" +( increment + 7))

// var decrement = 13
// var decrementedValue = --decrement;
// document.write("Value after decrement is: " + decrementedValue + "<br>");

// var remainder = decrementedValue % 3;
// document.write("The remainder is: " + remainder);




// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie

//  var ticketPrice = 600
//  var numOfTickets= 5
//  var TotalPrice = ticketPrice*numOfTickets
// document.write(" Ticket price = " + ticketPrice +" PKR" , "<br>", " Total Price of 5 Tickets = " ,TotalPrice +" PKR" );




// 5. Write a script to display multiplication table of any
// number in your browser.

// document.write("<table>");

// for ( i = 1; i <= 10; i++) {
//   document.write("<tr>");
//   document.write("<td>" + 4 + " x " + i + "</td>");
//   document.write("<td>=</td>");
//   document.write("<td>" + (4 * i) + "</td>");
//   document.write("</tr>");
// }
// document.write("</table>");


// 6. The Temperature Converter: It’s hot out! let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// var celsius = 32; 
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F");



// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var BiscuitsPrice = 50;
// var SnacksPrice = 100;
// var BiscuitsQuantity = 2;
// var SnacksQuantity = 3;
// var shippingCharges = 10;

// var subtotal = BiscuitsPrice * BiscuitsQuantity + SnacksPrice * SnacksQuantity;
// var totalQuantity = BiscuitsQuantity + SnacksQuantity;
// var totalCost = subtotal + shippingCharges;

// document.write("<h2>Receipt</h2>");
// document.write("<p>Price of Biscuits: $" + BiscuitsPrice + "</p>");
// document.write("<p>Price of Snacks: $" + SnacksPrice + "</p>");
// document.write("<p>Ordered Quantity of Biscuits: " + BiscuitsQuantity + "</p>");
// document.write("<p>Ordered Quantity of Snacks: " + SnacksQuantity + "</p>");
// document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
// document.write("<hr>");
// document.write("<p>Subtotal: $" + subtotal + "</p>");
// document.write("<p>Total Quantity: " + totalQuantity + "</p>");
// document.write("<p>Total Cost: $" + totalCost + "</p>");




// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("<h2>Percentage Calculation</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage + "%</p>");




// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// document.write("<br>","Excahnge rate of USD=104.80PKR", "<br>", "Exchange rate of SAUDI RIYAL = 28PKR", "<br>","  USD:10 ","<br>","SAUDI RIYAL:25","<br>","<br>"
// )
// var excRateUsd = 104.80
// var excRateSdr = 28
// var usd = 10
// var sdr = 25 
// var total =(excRateUsd*usd) + (excRateSdr*sdr)
// document.write("Total currency in PKR: " + total )


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var number = 7;
// var result = ((number + 5) * 10) / 2;

// document.write("Result: " + result);



// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
// var birthYear = 1990;
// var currentYear = new Date().getFullYear();

// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// document.write("","<br>" ," Current Year = "+ currentYear,"<br>", "birth year = "+ birthYear+ "<br>", "They are either " + age1 + " or " + age2 + " years old.")



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// var radius = 20;

// // Calculate the circumference
// var circumference = 2 * Math.PI * radius;

// // Calculate the area
// var area = Math.PI * Math.pow(radius, 2);

// document.write("<br>" ,"The radius of circle =" ,radius)
// document.write("<br>" ,"The circumference is " + circumference);
// document.write("<br>" ,"The area is " + area);



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// Store your favorite snack, current age, maximum age, and estimated amount per day

// var favoriteSnack = "Chocolato";
// var currentAge = 22;
// var maximumAge = 63;
// var amountPerDay = 2;

// // Calculate the total number of snacks needed
// var yearsRemaining = maximumAge - currentAge;
// var daysRemaining = yearsRemaining * 365;
// var totalSnacksNeeded = daysRemaining * amountPerDay;

// document.write("<br>" ,"You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");




