const STARS_COUNT = 5;

export function initStarsHover() {
	const images = document.querySelectorAll('.new__stars, .leaders__stars');
	

	images.forEach((img) => {
	
		const wrapper = document.createElement('div');
		wrapper.className = 'stars-hover';
		img.parentNode.insertBefore(wrapper, img);
		wrapper.appendChild(img);

		
		const layer = document.createElement('div');
		layer.className = 'stars-hover__layer';

		const zones = [];
		for (let i = 0; i < STARS_COUNT; i++) {
			const zone = document.createElement('span');
			zone.className = 'stars-hover__zone';
			zone.dataset.index = i;
			layer.appendChild(zone);
			zones.push(zone);
		}
		wrapper.appendChild(layer);

		const highlight = (index) => {
			zones.forEach((z, i) => {
				z.classList.toggle('is-active', i <= index);
			});
		};

		zones.forEach((zone, i) => {
			zone.addEventListener('mouseenter', () => highlight(i));
		});

		layer.addEventListener('mouseleave', () => highlight(-1));
	});
}