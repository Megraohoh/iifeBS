var Donations = (function(){		//IIFE

var donorName = document.getElementById("inputName");
var donorEmail = document.getElementById("inputEmail");
var donorDollar = document.getElementById("dollarAmount");
var donationType = document.getElementById("donationType");
var donationTypeLump = document.getElementById("donationTypeLump");
var donationTypePer = document.getElementById("donationTypePer");

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
		// setDonorObject : function(donorName, donorEmail, donorAmount){
		// 	donorObject = {}
		// 	donorObject["Name"] = donorName;
		// 	donorObject["Email"] = donorEmail;
		// 	donorObject["Amount"] = donorAmount;
		// 	donorObject["DonationType"] = donationType;
		// },
		setNewDonorObject : function(newDonor){
			newDonorInfo.push(newDonor);
		},
		getNewDonorInfo : function(){  
			var newDonorInfo = {};
			donorName.inputName = donorName.value;
			donorEmail.inputEmail = donorEmail.value;
			donorDollar.dollarAmount = donorDollar.value;
				if (donationTypeLump.checked){
					newDonor.donationTypeLump = donationType.value;
				} else if (donationTypePer.checked){
					newDonor.donationTypePer = donationType.value;
				};

			donorTable.setNewDonorObject(newDonor);	
			
		}
	}

})();

