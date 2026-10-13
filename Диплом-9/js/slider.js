export function initReviewsSlider() {
  const track = document.querySelector('.reviews__container');
  const prev = document.querySelector('.reviews__btn--prev');
  const next = document.querySelector('.reviews__btn--next');
  if (!track || !prev || !next) return;

  const slides = track.children;
  let index = 0;

  const getVisible = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const update = () => {
    const maxIndex = Math.max(0, slides.length - getVisible());
    index = Math.min(index, maxIndex);

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = slides[0].offsetWidth + gap;
    track.style.transform = `translateX(${-index * step}px)`;

    prev.disabled = index === 0;
    next.disabled = index === maxIndex;
  };

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  next.addEventListener('click', () => {
    index++;
    update();
  });

  window.addEventListener('resize', update);
  update();
}