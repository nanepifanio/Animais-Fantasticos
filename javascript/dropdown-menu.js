import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  const activeClass = "ativo";

  if (dropDownMenus.length) {
    function handleMenu(event) {
      event.preventDefault();
      this.classList.add(activeClass);
      outsideClick(this, ["touchstart", "click"], () => {
        this.classList.remove(activeClass);
      });
    }

    dropDownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleMenu);
      });
    });
  }
}
