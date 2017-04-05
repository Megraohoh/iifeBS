var Donations = (function(){		//IIFE


	var donorInfo = [
		// {
		// 	"inputName": "Vicky",
		// 	"inputEmail": "ickyvicky@boogers.net",
		// 	"dollarAmount": "1",
		// 	"donationType": "One Time Donation"
		// }
	];

	return {
		setNewDonorInfo : function(newDonor){
			donorInfo.push(newDonor);
		},						
		getDonorInfo : function(){
			return donorInfo;
		}
		
		

	}

})();

