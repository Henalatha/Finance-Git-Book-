// Open customer details page
function openCustomerDetails(hpNo) {
    alert("Opening details for: " + hpNo);

    // Example:
    // window.location.href = `customer-details.html?hpNo=${hpNo}`;
}

// New Finance button
document.querySelector(".btn-new").addEventListener("click", () => {
    alert("Redirecting to New Finance Form");

    // Example:
    // window.location.href = "new-finance.html";
});

// Pagination buttons
document.querySelectorAll(".pagination button").forEach(button => {
    button.addEventListener("click", function () {
        const page = this.innerText;
        console.log("Loading page:", page);

        // API call or data reload can be done here
    });
});