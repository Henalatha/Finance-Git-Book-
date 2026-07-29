// ==========================================
// Consultancy List JavaScript
// ==========================================

// New Bike Button

document.getElementById("newBikeBtn").addEventListener("click", function () {

    // Change this filename if your new bike form has a different name
    window.location.href = "new-bike.html";

});


// ==========================================
// Search Bikes
// ==========================================

const searchInput = document.getElementById("searchInput");
const table = document.getElementById("consultancyTable");
const rows = table.querySelectorAll("tbody tr");
const emptyState = document.getElementById("emptyState");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    let visibleRows = 0;

    rows.forEach(function (row) {

        const rowText = row.innerText.toLowerCase();

        if (rowText.includes(value)) {

            row.style.display = "";
            visibleRows++;

        } else {

            row.style.display = "none";

        }

    });

    if (visibleRows === 0) {

        table.style.display = "none";
        emptyState.style.display = "block";

    } else {

        table.style.display = "table";
        emptyState.style.display = "none";

    }

});


// ==========================================
// Table Row Click
// ==========================================

rows.forEach(function (row) {

    row.addEventListener("click", function () {

        const rcNo = row.cells[1].innerText;

        alert("Opening Bike Details : " + rcNo);

        // Uncomment after creating the details page
        // window.location.href = "bike-details.html";

    });

});


// ==========================================
// Home Icon Click
// ==========================================

const homeIcons = document.querySelectorAll(".home-icon");

homeIcons.forEach(function (icon) {

    icon.addEventListener("click", function (event) {

        event.stopPropagation();

        alert("Owner Address");

        // Example:
        // window.location.href = "owner-address.html";

    });

});


// ==========================================
// Empty Table Check
// ==========================================

function checkTable() {

    let count = 0;

    rows.forEach(function (row) {

        if (row.style.display !== "none") {

            count++;

        }

    });

    if (count === 0) {

        table.style.display = "none";
        emptyState.style.display = "block";

    } else {

        table.style.display = "table";
        emptyState.style.display = "none";

    }

}

checkTable();


// ==========================================
// Current Date (Optional)
// ==========================================

const today = new Date();

console.log("Today's Date:", today.toLocaleDateString());


// ==========================================
// Future Enhancements
// ==========================================

// Save bike details to Local Storage
// Load data dynamically from API
// Export Consultancy List to Excel/PDF
// Print Consultancy Report