// Toggle mobile menu and overlay
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close menu when clicking outside (on overlay)
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    mobileMenu.classList.remove('active');
});

// Close menu when clicking on a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});