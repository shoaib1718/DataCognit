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



// Show slides and automatically change them every 3 seconds
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  
  slides.forEach((slide, i) => {
    slide.style.display = "none";
  });
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  
  slides[slideIndex-1].style.display = "block";
  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex-1].classList.add("active");
  
  autoSlideInterval = setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Manually change slides
function plusSlides(n) {
  clearTimeout(autoSlideInterval); // Stop automatic slide change
  slideIndex += n - 1;
  showSlides();
}

// Show a specific slide
function currentSlide(n) {
  clearTimeout(autoSlideInterval);
  slideIndex = n - 1;
  showSlides();
}

// Swipe detection
let xStart = null;

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];
  xStart = firstTouch.clientX;
}

function handleTouchMove(evt) {
  if (!xStart) {
    return;
  }

  let xEnd = evt.touches[0].clientX;
  let xDiff = xStart - xEnd;

  if (xDiff > 0) {
    plusSlides(1); // Swipe left, go to next slide
  } else {
    plusSlides(-1); // Swipe right, go to previous slide
  }

  xStart = null; // Reset after handling
}

const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('touchstart', handleTouchStart, false);
slideshowContainer.addEventListener('touchmove', handleTouchMove, false);

let slideIndex = 0;
showSlides(); // Start by showing the first slide

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  
  slideIndex++; // Move to the next slide
  
  if (slideIndex > slides.length) {
    slideIndex = 1; // Loop back to the first slide if at the end
  }
  
  slides[slideIndex-1].style.display = "block"; // Show the current slide
  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
  slideIndex += n - 1;  // Adjust the slide index to account for the auto-slide timing
  showSlides();
}
