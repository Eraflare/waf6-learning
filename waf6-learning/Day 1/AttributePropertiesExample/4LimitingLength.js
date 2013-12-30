var theNewEnt = new ds.Company();

theNewEnt.name = 'UniqueName' + theNewEnt.ID;
theNewEnt.comments = "Something";

theNewEnt.status = "somthinglongerthan5characterslimit";

 theNewEnt.save();  // truncation only happens at save time, for limited field lengths

theNewEnt; 