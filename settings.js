document.getElementById("saveBtn").addEventListener("click", function () {

    const mobile = document.getElementById("mobile").value;
    const altMobile = document.getElementById("altMobile").value;
    const ifsc = document.getElementById("ifsc").value;

    if (mobile.length !== 10) {
        alert("Enter a valid Mobile Number.");
        return;
    }

    if (altMobile.length !== 10) {
        alert("Enter a valid Alternate Mobile Number.");
        return;
    }

    if (ifsc.length !== 11) {
        alert("Enter a valid IFSC Code.");
        return;
    }

    alert("Settings saved successfully.");

    // Future backend/API call can be added here.
});