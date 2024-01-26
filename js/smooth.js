document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav_links, .cta, .cta2, .flecha_up2, .footer_link');

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth" // Transición suave
                });
            }
        });
    });
});