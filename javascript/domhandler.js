var donateBtn = document.getElementById("donate"); 
var cancelBtn = document.getElementById("cancel");
var donorTable = document.getElementById("tableBody");

var donorName = document.getElementById("inputName");
var donorEmail = document.getElementById("inputEmail");
var donorDollar = document.getElementById("dollarAmount");
var donationType = document.getElementById("donationType");
// var donationTypeLump = document.getElementById("donationTypeLump");
// var donationTypePer = document.getElementById("donationTypePer");


function clear() {
    inputName.value = "";
    inputEmail.value = "";
    dollarAmount.value = "";
}

function sendToDom(){

var donorInput = Donations.getDonorInfo();
console.log(donorInput);

	var tableString = "";
	for(var i=0; i<donorInput.length; i++){
		tableString += `<tr>`;
		tableString += `<td></td>`;
		tableString += `<td>${donorInput[i].inputName}</td>`;
		tableString += `<td>${donorInput[i].inputEmail}</td>`;
		tableString += `<td>${donorInput[i].dollarAmount}</td>`;
		tableString += `<td>${donorInput[i].donationType}</td>`;
		tableString += `</tr>`;

		donorTable.innerHTML = tableString;
	}	

}

sendToDom();

function donateAccept(){
		var newDonor
		newDonor = {}
		newDonor["inputName"] = donorName.value;
		newDonor["inputEmail"] = donorEmail.value; 
		newDonor["dollarAmount"] = donorDollar.value;
		var donationType = donationType;
        for (i=0; i < donationType.length; i++) { 
        	        	console.log("working");

				// here, this if statement is not evaluating 
	        	//because donationType is "undefined". 
	        	//Do some console.log() statements and experiment  
	        	//to try to identify which radio button is being selected.
            if (donationType[i].checked==true) {
            	// newDonor["donationType"] = donationType.getElementsByName("optionsRadios");
            	console.log("hi");
            	// return donationType[i].value;
            }	
        }
        Donations.setNewDonorInfo(newDonor);
        sendToDom();
		clear();
}


cancelBtn.addEventListener("click", clear)
donateBtn.addEventListener("click", donateAccept) 

