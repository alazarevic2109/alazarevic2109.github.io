
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
});

toggle?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.12});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
