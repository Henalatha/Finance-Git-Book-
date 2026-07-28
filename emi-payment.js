const amountInput = document.getElementById("amount");
const taInput = document.getElementById("ta");
const totalInput = document.getElementById("total");

function calculateTotal() {
    const amount = Number(amountInput.value) || 0;
    const ta = Number(taInput.value) || 0;

    totalInput.value = amount + ta;
}

amountInput.addEventListener("input", calculateTotal);
taInput.addEventListener("input", calculateTotal);

function submitPayment() {
    const amount = Number(amountInput.value);
    const ta = Number(taInput.value);

    // Validation
    if (amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    const paymentData = {
        hpNo: "TYRE0025",
        date: document.getElementById("date").value,
        amount: amountInput.value,
        ta: taInput.value,
        total: totalInput.value
    };
    console.log(paymentData);

    alert(
        "Payment Submitted Successfully!\n\n" +
        "Total Amount: ₹" + paymentData.total
    );
}

/* Set today's date automatically */
document.getElementById("date").value =
    new Date().toISOString().split('T')[0];

calculateTotal();