/*
   Main JavaScript for Portfolio Website
   Author: Brahim Walid
   Date: April 2025
*/

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Expose typing effect function globally so it can be called after section loading
    window.typeEffect = function() {
        const typedTextElement = document.querySelector('.typed-text');
        if (!typedTextElement) return;
        
        const typedTextsEn = ['PhD Candidate', 'Wireless Sensing Researcher', 'FMCW Radar Researcher', 'Healthcare IoT Developer'];
        const typedTextsJa = ['博士研究員', '無線センシング専門家', 'FMCWレーダー専門家', 'ヘルスケアIoT開発者'];
        const typedTexts = document.documentElement.lang === 'ja' ? typedTextsJa : typedTextsEn;
        let currentTextIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingDelay = 200;

        function type() {
            const currentText = typedTexts[currentTextIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                typingDelay = 100;
            } else {
                typedTextElement.textContent = currentText.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                typingDelay = 200;
            }

            if (!isDeleting && currentCharIndex === currentText.length) {
                isDeleting = true;
                typingDelay = 1000;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % typedTexts.length;
                typingDelay = 500;
            }

            setTimeout(type, typingDelay);
        }

        type();
    };
    
    // Initialize mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Initialize contact form submission
    document.addEventListener('submit', function(e) {
        if (e.target.id === 'contactForm') {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset();
        }
    });

    // Initialize filter buttons for projects and publications
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            const filter = e.target.getAttribute('data-filter');
            const filterBtns = e.target.parentElement.querySelectorAll('.filter-btn');
            const section = e.target.closest('section');
            const items = section.querySelectorAll('[data-category]');
            
            // Update active button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filter items
            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
});

// Research Carousel Functionality
// ... rest of the research carousel code ...
