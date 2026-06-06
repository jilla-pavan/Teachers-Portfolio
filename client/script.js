/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);

document
    .querySelectorAll(".section, .course-card, .stat-box")
    .forEach((el) => {

        el.classList.add("hidden");

        observer.observe(el);

    });

/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".stat-box h2");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {

    counterObserver.observe(counter);

});

function animateCounter(counter) {

    const text = counter.innerText;

    const target = parseInt(text.replace(/\D/g, ""));

    let current = 0;

    const increment = target / 80;

    const updateCounter = () => {

        current += increment;

        if (current < target) {

            counter.innerText = Math.floor(current) + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }
    };

    updateCounter();
}

/* ==========================
   SMOOTH SCROLL
========================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

/* ==========================
   HERO BUTTON ACTION
========================== */

const exploreBtn = document.querySelector(".hero button");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        const courses = document.querySelector(".courses");

        if (courses) {

            courses.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

/* ==========================
   HEADER SCROLL EFFECT
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(15,23,42,0.95)";

        header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.background =
            "rgba(0,0,0,.25)";

        header.style.boxShadow = "none";

    }

});

/* ==========================
   TYPEWRITER EFFECT
========================== */

const heroTitle =
document.querySelector(".hero-content h1");

if (heroTitle) {

    const text = heroTitle.innerText;

    heroTitle.innerText = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            heroTitle.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 80);

        }

    }

    typeWriter();

}

/* ==========================
   PARALLAX EFFECT
========================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    const scrollPosition = window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            scrollPosition * 0.5 + "px";

    }

});

/* ==========================
   COURSE CARD HOVER GLOW
========================== */

document
    .querySelectorAll(".course-card")
    .forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(37,99,235,0.15),
                white 50%)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = "white";

        });

    });

/* ==========================
   PAGE LOADER EFFECT
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});