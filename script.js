// Current year in footer
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent = `© ${year} Parikshit Moin`;
}


// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Console message
console.log("Portfolio loaded successfully.");
console.log("DevOps pipeline: Git → GitHub → Jenkins → Docker → ACR → AKS");