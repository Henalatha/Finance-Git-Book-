// ===============================
// iFinance Reports Menu
// reports.js
// ===============================

const reportButtons = document.querySelectorAll(".button-grid button");

// Add click event to every button
reportButtons.forEach(button => {

    button.addEventListener("click", function () {

        const reportName = this.innerText;

        switch (reportName) {

            // ---------------- Finance Reports ----------------

            case "Line Report":
                window.location.href = "line-report.html";
                break;

            case "Line Report Print":
                window.location.href = "line-report-print.html";
                break;

            case "Line Report (HP)":
                window.location.href = "line-report-hp.html";
                break;

            case "Demand Collection Report":
                window.location.href = "demand-collection-report.html";
                break;

            case "Collection Report":
                window.location.href = "collection-report.html";
                break;

            case "Vehicles Report":
                window.location.href = "vehicles-report.html";
                break;

            case "Bike Purchases Report":
                window.location.href = "bike-purchase-report.html";
                break;

            case "Bike Repairs Report":
                window.location.href = "bike-repair-report.html";
                break;

            case "Reminders":
                window.location.href = "reminders.html";
                break;

            case "Closed HP Report":
                window.location.href = "closed-hp-report.html";
                break;

            case "Seized HP Report":
                window.location.href = "seized-hp-report.html";
                break;

            case "Handloan Report":
                window.location.href = "handloan-report.html";
                break;

            case "Hp Handloan Report":
                window.location.href = "hp-handloan-report.html";
                break;

            case "Deposits Report":
                window.location.href = "deposits-report.html";
                break;

            case "Capitals Report":
                window.location.href = "capitals-report.html";
                break;

            // ---------------- Accounts Reports ----------------

            case "Day Report":
                window.location.href = "day-report.html";
                break;

            case "Multi Day Report":
                window.location.href = "multi-day-report.html";
                break;

            case "Trading Account":
                window.location.href = "trading-account.html";
                break;

            case "Balance Sheet":
                window.location.href = "balance-sheet.html";
                break;

            // ---------------- Default ----------------

            default:
                alert(reportName + "\n\nThis report page has not been created yet.");
        }

    });

});

// ===============================
// Console Message
// ===============================

console.log("iFinance Reports Loaded Successfully");