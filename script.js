let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth + 10;  // Account for the 10px margin

// Move slide function
function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    updateSlider();
}

// Update slider position
function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Set automatic slide change every 3 seconds
setInterval(function() {
    moveSlide(1); // Move to the next slide automatically
}, 2000);  // Change every 3000 milliseconds (3 seconds)
