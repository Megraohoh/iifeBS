var donateBtn = document.getElementById("donate"); 
var cancelBtn = document.getElementById("cancel");
var donorTable = document.getElementById("tableBody");

function sendToDom(){
	donorInfo = Donations.getDonorInfo();

	var tableString = "";
	for(var i=0; i<donorInfo.length; i++){
		tableString += `<tr>`;
		tableString += `<td></td>`;
		tableString += `<td>${donorInfo[i].inputName}</td>`;
		tableString += `<td>${donorInfo[i].inputEmail}</td>`;
		tableString += `<td>${donorInfo[i].dollarAmount}</td>`;
		tableString += `<td>${donorInfo[i].donationType}</td>`;
		tableString += `</tr>`;

		donorTable.innerHTML += tableString;
	}	

// donateBtn.addEventListener("click", setNewDonorObject);
cancelBtn.addEventListener("click", clear);
}

sendToDom();



function clear() {
    inputName.value = "";
    inputEmail.value = "";
    dollarAmount.value = "";
}


/////////////////////////////////EVENT LISTENERS











