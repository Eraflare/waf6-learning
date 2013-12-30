
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var buttonCalc = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	buttonCalc.click = function buttonCalc_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("buttonCalc", "click", buttonCalc.click, "WAF");
// @endregion
};// @endlock
