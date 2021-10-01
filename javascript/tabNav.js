export default function initTabNav() {
  const imgsAnimais = document.querySelectorAll("[data-animais='tabNav']");
  const animaisSection = document.querySelectorAll("[data-anime]");
  const activeClass = "ativo";

  if (animaisSection.length && imgsAnimais.length) {
    animaisSection[0].classList.add(
      animaisSection[0].dataset.anime,
      activeClass
    );

    function toAnimalDescription(index) {
      const dataAnime = animaisSection[index].dataset.anime;
      animaisSection.forEach((section) => {
        section.classList.remove(activeClass);
      });
      animaisSection[index].classList.add(activeClass, dataAnime);
    }

    imgsAnimais.forEach((img, index) => {
      img.addEventListener("click", () => {
        toAnimalDescription(index);
      });
    });
  }
}
