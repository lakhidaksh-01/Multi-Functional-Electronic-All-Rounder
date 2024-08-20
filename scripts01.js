document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        alert('Copying is disabled on this website.');
    });
    
    document.addEventListener('cut', (e) => {
        e.preventDefault();
        alert('Cutting is disabled on this website.');
    });
    
    document.addEventListener('paste', (e) => {
        e.preventDefault();
        alert('Pasting is disabled on this website.');
    });
});

document.addEventListener("DOMContentLoaded", () => {
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("nav-links-active");
      });

      document.addEventListener("click", (event) => {
          if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
              navLinks.classList.remove("nav-links-active");
          }
      });
  });