function addTwoNumbers (first, second) // define a functionthat can be called later
{
	return first + second;
};

addTwoNumbers(1,2); //call the defined function




var multiply = function(first, second) // define a fucntion, assign reference to a vaiable
{
	return first * second;
};

multiply(3,4); //parenthesis runs code

var moreMultiply = multiply; //no parenthesis passes a reference to function 

moreMultiply(5, 6); //now moreMultiply can be used as a fucntion




// combining with objects

var x = {};   // new variable, empty
x.first = 'Dave'; // implicitly declare properties
x.last = 'Terry' // implicitly declare properties
x.fullName = function() // declare another property, that itself is a fn
{
	return this.first + ' ' + this.last; // the keyword 'this' indicates the parent-code that this object is running in. i.e. parent entity, function, class, collection, etc
} 										// 'this' here refers to x

x.fullName(); //parenthesis runs code