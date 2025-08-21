// Add current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle nav menu for small screens
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
