/*
   Language Switching Functionality for Portfolio Website
   Author: Brahim Walid
   Date: April 2025
*/

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language based on localStorage or default to English
    const currentLang = localStorage.getItem('language') || 'en';
    setLanguage(currentLang);
    
    // Set up language toggle button
    const langToggle = document.getElementById('language-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'ja' : 'en';
            setLanguage(newLang);
            localStorage.setItem('language', newLang);
            location.reload(); // Reload to apply changes
        });
    }
});

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    
    // Update language toggle button text
    const langToggle = document.getElementById('language-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? '日本語' : 'English';
    }
    
    // Show elements for the selected language and hide others
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}
