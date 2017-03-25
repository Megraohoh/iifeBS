var Donations = (function(){		//IIFE

	var donorInfo = [];				// All donor information objects should be stored in a private array in an IIFE


	return {						//Everything in the object is public
		getDonorInfo : function(){
			return donorInfo;
		},
		setDonorObject : function(donorName, donorEmail, donorAmount){
			donorObject = {}
			donorObject["Name"] = donorName;
			donorObject["Email"] = donorEmail;
			donorObject["Amount"] = donorAmount;
			donationInfo.push(donorObject);
			console.log(donationInfo);

		}
		

		
	};

})();

console.log("A Thing: ",Donations.getDonorInfo());



// The donor information should be stored as JS objects that contain their 
// content type as keys and the submitted information as the value. 
// {name: "John Donut", pledge: 70}

// Make sure the donor array cannot be accessed by the other modules except through 
// an accessor (getter) method.

// The IIFE should expose, in its public interface, a method named addDonor that 
// accepts a single argument. That argument's value should be the user information object.