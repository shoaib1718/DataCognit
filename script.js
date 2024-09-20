// JavaScript
// JavaScript for animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const animatedItems = document.querySelectorAll('.animate');

  function animateOnScroll() {
    animatedItems.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const viewHeight = window.innerHeight;

      if (itemPosition < viewHeight - 100) {
        item.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();  // Trigger once on load
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
