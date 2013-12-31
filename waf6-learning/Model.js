
guidedModel =// @startlock
{
	Person :
	{
		address :
		{
			onSet:function(value)
			{// @endlock
				// Add your code here
				var addressParts = value.split(' ');
				var numPart = 0;
				var namePart = '';
				if (addressParts.length > 0)
				{
					numPart = Number(addressParts[0]); // numPart string --> number
					if ((numPart == null) || (numPart.toString() != addressParts[0])) // so was all digits
					{
						numPart = 0;
						namePart = value;
					}
					else
					{
						addressParts.shift(); // shift() method removes the first item of an array, and returns that item.
						namePart = addressParts.join(' '); // joins elements of an array into a string seperated by specified ' ' (or default comma)
					}
				}
				this.streetNumber = numPart;
				this.streetName = namePart;
			},// @startlock
			onGet:function()
			{// @endlock
				// only append if there is a street number !
				if ((this.streetNumber !=null) & (this.streetNumber > 0)) {
					return this.streetNumber + ' ' + this.streetName;
				} else {
					return this.streetName;
				}
				
			}// @startlock
		},
		fullName :
		{
			onQuery:function(compOperator, valueToCompare)
			{// @endlock
				// Add your code here
			},// @startlock
			onSet:function(value)
			{// @endlock
				// above we are provided the 'value' that is being assigned
				var nameParts = value.split(' '); // split into array, at ' '
				if (nameParts.length > 1) // if there are more than 1 piece after split
				{
					this.firstName = nameParts[0];
					nameParts.shift(); // ?
					this.lastName = nameParts.join(' ');
				}
				else
				{
					this.firstName = '';
					this.lastName = value;
				}
			},// @startlock
			onGet:function()
			{// @endlock
				// Add your code here
				return this.firstName + " " + this.lastName;
			}// @startlock
		}
	}
};// @endlock
