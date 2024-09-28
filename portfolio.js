/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id'); // Added 'const' for sectionId

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* SCROLL HOME */
sr.reveal('.home__title', {});
sr.reveal('.home__scroll', { delay: 200 });
sr.reveal('.home__img', { origin: 'right', delay: 400 });

/* SCROLL ABOUT */
sr.reveal('.about__img', { delay: 500 });
sr.reveal('.about__subtitle', { delay: 300 });
sr.reveal('.about__profession', { delay: 400 });
sr.reveal('.about__text', { delay: 500 });
sr.reveal('.about__social-icon', { delay: 600, interval: 200 });

/* SCROLL SKILLS */
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 });
sr.reveal('.skills__img', { delay: 400 });

/* SCROLL PORTFOLIO */
sr.reveal('.portfolio__img', { interval: 200 });

/* SCROLL CONTACT */
sr.reveal('.contact__subtitle', {});
sr.reveal('.contact__text', { interval: 200 });
sr.reveal('.contact__input', { delay: 400 });
sr.reveal('.contact__button', { delay: 600 });

document.addEventListener('DOMContentLoaded', function() {
    // Typing effect variables and function
    const typingText = document.querySelector('.typing-text span');
    const words = ['Web Developer', 'Frontend Developer', 'Designer', 'Full Stack Developer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (!isDeleting && charIndex < currentWord.length) {
            // Typing
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            // Change word
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(typeEffect, isDeleting ? 500 : 1000);
        }
    }

    // Start the typing effect
    typeEffect();

    // Card click functionality
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'active' class from all cards
            cards.forEach(c => c.classList.remove('active'));
            // Add 'active' class to the clicked card
            card.classList.add('active');
        });
    });
});