const navItems = document.querySelector(".nav-items");
const navLink = document.querySelectorAll(".nav-link");
const toggleMenu = document.querySelector(".btn-toggle");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");

document.addEventListener("DOMContentLoaded", () => {
  toggleMenu.addEventListener("click", () => {
    navItems.classList.toggle("active");
    if (navItems.classList.contains("active")) {
      btnOpen.style.display = "none";
      btnClose.style.display = "block";
    } else {
      btnOpen.style.display = "block";
      btnClose.style.display = "none";
    }
  });

  navLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (navItems.classList.contains("active")) {
        navItems.classList.remove("active");
        btnOpen.style.display = "block";
        btnClose.style.display = "none";
      }
    });
  });
});
