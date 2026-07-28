document.addEventListener("DOMContentLoaded", () => {
    const financeData = {
        income: 500,
        expenses: 0,
        emi: 565205
    };

    document.getElementById("income").textContent =
        financeData.income.toLocaleString();

    document.getElementById("expenses").textContent =
        financeData.expenses.toLocaleString();

    document.getElementById("emi").textContent =
        financeData.emi.toLocaleString();
});
function searchCard() {
    const keyword = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const moduleName = card.querySelector("h3").textContent;
        alert(`Opening ${moduleName} module`);
    });
});
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
const dashboardData = {
    income: 500,
    expenses: 0,
    emi: 565205
};

localStorage.setItem(
    "dashboardData",
    JSON.stringify(dashboardData)
);
const data = JSON.parse(
    localStorage.getItem("dashboardData")
);

console.log(data.income);
let notifications = 3;

document.getElementById("notificationCount")
    .textContent = notifications;
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
function updateTime() {
    const now = new Date();

    document.getElementById("currentDate").textContent =
        now.toLocaleString();
}

setInterval(updateTime, 1000);
updateTime();
function animateValue(id, start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 50);

    const timer = setInterval(() => {
        current += increment;

        if (current >= end) {
            current = end;
            clearInterval(timer);
        }

        document.getElementById(id).textContent =
            Math.floor(current).toLocaleString();
    }, 50);
}

animateValue("emi", 0, 565205, 2000);
