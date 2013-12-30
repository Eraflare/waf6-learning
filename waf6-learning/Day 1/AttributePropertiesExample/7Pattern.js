
var theNewEnt = new ds.Company();

theNewEnt.name = 'UniqueName' + theNewEnt.ID;
theNewEnt.status = '12345';

theNewEnt.comments = 'Test123*';  // Patter fo comment is ^[A-Za-z0-9]*$  (RegEx Expression)

// pattern determines what can be saved (i.e. only AlphaNumeric Allowed as per RegEx Pattern above)
// also at browser end what is .. 

try {
	theNewEnt.save();
} catch (e) {
	e;
}
