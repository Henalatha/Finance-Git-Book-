const emiData = [
{
sno:1,
date:"05-08-2026",
amount:"8213 (879.67)",
paidInt:0,
paidAmt:0,
balance:"8213 (8213)"
},
{
sno:2,
date:"05-09-2026",
amount:"8213 (879.67)",
paidInt:0,
paidAmt:0,
balance:"8213 (16426)"
},
{
sno:3,
date:"05-10-2026",
amount:"8213 (879.67)",
paidInt:0,
paidAmt:0,
balance:"8213 (24639)"
},
{
sno:4,
date:"05-11-2026",
amount:"8213 (879.67)",
paidInt:0,
paidAmt:0,
balance:"8213 (32852)"
},
{
sno:5,
date:"05-12-2026",
amount:"8213 (879.67)",
paidInt:0,
paidAmt:0,
balance:"8213 (41065)"
},
{
sno:6,
date:"05-01-2027",
amount:"8213 (879.67)",
paidInt:0,
paidAmt:0,
balance:"8213 (49278)"
}
];

const tableBody=document.getElementById("emiTableBody");

emiData.forEach(emi=>{
    tableBody.innerHTML += `
    <tr>
        <td>
            <a class="link" href="emi-payment.html">${emi.sno}</a>
        </td>

        <td>
            <a class="link" href="emi-payment.html">${emi.date}</a>
        </td>

        <td>${emi.amount}</td>
        <td>${emi.paidInt}</td>
        <td>${emi.paidAmt}</td>
        <td>${emi.balance}</td>
    </tr>
    `;
});