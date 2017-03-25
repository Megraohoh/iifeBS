var Donations = (function(){		//IIFE

	var donorInfo = [];				// All donor information objects should be stored in a private array in an IIFE


	var donorName = "name";			//These are private
	var donorEmail = "email";
	var donorAmount = "amount";

	return {						//Everything in the object is public
		getName : function(){
			return donorName;
		},
		setName : function(newName){
			name = newName;
		},
		getEmail : function(){
			return donorEmail;
		},
		setEmail : function(newEmail){
			email = newEmail;
		},
		getAmount : function(){
			return donorAmount;
		},
		setAmount : function(newAmount){
			amount = newAmount;
		}

		
	};

})();

console.log("A Thing: ",Donations.getName());



// The donor information should be stored as JS objects that contain their 
// content type as keys and the submitted information as the value. 
// {name: "John Donut", pledge: 70}

// Make sure the donor array cannot be accessed by the other modules except through 
// an accessor (getter) method.

// The IIFE should expose, in its public interface, a method named addDonor that 
// accepts a single argument. That argument's value should be the user information object.