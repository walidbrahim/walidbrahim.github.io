# Portfolio Website Maintenance Instructions

## Overview
This document provides instructions for maintaining and updating your portfolio website. The website is built with HTML, CSS, and JavaScript, making it easy to modify and deploy.

## File Structure
- `index.html` - Main HTML file containing the website structure
- `css/` - Directory containing CSS files
  - `styles.css` - Main stylesheet with general styling
  - `researcher.css` - Additional stylesheet for researcher-specific sections
- `js/` - Directory containing JavaScript files
  - `script.js` - Main JavaScript file with interactive functionality
- `README.md` - Project documentation

## How to Update Content

### Updating Personal Information
To update your personal information, open `index.html` and modify the following sections:
- Header (lines 15-17): Update your name
- Hero section (lines 39-42): Update your introduction
- About section (lines 61-63): Update your bio
- Contact section (lines 423-439): Update your contact information

### Updating Research Projects
To update your research projects, locate the research section in `index.html` (around line 87) and modify the project cards. Each project follows this structure:
```html
<div class="project-card" data-category="category">
    <div class="project-img">
        <img src="image-url" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span>Tag1</span>
            <span>Tag2</span>
        </div>
        <div class="project-links">
            <a href="#" target="_blank"><i class="fas fa-external-link-alt"></i> Link Text</a>
        </div>
    </div>
</div>
```

### Updating Publications
To update your publications, locate the publications section in `index.html` (around line 157) and modify the publication items. Each publication follows this structure:
```html
<div class="publication-item" data-category="category">
    <div class="publication-year">Year</div>
    <div class="publication-details">
        <h3>Publication Title</h3>
        <p class="authors">Authors</p>
        <p class="journal">Journal/Conference</p>
        <div class="publication-links">
            <a href="#" target="_blank"><i class="fas fa-external-link-alt"></i> DOI</a>
            <a href="#" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a>
        </div>
    </div>
</div>
```

### Updating Skills
To update your skills, locate the skills section in `index.html` (around line 246) and modify the skill items. Each skill follows this structure:
```html
<div class="skill-item">
    <div class="skill-icon"><i class="fas fa-icon-name"></i></div>
    <h4>Skill Name</h4>
    <div class="skill-bar">
        <div class="skill-level" style="width: 90%"></div>
    </div>
</div>
```

### Updating Awards
To update your awards, locate the awards section in `index.html` (around line 310) and modify the award items. Each award follows this structure:
```html
<div class="award-item">
    <div class="award-year">Year</div>
    <div class="award-content">
        <h3>Award Title</h3>
        <p>Award Description</p>
    </div>
</div>
```

### Updating Blog Posts
To update your blog posts, locate the blog section in `index.html` (around line 335) and modify the blog cards. Each blog post follows this structure:
```html
<div class="blog-card">
    <div class="blog-img">
        <img src="image-url" alt="Blog Post Title">
    </div>
    <div class="blog-content">
        <div class="blog-date">Date</div>
        <h3>Blog Post Title</h3>
        <p>Blog post excerpt...</p>
        <a href="#" class="read-more">Read More</a>
    </div>
</div>
```

## Styling Changes

### Changing Colors
To change the color scheme, open `css/styles.css` and modify the CSS variables at the top of the file (around line 8):
```css
:root {
    --primary-color: #4a6cf7;
    --secondary-color: #6c757d;
    --dark-color: #212529;
    --light-color: #f8f9fa;
    /* other variables */
}
```

### Changing Fonts
To change the fonts, modify the font-family property in the body selector in `css/styles.css` (around line 38):
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* other properties */
}
```

## Adding New Sections
To add a new section to your website:

1. Add a new navigation link in the header (around line 18 in `index.html`):
```html
<li><a href="#new-section">New Section</a></li>
```

2. Create the new section HTML structure:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section Title</h2>
        <div class="new-section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

3. Add corresponding CSS styles in `css/styles.css` or `css/researcher.css`:
```css
.new-section {
    background: white;
    padding: 100px 0;
}

.new-section-content {
    /* Your styles here */
}
```

## Deployment Instructions

### GitHub Pages Deployment
1. Create a GitHub account if you don't have one
2. Create a new repository (either username.github.io or any other name)
3. Push your code to the repository:
```
git remote add origin https://github.com/username/repository-name.git
git branch -M main
git push -u origin main
```
4. Go to repository Settings > Pages
5. Select the main branch as the source and click Save
6. Your website will be published at https://username.github.io/repository-name

### Custom Domain Setup (Optional)
1. Purchase a domain from a domain registrar
2. In your GitHub repository, go to Settings > Pages
3. Under "Custom domain", enter your domain name and click Save
4. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IP addresses
   - Or add a CNAME record pointing to your username.github.io

## Troubleshooting
- If styles are not loading, check the paths in the HTML file
- If JavaScript functionality is not working, check the browser console for errors
- For responsive design issues, test on different devices and screen sizes

## Need Help?
If you need assistance with your website, feel free to contact me at walid.brahim.6g@stu.hosei.ac.jp.
