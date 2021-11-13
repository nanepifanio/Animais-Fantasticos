export default class ScrollAnima {
  constructor(sections, cls) {
    this.sections = document.querySelectorAll(sections);
    this.activeClass = cls;
    this.checkDistance = this.checkDistance.bind(this);
    this.windowTop = window.innerHeight * 0.6;
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowTop),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add(this.activeClass);
      } else if (item.element.classList.contains(this.activeClass)) {
        item.element.classList.remove(this.activeClass);
      }
    });
  }

  scrollEventListener() {
    window.addEventListener("scroll", this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      this.scrollEventListener();
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
