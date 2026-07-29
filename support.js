// ==========================================
// Support Page JavaScript
// ==========================================


// ===============================
// Call Number
// ===============================

function callNumber(number) {

    window.location.href = "tel:" + number;

}


// ===============================
// Copy Text
// ===============================

function copyText(text) {

    navigator.clipboard.writeText(text)
        .then(function () {

            alert(text + " copied successfully!");

        })
        .catch(function () {

            alert("Unable to copy.");

        });

}


// ===============================
// Page Loaded
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Support Page Loaded");

});


// ===============================
// Highlight Support Card
// ===============================

const supportCard = document.querySelector(".support-card");

supportCard.addEventListener("mouseenter", function () {

    supportCard.style.transform = "scale(1.01)";
    supportCard.style.transition = "0.3s";

});

supportCard.addEventListener("mouseleave", function () {

    supportCard.style.transform = "scale(1)";

});


// ===============================
// Keyboard Shortcut
// Press C to call Support Number
// ===============================

document.addEventListener("keydown", function (event) {

    if (event.key.toLowerCase() === "c") {

        callNumber("7382179386");

    }

});


// ===============================
// Future Features
// ===============================

// Open WhatsApp Support
// window.open("https://wa.me/917382179386");

// Send Email Support
// window.location.href = "mailto:support@ifinance.com";

// Open Website
// window.open("https://www.ifinance.com");