// ===============================
// USER LIST
// ===============================

// New User Button
document.getElementById("newUserBtn").addEventListener("click", function () {

    // Change this page name if your new user form has a different name
    window.location.href = "new-user.html";

});

// ===============================
// SEARCH USERS
// ===============================

const searchInput = document.getElementById("searchInput");
const table = document.getElementById("userTable");
const rows = table.getElementsByTagName("tr");

searchInput.addEventListener("keyup", function () {

    const filter = searchInput.value.toUpperCase();

    for (let i = 1; i < rows.length; i++) {

        const cells = rows[i].getElementsByTagName("td");

        let found = false;

        for (let j = 0; j < cells.length; j++) {

            if (cells[j].textContent.toUpperCase().indexOf(filter) > -1) {

                found = true;
                break;

            }

        }

        rows[i].style.display = found ? "" : "none";

    }

});

// ===============================
// TABLE ROW CLICK
// ===============================

const tableRows = document.querySelectorAll("#userTable tbody tr");

tableRows.forEach(function (row) {

    row.addEventListener("click", function () {

        const name = row.cells[1].innerText.trim();

        alert("Selected User : " + name);

        // Uncomment if you create a user details page
        // window.location.href = "user-details.html";

    });

});

// ===============================
// HOME ICON
// ===============================

const homeIcon = document.querySelector(".home-icon");

if (homeIcon) {

    homeIcon.style.cursor = "pointer";

    homeIcon.addEventListener("click", function (event) {

        event.stopPropagation();

        alert("Home address of RAJA");

        // Example:
        // window.location.href = "user-address.html";

    });

}