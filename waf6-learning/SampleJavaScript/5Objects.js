// comment and uncomment to see differences

var x = {}; //Valid object but no properties. used to assign properties later down the line.

x = {first: 'Mike', last: 'Davies'}; // object literal

x.middle = 'A'; // implicit adding of a new property

x['City State'] = 'San Jose, CA'; //can use any string as property name this way (even with a space)

x.mother = {first: 'Sharon', last: 'Davies'} //properties can be objects

//x = x.mother.first; // how to get to nested attributes

x.children = ['David', 'Jessica']; //propertes can be arrays

x;

// ###


// at times you will want to cycle through the properties:-

var propertyNames = [];
var propertyValues = [];

for (var a in x) // specialised sytax for passing/cycling through properties of an object. this will take us through all the names of the properties.
{
	propertyNames.push(a); // pushing 'a' onto the 'propertyNames' array
	propertyValues.push(x[a]); //pushing 'a' onto the Values of the array
	}
	
propertyNames; // display that array
propertyValues; // dispay the array
