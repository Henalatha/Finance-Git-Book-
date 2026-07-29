// =====================================
// iFinance Charts
// =====================================

let chart;

// Chart labels (Months)
const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun"
];

// -----------------------------
// HP's Chart (Bar)
// -----------------------------
function loadHPChart() {

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById("financeChart").getContext("2d");

    chart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [{

                label: "HP's",

                data: [12, 18, 10, 25, 20, 30],

                backgroundColor: [
                    "#0d6efd",
                    "#198754",
                    "#ffc107",
                    "#dc3545",
                    "#20c997",
                    "#6610f2"
                ],

                borderRadius: 8

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            }

        }

    });

    document.getElementById("chartTitle").innerHTML =
        "Monthly HP's Report";

}


// -----------------------------
// Financed Amount (Line)
// -----------------------------
function loadFinanceChart() {

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById("financeChart").getContext("2d");

    chart = new Chart(ctx, {

        type: "line",

        data: {

            labels: labels,

            datasets: [{

                label: "Financed Amount",

                data: [250000, 420000, 300000, 600000, 520000, 750000],

                borderColor: "#0d6efd",

                backgroundColor: "rgba(13,110,253,0.2)",

                fill: true,

                tension: .4

            }]

        },

        options: {

            responsive: true

        }

    });

    document.getElementById("chartTitle").innerHTML =
        "Monthly Financed Amount";

}


// -----------------------------
// Collection (Pie)
// -----------------------------
function loadCollectionChart() {

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById("financeChart").getContext("2d");

    chart = new Chart(ctx, {

        type: "pie",

        data: {

            labels: [

                "Collected",

                "Pending",

                "Overdue"

            ],

            datasets: [{

                data: [

                    70,

                    20,

                    10

                ],

                backgroundColor: [

                    "#198754",

                    "#ffc107",

                    "#dc3545"

                ]

            }]

        },

        options: {

            responsive: true

        }

    });

    document.getElementById("chartTitle").innerHTML =
        "Collection Status";

}


// -----------------------------
// Button Events
// -----------------------------

document.getElementById("hpBtn")
.addEventListener("click", loadHPChart);

document.getElementById("financeBtn")
.addEventListener("click", loadFinanceChart);

document.getElementById("collectionBtn")
.addEventListener("click", loadCollectionChart);


// -----------------------------
// Default Chart
// -----------------------------

window.onload = function () {

    loadHPChart();

};