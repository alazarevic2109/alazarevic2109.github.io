
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeLightbox = document.querySelector('.lightbox-close');

document.querySelectorAll('[data-gallery]').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.dataset.gallery;
    lightbox.classList.add('open');
  });
});

closeLightbox?.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox?.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox?.classList.remove('open');
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    document.querySelectorAll('.full-gallery .gallery-item').forEach(item => {
      item.style.display =
        filter === 'all' || item.dataset.category === filter ? '' : 'none';
    });
  });
});
