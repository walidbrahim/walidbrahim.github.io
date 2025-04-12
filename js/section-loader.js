/*
   Section Loader JavaScript for Portfolio Website
   Author: Brahim Walid
   Date: April 2025
*/

document.addEventListener('DOMContentLoaded', function() {
    // Load all sections
    loadSection('header-container', 'sections/header.html');
    loadSection('hero-container', 'sections/hero.html');
    loadSection('about-container', 'sections/about.html');
    loadSection('research-container', 'sections/research.html');
    loadSection('publications-container', 'sections/publications.html');
    loadSection('skills-container', 'sections/skills.html');
    loadSection('awards-container', 'sections/awards.html');
    loadSection('contact-container', 'sections/contact.html');
});

// Function to load section content from separate files
function loadSection(containerId, sectionPath) {
    fetch(sectionPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load section: ${sectionPath}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
            
            // Re-initialize any scripts that need to run after section is loaded
            if (containerId === 'hero-container') {
                initTypingEffect();
            }
            
            // Initialize carousels for specific sections
            if (containerId === 'publications-container' || containerId === 'research-container') {
                initCarousels(); 
            }
            
            // Apply language settings to newly loaded content
            applyLanguageSettings();
        })
        .catch(error => {
            console.error(`Error loading section ${sectionPath}:`, error);
            document.getElementById(containerId).innerHTML = `<p>Error loading section. Please refresh the page.</p>`;
        });
}

// Re-initialize typing effect after hero section is loaded
function initTypingEffect() {
    if (typeof typeEffect === 'function') {
        typeEffect();
    }
}

// Re-initialize carousels after sections with carousels are loaded
function initCarousels() {
    if (typeof initializeCarousels === 'function') {
        initializeCarousels();
    }
}

// Apply language settings to newly loaded content
function applyLanguageSettings() {
    const currentLang = localStorage.getItem('language') || 'en';
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.getAttribute('data-lang') === currentLang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}
