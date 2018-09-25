// Custom Function
function calculateTip(){

	// store the data of input
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var totalPeople = document.getElementById("totalPeople").value;

	// Quick Validation
	if(billAmount === "" || serviceQuality === 0){
		window.alert("Please enter some values to calculate the tip.!");
		return; // This will prevent the Function from continuing.
	}

	// Check to see if this input is empty or less than or equal to
	if(totalPeople === "" || totalPeople <=1){
		totalPeople = 1;

		document.getElementById("each").style.display = "none";
	} else{
		document.getElementById("each").style.display = "block";
	}

	// Calcuting total Tip
	var total = (billAmount * serviceQuality) / totalPeople;
	total = math.round(total * 100) / 100;
	total = total.toFixed(2);

	// Display the Tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}

// Hide the Tip Amount at First
document.getElementById("totalTip").style.display= "none";
document.getElementById("each").style.display = "none";

// Clicking the Button Calls our custom Function
document.getElementById("calculate").onclick = function(){
	calculateTip();
};