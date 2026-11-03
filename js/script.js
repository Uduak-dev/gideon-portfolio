
document.addEventListener("DOMContentLoaded", function () {

    // SCROLL REVEAL ANIMATIONS

    const revealElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-stagger'
    );

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    // SCROLL PROGRESS INDICATOR

    const scrollProgress = document.getElementById("scrollProgress");

    if (scrollProgress) {

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;

            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

            scrollProgress.style.width = progress + "%";

        });

    }


    // MOBILE NAVIGATION MENU

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        // Open and close the menu

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });


        // Close menu after selecting a navigation link

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }

});