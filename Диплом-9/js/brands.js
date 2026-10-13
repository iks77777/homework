
export default class Brands {
	constructor(selectors, speed = 30) {
		this.wrapper = document.querySelector(selectors.WRAPPER);
		this.track = document.querySelector(selectors.TRACK);
		this.speed = speed; // пикселей в секунду

		if (!this.wrapper || !this.track) {
			throw new Error("Brands: не найден блок бегущей строки");
		}

		this.offset = 0;
		this.lastTime = null;
		this.paused = false;
		this.groupWidth = 0;
		this.originals = Array.from(this.track.children);

		this.animate = this.animate.bind(this);
		this.init();
	}

	init() {
		// ждём загрузки картинок, чтобы ширина посчиталась верно
		if (document.readyState === "complete") {
			this.start();
		} else {
			window.addEventListener("load", () => this.start());
		}

		window.addEventListener("resize", () => this.setup());
		this.wrapper.addEventListener("mouseenter", () => (this.paused = true));
		this.wrapper.addEventListener("mouseleave", () => (this.paused = false));
	}

	start() {
		this.setup();
		requestAnimationFrame(this.animate);
	}

	setup() {
		// удаляем старые копии
		this.track.querySelectorAll("[data-clone]").forEach((el) => el.remove());

		// ширина одного набора логотипов (с отступами)
		this.groupWidth = this.track.scrollWidth;

		// сколько копий нужно, чтобы закрыть ширину контейнера
		const copies = Math.ceil(this.wrapper.offsetWidth / this.groupWidth) + 1;

		for (let i = 0; i < copies; i++) {
			this.originals.forEach((img) => {
				const clone = img.cloneNode(true);
				clone.setAttribute("data-clone", "");
				clone.alt = "";
				this.track.appendChild(clone);
			});
		}
	}

	animate(time) {
		if (this.lastTime === null) this.lastTime = time;
		const dt = (time - this.lastTime) / 1000;
		this.lastTime = time;

		if (!this.paused) {
			this.offset -= this.speed * dt;
			if (this.offset <= -this.groupWidth) this.offset += this.groupWidth;
			this.track.style.transform = `translateX(${this.offset}px)`;
		}
		requestAnimationFrame(this.animate);
	}
}