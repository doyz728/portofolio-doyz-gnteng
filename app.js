// Navigation toggle for mobile menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

navToggle.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navMenu.classList.toggle('show-menu');
  }
});

// Close menu when a nav link is clicked (on mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// Scroll sections and highlight active links
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58; // header height
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add('active-link');
    } else {
      navLink.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// Smooth scroll for anchor links
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 56,
        behavior: 'smooth',
      });
    }
  });
});

// Typed text effect in home section
const typedText = document.getElementById('typed-text');
const textArray = [
  'A passionate frontend developer.',
  'Creating beautiful and functional websites.',
  'Open to collaboration and new challenges.',
];
let textArrayIndex = 0;
let charIndex = 0;
let typingDelay = 80;
let erasingDelay = 50;
let newTextDelay = 1500;
let isDeleting = false;

function type() {
  if (!typedText) return;
  if (charIndex < textArray[textArrayIndex].length && !isDeleting) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else if (isDeleting && charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, erasingDelay);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
    }
    setTimeout(type, newTextDelay);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  if (typedText) type();
});

// Contact form validation and success message
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const inputs = contactForm ? contactForm.querySelectorAll('input, textarea') : [];

if (contactForm) contactForm.addEventListener('submit', e => {
  e.preventDefault();

  let valid = true;

  inputs.forEach(input => {
    const errorSpan = input.nextElementSibling;
    if (!input.checkValidity()) {
      valid = false;
      if (input.validity.valueMissing) {
        errorSpan.textContent = 'This field is required.';
      } else if (input.validity.tooShort) {
        errorSpan.textContent = `Please enter at least ${input.minLength} characters.`;
      } else if (input.type === 'email' && input.validity.typeMismatch) {
        errorSpan.textContent = 'Please enter a valid email address.';
      } else {
        errorSpan.textContent = 'Invalid input.';
      }
    } else {
      errorSpan.textContent = '';
    }
  });

  if (valid) {
    // Simulate sending message
    contactForm.reset();
    formSuccess.hidden = false;
    setTimeout(() => (formSuccess.hidden = true), 5000);
  } else {
    formSuccess.hidden = true;
  }
});