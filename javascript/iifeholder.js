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
		setDonorObject : function(donorName, donorEmail, donorAmount){
			donorObject = {}
			donorObject["Name"] = donorName;
			donorObject["Email"] = donorEmail;
			donorObject["Amount"] = donorAmount;
			donorObject["DonationType"] = donationType;
		}		
	};

})();

