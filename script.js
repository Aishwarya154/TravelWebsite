// File: script.js

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);

// Tabs functionality
function showTabContent(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
}

// Initially show the Flights tab content
document.getElementById('flights').style.display = 'block';

// Form submission handling
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for signing up!');
    signupForm.reset();
});
