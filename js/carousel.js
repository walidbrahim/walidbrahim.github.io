/*
   Carousel JavaScript for Portfolio Website
   Author: Brahim Walid
   Date: April 2025
*/

// Expose carousel initialization function globally so it can be called after section loading
window.initializeCarousels = function() {
    const carouselContainers = document.querySelectorAll('.carousel-container');
    
    carouselContainers.forEach(container => {
        const track = container.querySelector('.carousel-track');
        const items = track.querySelectorAll('.carousel-item');
        const prevButton = container.querySelector('.carousel-prev');
        const nextButton = container.querySelector('.carousel-next');
        const indicators = container.querySelector('.carousel-indicators');
        
        if (items.length === 0) return;
        
        // Create indicators
        indicators.innerHTML = '';
        for (let i = 0; i < items.length; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('carousel-indicator');
            indicator.setAttribute('data-index', i);
            if (i === 0) indicator.classList.add('active');
            indicators.appendChild(indicator);
        }
        
        // Assign indicatorButtons before first updateCarousel call
        const indicatorButtons = indicators.querySelectorAll('.carousel-indicator');
        
        // Set initial position
        let currentIndex = 0;
        updateCarousel();
        
        // Add event listeners
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                updateCarousel();
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % items.length;
                updateCarousel();
            });
        }
        
        // Add indicator click events
        indicatorButtons.forEach(button => {
            button.addEventListener('click', () => {
                currentIndex = parseInt(button.getAttribute('data-index'));
                updateCarousel();
            });
        });
        
        // Add wheel event listener for mouse/trackpad scrolling
        track.addEventListener('wheel', (event) => {
            if (event.deltaY !== 0) { // Check if vertical scroll attempt
                event.preventDefault(); // Prevent page from scrolling vertically
                track.scrollLeft += event.deltaY; // Scroll horizontally instead
            }
        });
        
        // Update carousel position and indicators
        function updateCarousel() {
            // Update track position
            const itemWidth = items[0].offsetWidth;
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            
            // Update indicators
            indicatorButtons.forEach((button, index) => {
                if (index === currentIndex) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
    });
};

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // This will be called by section-loader.js after sections are loaded
});

// General Carousel Logic (if any remains)
