const navIcon = document.querySelector('.nav-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-right a');

// Toggle menu visibility on click
navIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navIcon.classList.toggle('active');
});

// Close the menu when clicking on any link
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 786) {
            navbar.classList.remove('active');
            navIcon.classList.remove('active');
        }
    });
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navIcon.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove('active');
        navIcon.classList.remove('active');
    }
});


// -----------------------footer--------------
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        document.querySelector('form').reset();
    } else {
        alert('Please enter a valid email address.');
    }
});
