/* 
Just testing out some programming skills
Makeing a program that converts celcius to fahrenheit
very simplistic
*/
var temp = 99;
// tempF() function to convert temperature from C to F
var tempF = function (temp) { 
	var temp = prompt("Please enter your temperature in Celsius:");
	return (temp * 1.8) + 32;
};
// tempC() function to convert temperature from F to C
var tempC = function (temp) { // note we can use "temp" here again, as any variable stays local within a function!
	var temp = prompt("Please enter your temperature in Fahrenheit:");
	return (temp - 32) / 1.8;
};
// display instructions
console.log("This tiny js converts C to F, and vice versa");
//prompt for C / F conversion
var choice = prompt("If you wish to convert from Celcius to Fahrenheit, type f. If you wish to covert Fahrenheith to Celcius, type c");
// If statement to run correct function
if (choice === "f") {
	console.log("The temperature in Fahrenheit is: " + tempF(temp));
} else {
	console.log("The temperature in Celcius is: " + tempC(temp));
}