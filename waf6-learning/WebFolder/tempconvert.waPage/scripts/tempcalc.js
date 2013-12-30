/* 
function for temperature conversion
*/
// tempF() function to convert temperature from C to F
var tempF = function (temp) { 
	return (temp * 1.8) + 32;
};
// tempC() function to convert temperature from F to C
var tempC = function (temp) { // note we can use "temp" here again, as any variable stays local within a function!
	return (temp - 32) / 1.8;
};