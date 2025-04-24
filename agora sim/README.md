# Modern Portfolio Website

A clean, modern portfolio website inspired by the style of [byhuy.com](https://www.byhuy.com/). This portfolio template is perfect for designers, developers, and creative professionals looking to showcase their work in an elegant and professional way.

## Features

- **Minimalist Design**: Clean and modern aesthetic with focus on content and user experience.
- **Responsive Layout**: Looks great on all devices, from mobile to desktop.
- **Interactive Elements**: Smooth animations and transitions for an engaging user experience.
- **Project Showcase**: Beautiful slider to highlight your best work.
- **Testimonials Section**: Display client feedback and testimonials.
- **Contact Section**: Easy way for potential clients to get in touch.

## Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (VS Code, Sublime Text, etc.)
- A modern web browser

### Images

This template uses images from [Unsplash](https://unsplash.com/), a free stock photo service. You can:

1. Continue using the Unsplash images already included
2. Replace them with your own images 
3. Select different Unsplash images by changing the URLs

### Customization

1. **Replace Placeholder Content**:
   - Update text in `index.html` with your own information
   - Replace the Unsplash image URLs with your own images or different Unsplash images
   - Add your own projects to the projects section

2. **Customize Colors and Styling**:
   - Modify color variables in the `:root` section of `styles.css`
   - Adjust spacing and typography to match your brand

3. **Update Contact Information**:
   - Change email address in the contact section
   - Update social media links in the footer

4. **Add Your Portfolio Projects**:
   - Duplicate the project div in the works section for each project
   - Add project images, descriptions, and links

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── 404.html            # Custom 404 error page
├── robots.txt          # Search engine instructions
├── sitemap.xml         # Site structure for search engines
└── README.md           # This file
```

## Deployment

This is a static website that can be deployed on any web hosting service. Some popular options include:

- GitHub Pages
- Netlify
- Vercel
- Any traditional web hosting service

## Credits

- Design inspiration: [byhuy.com](https://www.byhuy.com/)
- Images: [Unsplash](https://unsplash.com/)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## License

This project is available as open source under the terms of the MIT License.

---

## Customization Tips

### Adding Projects

To add a new project to the slider:

```html
<div class="project">
    <div class="project-background" style="background-image: url('path-to-project-image.jpg');"></div>
    <div class="project-info">
        <div class="project-category">Category Name</div>
        <div class="project-title">Project Title</div>
        <div class="project-tags">
            <span>Tag 1</span>
            <span>Tag 2</span>
            <span>Year</span>
        </div>
    </div>
</div>
```

Don't forget to add a corresponding dot in the project-dots section!

### Changing Colors

To change the color scheme, modify these variables in styles.css:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    --text-color: #your-color;
    --light-text: #your-color;
    --background-color: #your-color;
}
```

### Mobile Menu

The mobile menu automatically appears on smaller screens. You can customize the mobile navigation styles in the media queries section of styles.css. 