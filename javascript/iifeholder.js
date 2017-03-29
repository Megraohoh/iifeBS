var Donations = (function(){		//IIFE


	var donorInfo = [
		{
			"inputName": "Vicky",
			"inputEmail": "ickyvicky@boogers.net",
			"dollarAmount": "1",
			"donationType": "One Time Donation"
		}
	];

	return {						
		getDonorInfo : function(){
			return donorInfo;
		},
		
		setNewDonorObject : function(newDonor){
			donorInfo.push(newDonor);
			console.log("donorInfo", donorInfo);
		},

	}

})();

