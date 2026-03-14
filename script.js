/* ===================================================
   Relationship Goals (RG) — script.js
   =================================================== */

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  if (question) {
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Open this one if it was closed
      if (!isOpen) item.classList.add('open');
    });
  }
});

// Contact form submission (placeholder)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.background = 'var(--teal)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.background = '';
      contactForm.reset();
    }, 3500);
  });
});

// Scenario form submission (placeholder)
const scenarioForm = document.getElementById('scenarioForm');
if (scenarioForm) {
  scenarioForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = scenarioForm.querySelector('button[type="submit"]');
    btn.textContent = 'Scenario Submitted ✓';
    btn.disabled = true;
    btn.style.background = 'var(--teal)';
    setTimeout(() => {
      btn.textContent = 'Submit Your Scenario';
      btn.disabled = false;
      btn.style.background = '';
      scenarioForm.reset();
    }, 4000);
  });
}

// Intersection observer — fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .program-card, .price-card, .testimonial-card, .step-card, .program-full-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Observer callback adds visible class
  document.querySelectorAll('.feature-card, .program-card, .price-card, .testimonial-card, .step-card, .program-full-card').forEach(el => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.unobserve(el);
      }
    }, { threshold: 0.12 });
    obs.observe(el);
  });
});
