function toggleSection(id) {
    const section = document.getElementById(id);

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function submitFinance() {

    const hpNo = document.getElementById("hpNo").value;

    if (hpNo === "") {
        alert("Please enter HP Number");
        return;
    }

    alert("Finance details submitted successfully!");
}