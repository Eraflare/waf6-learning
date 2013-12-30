
guidedModel =// @startlock
{
	Person :
	{
		address :
		{
			onGet:function()
			{// @endlock
				// Add your code here
				return this.streetNumber + this.streetName;
			}// @startlock
		},
		fullName :
		{
			onSet:function(value)
			{// @endlock
				// Add your code here
				var names = value.split(' ');
				this.firstName = names[0];
				this.lastName = names[1];
			},// @startlock
			onGet:function()
			{// @endlock
				// Add your code here
				return this.firstName + " " + this.lastName;
			}// @startlock
		}
	}
};// @endlock
