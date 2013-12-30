
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var calcF = {};	// @button
	var calcC = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	calcF.click = function calcF_click (event)// @startlock
	{// @endlock
		var temp = ( $$("iTempF").getValue() - 32 ) * 5 / 9; // "sourceAtt" removes attributes
		var temp = temp.toFixed(2) + ' F';
		$$("oTempF").setValue(temp); // notice the value temp in brackets () ! i.e sets value of [oTemp] to [temp]
		save(); // value is not saved in db until saved. however there is no db here! so unsure?!
	};// @lock

	calcC.click = function calcC_click (event)// @startlock
	{// @endlock
		var temp = $$("iTempC").getValue() * 9 / 5 + 32; // "sourceAtt" removes attributes
		var temp = temp.toFixed(2) + ' F';
		$$("oTempC").setValue(temp); // notice the value temp in brackets () ! i.e sets value of [oTemp] to [temp]
		save(); // value is not saved in db until saved. however there is no db here! so unsure?!
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("calcF", "click", calcF.click, "WAF");
	WAF.addListener("calcC", "click", calcC.click, "WAF");
// @endregion
};// @endlock
