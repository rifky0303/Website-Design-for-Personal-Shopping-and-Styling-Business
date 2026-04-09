// Mobile Nav Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').style.background = window.scrollY > 50 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
});

// Contact Form (EmailJS)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => { alert('Message sent! I\'ll be in touch soon.'); this.reset(); })
        .catch(() => alert('Oops! Something went wrong. Try again.'));
});

// Intersection Observer for Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
document.querySelectorAll('.service-card, .portfolio-grid img').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});