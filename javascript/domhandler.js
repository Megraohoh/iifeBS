var donateBtn = document.getElementById("donate"); 
var cancelBtn = document.getElementById("cancel");
var donorTable = document.getElementById("tableBody");

var donorName = document.getElementById("inputName");
var donorEmail = document.getElementById("inputEmail");
var donorDollar = document.getElementById("dollarAmount");
var donationType = document.getElementById("donationType");
var donationTypeLump = document.getElementById("donationTypeLump");
var donationTypePer = document.getElementById("donationTypePer");


function clear() {
    inputName.value = "";
    inputEmail.value = "";
    dollarAmount.value = "";
}

function sendToDom(){
	donorInput = Donations.getDonorInfo();

	var tableString = "";
	for(var i=0; i<donorInput.length; i++){
		tableString += `<tr>`;
		tableString += `<td></td>`;
		tableString += `<td>${donorInput[i].inputName}</td>`;
		tableString += `<td>${donorInput[i].inputEmail}</td>`;
		tableString += `<td>${donorInput[i].dollarAmount}</td>`;
		tableString += `<td>${donorInput[i].donationType}</td>`;
		tableString += `</tr>`;

		donorTable.innerHTML += tableString;
	}	

}

sendToDom();

cancelBtn.addEventListener("click", clear);
// donateBtn.addEventListener("click", function(event) 

function donateAccept(){
		if (event.target.innerText === "Donate") {
			newDonor = {}
			console.log("green");
			newDonor["Name"] = donorName.value;
			newDonor["Email"] = donorEmail.value;
			newDonor["Amount"] = donorDollar.value;
			newDonor["DonationType"] = donationType;
		for (var i=0; i<donationType.length; i++) {
			if (donationTypeLump.checked){
						newDonor.donationTypeLump = donationType.value;
					} else if (donationTypePer.checked){
						newDonor.donationTypePer = donationType.value;
					}
		}
		sendToDom();
		clear();
	}
}


