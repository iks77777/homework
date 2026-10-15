export function initBurger() {
	const burger = document.querySelector('.header__burger');
	const header = document.querySelector('.header');

	if (!burger || !header) return;

	const setOpen = (state) => burger.setAttribute('aria-expanded', String(state));

	burger.addEventListener('click', () => {
		setOpen(burger.getAttribute('aria-expanded') !== 'true');
	});

	if (window.matchMedia('(hover: hover)').matches) {
		burger.addEventListener('mouseenter', () => setOpen(true));
		header.addEventListener('mouseleave', () => setOpen(false));
	}
}