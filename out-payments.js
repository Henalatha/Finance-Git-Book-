const outPayments = [
    {
        amount:5000,
        date:"14-07-2026",
        interest:350,
        paidAmount:5350,
        status:"Paid"
    },
    {
        amount:3000,
        date:"16-07-2026",
        interest:200,
        paidAmount:3200,
        status:"Pending"
    }
];

// Table Body
const tableBody = document.getElementById("outPaymentTable");

function loadOutPayments() {

    if(outPayments.length === 0){

        tableBody.innerHTML = `
            <tr class="empty-row">
                <td colspan="6">
                    No results — empty table
                </td>
            </tr>
        `;

        return;
    }

    tableBody.innerHTML = "";

    outPayments.forEach((payment,index)=>{

        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>₹${payment.amount}</td>
                <td>${payment.date}</td>
                <td>₹${payment.interest}</td>
                <td>₹${payment.paidAmount}</td>
                <td>${payment.status}</td>
            </tr>
        `;
    });

}

loadOutPayments();