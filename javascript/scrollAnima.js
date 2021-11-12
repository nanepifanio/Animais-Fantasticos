export default class ScrollAnima {
  constructor(sections, cls) {
    this.sections = document.querySelectorAll(sections);
    this.activeClass = cls;
    this.scrollAnimate = this.scrollAnimate.bind(this);
    this.windowTop = window.scrollY + window.innerHeight * 0.6;
  }

  scrollAnimate() {
    this.sections.forEach((section) => {
      if (this.windowTop > section.offsetTop) {
        section.classList.add(this.activeClass);
      } else if (section.classList.contains(this.activeClass)) {
        section.classList.remove(this.activeClass);
      }
    });
  }

  scrollEventListener() {
    window.addEventListener("scroll", this.scrollAnimate);
  }

  init() {
    if (this.sections.length) {
      this.scrollAnimate();
      this.scrollEventListener();
    }
    return this;
  }
}
