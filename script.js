document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Mostra il banner se l'utente non ha ancora espresso una preferenza
    if (!localStorage.getItem("cookieConsent")) {
        setTimeout(() => {
            cookieBanner.classList.add("show");
        }, 500);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener("click", function() {
            localStorage.setItem("cookieConsent", "accepted");
            cookieBanner.classList.remove("show");
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener("click", function() {
            localStorage.setItem("cookieConsent", "rejected");
            cookieBanner.classList.remove("show");
        });
    }
});