// ======================================
// iFinance Balance Sheet
// balance-sheet.js
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // Print Button
    const printBtn = document.getElementById("printBtn");

    if (printBtn) {
        printBtn.addEventListener("click", function () {
            window.print();
        });
    }

    // Excel Button
    const excelBtn = document.getElementById("excelBtn");

    if (excelBtn) {
        excelBtn.addEventListener("click", function () {

            alert("Excel export feature will be available after backend integration.");

            // Future Example:
            // exportToExcel();

        });
    }

    // Calculate Totals (Numeric Values Only)
    calculateTotals();

});

// ======================================
// Calculate Table Totals
// ======================================

function calculateTotals() {

    const tables = document.querySelectorAll(".table-box table");

    tables.forEach(function (table) {

        let total = 0;

        const rows = table.querySelectorAll("tr");

        rows.forEach(function (row) {

            const cells = row.querySelectorAll("td");

            if (cells.length === 2) {

                let value = cells[1].innerText
                    .replace(/,/g, "")
                    .replace(/[A-Za-z]/g, "")
                    .trim();

                if (!isNaN(value) && value !== "") {
                    total += Number(value);
                }
            }
        });

        const totalRow = table.querySelector(".total-row th:last-child");

        if (totalRow) {
            totalRow.innerText = total.toLocaleString("en-IN");
        }

    });

}

// ======================================
// Console Message
// ======================================

console.log("Balance Sheet Loaded Successfully");