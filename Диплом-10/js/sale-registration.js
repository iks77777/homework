export default class SaleRegistration {
  constructor({ BAR, CLOSE, HIDDEN }) {
    this.bar = document.querySelector(`.${BAR}`);
    this.closeBtn = document.querySelector(`.${CLOSE}`);
    this.hiddenClass = HIDDEN;

    if (!this.bar || !this.closeBtn) return;

    this.closeBtn.setAttribute("aria-label", "Закрыть уведомление");
    this.closeBtn.addEventListener("click", () => this.close());
  }

  close() {
    this.bar.classList.add(this.hiddenClass);
  }
}