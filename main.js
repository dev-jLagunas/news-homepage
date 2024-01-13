// Import Statements
import "./CSS/style.css";

//Access DOM elements
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNav = document.getElementById("nav-links-sm-container");
const closeBtn = document.querySelector(".close-btn");

// Event Listeners
// Event Listeners
hamburgerBtn.addEventListener("click", function () {
  mobileNav.classList.add("open");
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  overlay.style.display = "none";
});
