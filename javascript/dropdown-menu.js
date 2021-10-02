export default function initDropDownMenu() {}

const dropDownMenus = document.querySelectorAll("[data-dropdown]");

const activeClass = "ativo";

function showMenu(event) {
  event.preventDefault();
  this.classList.toggle(activeClass);
}

dropDownMenus.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, showMenu);
  });
});
