// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const projectDots = document.querySelectorAll('.project-dots .dot');
const projects = document.querySelectorAll('.project');
const projectCounter = document.querySelector('.projects-counter .current');
const projectNext = document.querySelector('.projects-slider .next');
const projectPrev = document.querySelector('.projects-slider .prev');
const testimonialNext = document.querySelector('.testimonial-slider .next');
const testimonialPrev = document.querySelector('.testimonial-slider .prev');
const testimonials = document.querySelectorAll('.testimonial');
const testimonialCounter = document.querySelector('.testimonial-counter .current');

// Mobile Menu Toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Add animation classes to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.services, .works, .about, .testimonials, .contact');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
};

// Project Slider Functionality
let currentProject = 0;

const updateProjectSlider = () => {
    // Remove active class from all projects and dots
    projects.forEach(project => project.classList.remove('active'));
    projectDots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current project and dot
    projects[currentProject].classList.add('active');
    projectDots[currentProject].classList.add('active');
    
    // Update counter
    projectCounter.textContent = currentProject;
};

// Add event listeners to project dots
projectDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentProject = index;
        updateProjectSlider();
    });
});

// Add event listeners to project slider buttons
if (projectNext) {
    projectNext.addEventListener('click', () => {
        currentProject = (currentProject + 1) % projects.length;
        updateProjectSlider();
    });
}

if (projectPrev) {
    projectPrev.addEventListener('click', () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateProjectSlider();
    });
}

// Testimonial Slider Functionality
let currentTestimonial = 0;

const updateTestimonialSlider = () => {
    // Remove active class from all testimonials
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    
    // Add active class to current testimonial
    testimonials[currentTestimonial].classList.add('active');
    
    // Update counter
    if (testimonialCounter) {
        testimonialCounter.textContent = currentTestimonial + 1;
    }
};

// Add event listeners to testimonial slider buttons
if (testimonialNext) {
    testimonialNext.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonialSlider();
    });
}

if (testimonialPrev) {
    testimonialPrev.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonialSlider();
    });
}

// Scroll to section when clicking on nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Update year in footer
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
}

// Local time update
const updateLocalTime = () => {
    const localTimeElement = document.querySelector('.local-time');
    if (localTimeElement) {
        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        localTimeElement.textContent = `Local time, ${timezone.split('/')[1] || timezone}`;
    }
};

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
    animateOnScroll();
    updateProjectSlider();
    updateTestimonialSlider();
    updateLocalTime();
    
    // Add animation classes to hero section elements
    document.querySelector('.hero-content').classList.add('fade-in');
    document.querySelector('.hero-image').classList.add('fade-in', 'delay-1');
    
    // Initialize quote rotation
    initQuoteRotation();
});

// Quote Card Rotation
function initQuoteRotation() {
    const quoteContents = document.querySelectorAll('.quote-content');
    const indicators = document.querySelectorAll('.indicator');
    let currentQuoteIndex = 0;
    let quoteInterval;

    // Function to show a specific quote
    function showQuote(index) {
        // Remove active class from all quotes and indicators
        quoteContents.forEach(quote => quote.classList.remove('active'));
        indicators.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current quote and indicator
        quoteContents[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentQuoteIndex = index;
    }

    // Start automatic rotation
    function startQuoteRotation() {
        quoteInterval = setInterval(() => {
            let nextIndex = (currentQuoteIndex + 1) % quoteContents.length;
            showQuote(nextIndex);
        }, 5000); // Change quote every 5 seconds
    }

    // Add click event to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(quoteInterval); // Clear the interval when manually clicking
            showQuote(index);
            startQuoteRotation(); // Restart the rotation
        });
    });

    // Pause rotation when hovering over the quote card
    const quoteCard = document.getElementById('quote-card');
    if (quoteCard) {
        quoteCard.addEventListener('mouseenter', () => {
            clearInterval(quoteInterval);
        });
        
        quoteCard.addEventListener('mouseleave', () => {
            startQuoteRotation();
        });
    }
    
    // Start the rotation
    startQuoteRotation();
}

// Create a subtle parallax effect for the hero section
window.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        hero.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }
}); 