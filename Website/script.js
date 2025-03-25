document.addEventListener("DOMContentLoaded", function () {
    // Load Navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));

    // Load Main Content
    fetch("maincontent.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("maincontent").innerHTML = data;
        })
        .catch(error => console.error("Error loading main content:", error));

        fetch("faq.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("faq").innerHTML = data;
        })
        .catch(error => console.error("Error loading main content:", error));

        fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading main content:", error));
});

