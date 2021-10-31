export default class Modal {
  constructor(abrir, fechar, container, cls) {
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.modalContainer = document.querySelector(container);
    this.activeClass = cls;
  }

  toggleModal() {
    this.modalContainer.classList.toggle(this.activeClass);
  }

  addModalListener() {
    document.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target;
      if (target.dataset.modal === "abrir") this.toggleModal();
      if (target.dataset.modal === "fechar") this.toggleModal();
      if (target.dataset.modal === "container") this.toggleModal();
    });
  }

  init() {
    if (this.abrir && this.fechar && this.modalContainer) {
      this.addModalListener();
    }
    return this;
  }
}
