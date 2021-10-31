export default class AccordionList {
  constructor(accordionElements, cls) {
    this.accordionElements = document.querySelectorAll(accordionElements);
    this.cls = cls;
    this.showText = this.showText.bind(this);
  }

  showText(event) {
    event.currentTarget.classList.toggle(this.cls);
    event.currentTarget.nextElementSibling.classList.toggle(this.cls);
  }

  accordionEventListener() {
    this.accordionElements.forEach((title) => {
      title.addEventListener("click", this.showText);
    });
  }

  init() {
    if (this.accordionElements.length) {
      this.accordionEventListener();
      this.accordionElements[0].nextElementSibling.classList.add(this.cls);
    }
    return this;
  }
}
