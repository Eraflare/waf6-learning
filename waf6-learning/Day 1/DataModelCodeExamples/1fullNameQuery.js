var x = ds.Person.query('ID < 100');
//x = ds.Person.query('fullname == "John Smith"');
//x = ds.Person.query('fullname == "Burke"');
//x = ds.Person.query('fullname == "Brand*"');
//x = ds.Person.query('fullname >= "Bill Wimmer');
//x = ds.Person.query('fullname == "V* B*"');
//x = ds.Person.query('fullname >= "John Smith" order by fullname');
x.toArray('firstName, lastName, fullName'); // returns results