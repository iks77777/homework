const products = [
  {
    img: './icons/new__products/undershirt-png.png',
    title: 'Футболка с лентой',
    alt: 'Футболка',
    stars: './icons/stars-svg.svg',
    price: 5000,
  },
  {
    img: './icons/new__products/denim-png.png',
    title: 'Узкие джинсы',
    alt: 'Джинсы',
    stars: './icons/stars-second-svg.svg',
    price: 5000,
    oldPrice: 6000,
  },
  {
    img: './icons/leaders__products/bermuda-png.png',
    title: 'Клетчатая рубашка',
    alt: 'Рубашка',
    stars: './icons/stars-svg.svg',
    price: 7000,
  },
  {
    img: './icons/new__products/t-shirt-png.png',
    title: 'Клетчатая рубашка',
    alt: 'Рубашка',
    stars: './icons/stars-svg.svg',
    price: 6000,
    oldPrice: 8000,
  },
];

function createCard(product) {
  const card = document.createElement('div');
  const hasSale = Boolean(product.oldPrice);
  card.className = hasSale ? 'new__svg-two' : 'new__svg-one';

  const priceHtml = hasSale
    ? `<ul class="new__shop-info-list">
         <li class="new__first">₽${product.price}</li>
         <li class="new__second">₽${product.oldPrice}</li>
         <li>
           <img class="new__sale" src="./icons/sale-svg.svg" width="58" height="28" alt="Скидка" />
         </li>
       </ul>`
    : `<p class="new__first">₽${product.price}</p>`;

  card.innerHTML = `
    <img src="${product.img}" width="295" height="298" alt="${product.alt}" />
    <p class="new__text">${product.title}</p>
    <img class="new__stars" src="${product.stars}" width="150" height="19" alt="Рейтинг" />
    ${priceHtml}
  `;
  return card;
}

export function initShowMore() {
  const button = document.querySelector('.new__button');
  const list = document.querySelector('.new__products-second');
  if (!button || !list) return;

  let isOpen = false;

  button.addEventListener('click', (e) => {
    e.preventDefault();

    if (!isOpen) {
      // создаём второй ряд
      const row = document.createElement('div');
      row.className = 'new__products-second new__products-extra';
      products.forEach((p) => row.appendChild(createCard(p)));
      list.after(row);
      button.textContent = 'Скрыть';
      isOpen = true;
    } else {
      document.querySelector('.new__products-extra')?.remove();
      button.textContent = 'Посмотреть всё';
      isOpen = false;
    }
  });
}