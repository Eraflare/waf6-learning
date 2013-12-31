// these are to test out the OnSet code in DataSource, where even when full address is entered, it will sift through the code and split the address into number and street!

var x = ds.Person.all()[0];
x.address = '123 Brown Street'

//x.address = '3245 West St. John Avenue'

//x.address = "Hwy 54";

// x.address = "";

x;