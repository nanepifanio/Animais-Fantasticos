export default class TabNav {
  constructor(imgs, sections, cls) {
    this.imgsAnimais = document.querySelectorAll(imgs);
    this.animaisSection = document.querySelectorAll(sections);
    this.activeClass = cls;
  }

  toAnimalDescription(index) {
    const dataAnime = this.animaisSection[index].dataset.anime;
    this.animaisSection.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    this.animaisSection[index].classList.add(this.activeClass, dataAnime);
  }

  addTabNavListener() {
    this.imgsAnimais.forEach((img, index) => {
      img.addEventListener("click", () => {
        this.toAnimalDescription(index);
      });
    });
  }

  init() {
    if (this.animaisSection.length && this.imgsAnimais.length) {
      this.animaisSection[0].classList.add(
        this.animaisSection[0].dataset.anime,
        this.activeClass
      );
      this.addTabNavListener();
    }
    return this;
  }
}
