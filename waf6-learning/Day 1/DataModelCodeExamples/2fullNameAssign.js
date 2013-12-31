// these are to test out the OnSet code in DataSource, where when a full Name is entered, it will correctly split it, and store it as firstName and lastName seperately

var x = ds.Person.all()[0]; 
x.fullName = 'Dave Terry';

//x.fullName = "Angelillis";
//x.fullName = "Andrea Chelsey Brown";

x;