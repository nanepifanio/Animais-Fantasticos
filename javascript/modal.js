export default function initModal() {
  const abrir = document.querySelector("[data-modal='abrir']");
  const fechar = document.querySelector("[data-modal='fechar']");
  const modalContainer = document.querySelector("[data-modal='container']");
  const activeClass = "ativo";

  if (abrir && fechar && modalContainer) {
    function toggleModal(event) {
      event.preventDefault();
      if (event.target === this) {
        modalContainer.classList.toggle(activeClass);
      }
    }
    abrir.addEventListener("click", toggleModal);
    fechar.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", toggleModal);
  }
}
