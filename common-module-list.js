// ===============================
// COMMON MODULE LIST
// ===============================

// New Account Button

document.getElementById("newAccountBtn").addEventListener("click", function () {

    // Change the page name if required
    window.location.href = "new-account.html";

});


// ===============================
// SEARCH
// ===============================

const searchInput = document.getElementById("searchInput");
const table = document.getElementById("moduleTable");
const rows = table.querySelectorAll("tbody tr");
const emptyState = document.getElementById("emptyState");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();
    let visibleRows = 0;

    rows.forEach(function (row) {

        const text = row.innerText.toLowerCase();

        if (text.includes(value)) {

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


// ===============================
// ROW CLICK
// ===============================

rows.forEach(function (row) {

    row.addEventListener("click", function () {

        const accountName = row.cells[1].innerText.trim();

        alert("Opening Account : " + accountName);

        // Uncomment when account details page is created

        // window.location.href = "account-details.html";

    });

});


// ===============================
// HOME ICON CLICK
// ===============================

const homeIcons = document.querySelectorAll(".home-icon");

homeIcons.forEach(function (icon) {

    icon.addEventListener("click", function (event) {

        event.stopPropagation();

        alert("Customer Address");

        // Example:
        // window.location.href = "customer-address.html";

    });

});


// ===============================
// CHANGE MODULE NAME
// ===============================

// Change this value to reuse the page for other modules.

const moduleName = "Handloans";

// Update page title

document.title = moduleName + " | iFinance";

// Update heading

document.getElementById("moduleTitle").textContent = moduleName;

// Update breadcrumb

document.getElementById("moduleBreadcrumb").textContent = moduleName;