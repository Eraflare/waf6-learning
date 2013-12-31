
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var idName = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	idName.keyup = function idName_keyup (event)// @startlock
	{// @endlock
//		var searchRequest = $$("idName").getValue(); // get value 
//		sources.person.query('fullName = :1 order by fullName', {params: [searchRequest + "*"]});

// Begin - State-of-the-Art-Way!
		var gKeyUpCount, theName;
		if(!gKeyUpCount) {
 		   gKeyUpCount = 0;
		}
		theName = $$('idName').getValue();
 
		if(theName === '') { // User is reseting the list
 		   gKeyUpCount = 0;
  		  ds.Person.allEntities(); // datasource reference
		} else {
		    gKeyUpCount += 1;
		    ds.Person.query('fullName = :1 order by fullName', { // datasource reference
		          params    : [theName + "*"],
             
  		        onSuccess    : function(evt) {
  		        // evt.userData contains the value of gKeyUpCount when query() was called
   		           if(evt.userData === gKeyUpCount) {
    		            sources.person.setEntityCollection( evt.entityCollection ); // datasource reference
     		          }
      		        },
      		       userData : gKeyUpCount     // Retrieved in evt.userData in the callback
      		 });
		}
// End

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("idName", "keyup", idName.keyup, "WAF");
// @endregion
};// @endlock
