import outsideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(menus, cls, userEvents = ["touchstart", "click"]) {
    this.dropDownMenus = document.querySelectorAll(menus);
    this.activeClass = cls;
    this.userEvent = userEvents;
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(event) {
    event.preventDefault();
    const target = event.currentTarget;
    target.classList.add(this.activeClass);
    outsideClick(target, this.userEvent, () => {
      target.classList.remove(this.activeClass);
    });
  }

  addDropDownListener() {
    this.dropDownMenus.forEach((menu) => {
      this.userEvent.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropDownListener();
    }
    return this;
  }
}
