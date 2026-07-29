document.getElementById("submitBtn").addEventListener("click", function () {

    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;
    const user = document.getElementById("users").value;
    const route = document.getElementById("routes").value;

    if (fromDate === "") {
        alert("Please select From Date");
        return;
    }

    if (toDate === "") {
        alert("Please select To Date");
        return;
    }

    if (new Date(fromDate) > new Date(toDate)) {
        alert("From Date cannot be greater than To Date");
        return;
    }

    alert(
        "Collection Report\n\n" +
        "From Date : " + fromDate +
        "\nTo Date : " + toDate +
        "\nUser : " + user +
        "\nRoute : " + route
    );

    // Future:
    // window.location.href = "collection-report-result.html";

});