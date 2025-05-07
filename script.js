document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Dark/Light mode
  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    modeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Back to Top
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Testimonials Slider
  const slides = document.querySelectorAll('.testimonials .slide');
  let current = 0;
  const showSlide = idx => {
    slides.forEach(s => s.classList.remove('active'));
    slides[idx].classList.add('active');
  };
  document.getElementById('prev-testimonial').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
  document.getElementById('next-testimonial').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  // Scroll Reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));
});
