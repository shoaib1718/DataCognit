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
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Show the scroll button when the user scrolls down 20px from the top
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopButton = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// When the user clicks the button, scroll to the top
document.getElementById("scrollToTop").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
