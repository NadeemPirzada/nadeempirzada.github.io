// -------------------- Footer Year --------------------
document.getElementById("year").textContent = new Date().getFullYear();

// -------------------- Mobile Navigation --------------------
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

// Open/close nav menu on small screens
if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// -------------------- Smooth Scrolling --------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    // only prevent if it's an on-page link
    if (this.getAttribute("href").length > 1) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
