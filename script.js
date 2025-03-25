document.addEventListener("DOMContentLoaded", function () {
    // Determine the correct base path
    let basePath = window.location.pathname.includes("Website/") ? "../" : "";

    // Load Navbar
    fetch(basePath + "Website/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));

    // Load Main Content ✅ (Fix)
    fetch(basePath + "Website/maincontent.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("maincontent").innerHTML = data;
        })
        .catch(error => console.error("Error loading main content:", error));

    // Load Footer
    fetch(basePath + "Website/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
