const extraProducts = [
	{
		img: './icons/leaders__products/courage-png.png',
		alt: 'Футболка',
		title: 'Футболка «Courage»',
		stars: './icons/stars-fourth-svg.svg',
		price: '₽5000',
		type: 'one',
	},
	{
		img: './icons/leaders__products/bermuda-png.png',
		alt: 'Бермуды',
		title: 'Свободные бермуды',
		stars: './icons/stars-fifth-svg.svg',
		price: '₽4000',
		type: 'two',
	},
	{
		img: './icons/leaders__products/skinny-jeans-png.png',
		alt: 'Джинсы',
		title: 'Потертые узкие джинсы',
		stars: './icons/stars-svg.svg',
		price: '₽7000',
		type: 'one',
	},
	{
		img: './icons/new__products/t-shirt-png.png',
		alt: 'Рубашка',
		title: 'Рубашка в полоску',
		stars: './icons/star-third-svg.svg',
		price: '₽5000',
		oldPrice: '₽6000',
		type: 'two',
	},
];

function createCard(p) {
	const priceHtml = p.oldPrice
		? `<ul class="leaders__shop-info-list">
				<li class="leaders__first">${p.price}</li>
				<li class="leaders__second">${p.oldPrice}</li>
				<li><img class="new__sale" src="./icons/sale-svg.svg" width="58" height="28" alt="Скидка" /></li>
			</ul>`
		: `<p class="leaders__first">${p.price}</p>`;

	const card = document.createElement('div');
	card.className = `leaders__svg-${p.type}`;
	card.innerHTML = `
		<img src="${p.img}" width="295" height="298" alt="${p.alt}" />
		<p class="leaders__text">${p.title}</p>
		<img class="leaders__stars" src="${p.stars}" width="150" height="19" alt="Рейтинг" />
		${priceHtml}`;
	return card;
}

export function initLeadersMore() {
	const button = document.querySelector('.leaders__button');
	const list = document.querySelector('.leaders__products-second');
	if (!button || !list) return;

	let extraRow = null;

	button.addEventListener('click', (e) => {
		e.preventDefault();

		if (extraRow) {
			extraRow.remove();
			extraRow = null;
			button.textContent = 'Посмотреть всё';
			return;
		}

		extraRow = document.createElement('div');
		extraRow.className = 'leaders__products-second leaders__products-extra';
		extraProducts.forEach((p) => extraRow.appendChild(createCard(p)));
		list.after(extraRow);
		button.textContent = 'Скрыть';
	});
}