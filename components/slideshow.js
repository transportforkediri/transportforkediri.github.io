document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0; // Track the current slide
    const slides = document.querySelector('.slides'); // Slides wrapper
    const totalSlides = document.querySelectorAll('.slide').length; // Total number of slides
    let autoSlideInterval; // Variable for automatic slideshow

    // Dynamically set the width of the slides container
    //slides.style.width = `${totalSlides * 100}%`;//

    // Function to move to a specific slide
    function goToSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1; // Loop to the last slide
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0; // Loop to the first slide
        }
        currentSlide = slideIndex;
        const offset = -currentSlide * 100; // Calculate offset
        slides.style.transform = `translateX(${offset}%)`; // Move slides
    }

    // Function to move to the next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Function to move to the previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Start automatic slideshow
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds
    }

    // Stop automatic slideshow
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for arrows
    const nextButton = document.querySelector('.arrow.next');
    const prevButton = document.querySelector('.arrow.prev');

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide(); // Stop auto-slide on manual navigation
            startAutoSlide(); // Restart auto-slide after manual navigation
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide(); // Stop auto-slide on manual navigation
            startAutoSlide(); // Restart auto-slide after manual navigation
        });
    }

    // Start automatic slideshow on page load
    startAutoSlide();
});
