export default class SmoothScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }

    this.toSection = this.toSection.bind(this);
  }

  toSection(event) {
    event.preventDefault();
    const sectionId = event.currentTarget.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView(this.options);

    // Forma Alternativa
    // const sectionId = this.getAttribute("href");
    // window.scrollTo({
    //   top: document.querySelector(`${sectionId}`).offsetTop,
    //   behavior: "smooth",
    // });
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.toSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
