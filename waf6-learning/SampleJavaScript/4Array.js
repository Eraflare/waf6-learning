var x = []; //Empty but valid array;

x = ['Blue', 'Green', 'Yellow']; //Array literal

x.push('Red'); //Adding an element

//x = x[0]; //Referencing first element starts at 0

//x = x.length //How many elements


 // very often you will want to cycle through all the elements of the array
 // hence a for loop
var y = '';

for (var i = 0; i < x.length; i++) // initial state; what continues the loop; what happens each time it loops i.e. i++ is adding 1  
	{
		y += x[i] + ' '; // each iteration, this is run. += concatenation (i.e. whatever was in y, plus space)
	}
	
	y;
	
//x;

