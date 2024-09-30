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
window.onscroll = function () {
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
document.getElementById("scrollToTop").addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Select the logo container div
document.querySelector('.logo-container').addEventListener('click', function() {
  // Redirect to index.html
  window.location.href = 'index.html';
});



// Show slides and automatically change them every 3 seconds
// function showSlides() {
//   const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");

//   slides.forEach((slide, i) => {
//     slide.style.display = "none";
//   });
//   slideIndex++;
//   if (slideIndex > slides.length) { slideIndex = 1 }

//   slides[slideIndex - 1].style.display = "block";
//   dots.forEach(dot => dot.classList.remove("active"));
//   dots[slideIndex - 1].classList.add("active");

//   autoSlideInterval = setTimeout(showSlides, 3000); // Change slide every 3 seconds
// }

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

// JavaScript for the slideshow functionality
let slideIndex = 0;
showSlides();

// Function to show the slides
function showSlides() {
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');

  // Hide all slides
  slides.forEach(slide => slide.style.display = 'none');

  // Reset slideIndex if it exceeds the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Remove "active" class from all dots
  dots.forEach(dot => dot.classList.remove('active'));

  // Display the current slide and add "active" class to the corresponding dot
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');

  // Change slides every 5 seconds
  setTimeout(showSlides, 5000);
}

// Function to manually navigate to the next/previous slide
function plusSlides(n) {
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');

  // Hide the current slide
  slides[slideIndex - 1].style.display = 'none';

  // Update the slideIndex
  slideIndex += n;

  // Wrap around if slideIndex goes out of bounds
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Remove the active class from the current dot
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the new slide and highlight the new dot
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

// Function to manually navigate to a specific slide
function currentSlide(n) {
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');

  // Hide the current slide
  slides[slideIndex - 1].style.display = 'none';

  // Update the slideIndex to the clicked dot's index
  slideIndex = n;

  // Remove the active class from the current dot
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the new slide and highlight the new dot
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}


// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// script.js
// For Career Page

function applyForJob(jobTitle) {
  // Show the application form section
  document.getElementById('job-listings').style.display = 'none';
  document.getElementById('application-form').style.display = 'block';

  // Set the job title in the application form
  document.getElementById('job-title').value = jobTitle;
}

function submitApplication(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Retrieve form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const jobTitle = document.getElementById('job-title').value;

  // Display a simple alert with application details (you can replace this with actual submission logic)
  alert(`Application submitted!\nName: ${name}\nEmail: ${email}\nPosition: ${jobTitle}`);

  // Reset the form and go back to job listings
  document.getElementById('form').reset();
  document.getElementById('application-form').style.display = 'none';
  document.getElementById('job-listings').style.display = 'block';
}

