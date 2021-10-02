import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const activeClass = "ativo";
  const eventos = ["click", "touchstart"];

  if (menuButton && menuList) {
    function handleMenu() {
      menuList.classList.add(activeClass);
      menuButton.classList.add(activeClass);
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove(activeClass);
        menuButton.classList.remove(activeClass);
      });
    }

    eventos.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, handleMenu);
    });
  }
}
