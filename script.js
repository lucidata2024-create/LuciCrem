/* =========================
   FILE: script.js
   Interactivity & animations
   ========================= */


/* -------------------------
   SMOOTH SCROLL
------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


/* -------------------------
   TESTIMONIAL SLIDER
------------------------- */
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
}

// Auto-play
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 4000);


/* -------------------------
   FAQ ACCORDION
------------------------- */
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
  const button = item.querySelector('.faq__question');

  button.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


/* -------------------------
   SCROLL ANIMATIONS
------------------------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

const animatedElements = document.querySelectorAll(
  '.benefit, .about__text, .about__image, .offer__card'
);

animatedElements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});


/* -------------------------
   ADD ANIMATION STYLES
------------------------- */
const style = document.createElement('style');
style.innerHTML = `
.hidden {
  opacity: 0;
  transform: translateY(30px);
}

.show {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s ease;
}
`;
document.head.appendChild(style);


/* -------------------------
   NAVBAR SHADOW ON SCROLL
------------------------- */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
