// This IIFE augments the original one
var Donations = (function(donor) {

  var newDonor = [];   // Private variable 

	  	donor.addDonor = function(newDonorInfo) {
	    	newDonor.push(newDonorInfo);
		}	

  	return donor;				  // Return the new, augmented object with the new method on it

})(Donations || {});
