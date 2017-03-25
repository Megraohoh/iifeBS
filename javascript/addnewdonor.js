// This IIFE augments the original one
var Donations = (function(donor) {

  // Private variable 
  var newDonor = {"inputName": , "inputEmail": , "dollarAmount": , "donationType": };

  // Augment the original object with another method
  donor.addDonor = function(newDonorInfo) {
    return newDonor[newDonorInfo];
  };

  // Return the new, augmented object with the new method on it
  return donor;
})(Donations);