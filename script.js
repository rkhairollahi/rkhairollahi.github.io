// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.matches(".nav-link")) {
      navLinks.classList.remove("open");
    }
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

function onScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offsetTop = rect.top + window.pageYOffset;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= offsetTop - 120 && scrollY < offsetTop + height - 120) {
      navItems.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );
      });
    }
  });
}

window.addEventListener("scroll", onScroll);

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
