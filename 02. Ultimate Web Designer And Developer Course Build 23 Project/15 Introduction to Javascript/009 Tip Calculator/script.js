//custom function
function calculateTip() {

    // Store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;

    // Quick Validation
    if (billAmount === "" || serviceQuality === 0) {
        return window.alert("Please enter some values to calculate your Tip!");
    } // This will prevent the function from continuing

    // Check to see if this input is empty or less than or equal to 1
    if (totalPeople === "" || totalPeople <= 1) {
        totalPeople = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Do some math
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function () {
    calculateTip();
};
