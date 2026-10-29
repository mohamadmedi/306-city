function copyServerIP() {
    const address = document.getElementById("server-address").textContent;

    navigator.clipboard.writeText(address)
        .then(() => {
            alert("Server address copied!");
        })
        .catch(() => {
            alert("Could not copy. Please copy the address manually.");
        });
}
const supportForm = document.getElementById("support-form");

if (supportForm) {
    supportForm.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("form-message").textContent =
            "The form is ready, but support requests are not connected to a server yet.";

        supportForm.reset();
    });
}