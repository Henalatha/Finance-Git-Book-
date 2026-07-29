// =====================================
// iFinance P & L Report
// pl-report.js
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Print Button
    // ==========================

    const printBtn = document.getElementById("printBtn");

    if (printBtn) {

        printBtn.addEventListener("click", function () {

            window.print();

        });

    }

    // ==========================
    // Excel Button
    // ==========================

    const excelBtn = document.getElementById("excelBtn");

    if (excelBtn) {

        excelBtn.addEventListener("click", function () {

            alert("Excel export feature will be available after backend integration.");

        });

    }

    // ==========================
    // Calculate Totals
    // ==========================

    calculatePLTotals();

});

// =====================================
// Calculate Income & Expense Totals
// =====================================

function calculatePLTotals() {

    let incomeTotal = 0;
    let expenseTotal = 0;

    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(function (row) {

        if (
            row.classList.contains("total-row") ||
            row.classList.contains("profit-row")
        ) {
            return;
        }

        const cells = row.querySelectorAll("td");

        if (cells.length === 3) {

            let income = cells[1].innerText
                .replace(/,/g, "")
                .replace("--", "")
                .trim();

            let expense = cells[2].innerText
                .replace(/,/g, "")
                .replace("--", "")
                .trim();

            if (!isNaN(income) && income !== "") {
                incomeTotal += Number(income);
            }

            if (!isNaN(expense) && expense !== "") {
                expenseTotal += Number(expense);
            }

        }

    });

    // ==========================
    // Update Total Row
    // ==========================

    const totalRow = document.querySelector(".total-row");

    if (totalRow) {

        totalRow.children[1].innerText =
            incomeTotal.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

        totalRow.children[2].innerText =
            expenseTotal.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

    }

    // ==========================
    // Profit / Loss
    // ==========================

    const profit = incomeTotal - expenseTotal;

    const profitRow = document.querySelector(".profit-row");

    if (profitRow) {

        const valueCell = profitRow.querySelector("th:last-child");

        if (valueCell) {

            if (profit >= 0) {

                valueCell.innerText =
                    "Profit : " +
                    profit.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });

            } else {

                valueCell.innerText =
                    "Loss : " +
                    Math.abs(profit).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });

            }

        }

    }

    console.log("Income Total :", incomeTotal);
    console.log("Expense Total :", expenseTotal);
    console.log("Profit :", profit);

}

// =====================================
// Page Loaded
// =====================================

console.log("P & L Report Loaded Successfully");